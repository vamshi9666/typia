import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_assert_TupleRestObject = _test_assert(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) =>
        ((input: any): [boolean, number, ...TupleRestObject.IObject[]] => {
            const $guard = (typia.assert as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is [boolean, number, ...TupleRestObject.IObject[]] => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.value ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "string",
                        value: input.value,
                    });
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "[boolean, number, ...Resolve<TupleRestObject.IObject>]",
                            value: input,
                        })) &&
                    ("boolean" === typeof input[0] ||
                        $guard(true, {
                            path: _path + "[0]",
                            expected: "boolean",
                            value: input[0],
                        })) &&
                    (("number" === typeof input[1] &&
                        Number.isFinite(input[1])) ||
                        $guard(true, {
                            path: _path + "[1]",
                            expected: "number",
                            value: input[1],
                        })) &&
                    (Array.isArray(input.slice(2)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<Resolve<TupleRestObject.IObject>>",
                            value: input.slice(2),
                        })) &&
                    input.slice(2).every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + (2 + _index1) + "]",
                                    expected:
                                        "Resolve<TupleRestObject.IObject>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + (2 + _index1) + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        })(input),
    TupleRestObject.SPOILERS,
);
