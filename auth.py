import jwt
from typing import Any, Dict


class JWTDecoder:
    """
    JWTをデコードしてペイロードからIDと有効期限を取得するモジュール
    """

    def __init__(self, secret: str, algorithms: list = ["HS256"]):
        """
        :param secret: JWTの署名検証に使用するシークレットキー
        :param algorithms: 使用するアルゴリズムのリスト
        """
        self.secret = secret
        self.algorithms = algorithms

    def decode(self, token: str) -> Dict[str, Any]:
        """
        JWTをデコードしてペイロードを返す

        :param token: JWTトークン文字列
        :return: デコードされたペイロード
        :raises jwt.PyJWTError: デコードエラー時に例外をスロー
        """
        payload = jwt.decode(token, self.secret, algorithms=self.algorithms)
        return payload

    def get_user_id(self, token: str, claim: str = 'sub') -> Any:
        """
        JWTからユーザーIDを取得する

        :param token: JWTトークン
        :param claim: ユーザーIDが格納されているクレーム名 (デフォルト: 'sub')
        :return: ユーザーID
        """
        payload = self.decode(token)
        return payload.get(claim)

    def get_expiration(self, token: str) -> int:
        """
        JWTから有効期限(exp)を取得する

        :param token: JWTトークン
        :return: 有効期限(UNIXタイムスタンプ)
        """
        payload = self.decode(token)
        return payload.get('exp')


# 使用例
if __name__ == "__main__":
    # 環境変数や設定ファイルからシークレットを取得することを推奨
    SECRET_KEY = "your-secret-key"
    token = "<JWTトークン文字列>"

    decoder = JWTDecoder(SECRET_KEY)
    try:
        user_id = decoder.get_user_id(token)
        exp = decoder.get_expiration(token)
        print(f"ユーザーID: {user_id}")
        print(f"有効期限 (exp): {exp}")
    except jwt.PyJWTError as e:
        print(f"JWTのデコードに失敗しました: {e}")
