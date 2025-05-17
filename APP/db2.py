import psycopg2
from psycopg2 import sql
from dotenv import load_dotenv
import os

class PostgresDB:
    """
    環境変数からPostgreSQL接続情報を読み込み、
    単一のコネクションを維持しつつ
    レコード追加・更新・検索メソッドを提供するクラス
    大文字／小文字を問わず、テーブル名・カラム名を正しくエスケープ
    """
    def __init__(self):
        load_dotenv()
        self.user = os.getenv("user")
        self.password = os.getenv("password")
        self.host = os.getenv("host")
        self.port = os.getenv("port")
        self.dbname = os.getenv("dbname")
        # 接続確立
        self.conn = psycopg2.connect(
            user=self.user,
            password=self.password,
            host=self.host,
            port=self.port,
            dbname=self.dbname
        )
        self.conn.autocommit = True

    def close(self):
        """
        保持しているコネクションを閉じる
        """
        if getattr(self, 'conn', None):
            self.conn.close()
            self.conn = None
            print("[CLOSE] Connection closed.")

    def insert(self, table: str, data: dict):
        """
        レコードを挿入する
        :param table: テーブル名（大文字小文字を含む）
        :param data: 挿入カラムと値の辞書
        """
        cols = list(data.keys())
        query = sql.SQL("INSERT INTO {table} ({fields}) VALUES ({values});").format(
            table=sql.Identifier(table),
            fields=sql.SQL(', ').join(map(sql.Identifier, cols)),
            values=sql.SQL(', ').join(sql.Placeholder(col) for col in cols)
        )
        with self.conn.cursor() as cur:
            cur.execute(query, data)
        print(f"[INSERT] {table}: {data}")

    def update(self, table: str, update_data: dict, where_params: dict):
        """
        レコードを更新する
        :param table: テーブル名（大文字小文字を含む）
        :param update_data: 更新カラムと新しい値の辞書
        :param where_params: WHERE句用のカラムと値の辞書
        """
        # SET句
        set_cols = list(update_data.keys())
        set_clause = sql.SQL(', ').join(
            sql.SQL("{col} = {ph}").format(
                col=sql.Identifier(col),
                ph=sql.Placeholder(col)
            ) for col in set_cols
        )
        # WHERE句
        where_cols = list(where_params.keys())
        where_clause = sql.SQL(' AND ').join(
            sql.SQL("{col} = {ph}").format(
                col=sql.Identifier(col),
                ph=sql.Placeholder(col)
            ) for col in where_cols
        )
        params = {**update_data, **where_params}
        query = sql.SQL("UPDATE {table} SET {set_clause} WHERE {where_clause};").format(
            table=sql.Identifier(table),
            set_clause=set_clause,
            where_clause=where_clause
        )
        with self.conn.cursor() as cur:
            cur.execute(query, params)
        print(f"[UPDATE] {table}: {update_data} where {where_params}")

    def query(self, table: str, column: str, value):
        """
        特定カラムが特定値のレコードを検索
        :param table: テーブル名（大文字小文字を含む）
        :param column: カラム名（大文字小文字を含む）
        :param value: 検索値
        :return: レコードのリスト
        """
        query = sql.SQL("SELECT * FROM {table} WHERE {column} = %s;").format(
            table=sql.Identifier(table),
            column=sql.Identifier(column)
        )
        with self.conn.cursor() as cur:
            cur.execute(query, (value,))
            rows = cur.fetchall()
        print(f"[QUERY] {table} where {column} = {value}: {len(rows)} row(s)")
        return rows

    def fetch_top(self, table: str, limit: int, order_by: str = None, desc: bool = False):
        """
        テーブルの先頭から指定件数だけ取得する
        :param table: テーブル名（大文字小文字を含む）
        :param limit: 取得件数
        :param order_by: 並び替えに使うカラム名（大文字小文字を含む、Noneなら無指定）
        :param desc: Trueなら降順、Falseなら昇順
        :return: レコードのリスト
        """
        # order_byが指定されている場合のみ方向指定
        if order_by:
            direction = sql.SQL("DESC") if desc else sql.SQL("ASC")
            query = sql.SQL(
                "SELECT * FROM {table} ORDER BY {col} {dir} LIMIT %s"
            ).format(
                table=sql.Identifier(table),
                col=sql.Identifier(order_by),
                dir=direction
            )
        else:
            query = sql.SQL(
                "SELECT * FROM {table} LIMIT %s"
            ).format(
                table=sql.Identifier(table)
            )
        with self.conn.cursor() as cur:
            cur.execute(query, (limit,))
            rows = cur.fetchall()
        print(f"[FETCH_TOP] {table}: fetched {len(rows)} rows (limit={limit}, order_by={order_by}, desc={desc})")
        return rows

if __name__ == "__main__":
    db = PostgresDB()
    print("Connection test:")
    with db.conn.cursor() as cur:
        cur.execute("SELECT NOW();")
        print("Current Time:", cur.fetchone())

    # --- サンプル ---
    db.insert(
        table="SNS",
        data={"content": "Hello", "userId": "UUID-1234"}
    )
    db.update(
        table="SNS",
        update_data={"content": "Updated"},
        where_params={"userId": "UUID-1234"}
    )
    rows = db.query(
        table="SNS",
        column="userId",
        value="UUID-1234"
    )
    print(rows)
    top = db.fetch_top(
        table="SNS",
        limit=10,
        order_by="time",
        desc=True
    )
    print(top)

    db.close()
