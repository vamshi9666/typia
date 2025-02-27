import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_assertClone_ToJsonAtomicUnion = _test_assertClone(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<ToJsonAtomicUnion.IToJson>> => {
            const assert = (input: any): Array<ToJsonAtomicUnion.IToJson> => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<ToJsonAtomicUnion.IToJson> => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        "function" === typeof input.toJSON ||
                        $guard(_exceptionable, {
                            path: _path + ".toJSON",
                            expected: "unknown",
                            value: input.toJSON,
                        });
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "Array<Resolve<ToJsonAtomicUnion.IToJson>>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "Resolve<ToJsonAtomicUnion.IToJson>",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            const clone = (
                input: Array<ToJsonAtomicUnion.IToJson>,
            ): typia.Primitive<Array<ToJsonAtomicUnion.IToJson>> => {
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          "object" === typeof elem &&
                          null !== elem &&
                          "function" === typeof elem.toJSON
                              ? (elem.toJSON() as any)
                              : (elem as any),
                      )
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
);
