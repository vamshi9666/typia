import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_createAssertParse_ArrayAny = _test_assertParse(
    "ArrayAny",
    ArrayAny.generate,
    (input: string): typia.Primitive<ArrayAny> => {
        const assert = (input: any): ArrayAny => {
            const $guard = (typia.createAssertParse as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayAny => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input.anys) ||
                        $guard(_exceptionable, {
                            path: _path + ".anys",
                            expected: "Array<any>",
                            value: input.anys,
                        })) &&
                    (undefined === input.undefindable1 ||
                        Array.isArray(input.undefindable1) ||
                        $guard(_exceptionable, {
                            path: _path + ".undefindable1",
                            expected: "(Array<any> | undefined)",
                            value: input.undefindable1,
                        })) &&
                    (undefined === input.undefindable2 ||
                        Array.isArray(input.undefindable2) ||
                        $guard(_exceptionable, {
                            path: _path + ".undefindable2",
                            expected: "(Array<any> | undefined)",
                            value: input.undefindable2,
                        })) &&
                    (null === input.nullables1 ||
                        Array.isArray(input.nullables1) ||
                        $guard(_exceptionable, {
                            path: _path + ".nullables1",
                            expected: "(Array<any> | null)",
                            value: input.nullables1,
                        })) &&
                    (null === input.nullables2 ||
                        Array.isArray(input.nullables2) ||
                        $guard(_exceptionable, {
                            path: _path + ".nullables2",
                            expected: "(Array<any> | null)",
                            value: input.nullables2,
                        })) &&
                    (null === input.both1 ||
                        undefined === input.both1 ||
                        Array.isArray(input.both1) ||
                        $guard(_exceptionable, {
                            path: _path + ".both1",
                            expected: "(Array<any> | null | undefined)",
                            value: input.both1,
                        })) &&
                    (null === input.both2 ||
                        undefined === input.both2 ||
                        Array.isArray(input.both2) ||
                        $guard(_exceptionable, {
                            path: _path + ".both2",
                            expected: "(Array<any> | null | undefined)",
                            value: input.both2,
                        })) &&
                    (null === input.both3 ||
                        undefined === input.both3 ||
                        Array.isArray(input.both3) ||
                        $guard(_exceptionable, {
                            path: _path + ".both3",
                            expected: "(Array<any> | null | undefined)",
                            value: input.both3,
                        })) &&
                    (Array.isArray(input.union) ||
                        $guard(_exceptionable, {
                            path: _path + ".union",
                            expected: "Array<any>",
                            value: input.union,
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<ArrayAny>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        input = JSON.parse(input);
        return assert(input);
    },
    ArrayAny.SPOILERS,
);
