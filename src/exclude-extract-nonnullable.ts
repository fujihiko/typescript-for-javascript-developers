export{};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// 除外する
type FunctionType = Exclude<SomeTypes, string | number>;
type NomFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// 抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// null, undefinedを削除
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>

