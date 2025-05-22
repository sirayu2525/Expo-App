
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model TimeSlot
 * 
 */
export type TimeSlot = $Result.DefaultSelection<Prisma.$TimeSlotPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model sns
 * 
 */
export type sns = $Result.DefaultSelection<Prisma.$snsPayload>
/**
 * Model badgeList
 * 
 */
export type badgeList = $Result.DefaultSelection<Prisma.$badgeListPayload>
/**
 * Model UserBadge
 * 
 */
export type UserBadge = $Result.DefaultSelection<Prisma.$UserBadgePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReservationStatus: {
  RESERVED: 'RESERVED',
  CANCELED: 'CANCELED'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]

}

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timeSlot`: Exposes CRUD operations for the **TimeSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeSlots
    * const timeSlots = await prisma.timeSlot.findMany()
    * ```
    */
  get timeSlot(): Prisma.TimeSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sns`: Exposes CRUD operations for the **sns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sns
    * const sns = await prisma.sns.findMany()
    * ```
    */
  get sns(): Prisma.snsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badgeList`: Exposes CRUD operations for the **badgeList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BadgeLists
    * const badgeLists = await prisma.badgeList.findMany()
    * ```
    */
  get badgeList(): Prisma.badgeListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBadge`: Exposes CRUD operations for the **UserBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBadges
    * const userBadges = await prisma.userBadge.findMany()
    * ```
    */
  get userBadge(): Prisma.UserBadgeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Event: 'Event',
    TimeSlot: 'TimeSlot',
    Reservation: 'Reservation',
    sns: 'sns',
    badgeList: 'badgeList',
    UserBadge: 'UserBadge'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "event" | "timeSlot" | "reservation" | "sns" | "badgeList" | "userBadge"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      TimeSlot: {
        payload: Prisma.$TimeSlotPayload<ExtArgs>
        fields: Prisma.TimeSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          findFirst: {
            args: Prisma.TimeSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          findMany: {
            args: Prisma.TimeSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>[]
          }
          create: {
            args: Prisma.TimeSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          createMany: {
            args: Prisma.TimeSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>[]
          }
          delete: {
            args: Prisma.TimeSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          update: {
            args: Prisma.TimeSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          deleteMany: {
            args: Prisma.TimeSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>[]
          }
          upsert: {
            args: Prisma.TimeSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          aggregate: {
            args: Prisma.TimeSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeSlot>
          }
          groupBy: {
            args: Prisma.TimeSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeSlotCountArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      sns: {
        payload: Prisma.$snsPayload<ExtArgs>
        fields: Prisma.snsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.snsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.snsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snsPayload>
          }
          findFirst: {
            args: Prisma.snsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.snsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snsPayload>
          }
          findMany: {
            args: Prisma.snsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snsPayload>[]
          }
          create: {
            args: Prisma.snsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snsPayload>
          }
          createMany: {
            args: Prisma.snsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.snsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snsPayload>[]
          }
          delete: {
            args: Prisma.snsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snsPayload>
          }
          update: {
            args: Prisma.snsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snsPayload>
          }
          deleteMany: {
            args: Prisma.snsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.snsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.snsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snsPayload>[]
          }
          upsert: {
            args: Prisma.snsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$snsPayload>
          }
          aggregate: {
            args: Prisma.SnsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSns>
          }
          groupBy: {
            args: Prisma.snsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnsGroupByOutputType>[]
          }
          count: {
            args: Prisma.snsCountArgs<ExtArgs>
            result: $Utils.Optional<SnsCountAggregateOutputType> | number
          }
        }
      }
      badgeList: {
        payload: Prisma.$badgeListPayload<ExtArgs>
        fields: Prisma.badgeListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.badgeListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgeListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.badgeListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgeListPayload>
          }
          findFirst: {
            args: Prisma.badgeListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgeListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.badgeListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgeListPayload>
          }
          findMany: {
            args: Prisma.badgeListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgeListPayload>[]
          }
          create: {
            args: Prisma.badgeListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgeListPayload>
          }
          createMany: {
            args: Prisma.badgeListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.badgeListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgeListPayload>[]
          }
          delete: {
            args: Prisma.badgeListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgeListPayload>
          }
          update: {
            args: Prisma.badgeListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgeListPayload>
          }
          deleteMany: {
            args: Prisma.badgeListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.badgeListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.badgeListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgeListPayload>[]
          }
          upsert: {
            args: Prisma.badgeListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$badgeListPayload>
          }
          aggregate: {
            args: Prisma.BadgeListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadgeList>
          }
          groupBy: {
            args: Prisma.badgeListGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeListGroupByOutputType>[]
          }
          count: {
            args: Prisma.badgeListCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeListCountAggregateOutputType> | number
          }
        }
      }
      UserBadge: {
        payload: Prisma.$UserBadgePayload<ExtArgs>
        fields: Prisma.UserBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findFirst: {
            args: Prisma.UserBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findMany: {
            args: Prisma.UserBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          create: {
            args: Prisma.UserBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          createMany: {
            args: Prisma.UserBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          delete: {
            args: Prisma.UserBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          update: {
            args: Prisma.UserBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          deleteMany: {
            args: Prisma.UserBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          upsert: {
            args: Prisma.UserBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          aggregate: {
            args: Prisma.UserBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBadge>
          }
          groupBy: {
            args: Prisma.UserBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    event?: EventOmit
    timeSlot?: TimeSlotOmit
    reservation?: ReservationOmit
    sns?: snsOmit
    badgeList?: badgeListOmit
    userBadge?: UserBadgeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    hostEvents: number
    reservations: number
    sns: number
    badges: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostEvents?: boolean | UserCountOutputTypeCountHostEventsArgs
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs
    sns?: boolean | UserCountOutputTypeCountSnsArgs
    badges?: boolean | UserCountOutputTypeCountBadgesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHostEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: snsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    timeSlots: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeSlots?: boolean | EventCountOutputTypeCountTimeSlotsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTimeSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeSlotWhereInput
  }


  /**
   * Count Type TimeSlotCountOutputType
   */

  export type TimeSlotCountOutputType = {
    reservations: number
  }

  export type TimeSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | TimeSlotCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * TimeSlotCountOutputType without action
   */
  export type TimeSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlotCountOutputType
     */
    select?: TimeSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TimeSlotCountOutputType without action
   */
  export type TimeSlotCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type BadgeListCountOutputType
   */

  export type BadgeListCountOutputType = {
    users: number
  }

  export type BadgeListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BadgeListCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * BadgeListCountOutputType without action
   */
  export type BadgeListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeListCountOutputType
     */
    select?: BadgeListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeListCountOutputType without action
   */
  export type BadgeListCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    point: number | null
  }

  export type UserSumAggregateOutputType = {
    point: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    password: string | null
    email: string | null
    point: number | null
    profile: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    password: string | null
    email: string | null
    point: number | null
    profile: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    password: number
    email: number
    point: number
    profile: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    point?: true
  }

  export type UserSumAggregateInputType = {
    point?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    password?: true
    email?: true
    point?: true
    profile?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    password?: true
    email?: true
    point?: true
    profile?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    password?: true
    email?: true
    point?: true
    profile?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    password: string
    email: string
    point: number
    profile: string | null
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    password?: boolean
    email?: boolean
    point?: boolean
    profile?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hostEvents?: boolean | User$hostEventsArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    sns?: boolean | User$snsArgs<ExtArgs>
    badges?: boolean | User$badgesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    password?: boolean
    email?: boolean
    point?: boolean
    profile?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    password?: boolean
    email?: boolean
    point?: boolean
    profile?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    password?: boolean
    email?: boolean
    point?: boolean
    profile?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "password" | "email" | "point" | "profile" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostEvents?: boolean | User$hostEventsArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    sns?: boolean | User$snsArgs<ExtArgs>
    badges?: boolean | User$badgesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      hostEvents: Prisma.$EventPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      sns: Prisma.$snsPayload<ExtArgs>[]
      badges: Prisma.$UserBadgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      password: string
      email: string
      point: number
      profile: string | null
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hostEvents<T extends User$hostEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$hostEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends User$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sns<T extends User$snsArgs<ExtArgs> = {}>(args?: Subset<T, User$snsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    badges<T extends User$badgesArgs<ExtArgs> = {}>(args?: Subset<T, User$badgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly point: FieldRef<"User", 'Int'>
    readonly profile: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.hostEvents
   */
  export type User$hostEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.reservations
   */
  export type User$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * User.sns
   */
  export type User$snsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsInclude<ExtArgs> | null
    where?: snsWhereInput
    orderBy?: snsOrderByWithRelationInput | snsOrderByWithRelationInput[]
    cursor?: snsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SnsScalarFieldEnum | SnsScalarFieldEnum[]
  }

  /**
   * User.badges
   */
  export type User$badgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    eventId: number | null
    badgeId: number | null
  }

  export type EventSumAggregateOutputType = {
    eventId: number | null
    badgeId: number | null
  }

  export type EventMinAggregateOutputType = {
    eventId: number | null
    hostId: string | null
    eventName: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    startsAt: Date | null
    endsAt: Date | null
    isDeleted: boolean | null
    updatedAt: Date | null
    badgeId: number | null
  }

  export type EventMaxAggregateOutputType = {
    eventId: number | null
    hostId: string | null
    eventName: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    startsAt: Date | null
    endsAt: Date | null
    isDeleted: boolean | null
    updatedAt: Date | null
    badgeId: number | null
  }

  export type EventCountAggregateOutputType = {
    eventId: number
    hostId: number
    eventName: number
    title: number
    description: number
    createdAt: number
    startsAt: number
    endsAt: number
    isDeleted: number
    updatedAt: number
    badgeId: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    eventId?: true
    badgeId?: true
  }

  export type EventSumAggregateInputType = {
    eventId?: true
    badgeId?: true
  }

  export type EventMinAggregateInputType = {
    eventId?: true
    hostId?: true
    eventName?: true
    title?: true
    description?: true
    createdAt?: true
    startsAt?: true
    endsAt?: true
    isDeleted?: true
    updatedAt?: true
    badgeId?: true
  }

  export type EventMaxAggregateInputType = {
    eventId?: true
    hostId?: true
    eventName?: true
    title?: true
    description?: true
    createdAt?: true
    startsAt?: true
    endsAt?: true
    isDeleted?: true
    updatedAt?: true
    badgeId?: true
  }

  export type EventCountAggregateInputType = {
    eventId?: true
    hostId?: true
    eventName?: true
    title?: true
    description?: true
    createdAt?: true
    startsAt?: true
    endsAt?: true
    isDeleted?: true
    updatedAt?: true
    badgeId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    eventId: number
    hostId: string
    eventName: string
    title: string
    description: string
    createdAt: Date
    startsAt: Date
    endsAt: Date
    isDeleted: boolean
    updatedAt: Date
    badgeId: number | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    hostId?: boolean
    eventName?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    startsAt?: boolean
    endsAt?: boolean
    isDeleted?: boolean
    updatedAt?: boolean
    badgeId?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
    timeSlots?: boolean | Event$timeSlotsArgs<ExtArgs>
    badge?: boolean | Event$badgeArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    hostId?: boolean
    eventName?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    startsAt?: boolean
    endsAt?: boolean
    isDeleted?: boolean
    updatedAt?: boolean
    badgeId?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | Event$badgeArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    hostId?: boolean
    eventName?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    startsAt?: boolean
    endsAt?: boolean
    isDeleted?: boolean
    updatedAt?: boolean
    badgeId?: boolean
    host?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | Event$badgeArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    eventId?: boolean
    hostId?: boolean
    eventName?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    startsAt?: boolean
    endsAt?: boolean
    isDeleted?: boolean
    updatedAt?: boolean
    badgeId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "hostId" | "eventName" | "title" | "description" | "createdAt" | "startsAt" | "endsAt" | "isDeleted" | "updatedAt" | "badgeId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
    timeSlots?: boolean | Event$timeSlotsArgs<ExtArgs>
    badge?: boolean | Event$badgeArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | Event$badgeArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | Event$badgeArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      host: Prisma.$UserPayload<ExtArgs>
      timeSlots: Prisma.$TimeSlotPayload<ExtArgs>[]
      badge: Prisma.$badgeListPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      eventId: number
      hostId: string
      eventName: string
      title: string
      description: string
      createdAt: Date
      startsAt: Date
      endsAt: Date
      isDeleted: boolean
      updatedAt: Date
      badgeId: number | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const eventWithEventIdOnly = await prisma.event.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `eventId`
     * const eventWithEventIdOnly = await prisma.event.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `eventId`
     * const eventWithEventIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { eventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timeSlots<T extends Event$timeSlotsArgs<ExtArgs> = {}>(args?: Subset<T, Event$timeSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    badge<T extends Event$badgeArgs<ExtArgs> = {}>(args?: Subset<T, Event$badgeArgs<ExtArgs>>): Prisma__badgeListClient<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly eventId: FieldRef<"Event", 'Int'>
    readonly hostId: FieldRef<"Event", 'String'>
    readonly eventName: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly startsAt: FieldRef<"Event", 'DateTime'>
    readonly endsAt: FieldRef<"Event", 'DateTime'>
    readonly isDeleted: FieldRef<"Event", 'Boolean'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly badgeId: FieldRef<"Event", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.timeSlots
   */
  export type Event$timeSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    where?: TimeSlotWhereInput
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    cursor?: TimeSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * Event.badge
   */
  export type Event$badgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeListInclude<ExtArgs> | null
    where?: badgeListWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model TimeSlot
   */

  export type AggregateTimeSlot = {
    _count: TimeSlotCountAggregateOutputType | null
    _avg: TimeSlotAvgAggregateOutputType | null
    _sum: TimeSlotSumAggregateOutputType | null
    _min: TimeSlotMinAggregateOutputType | null
    _max: TimeSlotMaxAggregateOutputType | null
  }

  export type TimeSlotAvgAggregateOutputType = {
    timeSlotId: number | null
    eventId: number | null
    capacity: number | null
  }

  export type TimeSlotSumAggregateOutputType = {
    timeSlotId: number | null
    eventId: number | null
    capacity: number | null
  }

  export type TimeSlotMinAggregateOutputType = {
    timeSlotId: number | null
    eventId: number | null
    startAt: Date | null
    endAt: Date | null
    capacity: number | null
  }

  export type TimeSlotMaxAggregateOutputType = {
    timeSlotId: number | null
    eventId: number | null
    startAt: Date | null
    endAt: Date | null
    capacity: number | null
  }

  export type TimeSlotCountAggregateOutputType = {
    timeSlotId: number
    eventId: number
    startAt: number
    endAt: number
    capacity: number
    _all: number
  }


  export type TimeSlotAvgAggregateInputType = {
    timeSlotId?: true
    eventId?: true
    capacity?: true
  }

  export type TimeSlotSumAggregateInputType = {
    timeSlotId?: true
    eventId?: true
    capacity?: true
  }

  export type TimeSlotMinAggregateInputType = {
    timeSlotId?: true
    eventId?: true
    startAt?: true
    endAt?: true
    capacity?: true
  }

  export type TimeSlotMaxAggregateInputType = {
    timeSlotId?: true
    eventId?: true
    startAt?: true
    endAt?: true
    capacity?: true
  }

  export type TimeSlotCountAggregateInputType = {
    timeSlotId?: true
    eventId?: true
    startAt?: true
    endAt?: true
    capacity?: true
    _all?: true
  }

  export type TimeSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlot to aggregate.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeSlots
    **/
    _count?: true | TimeSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeSlotMaxAggregateInputType
  }

  export type GetTimeSlotAggregateType<T extends TimeSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeSlot[P]>
      : GetScalarType<T[P], AggregateTimeSlot[P]>
  }




  export type TimeSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeSlotWhereInput
    orderBy?: TimeSlotOrderByWithAggregationInput | TimeSlotOrderByWithAggregationInput[]
    by: TimeSlotScalarFieldEnum[] | TimeSlotScalarFieldEnum
    having?: TimeSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeSlotCountAggregateInputType | true
    _avg?: TimeSlotAvgAggregateInputType
    _sum?: TimeSlotSumAggregateInputType
    _min?: TimeSlotMinAggregateInputType
    _max?: TimeSlotMaxAggregateInputType
  }

  export type TimeSlotGroupByOutputType = {
    timeSlotId: number
    eventId: number
    startAt: Date
    endAt: Date
    capacity: number
    _count: TimeSlotCountAggregateOutputType | null
    _avg: TimeSlotAvgAggregateOutputType | null
    _sum: TimeSlotSumAggregateOutputType | null
    _min: TimeSlotMinAggregateOutputType | null
    _max: TimeSlotMaxAggregateOutputType | null
  }

  type GetTimeSlotGroupByPayload<T extends TimeSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeSlotGroupByOutputType[P]>
            : GetScalarType<T[P], TimeSlotGroupByOutputType[P]>
        }
      >
    >


  export type TimeSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timeSlotId?: boolean
    eventId?: boolean
    startAt?: boolean
    endAt?: boolean
    capacity?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    reservations?: boolean | TimeSlot$reservationsArgs<ExtArgs>
    _count?: boolean | TimeSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlot"]>

  export type TimeSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timeSlotId?: boolean
    eventId?: boolean
    startAt?: boolean
    endAt?: boolean
    capacity?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlot"]>

  export type TimeSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timeSlotId?: boolean
    eventId?: boolean
    startAt?: boolean
    endAt?: boolean
    capacity?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlot"]>

  export type TimeSlotSelectScalar = {
    timeSlotId?: boolean
    eventId?: boolean
    startAt?: boolean
    endAt?: boolean
    capacity?: boolean
  }

  export type TimeSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"timeSlotId" | "eventId" | "startAt" | "endAt" | "capacity", ExtArgs["result"]["timeSlot"]>
  export type TimeSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    reservations?: boolean | TimeSlot$reservationsArgs<ExtArgs>
    _count?: boolean | TimeSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TimeSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type TimeSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $TimeSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeSlot"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      timeSlotId: number
      eventId: number
      startAt: Date
      endAt: Date
      capacity: number
    }, ExtArgs["result"]["timeSlot"]>
    composites: {}
  }

  type TimeSlotGetPayload<S extends boolean | null | undefined | TimeSlotDefaultArgs> = $Result.GetResult<Prisma.$TimeSlotPayload, S>

  type TimeSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeSlotCountAggregateInputType | true
    }

  export interface TimeSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeSlot'], meta: { name: 'TimeSlot' } }
    /**
     * Find zero or one TimeSlot that matches the filter.
     * @param {TimeSlotFindUniqueArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeSlotFindUniqueArgs>(args: SelectSubset<T, TimeSlotFindUniqueArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TimeSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeSlotFindUniqueOrThrowArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindFirstArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeSlotFindFirstArgs>(args?: SelectSubset<T, TimeSlotFindFirstArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TimeSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindFirstOrThrowArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeSlots
     * const timeSlots = await prisma.timeSlot.findMany()
     * 
     * // Get first 10 TimeSlots
     * const timeSlots = await prisma.timeSlot.findMany({ take: 10 })
     * 
     * // Only select the `timeSlotId`
     * const timeSlotWithTimeSlotIdOnly = await prisma.timeSlot.findMany({ select: { timeSlotId: true } })
     * 
     */
    findMany<T extends TimeSlotFindManyArgs>(args?: SelectSubset<T, TimeSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TimeSlot.
     * @param {TimeSlotCreateArgs} args - Arguments to create a TimeSlot.
     * @example
     * // Create one TimeSlot
     * const TimeSlot = await prisma.timeSlot.create({
     *   data: {
     *     // ... data to create a TimeSlot
     *   }
     * })
     * 
     */
    create<T extends TimeSlotCreateArgs>(args: SelectSubset<T, TimeSlotCreateArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TimeSlots.
     * @param {TimeSlotCreateManyArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlot = await prisma.timeSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeSlotCreateManyArgs>(args?: SelectSubset<T, TimeSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeSlots and returns the data saved in the database.
     * @param {TimeSlotCreateManyAndReturnArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlot = await prisma.timeSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeSlots and only return the `timeSlotId`
     * const timeSlotWithTimeSlotIdOnly = await prisma.timeSlot.createManyAndReturn({
     *   select: { timeSlotId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TimeSlot.
     * @param {TimeSlotDeleteArgs} args - Arguments to delete one TimeSlot.
     * @example
     * // Delete one TimeSlot
     * const TimeSlot = await prisma.timeSlot.delete({
     *   where: {
     *     // ... filter to delete one TimeSlot
     *   }
     * })
     * 
     */
    delete<T extends TimeSlotDeleteArgs>(args: SelectSubset<T, TimeSlotDeleteArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TimeSlot.
     * @param {TimeSlotUpdateArgs} args - Arguments to update one TimeSlot.
     * @example
     * // Update one TimeSlot
     * const timeSlot = await prisma.timeSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeSlotUpdateArgs>(args: SelectSubset<T, TimeSlotUpdateArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TimeSlots.
     * @param {TimeSlotDeleteManyArgs} args - Arguments to filter TimeSlots to delete.
     * @example
     * // Delete a few TimeSlots
     * const { count } = await prisma.timeSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeSlotDeleteManyArgs>(args?: SelectSubset<T, TimeSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeSlots
     * const timeSlot = await prisma.timeSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeSlotUpdateManyArgs>(args: SelectSubset<T, TimeSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSlots and returns the data updated in the database.
     * @param {TimeSlotUpdateManyAndReturnArgs} args - Arguments to update many TimeSlots.
     * @example
     * // Update many TimeSlots
     * const timeSlot = await prisma.timeSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TimeSlots and only return the `timeSlotId`
     * const timeSlotWithTimeSlotIdOnly = await prisma.timeSlot.updateManyAndReturn({
     *   select: { timeSlotId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TimeSlot.
     * @param {TimeSlotUpsertArgs} args - Arguments to update or create a TimeSlot.
     * @example
     * // Update or create a TimeSlot
     * const timeSlot = await prisma.timeSlot.upsert({
     *   create: {
     *     // ... data to create a TimeSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeSlot we want to update
     *   }
     * })
     */
    upsert<T extends TimeSlotUpsertArgs>(args: SelectSubset<T, TimeSlotUpsertArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotCountArgs} args - Arguments to filter TimeSlots to count.
     * @example
     * // Count the number of TimeSlots
     * const count = await prisma.timeSlot.count({
     *   where: {
     *     // ... the filter for the TimeSlots we want to count
     *   }
     * })
    **/
    count<T extends TimeSlotCountArgs>(
      args?: Subset<T, TimeSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeSlotAggregateArgs>(args: Subset<T, TimeSlotAggregateArgs>): Prisma.PrismaPromise<GetTimeSlotAggregateType<T>>

    /**
     * Group by TimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeSlotGroupByArgs['orderBy'] }
        : { orderBy?: TimeSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeSlot model
   */
  readonly fields: TimeSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservations<T extends TimeSlot$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, TimeSlot$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeSlot model
   */
  interface TimeSlotFieldRefs {
    readonly timeSlotId: FieldRef<"TimeSlot", 'Int'>
    readonly eventId: FieldRef<"TimeSlot", 'Int'>
    readonly startAt: FieldRef<"TimeSlot", 'DateTime'>
    readonly endAt: FieldRef<"TimeSlot", 'DateTime'>
    readonly capacity: FieldRef<"TimeSlot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TimeSlot findUnique
   */
  export type TimeSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot findUniqueOrThrow
   */
  export type TimeSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot findFirst
   */
  export type TimeSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot findFirstOrThrow
   */
  export type TimeSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot findMany
   */
  export type TimeSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot create
   */
  export type TimeSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeSlot.
     */
    data: XOR<TimeSlotCreateInput, TimeSlotUncheckedCreateInput>
  }

  /**
   * TimeSlot createMany
   */
  export type TimeSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotCreateManyInput | TimeSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeSlot createManyAndReturn
   */
  export type TimeSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotCreateManyInput | TimeSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeSlot update
   */
  export type TimeSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeSlot.
     */
    data: XOR<TimeSlotUpdateInput, TimeSlotUncheckedUpdateInput>
    /**
     * Choose, which TimeSlot to update.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot updateMany
   */
  export type TimeSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeSlots.
     */
    data: XOR<TimeSlotUpdateManyMutationInput, TimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which TimeSlots to update
     */
    where?: TimeSlotWhereInput
    /**
     * Limit how many TimeSlots to update.
     */
    limit?: number
  }

  /**
   * TimeSlot updateManyAndReturn
   */
  export type TimeSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * The data used to update TimeSlots.
     */
    data: XOR<TimeSlotUpdateManyMutationInput, TimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which TimeSlots to update
     */
    where?: TimeSlotWhereInput
    /**
     * Limit how many TimeSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeSlot upsert
   */
  export type TimeSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeSlot to update in case it exists.
     */
    where: TimeSlotWhereUniqueInput
    /**
     * In case the TimeSlot found by the `where` argument doesn't exist, create a new TimeSlot with this data.
     */
    create: XOR<TimeSlotCreateInput, TimeSlotUncheckedCreateInput>
    /**
     * In case the TimeSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeSlotUpdateInput, TimeSlotUncheckedUpdateInput>
  }

  /**
   * TimeSlot delete
   */
  export type TimeSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter which TimeSlot to delete.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot deleteMany
   */
  export type TimeSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlots to delete
     */
    where?: TimeSlotWhereInput
    /**
     * Limit how many TimeSlots to delete.
     */
    limit?: number
  }

  /**
   * TimeSlot.reservations
   */
  export type TimeSlot$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * TimeSlot without action
   */
  export type TimeSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TimeSlot
     */
    omit?: TimeSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    reservationId: number | null
    timeSlotId: number | null
  }

  export type ReservationSumAggregateOutputType = {
    reservationId: number | null
    timeSlotId: number | null
  }

  export type ReservationMinAggregateOutputType = {
    reservationId: number | null
    userId: string | null
    timeSlotId: number | null
    status: $Enums.ReservationStatus | null
    reservedAt: Date | null
    canceledAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    reservationId: number | null
    userId: string | null
    timeSlotId: number | null
    status: $Enums.ReservationStatus | null
    reservedAt: Date | null
    canceledAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    reservationId: number
    userId: number
    timeSlotId: number
    status: number
    reservedAt: number
    canceledAt: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    reservationId?: true
    timeSlotId?: true
  }

  export type ReservationSumAggregateInputType = {
    reservationId?: true
    timeSlotId?: true
  }

  export type ReservationMinAggregateInputType = {
    reservationId?: true
    userId?: true
    timeSlotId?: true
    status?: true
    reservedAt?: true
    canceledAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    reservationId?: true
    userId?: true
    timeSlotId?: true
    status?: true
    reservedAt?: true
    canceledAt?: true
  }

  export type ReservationCountAggregateInputType = {
    reservationId?: true
    userId?: true
    timeSlotId?: true
    status?: true
    reservedAt?: true
    canceledAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    reservationId: number
    userId: string
    timeSlotId: number
    status: $Enums.ReservationStatus
    reservedAt: Date
    canceledAt: Date | null
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservationId?: boolean
    userId?: boolean
    timeSlotId?: boolean
    status?: boolean
    reservedAt?: boolean
    canceledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservationId?: boolean
    userId?: boolean
    timeSlotId?: boolean
    status?: boolean
    reservedAt?: boolean
    canceledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservationId?: boolean
    userId?: boolean
    timeSlotId?: boolean
    status?: boolean
    reservedAt?: boolean
    canceledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    reservationId?: boolean
    userId?: boolean
    timeSlotId?: boolean
    status?: boolean
    reservedAt?: boolean
    canceledAt?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reservationId" | "userId" | "timeSlotId" | "status" | "reservedAt" | "canceledAt", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    timeSlot?: boolean | TimeSlotDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      timeSlot: Prisma.$TimeSlotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reservationId: number
      userId: string
      timeSlotId: number
      status: $Enums.ReservationStatus
      reservedAt: Date
      canceledAt: Date | null
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `reservationId`
     * const reservationWithReservationIdOnly = await prisma.reservation.findMany({ select: { reservationId: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `reservationId`
     * const reservationWithReservationIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { reservationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `reservationId`
     * const reservationWithReservationIdOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { reservationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    timeSlot<T extends TimeSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TimeSlotDefaultArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly reservationId: FieldRef<"Reservation", 'Int'>
    readonly userId: FieldRef<"Reservation", 'String'>
    readonly timeSlotId: FieldRef<"Reservation", 'Int'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly reservedAt: FieldRef<"Reservation", 'DateTime'>
    readonly canceledAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model sns
   */

  export type AggregateSns = {
    _count: SnsCountAggregateOutputType | null
    _avg: SnsAvgAggregateOutputType | null
    _sum: SnsSumAggregateOutputType | null
    _min: SnsMinAggregateOutputType | null
    _max: SnsMaxAggregateOutputType | null
  }

  export type SnsAvgAggregateOutputType = {
    postId: number | null
  }

  export type SnsSumAggregateOutputType = {
    postId: number | null
  }

  export type SnsMinAggregateOutputType = {
    postId: number | null
    userId: string | null
    content: string | null
    time: Date | null
  }

  export type SnsMaxAggregateOutputType = {
    postId: number | null
    userId: string | null
    content: string | null
    time: Date | null
  }

  export type SnsCountAggregateOutputType = {
    postId: number
    userId: number
    content: number
    good: number
    time: number
    _all: number
  }


  export type SnsAvgAggregateInputType = {
    postId?: true
  }

  export type SnsSumAggregateInputType = {
    postId?: true
  }

  export type SnsMinAggregateInputType = {
    postId?: true
    userId?: true
    content?: true
    time?: true
  }

  export type SnsMaxAggregateInputType = {
    postId?: true
    userId?: true
    content?: true
    time?: true
  }

  export type SnsCountAggregateInputType = {
    postId?: true
    userId?: true
    content?: true
    good?: true
    time?: true
    _all?: true
  }

  export type SnsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sns to aggregate.
     */
    where?: snsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sns to fetch.
     */
    orderBy?: snsOrderByWithRelationInput | snsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: snsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sns
    **/
    _count?: true | SnsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SnsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SnsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnsMaxAggregateInputType
  }

  export type GetSnsAggregateType<T extends SnsAggregateArgs> = {
        [P in keyof T & keyof AggregateSns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSns[P]>
      : GetScalarType<T[P], AggregateSns[P]>
  }




  export type snsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: snsWhereInput
    orderBy?: snsOrderByWithAggregationInput | snsOrderByWithAggregationInput[]
    by: SnsScalarFieldEnum[] | SnsScalarFieldEnum
    having?: snsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnsCountAggregateInputType | true
    _avg?: SnsAvgAggregateInputType
    _sum?: SnsSumAggregateInputType
    _min?: SnsMinAggregateInputType
    _max?: SnsMaxAggregateInputType
  }

  export type SnsGroupByOutputType = {
    postId: number
    userId: string
    content: string
    good: string[]
    time: Date
    _count: SnsCountAggregateOutputType | null
    _avg: SnsAvgAggregateOutputType | null
    _sum: SnsSumAggregateOutputType | null
    _min: SnsMinAggregateOutputType | null
    _max: SnsMaxAggregateOutputType | null
  }

  type GetSnsGroupByPayload<T extends snsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnsGroupByOutputType[P]>
            : GetScalarType<T[P], SnsGroupByOutputType[P]>
        }
      >
    >


  export type snsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    userId?: boolean
    content?: boolean
    good?: boolean
    time?: boolean
    maker?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sns"]>

  export type snsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    userId?: boolean
    content?: boolean
    good?: boolean
    time?: boolean
    maker?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sns"]>

  export type snsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    userId?: boolean
    content?: boolean
    good?: boolean
    time?: boolean
    maker?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sns"]>

  export type snsSelectScalar = {
    postId?: boolean
    userId?: boolean
    content?: boolean
    good?: boolean
    time?: boolean
  }

  export type snsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "userId" | "content" | "good" | "time", ExtArgs["result"]["sns"]>
  export type snsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maker?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type snsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maker?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type snsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maker?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $snsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sns"
    objects: {
      maker: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: number
      userId: string
      content: string
      good: string[]
      time: Date
    }, ExtArgs["result"]["sns"]>
    composites: {}
  }

  type snsGetPayload<S extends boolean | null | undefined | snsDefaultArgs> = $Result.GetResult<Prisma.$snsPayload, S>

  type snsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<snsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SnsCountAggregateInputType | true
    }

  export interface snsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sns'], meta: { name: 'sns' } }
    /**
     * Find zero or one Sns that matches the filter.
     * @param {snsFindUniqueArgs} args - Arguments to find a Sns
     * @example
     * // Get one Sns
     * const sns = await prisma.sns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends snsFindUniqueArgs>(args: SelectSubset<T, snsFindUniqueArgs<ExtArgs>>): Prisma__snsClient<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {snsFindUniqueOrThrowArgs} args - Arguments to find a Sns
     * @example
     * // Get one Sns
     * const sns = await prisma.sns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends snsFindUniqueOrThrowArgs>(args: SelectSubset<T, snsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__snsClient<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snsFindFirstArgs} args - Arguments to find a Sns
     * @example
     * // Get one Sns
     * const sns = await prisma.sns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends snsFindFirstArgs>(args?: SelectSubset<T, snsFindFirstArgs<ExtArgs>>): Prisma__snsClient<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snsFindFirstOrThrowArgs} args - Arguments to find a Sns
     * @example
     * // Get one Sns
     * const sns = await prisma.sns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends snsFindFirstOrThrowArgs>(args?: SelectSubset<T, snsFindFirstOrThrowArgs<ExtArgs>>): Prisma__snsClient<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sns
     * const sns = await prisma.sns.findMany()
     * 
     * // Get first 10 Sns
     * const sns = await prisma.sns.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const snsWithPostIdOnly = await prisma.sns.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends snsFindManyArgs>(args?: SelectSubset<T, snsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sns.
     * @param {snsCreateArgs} args - Arguments to create a Sns.
     * @example
     * // Create one Sns
     * const Sns = await prisma.sns.create({
     *   data: {
     *     // ... data to create a Sns
     *   }
     * })
     * 
     */
    create<T extends snsCreateArgs>(args: SelectSubset<T, snsCreateArgs<ExtArgs>>): Prisma__snsClient<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sns.
     * @param {snsCreateManyArgs} args - Arguments to create many Sns.
     * @example
     * // Create many Sns
     * const sns = await prisma.sns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends snsCreateManyArgs>(args?: SelectSubset<T, snsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sns and returns the data saved in the database.
     * @param {snsCreateManyAndReturnArgs} args - Arguments to create many Sns.
     * @example
     * // Create many Sns
     * const sns = await prisma.sns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sns and only return the `postId`
     * const snsWithPostIdOnly = await prisma.sns.createManyAndReturn({
     *   select: { postId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends snsCreateManyAndReturnArgs>(args?: SelectSubset<T, snsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sns.
     * @param {snsDeleteArgs} args - Arguments to delete one Sns.
     * @example
     * // Delete one Sns
     * const Sns = await prisma.sns.delete({
     *   where: {
     *     // ... filter to delete one Sns
     *   }
     * })
     * 
     */
    delete<T extends snsDeleteArgs>(args: SelectSubset<T, snsDeleteArgs<ExtArgs>>): Prisma__snsClient<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sns.
     * @param {snsUpdateArgs} args - Arguments to update one Sns.
     * @example
     * // Update one Sns
     * const sns = await prisma.sns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends snsUpdateArgs>(args: SelectSubset<T, snsUpdateArgs<ExtArgs>>): Prisma__snsClient<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sns.
     * @param {snsDeleteManyArgs} args - Arguments to filter Sns to delete.
     * @example
     * // Delete a few Sns
     * const { count } = await prisma.sns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends snsDeleteManyArgs>(args?: SelectSubset<T, snsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sns
     * const sns = await prisma.sns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends snsUpdateManyArgs>(args: SelectSubset<T, snsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sns and returns the data updated in the database.
     * @param {snsUpdateManyAndReturnArgs} args - Arguments to update many Sns.
     * @example
     * // Update many Sns
     * const sns = await prisma.sns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sns and only return the `postId`
     * const snsWithPostIdOnly = await prisma.sns.updateManyAndReturn({
     *   select: { postId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends snsUpdateManyAndReturnArgs>(args: SelectSubset<T, snsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sns.
     * @param {snsUpsertArgs} args - Arguments to update or create a Sns.
     * @example
     * // Update or create a Sns
     * const sns = await prisma.sns.upsert({
     *   create: {
     *     // ... data to create a Sns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sns we want to update
     *   }
     * })
     */
    upsert<T extends snsUpsertArgs>(args: SelectSubset<T, snsUpsertArgs<ExtArgs>>): Prisma__snsClient<$Result.GetResult<Prisma.$snsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snsCountArgs} args - Arguments to filter Sns to count.
     * @example
     * // Count the number of Sns
     * const count = await prisma.sns.count({
     *   where: {
     *     // ... the filter for the Sns we want to count
     *   }
     * })
    **/
    count<T extends snsCountArgs>(
      args?: Subset<T, snsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SnsAggregateArgs>(args: Subset<T, SnsAggregateArgs>): Prisma.PrismaPromise<GetSnsAggregateType<T>>

    /**
     * Group by Sns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {snsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends snsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: snsGroupByArgs['orderBy'] }
        : { orderBy?: snsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, snsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sns model
   */
  readonly fields: snsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__snsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maker<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sns model
   */
  interface snsFieldRefs {
    readonly postId: FieldRef<"sns", 'Int'>
    readonly userId: FieldRef<"sns", 'String'>
    readonly content: FieldRef<"sns", 'String'>
    readonly good: FieldRef<"sns", 'String[]'>
    readonly time: FieldRef<"sns", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sns findUnique
   */
  export type snsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsInclude<ExtArgs> | null
    /**
     * Filter, which sns to fetch.
     */
    where: snsWhereUniqueInput
  }

  /**
   * sns findUniqueOrThrow
   */
  export type snsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsInclude<ExtArgs> | null
    /**
     * Filter, which sns to fetch.
     */
    where: snsWhereUniqueInput
  }

  /**
   * sns findFirst
   */
  export type snsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsInclude<ExtArgs> | null
    /**
     * Filter, which sns to fetch.
     */
    where?: snsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sns to fetch.
     */
    orderBy?: snsOrderByWithRelationInput | snsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sns.
     */
    cursor?: snsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sns.
     */
    distinct?: SnsScalarFieldEnum | SnsScalarFieldEnum[]
  }

  /**
   * sns findFirstOrThrow
   */
  export type snsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsInclude<ExtArgs> | null
    /**
     * Filter, which sns to fetch.
     */
    where?: snsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sns to fetch.
     */
    orderBy?: snsOrderByWithRelationInput | snsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sns.
     */
    cursor?: snsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sns.
     */
    distinct?: SnsScalarFieldEnum | SnsScalarFieldEnum[]
  }

  /**
   * sns findMany
   */
  export type snsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsInclude<ExtArgs> | null
    /**
     * Filter, which sns to fetch.
     */
    where?: snsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sns to fetch.
     */
    orderBy?: snsOrderByWithRelationInput | snsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sns.
     */
    cursor?: snsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sns.
     */
    skip?: number
    distinct?: SnsScalarFieldEnum | SnsScalarFieldEnum[]
  }

  /**
   * sns create
   */
  export type snsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsInclude<ExtArgs> | null
    /**
     * The data needed to create a sns.
     */
    data: XOR<snsCreateInput, snsUncheckedCreateInput>
  }

  /**
   * sns createMany
   */
  export type snsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sns.
     */
    data: snsCreateManyInput | snsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sns createManyAndReturn
   */
  export type snsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * The data used to create many sns.
     */
    data: snsCreateManyInput | snsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sns update
   */
  export type snsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsInclude<ExtArgs> | null
    /**
     * The data needed to update a sns.
     */
    data: XOR<snsUpdateInput, snsUncheckedUpdateInput>
    /**
     * Choose, which sns to update.
     */
    where: snsWhereUniqueInput
  }

  /**
   * sns updateMany
   */
  export type snsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sns.
     */
    data: XOR<snsUpdateManyMutationInput, snsUncheckedUpdateManyInput>
    /**
     * Filter which sns to update
     */
    where?: snsWhereInput
    /**
     * Limit how many sns to update.
     */
    limit?: number
  }

  /**
   * sns updateManyAndReturn
   */
  export type snsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * The data used to update sns.
     */
    data: XOR<snsUpdateManyMutationInput, snsUncheckedUpdateManyInput>
    /**
     * Filter which sns to update
     */
    where?: snsWhereInput
    /**
     * Limit how many sns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sns upsert
   */
  export type snsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsInclude<ExtArgs> | null
    /**
     * The filter to search for the sns to update in case it exists.
     */
    where: snsWhereUniqueInput
    /**
     * In case the sns found by the `where` argument doesn't exist, create a new sns with this data.
     */
    create: XOR<snsCreateInput, snsUncheckedCreateInput>
    /**
     * In case the sns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<snsUpdateInput, snsUncheckedUpdateInput>
  }

  /**
   * sns delete
   */
  export type snsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsInclude<ExtArgs> | null
    /**
     * Filter which sns to delete.
     */
    where: snsWhereUniqueInput
  }

  /**
   * sns deleteMany
   */
  export type snsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sns to delete
     */
    where?: snsWhereInput
    /**
     * Limit how many sns to delete.
     */
    limit?: number
  }

  /**
   * sns without action
   */
  export type snsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sns
     */
    select?: snsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sns
     */
    omit?: snsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: snsInclude<ExtArgs> | null
  }


  /**
   * Model badgeList
   */

  export type AggregateBadgeList = {
    _count: BadgeListCountAggregateOutputType | null
    _avg: BadgeListAvgAggregateOutputType | null
    _sum: BadgeListSumAggregateOutputType | null
    _min: BadgeListMinAggregateOutputType | null
    _max: BadgeListMaxAggregateOutputType | null
  }

  export type BadgeListAvgAggregateOutputType = {
    badgeId: number | null
  }

  export type BadgeListSumAggregateOutputType = {
    badgeId: number | null
  }

  export type BadgeListMinAggregateOutputType = {
    badgeId: number | null
    name: string | null
    description: string | null
    image: string | null
  }

  export type BadgeListMaxAggregateOutputType = {
    badgeId: number | null
    name: string | null
    description: string | null
    image: string | null
  }

  export type BadgeListCountAggregateOutputType = {
    badgeId: number
    name: number
    description: number
    image: number
    _all: number
  }


  export type BadgeListAvgAggregateInputType = {
    badgeId?: true
  }

  export type BadgeListSumAggregateInputType = {
    badgeId?: true
  }

  export type BadgeListMinAggregateInputType = {
    badgeId?: true
    name?: true
    description?: true
    image?: true
  }

  export type BadgeListMaxAggregateInputType = {
    badgeId?: true
    name?: true
    description?: true
    image?: true
  }

  export type BadgeListCountAggregateInputType = {
    badgeId?: true
    name?: true
    description?: true
    image?: true
    _all?: true
  }

  export type BadgeListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which badgeList to aggregate.
     */
    where?: badgeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badgeLists to fetch.
     */
    orderBy?: badgeListOrderByWithRelationInput | badgeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: badgeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badgeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badgeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned badgeLists
    **/
    _count?: true | BadgeListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeListMaxAggregateInputType
  }

  export type GetBadgeListAggregateType<T extends BadgeListAggregateArgs> = {
        [P in keyof T & keyof AggregateBadgeList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadgeList[P]>
      : GetScalarType<T[P], AggregateBadgeList[P]>
  }




  export type badgeListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: badgeListWhereInput
    orderBy?: badgeListOrderByWithAggregationInput | badgeListOrderByWithAggregationInput[]
    by: BadgeListScalarFieldEnum[] | BadgeListScalarFieldEnum
    having?: badgeListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeListCountAggregateInputType | true
    _avg?: BadgeListAvgAggregateInputType
    _sum?: BadgeListSumAggregateInputType
    _min?: BadgeListMinAggregateInputType
    _max?: BadgeListMaxAggregateInputType
  }

  export type BadgeListGroupByOutputType = {
    badgeId: number
    name: string
    description: string
    image: string
    _count: BadgeListCountAggregateOutputType | null
    _avg: BadgeListAvgAggregateOutputType | null
    _sum: BadgeListSumAggregateOutputType | null
    _min: BadgeListMinAggregateOutputType | null
    _max: BadgeListMaxAggregateOutputType | null
  }

  type GetBadgeListGroupByPayload<T extends badgeListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeListGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeListGroupByOutputType[P]>
        }
      >
    >


  export type badgeListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    badgeId?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    users?: boolean | badgeList$usersArgs<ExtArgs>
    event?: boolean | badgeList$eventArgs<ExtArgs>
    _count?: boolean | BadgeListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badgeList"]>

  export type badgeListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    badgeId?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["badgeList"]>

  export type badgeListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    badgeId?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["badgeList"]>

  export type badgeListSelectScalar = {
    badgeId?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
  }

  export type badgeListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"badgeId" | "name" | "description" | "image", ExtArgs["result"]["badgeList"]>
  export type badgeListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | badgeList$usersArgs<ExtArgs>
    event?: boolean | badgeList$eventArgs<ExtArgs>
    _count?: boolean | BadgeListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type badgeListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type badgeListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $badgeListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "badgeList"
    objects: {
      users: Prisma.$UserBadgePayload<ExtArgs>[]
      event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      badgeId: number
      name: string
      description: string
      image: string
    }, ExtArgs["result"]["badgeList"]>
    composites: {}
  }

  type badgeListGetPayload<S extends boolean | null | undefined | badgeListDefaultArgs> = $Result.GetResult<Prisma.$badgeListPayload, S>

  type badgeListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<badgeListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeListCountAggregateInputType | true
    }

  export interface badgeListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['badgeList'], meta: { name: 'badgeList' } }
    /**
     * Find zero or one BadgeList that matches the filter.
     * @param {badgeListFindUniqueArgs} args - Arguments to find a BadgeList
     * @example
     * // Get one BadgeList
     * const badgeList = await prisma.badgeList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends badgeListFindUniqueArgs>(args: SelectSubset<T, badgeListFindUniqueArgs<ExtArgs>>): Prisma__badgeListClient<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BadgeList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {badgeListFindUniqueOrThrowArgs} args - Arguments to find a BadgeList
     * @example
     * // Get one BadgeList
     * const badgeList = await prisma.badgeList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends badgeListFindUniqueOrThrowArgs>(args: SelectSubset<T, badgeListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__badgeListClient<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BadgeList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeListFindFirstArgs} args - Arguments to find a BadgeList
     * @example
     * // Get one BadgeList
     * const badgeList = await prisma.badgeList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends badgeListFindFirstArgs>(args?: SelectSubset<T, badgeListFindFirstArgs<ExtArgs>>): Prisma__badgeListClient<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BadgeList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeListFindFirstOrThrowArgs} args - Arguments to find a BadgeList
     * @example
     * // Get one BadgeList
     * const badgeList = await prisma.badgeList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends badgeListFindFirstOrThrowArgs>(args?: SelectSubset<T, badgeListFindFirstOrThrowArgs<ExtArgs>>): Prisma__badgeListClient<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BadgeLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BadgeLists
     * const badgeLists = await prisma.badgeList.findMany()
     * 
     * // Get first 10 BadgeLists
     * const badgeLists = await prisma.badgeList.findMany({ take: 10 })
     * 
     * // Only select the `badgeId`
     * const badgeListWithBadgeIdOnly = await prisma.badgeList.findMany({ select: { badgeId: true } })
     * 
     */
    findMany<T extends badgeListFindManyArgs>(args?: SelectSubset<T, badgeListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BadgeList.
     * @param {badgeListCreateArgs} args - Arguments to create a BadgeList.
     * @example
     * // Create one BadgeList
     * const BadgeList = await prisma.badgeList.create({
     *   data: {
     *     // ... data to create a BadgeList
     *   }
     * })
     * 
     */
    create<T extends badgeListCreateArgs>(args: SelectSubset<T, badgeListCreateArgs<ExtArgs>>): Prisma__badgeListClient<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BadgeLists.
     * @param {badgeListCreateManyArgs} args - Arguments to create many BadgeLists.
     * @example
     * // Create many BadgeLists
     * const badgeList = await prisma.badgeList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends badgeListCreateManyArgs>(args?: SelectSubset<T, badgeListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BadgeLists and returns the data saved in the database.
     * @param {badgeListCreateManyAndReturnArgs} args - Arguments to create many BadgeLists.
     * @example
     * // Create many BadgeLists
     * const badgeList = await prisma.badgeList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BadgeLists and only return the `badgeId`
     * const badgeListWithBadgeIdOnly = await prisma.badgeList.createManyAndReturn({
     *   select: { badgeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends badgeListCreateManyAndReturnArgs>(args?: SelectSubset<T, badgeListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BadgeList.
     * @param {badgeListDeleteArgs} args - Arguments to delete one BadgeList.
     * @example
     * // Delete one BadgeList
     * const BadgeList = await prisma.badgeList.delete({
     *   where: {
     *     // ... filter to delete one BadgeList
     *   }
     * })
     * 
     */
    delete<T extends badgeListDeleteArgs>(args: SelectSubset<T, badgeListDeleteArgs<ExtArgs>>): Prisma__badgeListClient<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BadgeList.
     * @param {badgeListUpdateArgs} args - Arguments to update one BadgeList.
     * @example
     * // Update one BadgeList
     * const badgeList = await prisma.badgeList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends badgeListUpdateArgs>(args: SelectSubset<T, badgeListUpdateArgs<ExtArgs>>): Prisma__badgeListClient<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BadgeLists.
     * @param {badgeListDeleteManyArgs} args - Arguments to filter BadgeLists to delete.
     * @example
     * // Delete a few BadgeLists
     * const { count } = await prisma.badgeList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends badgeListDeleteManyArgs>(args?: SelectSubset<T, badgeListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BadgeLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BadgeLists
     * const badgeList = await prisma.badgeList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends badgeListUpdateManyArgs>(args: SelectSubset<T, badgeListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BadgeLists and returns the data updated in the database.
     * @param {badgeListUpdateManyAndReturnArgs} args - Arguments to update many BadgeLists.
     * @example
     * // Update many BadgeLists
     * const badgeList = await prisma.badgeList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BadgeLists and only return the `badgeId`
     * const badgeListWithBadgeIdOnly = await prisma.badgeList.updateManyAndReturn({
     *   select: { badgeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends badgeListUpdateManyAndReturnArgs>(args: SelectSubset<T, badgeListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BadgeList.
     * @param {badgeListUpsertArgs} args - Arguments to update or create a BadgeList.
     * @example
     * // Update or create a BadgeList
     * const badgeList = await prisma.badgeList.upsert({
     *   create: {
     *     // ... data to create a BadgeList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BadgeList we want to update
     *   }
     * })
     */
    upsert<T extends badgeListUpsertArgs>(args: SelectSubset<T, badgeListUpsertArgs<ExtArgs>>): Prisma__badgeListClient<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BadgeLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeListCountArgs} args - Arguments to filter BadgeLists to count.
     * @example
     * // Count the number of BadgeLists
     * const count = await prisma.badgeList.count({
     *   where: {
     *     // ... the filter for the BadgeLists we want to count
     *   }
     * })
    **/
    count<T extends badgeListCountArgs>(
      args?: Subset<T, badgeListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BadgeList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BadgeListAggregateArgs>(args: Subset<T, BadgeListAggregateArgs>): Prisma.PrismaPromise<GetBadgeListAggregateType<T>>

    /**
     * Group by BadgeList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badgeListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends badgeListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: badgeListGroupByArgs['orderBy'] }
        : { orderBy?: badgeListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, badgeListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the badgeList model
   */
  readonly fields: badgeListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for badgeList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__badgeListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends badgeList$usersArgs<ExtArgs> = {}>(args?: Subset<T, badgeList$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    event<T extends badgeList$eventArgs<ExtArgs> = {}>(args?: Subset<T, badgeList$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the badgeList model
   */
  interface badgeListFieldRefs {
    readonly badgeId: FieldRef<"badgeList", 'Int'>
    readonly name: FieldRef<"badgeList", 'String'>
    readonly description: FieldRef<"badgeList", 'String'>
    readonly image: FieldRef<"badgeList", 'String'>
  }
    

  // Custom InputTypes
  /**
   * badgeList findUnique
   */
  export type badgeListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeListInclude<ExtArgs> | null
    /**
     * Filter, which badgeList to fetch.
     */
    where: badgeListWhereUniqueInput
  }

  /**
   * badgeList findUniqueOrThrow
   */
  export type badgeListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeListInclude<ExtArgs> | null
    /**
     * Filter, which badgeList to fetch.
     */
    where: badgeListWhereUniqueInput
  }

  /**
   * badgeList findFirst
   */
  export type badgeListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeListInclude<ExtArgs> | null
    /**
     * Filter, which badgeList to fetch.
     */
    where?: badgeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badgeLists to fetch.
     */
    orderBy?: badgeListOrderByWithRelationInput | badgeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for badgeLists.
     */
    cursor?: badgeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badgeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badgeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of badgeLists.
     */
    distinct?: BadgeListScalarFieldEnum | BadgeListScalarFieldEnum[]
  }

  /**
   * badgeList findFirstOrThrow
   */
  export type badgeListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeListInclude<ExtArgs> | null
    /**
     * Filter, which badgeList to fetch.
     */
    where?: badgeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badgeLists to fetch.
     */
    orderBy?: badgeListOrderByWithRelationInput | badgeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for badgeLists.
     */
    cursor?: badgeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badgeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badgeLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of badgeLists.
     */
    distinct?: BadgeListScalarFieldEnum | BadgeListScalarFieldEnum[]
  }

  /**
   * badgeList findMany
   */
  export type badgeListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeListInclude<ExtArgs> | null
    /**
     * Filter, which badgeLists to fetch.
     */
    where?: badgeListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badgeLists to fetch.
     */
    orderBy?: badgeListOrderByWithRelationInput | badgeListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing badgeLists.
     */
    cursor?: badgeListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badgeLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badgeLists.
     */
    skip?: number
    distinct?: BadgeListScalarFieldEnum | BadgeListScalarFieldEnum[]
  }

  /**
   * badgeList create
   */
  export type badgeListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeListInclude<ExtArgs> | null
    /**
     * The data needed to create a badgeList.
     */
    data: XOR<badgeListCreateInput, badgeListUncheckedCreateInput>
  }

  /**
   * badgeList createMany
   */
  export type badgeListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many badgeLists.
     */
    data: badgeListCreateManyInput | badgeListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * badgeList createManyAndReturn
   */
  export type badgeListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * The data used to create many badgeLists.
     */
    data: badgeListCreateManyInput | badgeListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * badgeList update
   */
  export type badgeListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeListInclude<ExtArgs> | null
    /**
     * The data needed to update a badgeList.
     */
    data: XOR<badgeListUpdateInput, badgeListUncheckedUpdateInput>
    /**
     * Choose, which badgeList to update.
     */
    where: badgeListWhereUniqueInput
  }

  /**
   * badgeList updateMany
   */
  export type badgeListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update badgeLists.
     */
    data: XOR<badgeListUpdateManyMutationInput, badgeListUncheckedUpdateManyInput>
    /**
     * Filter which badgeLists to update
     */
    where?: badgeListWhereInput
    /**
     * Limit how many badgeLists to update.
     */
    limit?: number
  }

  /**
   * badgeList updateManyAndReturn
   */
  export type badgeListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * The data used to update badgeLists.
     */
    data: XOR<badgeListUpdateManyMutationInput, badgeListUncheckedUpdateManyInput>
    /**
     * Filter which badgeLists to update
     */
    where?: badgeListWhereInput
    /**
     * Limit how many badgeLists to update.
     */
    limit?: number
  }

  /**
   * badgeList upsert
   */
  export type badgeListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeListInclude<ExtArgs> | null
    /**
     * The filter to search for the badgeList to update in case it exists.
     */
    where: badgeListWhereUniqueInput
    /**
     * In case the badgeList found by the `where` argument doesn't exist, create a new badgeList with this data.
     */
    create: XOR<badgeListCreateInput, badgeListUncheckedCreateInput>
    /**
     * In case the badgeList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<badgeListUpdateInput, badgeListUncheckedUpdateInput>
  }

  /**
   * badgeList delete
   */
  export type badgeListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeListInclude<ExtArgs> | null
    /**
     * Filter which badgeList to delete.
     */
    where: badgeListWhereUniqueInput
  }

  /**
   * badgeList deleteMany
   */
  export type badgeListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which badgeLists to delete
     */
    where?: badgeListWhereInput
    /**
     * Limit how many badgeLists to delete.
     */
    limit?: number
  }

  /**
   * badgeList.users
   */
  export type badgeList$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * badgeList.event
   */
  export type badgeList$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * badgeList without action
   */
  export type badgeListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badgeList
     */
    select?: badgeListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the badgeList
     */
    omit?: badgeListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: badgeListInclude<ExtArgs> | null
  }


  /**
   * Model UserBadge
   */

  export type AggregateUserBadge = {
    _count: UserBadgeCountAggregateOutputType | null
    _avg: UserBadgeAvgAggregateOutputType | null
    _sum: UserBadgeSumAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  export type UserBadgeAvgAggregateOutputType = {
    id: number | null
    badgeId: number | null
  }

  export type UserBadgeSumAggregateOutputType = {
    id: number | null
    badgeId: number | null
  }

  export type UserBadgeMinAggregateOutputType = {
    id: number | null
    userId: string | null
    badgeId: number | null
  }

  export type UserBadgeMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    badgeId: number | null
  }

  export type UserBadgeCountAggregateOutputType = {
    id: number
    userId: number
    badgeId: number
    _all: number
  }


  export type UserBadgeAvgAggregateInputType = {
    id?: true
    badgeId?: true
  }

  export type UserBadgeSumAggregateInputType = {
    id?: true
    badgeId?: true
  }

  export type UserBadgeMinAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
  }

  export type UserBadgeMaxAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
  }

  export type UserBadgeCountAggregateInputType = {
    id?: true
    userId?: true
    badgeId?: true
    _all?: true
  }

  export type UserBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadge to aggregate.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBadges
    **/
    _count?: true | UserBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBadgeMaxAggregateInputType
  }

  export type GetUserBadgeAggregateType<T extends UserBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBadge[P]>
      : GetScalarType<T[P], AggregateUserBadge[P]>
  }




  export type UserBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithAggregationInput | UserBadgeOrderByWithAggregationInput[]
    by: UserBadgeScalarFieldEnum[] | UserBadgeScalarFieldEnum
    having?: UserBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBadgeCountAggregateInputType | true
    _avg?: UserBadgeAvgAggregateInputType
    _sum?: UserBadgeSumAggregateInputType
    _min?: UserBadgeMinAggregateInputType
    _max?: UserBadgeMaxAggregateInputType
  }

  export type UserBadgeGroupByOutputType = {
    id: number
    userId: string
    badgeId: number
    _count: UserBadgeCountAggregateOutputType | null
    _avg: UserBadgeAvgAggregateOutputType | null
    _sum: UserBadgeSumAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  type GetUserBadgeGroupByPayload<T extends UserBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
        }
      >
    >


  export type UserBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | badgeListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | badgeListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    badgeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | badgeListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectScalar = {
    id?: boolean
    userId?: boolean
    badgeId?: boolean
  }

  export type UserBadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "badgeId", ExtArgs["result"]["userBadge"]>
  export type UserBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | badgeListDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | badgeListDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | badgeListDefaultArgs<ExtArgs>
  }

  export type $UserBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBadge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      badge: Prisma.$badgeListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      badgeId: number
    }, ExtArgs["result"]["userBadge"]>
    composites: {}
  }

  type UserBadgeGetPayload<S extends boolean | null | undefined | UserBadgeDefaultArgs> = $Result.GetResult<Prisma.$UserBadgePayload, S>

  type UserBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBadgeCountAggregateInputType | true
    }

  export interface UserBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBadge'], meta: { name: 'UserBadge' } }
    /**
     * Find zero or one UserBadge that matches the filter.
     * @param {UserBadgeFindUniqueArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBadgeFindUniqueArgs>(args: SelectSubset<T, UserBadgeFindUniqueArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBadgeFindUniqueOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBadgeFindFirstArgs>(args?: SelectSubset<T, UserBadgeFindFirstArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBadges
     * const userBadges = await prisma.userBadge.findMany()
     * 
     * // Get first 10 UserBadges
     * const userBadges = await prisma.userBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBadgeFindManyArgs>(args?: SelectSubset<T, UserBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBadge.
     * @param {UserBadgeCreateArgs} args - Arguments to create a UserBadge.
     * @example
     * // Create one UserBadge
     * const UserBadge = await prisma.userBadge.create({
     *   data: {
     *     // ... data to create a UserBadge
     *   }
     * })
     * 
     */
    create<T extends UserBadgeCreateArgs>(args: SelectSubset<T, UserBadgeCreateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBadges.
     * @param {UserBadgeCreateManyArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBadgeCreateManyArgs>(args?: SelectSubset<T, UserBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBadges and returns the data saved in the database.
     * @param {UserBadgeCreateManyAndReturnArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBadge.
     * @param {UserBadgeDeleteArgs} args - Arguments to delete one UserBadge.
     * @example
     * // Delete one UserBadge
     * const UserBadge = await prisma.userBadge.delete({
     *   where: {
     *     // ... filter to delete one UserBadge
     *   }
     * })
     * 
     */
    delete<T extends UserBadgeDeleteArgs>(args: SelectSubset<T, UserBadgeDeleteArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBadge.
     * @param {UserBadgeUpdateArgs} args - Arguments to update one UserBadge.
     * @example
     * // Update one UserBadge
     * const userBadge = await prisma.userBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBadgeUpdateArgs>(args: SelectSubset<T, UserBadgeUpdateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBadges.
     * @param {UserBadgeDeleteManyArgs} args - Arguments to filter UserBadges to delete.
     * @example
     * // Delete a few UserBadges
     * const { count } = await prisma.userBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBadgeDeleteManyArgs>(args?: SelectSubset<T, UserBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBadgeUpdateManyArgs>(args: SelectSubset<T, UserBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges and returns the data updated in the database.
     * @param {UserBadgeUpdateManyAndReturnArgs} args - Arguments to update many UserBadges.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserBadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBadge.
     * @param {UserBadgeUpsertArgs} args - Arguments to update or create a UserBadge.
     * @example
     * // Update or create a UserBadge
     * const userBadge = await prisma.userBadge.upsert({
     *   create: {
     *     // ... data to create a UserBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBadge we want to update
     *   }
     * })
     */
    upsert<T extends UserBadgeUpsertArgs>(args: SelectSubset<T, UserBadgeUpsertArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeCountArgs} args - Arguments to filter UserBadges to count.
     * @example
     * // Count the number of UserBadges
     * const count = await prisma.userBadge.count({
     *   where: {
     *     // ... the filter for the UserBadges we want to count
     *   }
     * })
    **/
    count<T extends UserBadgeCountArgs>(
      args?: Subset<T, UserBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserBadgeAggregateArgs>(args: Subset<T, UserBadgeAggregateArgs>): Prisma.PrismaPromise<GetUserBadgeAggregateType<T>>

    /**
     * Group by UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBadgeGroupByArgs['orderBy'] }
        : { orderBy?: UserBadgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBadge model
   */
  readonly fields: UserBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    badge<T extends badgeListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, badgeListDefaultArgs<ExtArgs>>): Prisma__badgeListClient<$Result.GetResult<Prisma.$badgeListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserBadge model
   */
  interface UserBadgeFieldRefs {
    readonly id: FieldRef<"UserBadge", 'Int'>
    readonly userId: FieldRef<"UserBadge", 'String'>
    readonly badgeId: FieldRef<"UserBadge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserBadge findUnique
   */
  export type UserBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findUniqueOrThrow
   */
  export type UserBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findFirst
   */
  export type UserBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findFirstOrThrow
   */
  export type UserBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findMany
   */
  export type UserBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge create
   */
  export type UserBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBadge.
     */
    data: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
  }

  /**
   * UserBadge createMany
   */
  export type UserBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBadge createManyAndReturn
   */
  export type UserBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge update
   */
  export type UserBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBadge.
     */
    data: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
    /**
     * Choose, which UserBadge to update.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge updateMany
   */
  export type UserBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to update.
     */
    limit?: number
  }

  /**
   * UserBadge updateManyAndReturn
   */
  export type UserBadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge upsert
   */
  export type UserBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBadge to update in case it exists.
     */
    where: UserBadgeWhereUniqueInput
    /**
     * In case the UserBadge found by the `where` argument doesn't exist, create a new UserBadge with this data.
     */
    create: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
    /**
     * In case the UserBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
  }

  /**
   * UserBadge delete
   */
  export type UserBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter which UserBadge to delete.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge deleteMany
   */
  export type UserBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadges to delete
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to delete.
     */
    limit?: number
  }

  /**
   * UserBadge without action
   */
  export type UserBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    password: 'password',
    email: 'email',
    point: 'point',
    profile: 'profile',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    eventId: 'eventId',
    hostId: 'hostId',
    eventName: 'eventName',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    isDeleted: 'isDeleted',
    updatedAt: 'updatedAt',
    badgeId: 'badgeId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TimeSlotScalarFieldEnum: {
    timeSlotId: 'timeSlotId',
    eventId: 'eventId',
    startAt: 'startAt',
    endAt: 'endAt',
    capacity: 'capacity'
  };

  export type TimeSlotScalarFieldEnum = (typeof TimeSlotScalarFieldEnum)[keyof typeof TimeSlotScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    reservationId: 'reservationId',
    userId: 'userId',
    timeSlotId: 'timeSlotId',
    status: 'status',
    reservedAt: 'reservedAt',
    canceledAt: 'canceledAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const SnsScalarFieldEnum: {
    postId: 'postId',
    userId: 'userId',
    content: 'content',
    good: 'good',
    time: 'time'
  };

  export type SnsScalarFieldEnum = (typeof SnsScalarFieldEnum)[keyof typeof SnsScalarFieldEnum]


  export const BadgeListScalarFieldEnum: {
    badgeId: 'badgeId',
    name: 'name',
    description: 'description',
    image: 'image'
  };

  export type BadgeListScalarFieldEnum = (typeof BadgeListScalarFieldEnum)[keyof typeof BadgeListScalarFieldEnum]


  export const UserBadgeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    badgeId: 'badgeId'
  };

  export type UserBadgeScalarFieldEnum = (typeof UserBadgeScalarFieldEnum)[keyof typeof UserBadgeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationStatus[]'
   */
  export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    point?: IntFilter<"User"> | number
    profile?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hostEvents?: EventListRelationFilter
    reservations?: ReservationListRelationFilter
    sns?: SnsListRelationFilter
    badges?: UserBadgeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    point?: SortOrder
    profile?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hostEvents?: EventOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    sns?: snsOrderByRelationAggregateInput
    badges?: UserBadgeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    point?: IntFilter<"User"> | number
    profile?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    hostEvents?: EventListRelationFilter
    reservations?: ReservationListRelationFilter
    sns?: SnsListRelationFilter
    badges?: UserBadgeListRelationFilter
  }, "userId">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    point?: SortOrder
    profile?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    point?: IntWithAggregatesFilter<"User"> | number
    profile?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    eventId?: IntFilter<"Event"> | number
    hostId?: StringFilter<"Event"> | string
    eventName?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    startsAt?: DateTimeFilter<"Event"> | Date | string
    endsAt?: DateTimeFilter<"Event"> | Date | string
    isDeleted?: BoolFilter<"Event"> | boolean
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    badgeId?: IntNullableFilter<"Event"> | number | null
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeSlots?: TimeSlotListRelationFilter
    badge?: XOR<BadgeListNullableScalarRelationFilter, badgeListWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    eventId?: SortOrder
    hostId?: SortOrder
    eventName?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isDeleted?: SortOrder
    updatedAt?: SortOrder
    badgeId?: SortOrderInput | SortOrder
    host?: UserOrderByWithRelationInput
    timeSlots?: TimeSlotOrderByRelationAggregateInput
    badge?: badgeListOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    eventId?: number
    badgeId?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    hostId?: StringFilter<"Event"> | string
    eventName?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    startsAt?: DateTimeFilter<"Event"> | Date | string
    endsAt?: DateTimeFilter<"Event"> | Date | string
    isDeleted?: BoolFilter<"Event"> | boolean
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    host?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeSlots?: TimeSlotListRelationFilter
    badge?: XOR<BadgeListNullableScalarRelationFilter, badgeListWhereInput> | null
  }, "eventId" | "badgeId">

  export type EventOrderByWithAggregationInput = {
    eventId?: SortOrder
    hostId?: SortOrder
    eventName?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isDeleted?: SortOrder
    updatedAt?: SortOrder
    badgeId?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    eventId?: IntWithAggregatesFilter<"Event"> | number
    hostId?: StringWithAggregatesFilter<"Event"> | string
    eventName?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    startsAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endsAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"Event"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    badgeId?: IntNullableWithAggregatesFilter<"Event"> | number | null
  }

  export type TimeSlotWhereInput = {
    AND?: TimeSlotWhereInput | TimeSlotWhereInput[]
    OR?: TimeSlotWhereInput[]
    NOT?: TimeSlotWhereInput | TimeSlotWhereInput[]
    timeSlotId?: IntFilter<"TimeSlot"> | number
    eventId?: IntFilter<"TimeSlot"> | number
    startAt?: DateTimeFilter<"TimeSlot"> | Date | string
    endAt?: DateTimeFilter<"TimeSlot"> | Date | string
    capacity?: IntFilter<"TimeSlot"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    reservations?: ReservationListRelationFilter
  }

  export type TimeSlotOrderByWithRelationInput = {
    timeSlotId?: SortOrder
    eventId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    capacity?: SortOrder
    event?: EventOrderByWithRelationInput
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type TimeSlotWhereUniqueInput = Prisma.AtLeast<{
    timeSlotId?: number
    AND?: TimeSlotWhereInput | TimeSlotWhereInput[]
    OR?: TimeSlotWhereInput[]
    NOT?: TimeSlotWhereInput | TimeSlotWhereInput[]
    eventId?: IntFilter<"TimeSlot"> | number
    startAt?: DateTimeFilter<"TimeSlot"> | Date | string
    endAt?: DateTimeFilter<"TimeSlot"> | Date | string
    capacity?: IntFilter<"TimeSlot"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    reservations?: ReservationListRelationFilter
  }, "timeSlotId">

  export type TimeSlotOrderByWithAggregationInput = {
    timeSlotId?: SortOrder
    eventId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    capacity?: SortOrder
    _count?: TimeSlotCountOrderByAggregateInput
    _avg?: TimeSlotAvgOrderByAggregateInput
    _max?: TimeSlotMaxOrderByAggregateInput
    _min?: TimeSlotMinOrderByAggregateInput
    _sum?: TimeSlotSumOrderByAggregateInput
  }

  export type TimeSlotScalarWhereWithAggregatesInput = {
    AND?: TimeSlotScalarWhereWithAggregatesInput | TimeSlotScalarWhereWithAggregatesInput[]
    OR?: TimeSlotScalarWhereWithAggregatesInput[]
    NOT?: TimeSlotScalarWhereWithAggregatesInput | TimeSlotScalarWhereWithAggregatesInput[]
    timeSlotId?: IntWithAggregatesFilter<"TimeSlot"> | number
    eventId?: IntWithAggregatesFilter<"TimeSlot"> | number
    startAt?: DateTimeWithAggregatesFilter<"TimeSlot"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"TimeSlot"> | Date | string
    capacity?: IntWithAggregatesFilter<"TimeSlot"> | number
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    reservationId?: IntFilter<"Reservation"> | number
    userId?: StringFilter<"Reservation"> | string
    timeSlotId?: IntFilter<"Reservation"> | number
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    reservedAt?: DateTimeFilter<"Reservation"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeSlot?: XOR<TimeSlotScalarRelationFilter, TimeSlotWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    timeSlotId?: SortOrder
    status?: SortOrder
    reservedAt?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    timeSlot?: TimeSlotOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    reservationId?: number
    userId_timeSlotId?: ReservationUserIdTimeSlotIdCompoundUniqueInput
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    userId?: StringFilter<"Reservation"> | string
    timeSlotId?: IntFilter<"Reservation"> | number
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    reservedAt?: DateTimeFilter<"Reservation"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    timeSlot?: XOR<TimeSlotScalarRelationFilter, TimeSlotWhereInput>
  }, "reservationId" | "userId_timeSlotId">

  export type ReservationOrderByWithAggregationInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    timeSlotId?: SortOrder
    status?: SortOrder
    reservedAt?: SortOrder
    canceledAt?: SortOrderInput | SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    reservationId?: IntWithAggregatesFilter<"Reservation"> | number
    userId?: StringWithAggregatesFilter<"Reservation"> | string
    timeSlotId?: IntWithAggregatesFilter<"Reservation"> | number
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    reservedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null
  }

  export type snsWhereInput = {
    AND?: snsWhereInput | snsWhereInput[]
    OR?: snsWhereInput[]
    NOT?: snsWhereInput | snsWhereInput[]
    postId?: IntFilter<"sns"> | number
    userId?: StringFilter<"sns"> | string
    content?: StringFilter<"sns"> | string
    good?: StringNullableListFilter<"sns">
    time?: DateTimeFilter<"sns"> | Date | string
    maker?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type snsOrderByWithRelationInput = {
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    good?: SortOrder
    time?: SortOrder
    maker?: UserOrderByWithRelationInput
  }

  export type snsWhereUniqueInput = Prisma.AtLeast<{
    postId?: number
    AND?: snsWhereInput | snsWhereInput[]
    OR?: snsWhereInput[]
    NOT?: snsWhereInput | snsWhereInput[]
    userId?: StringFilter<"sns"> | string
    content?: StringFilter<"sns"> | string
    good?: StringNullableListFilter<"sns">
    time?: DateTimeFilter<"sns"> | Date | string
    maker?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "postId">

  export type snsOrderByWithAggregationInput = {
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    good?: SortOrder
    time?: SortOrder
    _count?: snsCountOrderByAggregateInput
    _avg?: snsAvgOrderByAggregateInput
    _max?: snsMaxOrderByAggregateInput
    _min?: snsMinOrderByAggregateInput
    _sum?: snsSumOrderByAggregateInput
  }

  export type snsScalarWhereWithAggregatesInput = {
    AND?: snsScalarWhereWithAggregatesInput | snsScalarWhereWithAggregatesInput[]
    OR?: snsScalarWhereWithAggregatesInput[]
    NOT?: snsScalarWhereWithAggregatesInput | snsScalarWhereWithAggregatesInput[]
    postId?: IntWithAggregatesFilter<"sns"> | number
    userId?: StringWithAggregatesFilter<"sns"> | string
    content?: StringWithAggregatesFilter<"sns"> | string
    good?: StringNullableListFilter<"sns">
    time?: DateTimeWithAggregatesFilter<"sns"> | Date | string
  }

  export type badgeListWhereInput = {
    AND?: badgeListWhereInput | badgeListWhereInput[]
    OR?: badgeListWhereInput[]
    NOT?: badgeListWhereInput | badgeListWhereInput[]
    badgeId?: IntFilter<"badgeList"> | number
    name?: StringFilter<"badgeList"> | string
    description?: StringFilter<"badgeList"> | string
    image?: StringFilter<"badgeList"> | string
    users?: UserBadgeListRelationFilter
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type badgeListOrderByWithRelationInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    users?: UserBadgeOrderByRelationAggregateInput
    event?: EventOrderByWithRelationInput
  }

  export type badgeListWhereUniqueInput = Prisma.AtLeast<{
    badgeId?: number
    AND?: badgeListWhereInput | badgeListWhereInput[]
    OR?: badgeListWhereInput[]
    NOT?: badgeListWhereInput | badgeListWhereInput[]
    name?: StringFilter<"badgeList"> | string
    description?: StringFilter<"badgeList"> | string
    image?: StringFilter<"badgeList"> | string
    users?: UserBadgeListRelationFilter
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "badgeId">

  export type badgeListOrderByWithAggregationInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    _count?: badgeListCountOrderByAggregateInput
    _avg?: badgeListAvgOrderByAggregateInput
    _max?: badgeListMaxOrderByAggregateInput
    _min?: badgeListMinOrderByAggregateInput
    _sum?: badgeListSumOrderByAggregateInput
  }

  export type badgeListScalarWhereWithAggregatesInput = {
    AND?: badgeListScalarWhereWithAggregatesInput | badgeListScalarWhereWithAggregatesInput[]
    OR?: badgeListScalarWhereWithAggregatesInput[]
    NOT?: badgeListScalarWhereWithAggregatesInput | badgeListScalarWhereWithAggregatesInput[]
    badgeId?: IntWithAggregatesFilter<"badgeList"> | number
    name?: StringWithAggregatesFilter<"badgeList"> | string
    description?: StringWithAggregatesFilter<"badgeList"> | string
    image?: StringWithAggregatesFilter<"badgeList"> | string
  }

  export type UserBadgeWhereInput = {
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    id?: IntFilter<"UserBadge"> | number
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: IntFilter<"UserBadge"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgeListScalarRelationFilter, badgeListWhereInput>
  }

  export type UserBadgeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    user?: UserOrderByWithRelationInput
    badge?: badgeListOrderByWithRelationInput
  }

  export type UserBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_badgeId?: UserBadgeUserIdBadgeIdCompoundUniqueInput
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: IntFilter<"UserBadge"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgeListScalarRelationFilter, badgeListWhereInput>
  }, "id" | "userId_badgeId">

  export type UserBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
    _count?: UserBadgeCountOrderByAggregateInput
    _avg?: UserBadgeAvgOrderByAggregateInput
    _max?: UserBadgeMaxOrderByAggregateInput
    _min?: UserBadgeMinOrderByAggregateInput
    _sum?: UserBadgeSumOrderByAggregateInput
  }

  export type UserBadgeScalarWhereWithAggregatesInput = {
    AND?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    OR?: UserBadgeScalarWhereWithAggregatesInput[]
    NOT?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserBadge"> | number
    userId?: StringWithAggregatesFilter<"UserBadge"> | string
    badgeId?: IntWithAggregatesFilter<"UserBadge"> | number
  }

  export type UserCreateInput = {
    userId?: string
    password: string
    email: string
    point: number
    profile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostEvents?: EventCreateNestedManyWithoutHostInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
    sns?: snsCreateNestedManyWithoutMakerInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    password: string
    email: string
    point: number
    profile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostEvents?: EventUncheckedCreateNestedManyWithoutHostInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    sns?: snsUncheckedCreateNestedManyWithoutMakerInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostEvents?: EventUpdateManyWithoutHostNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    sns?: snsUpdateManyWithoutMakerNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostEvents?: EventUncheckedUpdateManyWithoutHostNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    sns?: snsUncheckedUpdateManyWithoutMakerNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    password: string
    email: string
    point: number
    profile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    eventName: string
    title: string
    description: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt: Date | string
    isDeleted?: boolean
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutHostEventsInput
    timeSlots?: TimeSlotCreateNestedManyWithoutEventInput
    badge?: badgeListCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    eventId?: number
    hostId: string
    eventName: string
    title: string
    description: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt: Date | string
    isDeleted?: boolean
    updatedAt?: Date | string
    badgeId?: number | null
    timeSlots?: TimeSlotUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostEventsNestedInput
    timeSlots?: TimeSlotUpdateManyWithoutEventNestedInput
    badge?: badgeListUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    hostId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badgeId?: NullableIntFieldUpdateOperationsInput | number | null
    timeSlots?: TimeSlotUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    eventId?: number
    hostId: string
    eventName: string
    title: string
    description: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt: Date | string
    isDeleted?: boolean
    updatedAt?: Date | string
    badgeId?: number | null
  }

  export type EventUpdateManyMutationInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    hostId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badgeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TimeSlotCreateInput = {
    startAt: Date | string
    endAt: Date | string
    capacity: number
    event: EventCreateNestedOneWithoutTimeSlotsInput
    reservations?: ReservationCreateNestedManyWithoutTimeSlotInput
  }

  export type TimeSlotUncheckedCreateInput = {
    timeSlotId?: number
    eventId: number
    startAt: Date | string
    endAt: Date | string
    capacity: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutTimeSlotInput
  }

  export type TimeSlotUpdateInput = {
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutTimeSlotsNestedInput
    reservations?: ReservationUpdateManyWithoutTimeSlotNestedInput
  }

  export type TimeSlotUncheckedUpdateInput = {
    timeSlotId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutTimeSlotNestedInput
  }

  export type TimeSlotCreateManyInput = {
    timeSlotId?: number
    eventId: number
    startAt: Date | string
    endAt: Date | string
    capacity: number
  }

  export type TimeSlotUpdateManyMutationInput = {
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type TimeSlotUncheckedUpdateManyInput = {
    timeSlotId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateInput = {
    status: $Enums.ReservationStatus
    reservedAt?: Date | string
    canceledAt?: Date | string | null
    user: UserCreateNestedOneWithoutReservationsInput
    timeSlot: TimeSlotCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateInput = {
    reservationId?: number
    userId: string
    timeSlotId: number
    status: $Enums.ReservationStatus
    reservedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type ReservationUpdateInput = {
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    timeSlot?: TimeSlotUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: IntFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservationCreateManyInput = {
    reservationId?: number
    userId: string
    timeSlotId: number
    status: $Enums.ReservationStatus
    reservedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type ReservationUpdateManyMutationInput = {
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservationUncheckedUpdateManyInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    timeSlotId?: IntFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type snsCreateInput = {
    content: string
    good?: snsCreategoodInput | string[]
    time?: Date | string
    maker: UserCreateNestedOneWithoutSnsInput
  }

  export type snsUncheckedCreateInput = {
    postId?: number
    userId: string
    content: string
    good?: snsCreategoodInput | string[]
    time?: Date | string
  }

  export type snsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    good?: snsUpdategoodInput | string[]
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    maker?: UserUpdateOneRequiredWithoutSnsNestedInput
  }

  export type snsUncheckedUpdateInput = {
    postId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    good?: snsUpdategoodInput | string[]
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type snsCreateManyInput = {
    postId?: number
    userId: string
    content: string
    good?: snsCreategoodInput | string[]
    time?: Date | string
  }

  export type snsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    good?: snsUpdategoodInput | string[]
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type snsUncheckedUpdateManyInput = {
    postId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    good?: snsUpdategoodInput | string[]
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type badgeListCreateInput = {
    name: string
    description: string
    image: string
    users?: UserBadgeCreateNestedManyWithoutBadgeInput
    event?: EventCreateNestedOneWithoutBadgeInput
  }

  export type badgeListUncheckedCreateInput = {
    badgeId?: number
    name: string
    description: string
    image: string
    users?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
    event?: EventUncheckedCreateNestedOneWithoutBadgeInput
  }

  export type badgeListUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    users?: UserBadgeUpdateManyWithoutBadgeNestedInput
    event?: EventUpdateOneWithoutBadgeNestedInput
  }

  export type badgeListUncheckedUpdateInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    users?: UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput
    event?: EventUncheckedUpdateOneWithoutBadgeNestedInput
  }

  export type badgeListCreateManyInput = {
    badgeId?: number
    name: string
    description: string
    image: string
  }

  export type badgeListUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type badgeListUncheckedUpdateManyInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type UserBadgeCreateInput = {
    user: UserCreateNestedOneWithoutBadgesInput
    badge: badgeListCreateNestedOneWithoutUsersInput
  }

  export type UserBadgeUncheckedCreateInput = {
    id?: number
    userId: string
    badgeId: number
  }

  export type UserBadgeUpdateInput = {
    user?: UserUpdateOneRequiredWithoutBadgesNestedInput
    badge?: badgeListUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserBadgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: IntFieldUpdateOperationsInput | number
  }

  export type UserBadgeCreateManyInput = {
    id?: number
    userId: string
    badgeId: number
  }

  export type UserBadgeUpdateManyMutationInput = {

  }

  export type UserBadgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    badgeId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type SnsListRelationFilter = {
    every?: snsWhereInput
    some?: snsWhereInput
    none?: snsWhereInput
  }

  export type UserBadgeListRelationFilter = {
    every?: UserBadgeWhereInput
    some?: UserBadgeWhereInput
    none?: UserBadgeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type snsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    point?: SortOrder
    profile?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    point?: SortOrder
    profile?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    password?: SortOrder
    email?: SortOrder
    point?: SortOrder
    profile?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    point?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TimeSlotListRelationFilter = {
    every?: TimeSlotWhereInput
    some?: TimeSlotWhereInput
    none?: TimeSlotWhereInput
  }

  export type BadgeListNullableScalarRelationFilter = {
    is?: badgeListWhereInput | null
    isNot?: badgeListWhereInput | null
  }

  export type TimeSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    eventId?: SortOrder
    hostId?: SortOrder
    eventName?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isDeleted?: SortOrder
    updatedAt?: SortOrder
    badgeId?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    eventId?: SortOrder
    badgeId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    eventId?: SortOrder
    hostId?: SortOrder
    eventName?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isDeleted?: SortOrder
    updatedAt?: SortOrder
    badgeId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    eventId?: SortOrder
    hostId?: SortOrder
    eventName?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    isDeleted?: SortOrder
    updatedAt?: SortOrder
    badgeId?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    eventId?: SortOrder
    badgeId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type TimeSlotCountOrderByAggregateInput = {
    timeSlotId?: SortOrder
    eventId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    capacity?: SortOrder
  }

  export type TimeSlotAvgOrderByAggregateInput = {
    timeSlotId?: SortOrder
    eventId?: SortOrder
    capacity?: SortOrder
  }

  export type TimeSlotMaxOrderByAggregateInput = {
    timeSlotId?: SortOrder
    eventId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    capacity?: SortOrder
  }

  export type TimeSlotMinOrderByAggregateInput = {
    timeSlotId?: SortOrder
    eventId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    capacity?: SortOrder
  }

  export type TimeSlotSumOrderByAggregateInput = {
    timeSlotId?: SortOrder
    eventId?: SortOrder
    capacity?: SortOrder
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TimeSlotScalarRelationFilter = {
    is?: TimeSlotWhereInput
    isNot?: TimeSlotWhereInput
  }

  export type ReservationUserIdTimeSlotIdCompoundUniqueInput = {
    userId: string
    timeSlotId: number
  }

  export type ReservationCountOrderByAggregateInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    timeSlotId?: SortOrder
    status?: SortOrder
    reservedAt?: SortOrder
    canceledAt?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    reservationId?: SortOrder
    timeSlotId?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    timeSlotId?: SortOrder
    status?: SortOrder
    reservedAt?: SortOrder
    canceledAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    timeSlotId?: SortOrder
    status?: SortOrder
    reservedAt?: SortOrder
    canceledAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    reservationId?: SortOrder
    timeSlotId?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type snsCountOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    good?: SortOrder
    time?: SortOrder
  }

  export type snsAvgOrderByAggregateInput = {
    postId?: SortOrder
  }

  export type snsMaxOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    time?: SortOrder
  }

  export type snsMinOrderByAggregateInput = {
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    time?: SortOrder
  }

  export type snsSumOrderByAggregateInput = {
    postId?: SortOrder
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type badgeListCountOrderByAggregateInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type badgeListAvgOrderByAggregateInput = {
    badgeId?: SortOrder
  }

  export type badgeListMaxOrderByAggregateInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type badgeListMinOrderByAggregateInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type badgeListSumOrderByAggregateInput = {
    badgeId?: SortOrder
  }

  export type BadgeListScalarRelationFilter = {
    is?: badgeListWhereInput
    isNot?: badgeListWhereInput
  }

  export type UserBadgeUserIdBadgeIdCompoundUniqueInput = {
    userId: string
    badgeId: number
  }

  export type UserBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type UserBadgeAvgOrderByAggregateInput = {
    id?: SortOrder
    badgeId?: SortOrder
  }

  export type UserBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type UserBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    badgeId?: SortOrder
  }

  export type UserBadgeSumOrderByAggregateInput = {
    id?: SortOrder
    badgeId?: SortOrder
  }

  export type EventCreateNestedManyWithoutHostInput = {
    create?: XOR<EventCreateWithoutHostInput, EventUncheckedCreateWithoutHostInput> | EventCreateWithoutHostInput[] | EventUncheckedCreateWithoutHostInput[]
    connectOrCreate?: EventCreateOrConnectWithoutHostInput | EventCreateOrConnectWithoutHostInput[]
    createMany?: EventCreateManyHostInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type snsCreateNestedManyWithoutMakerInput = {
    create?: XOR<snsCreateWithoutMakerInput, snsUncheckedCreateWithoutMakerInput> | snsCreateWithoutMakerInput[] | snsUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: snsCreateOrConnectWithoutMakerInput | snsCreateOrConnectWithoutMakerInput[]
    createMany?: snsCreateManyMakerInputEnvelope
    connect?: snsWhereUniqueInput | snsWhereUniqueInput[]
  }

  export type UserBadgeCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<EventCreateWithoutHostInput, EventUncheckedCreateWithoutHostInput> | EventCreateWithoutHostInput[] | EventUncheckedCreateWithoutHostInput[]
    connectOrCreate?: EventCreateOrConnectWithoutHostInput | EventCreateOrConnectWithoutHostInput[]
    createMany?: EventCreateManyHostInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type snsUncheckedCreateNestedManyWithoutMakerInput = {
    create?: XOR<snsCreateWithoutMakerInput, snsUncheckedCreateWithoutMakerInput> | snsCreateWithoutMakerInput[] | snsUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: snsCreateOrConnectWithoutMakerInput | snsCreateOrConnectWithoutMakerInput[]
    createMany?: snsCreateManyMakerInputEnvelope
    connect?: snsWhereUniqueInput | snsWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutHostNestedInput = {
    create?: XOR<EventCreateWithoutHostInput, EventUncheckedCreateWithoutHostInput> | EventCreateWithoutHostInput[] | EventUncheckedCreateWithoutHostInput[]
    connectOrCreate?: EventCreateOrConnectWithoutHostInput | EventCreateOrConnectWithoutHostInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutHostInput | EventUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: EventCreateManyHostInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutHostInput | EventUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: EventUpdateManyWithWhereWithoutHostInput | EventUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type snsUpdateManyWithoutMakerNestedInput = {
    create?: XOR<snsCreateWithoutMakerInput, snsUncheckedCreateWithoutMakerInput> | snsCreateWithoutMakerInput[] | snsUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: snsCreateOrConnectWithoutMakerInput | snsCreateOrConnectWithoutMakerInput[]
    upsert?: snsUpsertWithWhereUniqueWithoutMakerInput | snsUpsertWithWhereUniqueWithoutMakerInput[]
    createMany?: snsCreateManyMakerInputEnvelope
    set?: snsWhereUniqueInput | snsWhereUniqueInput[]
    disconnect?: snsWhereUniqueInput | snsWhereUniqueInput[]
    delete?: snsWhereUniqueInput | snsWhereUniqueInput[]
    connect?: snsWhereUniqueInput | snsWhereUniqueInput[]
    update?: snsUpdateWithWhereUniqueWithoutMakerInput | snsUpdateWithWhereUniqueWithoutMakerInput[]
    updateMany?: snsUpdateManyWithWhereWithoutMakerInput | snsUpdateManyWithWhereWithoutMakerInput[]
    deleteMany?: snsScalarWhereInput | snsScalarWhereInput[]
  }

  export type UserBadgeUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<EventCreateWithoutHostInput, EventUncheckedCreateWithoutHostInput> | EventCreateWithoutHostInput[] | EventUncheckedCreateWithoutHostInput[]
    connectOrCreate?: EventCreateOrConnectWithoutHostInput | EventCreateOrConnectWithoutHostInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutHostInput | EventUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: EventCreateManyHostInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutHostInput | EventUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: EventUpdateManyWithWhereWithoutHostInput | EventUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type snsUncheckedUpdateManyWithoutMakerNestedInput = {
    create?: XOR<snsCreateWithoutMakerInput, snsUncheckedCreateWithoutMakerInput> | snsCreateWithoutMakerInput[] | snsUncheckedCreateWithoutMakerInput[]
    connectOrCreate?: snsCreateOrConnectWithoutMakerInput | snsCreateOrConnectWithoutMakerInput[]
    upsert?: snsUpsertWithWhereUniqueWithoutMakerInput | snsUpsertWithWhereUniqueWithoutMakerInput[]
    createMany?: snsCreateManyMakerInputEnvelope
    set?: snsWhereUniqueInput | snsWhereUniqueInput[]
    disconnect?: snsWhereUniqueInput | snsWhereUniqueInput[]
    delete?: snsWhereUniqueInput | snsWhereUniqueInput[]
    connect?: snsWhereUniqueInput | snsWhereUniqueInput[]
    update?: snsUpdateWithWhereUniqueWithoutMakerInput | snsUpdateWithWhereUniqueWithoutMakerInput[]
    updateMany?: snsUpdateManyWithWhereWithoutMakerInput | snsUpdateManyWithWhereWithoutMakerInput[]
    deleteMany?: snsScalarWhereInput | snsScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput> | UserBadgeCreateWithoutUserInput[] | UserBadgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutUserInput | UserBadgeCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutUserInput | UserBadgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgeCreateManyUserInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutUserInput | UserBadgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutUserInput | UserBadgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHostEventsInput = {
    create?: XOR<UserCreateWithoutHostEventsInput, UserUncheckedCreateWithoutHostEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostEventsInput
    connect?: UserWhereUniqueInput
  }

  export type TimeSlotCreateNestedManyWithoutEventInput = {
    create?: XOR<TimeSlotCreateWithoutEventInput, TimeSlotUncheckedCreateWithoutEventInput> | TimeSlotCreateWithoutEventInput[] | TimeSlotUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TimeSlotCreateOrConnectWithoutEventInput | TimeSlotCreateOrConnectWithoutEventInput[]
    createMany?: TimeSlotCreateManyEventInputEnvelope
    connect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
  }

  export type badgeListCreateNestedOneWithoutEventInput = {
    create?: XOR<badgeListCreateWithoutEventInput, badgeListUncheckedCreateWithoutEventInput>
    connectOrCreate?: badgeListCreateOrConnectWithoutEventInput
    connect?: badgeListWhereUniqueInput
  }

  export type TimeSlotUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TimeSlotCreateWithoutEventInput, TimeSlotUncheckedCreateWithoutEventInput> | TimeSlotCreateWithoutEventInput[] | TimeSlotUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TimeSlotCreateOrConnectWithoutEventInput | TimeSlotCreateOrConnectWithoutEventInput[]
    createMany?: TimeSlotCreateManyEventInputEnvelope
    connect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutHostEventsNestedInput = {
    create?: XOR<UserCreateWithoutHostEventsInput, UserUncheckedCreateWithoutHostEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostEventsInput
    upsert?: UserUpsertWithoutHostEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHostEventsInput, UserUpdateWithoutHostEventsInput>, UserUncheckedUpdateWithoutHostEventsInput>
  }

  export type TimeSlotUpdateManyWithoutEventNestedInput = {
    create?: XOR<TimeSlotCreateWithoutEventInput, TimeSlotUncheckedCreateWithoutEventInput> | TimeSlotCreateWithoutEventInput[] | TimeSlotUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TimeSlotCreateOrConnectWithoutEventInput | TimeSlotCreateOrConnectWithoutEventInput[]
    upsert?: TimeSlotUpsertWithWhereUniqueWithoutEventInput | TimeSlotUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TimeSlotCreateManyEventInputEnvelope
    set?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    disconnect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    delete?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    connect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    update?: TimeSlotUpdateWithWhereUniqueWithoutEventInput | TimeSlotUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TimeSlotUpdateManyWithWhereWithoutEventInput | TimeSlotUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TimeSlotScalarWhereInput | TimeSlotScalarWhereInput[]
  }

  export type badgeListUpdateOneWithoutEventNestedInput = {
    create?: XOR<badgeListCreateWithoutEventInput, badgeListUncheckedCreateWithoutEventInput>
    connectOrCreate?: badgeListCreateOrConnectWithoutEventInput
    upsert?: badgeListUpsertWithoutEventInput
    disconnect?: badgeListWhereInput | boolean
    delete?: badgeListWhereInput | boolean
    connect?: badgeListWhereUniqueInput
    update?: XOR<XOR<badgeListUpdateToOneWithWhereWithoutEventInput, badgeListUpdateWithoutEventInput>, badgeListUncheckedUpdateWithoutEventInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TimeSlotUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TimeSlotCreateWithoutEventInput, TimeSlotUncheckedCreateWithoutEventInput> | TimeSlotCreateWithoutEventInput[] | TimeSlotUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TimeSlotCreateOrConnectWithoutEventInput | TimeSlotCreateOrConnectWithoutEventInput[]
    upsert?: TimeSlotUpsertWithWhereUniqueWithoutEventInput | TimeSlotUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TimeSlotCreateManyEventInputEnvelope
    set?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    disconnect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    delete?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    connect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    update?: TimeSlotUpdateWithWhereUniqueWithoutEventInput | TimeSlotUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TimeSlotUpdateManyWithWhereWithoutEventInput | TimeSlotUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TimeSlotScalarWhereInput | TimeSlotScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTimeSlotsInput = {
    create?: XOR<EventCreateWithoutTimeSlotsInput, EventUncheckedCreateWithoutTimeSlotsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTimeSlotsInput
    connect?: EventWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutTimeSlotInput = {
    create?: XOR<ReservationCreateWithoutTimeSlotInput, ReservationUncheckedCreateWithoutTimeSlotInput> | ReservationCreateWithoutTimeSlotInput[] | ReservationUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTimeSlotInput | ReservationCreateOrConnectWithoutTimeSlotInput[]
    createMany?: ReservationCreateManyTimeSlotInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutTimeSlotInput = {
    create?: XOR<ReservationCreateWithoutTimeSlotInput, ReservationUncheckedCreateWithoutTimeSlotInput> | ReservationCreateWithoutTimeSlotInput[] | ReservationUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTimeSlotInput | ReservationCreateOrConnectWithoutTimeSlotInput[]
    createMany?: ReservationCreateManyTimeSlotInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutTimeSlotsNestedInput = {
    create?: XOR<EventCreateWithoutTimeSlotsInput, EventUncheckedCreateWithoutTimeSlotsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTimeSlotsInput
    upsert?: EventUpsertWithoutTimeSlotsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTimeSlotsInput, EventUpdateWithoutTimeSlotsInput>, EventUncheckedUpdateWithoutTimeSlotsInput>
  }

  export type ReservationUpdateManyWithoutTimeSlotNestedInput = {
    create?: XOR<ReservationCreateWithoutTimeSlotInput, ReservationUncheckedCreateWithoutTimeSlotInput> | ReservationCreateWithoutTimeSlotInput[] | ReservationUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTimeSlotInput | ReservationCreateOrConnectWithoutTimeSlotInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTimeSlotInput | ReservationUpsertWithWhereUniqueWithoutTimeSlotInput[]
    createMany?: ReservationCreateManyTimeSlotInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTimeSlotInput | ReservationUpdateWithWhereUniqueWithoutTimeSlotInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTimeSlotInput | ReservationUpdateManyWithWhereWithoutTimeSlotInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutTimeSlotNestedInput = {
    create?: XOR<ReservationCreateWithoutTimeSlotInput, ReservationUncheckedCreateWithoutTimeSlotInput> | ReservationCreateWithoutTimeSlotInput[] | ReservationUncheckedCreateWithoutTimeSlotInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTimeSlotInput | ReservationCreateOrConnectWithoutTimeSlotInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTimeSlotInput | ReservationUpsertWithWhereUniqueWithoutTimeSlotInput[]
    createMany?: ReservationCreateManyTimeSlotInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTimeSlotInput | ReservationUpdateWithWhereUniqueWithoutTimeSlotInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTimeSlotInput | ReservationUpdateManyWithWhereWithoutTimeSlotInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type TimeSlotCreateNestedOneWithoutReservationsInput = {
    create?: XOR<TimeSlotCreateWithoutReservationsInput, TimeSlotUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: TimeSlotCreateOrConnectWithoutReservationsInput
    connect?: TimeSlotWhereUniqueInput
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    upsert?: UserUpsertWithoutReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservationsInput, UserUpdateWithoutReservationsInput>, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type TimeSlotUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<TimeSlotCreateWithoutReservationsInput, TimeSlotUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: TimeSlotCreateOrConnectWithoutReservationsInput
    upsert?: TimeSlotUpsertWithoutReservationsInput
    connect?: TimeSlotWhereUniqueInput
    update?: XOR<XOR<TimeSlotUpdateToOneWithWhereWithoutReservationsInput, TimeSlotUpdateWithoutReservationsInput>, TimeSlotUncheckedUpdateWithoutReservationsInput>
  }

  export type snsCreategoodInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSnsInput = {
    create?: XOR<UserCreateWithoutSnsInput, UserUncheckedCreateWithoutSnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnsInput
    connect?: UserWhereUniqueInput
  }

  export type snsUpdategoodInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSnsNestedInput = {
    create?: XOR<UserCreateWithoutSnsInput, UserUncheckedCreateWithoutSnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnsInput
    upsert?: UserUpsertWithoutSnsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSnsInput, UserUpdateWithoutSnsInput>, UserUncheckedUpdateWithoutSnsInput>
  }

  export type UserBadgeCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type EventCreateNestedOneWithoutBadgeInput = {
    create?: XOR<EventCreateWithoutBadgeInput, EventUncheckedCreateWithoutBadgeInput>
    connectOrCreate?: EventCreateOrConnectWithoutBadgeInput
    connect?: EventWhereUniqueInput
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedOneWithoutBadgeInput = {
    create?: XOR<EventCreateWithoutBadgeInput, EventUncheckedCreateWithoutBadgeInput>
    connectOrCreate?: EventCreateOrConnectWithoutBadgeInput
    connect?: EventWhereUniqueInput
  }

  export type UserBadgeUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type EventUpdateOneWithoutBadgeNestedInput = {
    create?: XOR<EventCreateWithoutBadgeInput, EventUncheckedCreateWithoutBadgeInput>
    connectOrCreate?: EventCreateOrConnectWithoutBadgeInput
    upsert?: EventUpsertWithoutBadgeInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutBadgeInput, EventUpdateWithoutBadgeInput>, EventUncheckedUpdateWithoutBadgeInput>
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type EventUncheckedUpdateOneWithoutBadgeNestedInput = {
    create?: XOR<EventCreateWithoutBadgeInput, EventUncheckedCreateWithoutBadgeInput>
    connectOrCreate?: EventCreateOrConnectWithoutBadgeInput
    upsert?: EventUpsertWithoutBadgeInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutBadgeInput, EventUpdateWithoutBadgeInput>, EventUncheckedUpdateWithoutBadgeInput>
  }

  export type UserCreateNestedOneWithoutBadgesInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    connect?: UserWhereUniqueInput
  }

  export type badgeListCreateNestedOneWithoutUsersInput = {
    create?: XOR<badgeListCreateWithoutUsersInput, badgeListUncheckedCreateWithoutUsersInput>
    connectOrCreate?: badgeListCreateOrConnectWithoutUsersInput
    connect?: badgeListWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBadgesNestedInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    upsert?: UserUpsertWithoutBadgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBadgesInput, UserUpdateWithoutBadgesInput>, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type badgeListUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<badgeListCreateWithoutUsersInput, badgeListUncheckedCreateWithoutUsersInput>
    connectOrCreate?: badgeListCreateOrConnectWithoutUsersInput
    upsert?: badgeListUpsertWithoutUsersInput
    connect?: badgeListWhereUniqueInput
    update?: XOR<XOR<badgeListUpdateToOneWithWhereWithoutUsersInput, badgeListUpdateWithoutUsersInput>, badgeListUncheckedUpdateWithoutUsersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventCreateWithoutHostInput = {
    eventName: string
    title: string
    description: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt: Date | string
    isDeleted?: boolean
    updatedAt?: Date | string
    timeSlots?: TimeSlotCreateNestedManyWithoutEventInput
    badge?: badgeListCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutHostInput = {
    eventId?: number
    eventName: string
    title: string
    description: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt: Date | string
    isDeleted?: boolean
    updatedAt?: Date | string
    badgeId?: number | null
    timeSlots?: TimeSlotUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutHostInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutHostInput, EventUncheckedCreateWithoutHostInput>
  }

  export type EventCreateManyHostInputEnvelope = {
    data: EventCreateManyHostInput | EventCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutUserInput = {
    status: $Enums.ReservationStatus
    reservedAt?: Date | string
    canceledAt?: Date | string | null
    timeSlot: TimeSlotCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutUserInput = {
    reservationId?: number
    timeSlotId: number
    status: $Enums.ReservationStatus
    reservedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type ReservationCreateOrConnectWithoutUserInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationCreateManyUserInputEnvelope = {
    data: ReservationCreateManyUserInput | ReservationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type snsCreateWithoutMakerInput = {
    content: string
    good?: snsCreategoodInput | string[]
    time?: Date | string
  }

  export type snsUncheckedCreateWithoutMakerInput = {
    postId?: number
    content: string
    good?: snsCreategoodInput | string[]
    time?: Date | string
  }

  export type snsCreateOrConnectWithoutMakerInput = {
    where: snsWhereUniqueInput
    create: XOR<snsCreateWithoutMakerInput, snsUncheckedCreateWithoutMakerInput>
  }

  export type snsCreateManyMakerInputEnvelope = {
    data: snsCreateManyMakerInput | snsCreateManyMakerInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeCreateWithoutUserInput = {
    badge: badgeListCreateNestedOneWithoutUsersInput
  }

  export type UserBadgeUncheckedCreateWithoutUserInput = {
    id?: number
    badgeId: number
  }

  export type UserBadgeCreateOrConnectWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeCreateManyUserInputEnvelope = {
    data: UserBadgeCreateManyUserInput | UserBadgeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutHostInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutHostInput, EventUncheckedUpdateWithoutHostInput>
    create: XOR<EventCreateWithoutHostInput, EventUncheckedCreateWithoutHostInput>
  }

  export type EventUpdateWithWhereUniqueWithoutHostInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutHostInput, EventUncheckedUpdateWithoutHostInput>
  }

  export type EventUpdateManyWithWhereWithoutHostInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutHostInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    eventId?: IntFilter<"Event"> | number
    hostId?: StringFilter<"Event"> | string
    eventName?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    startsAt?: DateTimeFilter<"Event"> | Date | string
    endsAt?: DateTimeFilter<"Event"> | Date | string
    isDeleted?: BoolFilter<"Event"> | boolean
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    badgeId?: IntNullableFilter<"Event"> | number | null
  }

  export type ReservationUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
  }

  export type ReservationUpdateManyWithWhereWithoutUserInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutUserInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    reservationId?: IntFilter<"Reservation"> | number
    userId?: StringFilter<"Reservation"> | string
    timeSlotId?: IntFilter<"Reservation"> | number
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    reservedAt?: DateTimeFilter<"Reservation"> | Date | string
    canceledAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
  }

  export type snsUpsertWithWhereUniqueWithoutMakerInput = {
    where: snsWhereUniqueInput
    update: XOR<snsUpdateWithoutMakerInput, snsUncheckedUpdateWithoutMakerInput>
    create: XOR<snsCreateWithoutMakerInput, snsUncheckedCreateWithoutMakerInput>
  }

  export type snsUpdateWithWhereUniqueWithoutMakerInput = {
    where: snsWhereUniqueInput
    data: XOR<snsUpdateWithoutMakerInput, snsUncheckedUpdateWithoutMakerInput>
  }

  export type snsUpdateManyWithWhereWithoutMakerInput = {
    where: snsScalarWhereInput
    data: XOR<snsUpdateManyMutationInput, snsUncheckedUpdateManyWithoutMakerInput>
  }

  export type snsScalarWhereInput = {
    AND?: snsScalarWhereInput | snsScalarWhereInput[]
    OR?: snsScalarWhereInput[]
    NOT?: snsScalarWhereInput | snsScalarWhereInput[]
    postId?: IntFilter<"sns"> | number
    userId?: StringFilter<"sns"> | string
    content?: StringFilter<"sns"> | string
    good?: StringNullableListFilter<"sns">
    time?: DateTimeFilter<"sns"> | Date | string
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
    create: XOR<UserBadgeCreateWithoutUserInput, UserBadgeUncheckedCreateWithoutUserInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutUserInput, UserBadgeUncheckedUpdateWithoutUserInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutUserInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBadgeScalarWhereInput = {
    AND?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    OR?: UserBadgeScalarWhereInput[]
    NOT?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    id?: IntFilter<"UserBadge"> | number
    userId?: StringFilter<"UserBadge"> | string
    badgeId?: IntFilter<"UserBadge"> | number
  }

  export type UserCreateWithoutHostEventsInput = {
    userId?: string
    password: string
    email: string
    point: number
    profile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutUserInput
    sns?: snsCreateNestedManyWithoutMakerInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHostEventsInput = {
    userId?: string
    password: string
    email: string
    point: number
    profile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    sns?: snsUncheckedCreateNestedManyWithoutMakerInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHostEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHostEventsInput, UserUncheckedCreateWithoutHostEventsInput>
  }

  export type TimeSlotCreateWithoutEventInput = {
    startAt: Date | string
    endAt: Date | string
    capacity: number
    reservations?: ReservationCreateNestedManyWithoutTimeSlotInput
  }

  export type TimeSlotUncheckedCreateWithoutEventInput = {
    timeSlotId?: number
    startAt: Date | string
    endAt: Date | string
    capacity: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutTimeSlotInput
  }

  export type TimeSlotCreateOrConnectWithoutEventInput = {
    where: TimeSlotWhereUniqueInput
    create: XOR<TimeSlotCreateWithoutEventInput, TimeSlotUncheckedCreateWithoutEventInput>
  }

  export type TimeSlotCreateManyEventInputEnvelope = {
    data: TimeSlotCreateManyEventInput | TimeSlotCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type badgeListCreateWithoutEventInput = {
    name: string
    description: string
    image: string
    users?: UserBadgeCreateNestedManyWithoutBadgeInput
  }

  export type badgeListUncheckedCreateWithoutEventInput = {
    badgeId?: number
    name: string
    description: string
    image: string
    users?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type badgeListCreateOrConnectWithoutEventInput = {
    where: badgeListWhereUniqueInput
    create: XOR<badgeListCreateWithoutEventInput, badgeListUncheckedCreateWithoutEventInput>
  }

  export type UserUpsertWithoutHostEventsInput = {
    update: XOR<UserUpdateWithoutHostEventsInput, UserUncheckedUpdateWithoutHostEventsInput>
    create: XOR<UserCreateWithoutHostEventsInput, UserUncheckedCreateWithoutHostEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHostEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHostEventsInput, UserUncheckedUpdateWithoutHostEventsInput>
  }

  export type UserUpdateWithoutHostEventsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    sns?: snsUpdateManyWithoutMakerNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHostEventsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    sns?: snsUncheckedUpdateManyWithoutMakerNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TimeSlotUpsertWithWhereUniqueWithoutEventInput = {
    where: TimeSlotWhereUniqueInput
    update: XOR<TimeSlotUpdateWithoutEventInput, TimeSlotUncheckedUpdateWithoutEventInput>
    create: XOR<TimeSlotCreateWithoutEventInput, TimeSlotUncheckedCreateWithoutEventInput>
  }

  export type TimeSlotUpdateWithWhereUniqueWithoutEventInput = {
    where: TimeSlotWhereUniqueInput
    data: XOR<TimeSlotUpdateWithoutEventInput, TimeSlotUncheckedUpdateWithoutEventInput>
  }

  export type TimeSlotUpdateManyWithWhereWithoutEventInput = {
    where: TimeSlotScalarWhereInput
    data: XOR<TimeSlotUpdateManyMutationInput, TimeSlotUncheckedUpdateManyWithoutEventInput>
  }

  export type TimeSlotScalarWhereInput = {
    AND?: TimeSlotScalarWhereInput | TimeSlotScalarWhereInput[]
    OR?: TimeSlotScalarWhereInput[]
    NOT?: TimeSlotScalarWhereInput | TimeSlotScalarWhereInput[]
    timeSlotId?: IntFilter<"TimeSlot"> | number
    eventId?: IntFilter<"TimeSlot"> | number
    startAt?: DateTimeFilter<"TimeSlot"> | Date | string
    endAt?: DateTimeFilter<"TimeSlot"> | Date | string
    capacity?: IntFilter<"TimeSlot"> | number
  }

  export type badgeListUpsertWithoutEventInput = {
    update: XOR<badgeListUpdateWithoutEventInput, badgeListUncheckedUpdateWithoutEventInput>
    create: XOR<badgeListCreateWithoutEventInput, badgeListUncheckedCreateWithoutEventInput>
    where?: badgeListWhereInput
  }

  export type badgeListUpdateToOneWithWhereWithoutEventInput = {
    where?: badgeListWhereInput
    data: XOR<badgeListUpdateWithoutEventInput, badgeListUncheckedUpdateWithoutEventInput>
  }

  export type badgeListUpdateWithoutEventInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    users?: UserBadgeUpdateManyWithoutBadgeNestedInput
  }

  export type badgeListUncheckedUpdateWithoutEventInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    users?: UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type EventCreateWithoutTimeSlotsInput = {
    eventName: string
    title: string
    description: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt: Date | string
    isDeleted?: boolean
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutHostEventsInput
    badge?: badgeListCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTimeSlotsInput = {
    eventId?: number
    hostId: string
    eventName: string
    title: string
    description: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt: Date | string
    isDeleted?: boolean
    updatedAt?: Date | string
    badgeId?: number | null
  }

  export type EventCreateOrConnectWithoutTimeSlotsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTimeSlotsInput, EventUncheckedCreateWithoutTimeSlotsInput>
  }

  export type ReservationCreateWithoutTimeSlotInput = {
    status: $Enums.ReservationStatus
    reservedAt?: Date | string
    canceledAt?: Date | string | null
    user: UserCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutTimeSlotInput = {
    reservationId?: number
    userId: string
    status: $Enums.ReservationStatus
    reservedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type ReservationCreateOrConnectWithoutTimeSlotInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutTimeSlotInput, ReservationUncheckedCreateWithoutTimeSlotInput>
  }

  export type ReservationCreateManyTimeSlotInputEnvelope = {
    data: ReservationCreateManyTimeSlotInput | ReservationCreateManyTimeSlotInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutTimeSlotsInput = {
    update: XOR<EventUpdateWithoutTimeSlotsInput, EventUncheckedUpdateWithoutTimeSlotsInput>
    create: XOR<EventCreateWithoutTimeSlotsInput, EventUncheckedCreateWithoutTimeSlotsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTimeSlotsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTimeSlotsInput, EventUncheckedUpdateWithoutTimeSlotsInput>
  }

  export type EventUpdateWithoutTimeSlotsInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostEventsNestedInput
    badge?: badgeListUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTimeSlotsInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    hostId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badgeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReservationUpsertWithWhereUniqueWithoutTimeSlotInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutTimeSlotInput, ReservationUncheckedUpdateWithoutTimeSlotInput>
    create: XOR<ReservationCreateWithoutTimeSlotInput, ReservationUncheckedCreateWithoutTimeSlotInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutTimeSlotInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutTimeSlotInput, ReservationUncheckedUpdateWithoutTimeSlotInput>
  }

  export type ReservationUpdateManyWithWhereWithoutTimeSlotInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutTimeSlotInput>
  }

  export type UserCreateWithoutReservationsInput = {
    userId?: string
    password: string
    email: string
    point: number
    profile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostEvents?: EventCreateNestedManyWithoutHostInput
    sns?: snsCreateNestedManyWithoutMakerInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    userId?: string
    password: string
    email: string
    point: number
    profile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostEvents?: EventUncheckedCreateNestedManyWithoutHostInput
    sns?: snsUncheckedCreateNestedManyWithoutMakerInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
  }

  export type TimeSlotCreateWithoutReservationsInput = {
    startAt: Date | string
    endAt: Date | string
    capacity: number
    event: EventCreateNestedOneWithoutTimeSlotsInput
  }

  export type TimeSlotUncheckedCreateWithoutReservationsInput = {
    timeSlotId?: number
    eventId: number
    startAt: Date | string
    endAt: Date | string
    capacity: number
  }

  export type TimeSlotCreateOrConnectWithoutReservationsInput = {
    where: TimeSlotWhereUniqueInput
    create: XOR<TimeSlotCreateWithoutReservationsInput, TimeSlotUncheckedCreateWithoutReservationsInput>
  }

  export type UserUpsertWithoutReservationsInput = {
    update: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateWithoutReservationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostEvents?: EventUpdateManyWithoutHostNestedInput
    sns?: snsUpdateManyWithoutMakerNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostEvents?: EventUncheckedUpdateManyWithoutHostNestedInput
    sns?: snsUncheckedUpdateManyWithoutMakerNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TimeSlotUpsertWithoutReservationsInput = {
    update: XOR<TimeSlotUpdateWithoutReservationsInput, TimeSlotUncheckedUpdateWithoutReservationsInput>
    create: XOR<TimeSlotCreateWithoutReservationsInput, TimeSlotUncheckedCreateWithoutReservationsInput>
    where?: TimeSlotWhereInput
  }

  export type TimeSlotUpdateToOneWithWhereWithoutReservationsInput = {
    where?: TimeSlotWhereInput
    data: XOR<TimeSlotUpdateWithoutReservationsInput, TimeSlotUncheckedUpdateWithoutReservationsInput>
  }

  export type TimeSlotUpdateWithoutReservationsInput = {
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutTimeSlotsNestedInput
  }

  export type TimeSlotUncheckedUpdateWithoutReservationsInput = {
    timeSlotId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutSnsInput = {
    userId?: string
    password: string
    email: string
    point: number
    profile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostEvents?: EventCreateNestedManyWithoutHostInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
    badges?: UserBadgeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSnsInput = {
    userId?: string
    password: string
    email: string
    point: number
    profile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostEvents?: EventUncheckedCreateNestedManyWithoutHostInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    badges?: UserBadgeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSnsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSnsInput, UserUncheckedCreateWithoutSnsInput>
  }

  export type UserUpsertWithoutSnsInput = {
    update: XOR<UserUpdateWithoutSnsInput, UserUncheckedUpdateWithoutSnsInput>
    create: XOR<UserCreateWithoutSnsInput, UserUncheckedCreateWithoutSnsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSnsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSnsInput, UserUncheckedUpdateWithoutSnsInput>
  }

  export type UserUpdateWithoutSnsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostEvents?: EventUpdateManyWithoutHostNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSnsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostEvents?: EventUncheckedUpdateManyWithoutHostNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    badges?: UserBadgeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserBadgeCreateWithoutBadgeInput = {
    user: UserCreateNestedOneWithoutBadgesInput
  }

  export type UserBadgeUncheckedCreateWithoutBadgeInput = {
    id?: number
    userId: string
  }

  export type UserBadgeCreateOrConnectWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeCreateManyBadgeInputEnvelope = {
    data: UserBadgeCreateManyBadgeInput | UserBadgeCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutBadgeInput = {
    eventName: string
    title: string
    description: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt: Date | string
    isDeleted?: boolean
    updatedAt?: Date | string
    host: UserCreateNestedOneWithoutHostEventsInput
    timeSlots?: TimeSlotCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutBadgeInput = {
    eventId?: number
    hostId: string
    eventName: string
    title: string
    description: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt: Date | string
    isDeleted?: boolean
    updatedAt?: Date | string
    timeSlots?: TimeSlotUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutBadgeInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutBadgeInput, EventUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutBadgeInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutBadgeInput>
  }

  export type EventUpsertWithoutBadgeInput = {
    update: XOR<EventUpdateWithoutBadgeInput, EventUncheckedUpdateWithoutBadgeInput>
    create: XOR<EventCreateWithoutBadgeInput, EventUncheckedCreateWithoutBadgeInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutBadgeInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutBadgeInput, EventUncheckedUpdateWithoutBadgeInput>
  }

  export type EventUpdateWithoutBadgeInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    host?: UserUpdateOneRequiredWithoutHostEventsNestedInput
    timeSlots?: TimeSlotUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutBadgeInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    hostId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlots?: TimeSlotUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateWithoutBadgesInput = {
    userId?: string
    password: string
    email: string
    point: number
    profile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostEvents?: EventCreateNestedManyWithoutHostInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
    sns?: snsCreateNestedManyWithoutMakerInput
  }

  export type UserUncheckedCreateWithoutBadgesInput = {
    userId?: string
    password: string
    email: string
    point: number
    profile?: string | null
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    hostEvents?: EventUncheckedCreateNestedManyWithoutHostInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    sns?: snsUncheckedCreateNestedManyWithoutMakerInput
  }

  export type UserCreateOrConnectWithoutBadgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
  }

  export type badgeListCreateWithoutUsersInput = {
    name: string
    description: string
    image: string
    event?: EventCreateNestedOneWithoutBadgeInput
  }

  export type badgeListUncheckedCreateWithoutUsersInput = {
    badgeId?: number
    name: string
    description: string
    image: string
    event?: EventUncheckedCreateNestedOneWithoutBadgeInput
  }

  export type badgeListCreateOrConnectWithoutUsersInput = {
    where: badgeListWhereUniqueInput
    create: XOR<badgeListCreateWithoutUsersInput, badgeListUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutBadgesInput = {
    update: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBadgesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type UserUpdateWithoutBadgesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostEvents?: EventUpdateManyWithoutHostNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    sns?: snsUpdateManyWithoutMakerNestedInput
  }

  export type UserUncheckedUpdateWithoutBadgesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    point?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hostEvents?: EventUncheckedUpdateManyWithoutHostNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    sns?: snsUncheckedUpdateManyWithoutMakerNestedInput
  }

  export type badgeListUpsertWithoutUsersInput = {
    update: XOR<badgeListUpdateWithoutUsersInput, badgeListUncheckedUpdateWithoutUsersInput>
    create: XOR<badgeListCreateWithoutUsersInput, badgeListUncheckedCreateWithoutUsersInput>
    where?: badgeListWhereInput
  }

  export type badgeListUpdateToOneWithWhereWithoutUsersInput = {
    where?: badgeListWhereInput
    data: XOR<badgeListUpdateWithoutUsersInput, badgeListUncheckedUpdateWithoutUsersInput>
  }

  export type badgeListUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneWithoutBadgeNestedInput
  }

  export type badgeListUncheckedUpdateWithoutUsersInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    event?: EventUncheckedUpdateOneWithoutBadgeNestedInput
  }

  export type EventCreateManyHostInput = {
    eventId?: number
    eventName: string
    title: string
    description: string
    createdAt?: Date | string
    startsAt: Date | string
    endsAt: Date | string
    isDeleted?: boolean
    updatedAt?: Date | string
    badgeId?: number | null
  }

  export type ReservationCreateManyUserInput = {
    reservationId?: number
    timeSlotId: number
    status: $Enums.ReservationStatus
    reservedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type snsCreateManyMakerInput = {
    postId?: number
    content: string
    good?: snsCreategoodInput | string[]
    time?: Date | string
  }

  export type UserBadgeCreateManyUserInput = {
    id?: number
    badgeId: number
  }

  export type EventUpdateWithoutHostInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlots?: TimeSlotUpdateManyWithoutEventNestedInput
    badge?: badgeListUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutHostInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    eventName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badgeId?: NullableIntFieldUpdateOperationsInput | number | null
    timeSlots?: TimeSlotUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutHostInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    eventName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badgeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReservationUpdateWithoutUserInput = {
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSlot?: TimeSlotUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutUserInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    timeSlotId?: IntFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservationUncheckedUpdateManyWithoutUserInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    timeSlotId?: IntFieldUpdateOperationsInput | number
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type snsUpdateWithoutMakerInput = {
    content?: StringFieldUpdateOperationsInput | string
    good?: snsUpdategoodInput | string[]
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type snsUncheckedUpdateWithoutMakerInput = {
    postId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    good?: snsUpdategoodInput | string[]
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type snsUncheckedUpdateManyWithoutMakerInput = {
    postId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    good?: snsUpdategoodInput | string[]
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUpdateWithoutUserInput = {
    badge?: badgeListUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
  }

  export type UserBadgeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    badgeId?: IntFieldUpdateOperationsInput | number
  }

  export type TimeSlotCreateManyEventInput = {
    timeSlotId?: number
    startAt: Date | string
    endAt: Date | string
    capacity: number
  }

  export type TimeSlotUpdateWithoutEventInput = {
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUpdateManyWithoutTimeSlotNestedInput
  }

  export type TimeSlotUncheckedUpdateWithoutEventInput = {
    timeSlotId?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutTimeSlotNestedInput
  }

  export type TimeSlotUncheckedUpdateManyWithoutEventInput = {
    timeSlotId?: IntFieldUpdateOperationsInput | number
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateManyTimeSlotInput = {
    reservationId?: number
    userId: string
    status: $Enums.ReservationStatus
    reservedAt?: Date | string
    canceledAt?: Date | string | null
  }

  export type ReservationUpdateWithoutTimeSlotInput = {
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutTimeSlotInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservationUncheckedUpdateManyWithoutTimeSlotInput = {
    reservationId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    reservedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserBadgeCreateManyBadgeInput = {
    id?: number
    userId: string
  }

  export type UserBadgeUpdateWithoutBadgeInput = {
    user?: UserUpdateOneRequiredWithoutBadgesNestedInput
  }

  export type UserBadgeUncheckedUpdateWithoutBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}