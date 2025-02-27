import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";

export const test_createAssert_FunctionalPropertyUnion = _test_assert(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input: any): FunctionalPropertyUnion => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is FunctionalPropertyUnion => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                (null === input.closure ||
                    undefined === input.closure ||
                    "function" === typeof input.closure ||
                    "string" === typeof input.closure ||
                    ("number" === typeof input.closure &&
                        Number.isFinite(input.closure)) ||
                    $guard(_exceptionable, {
                        path: _path + ".closure",
                        expected: "(null | number | string | undefined)",
                        value: input.closure,
                    }));
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "Array<Resolve<FunctionalPropertyUnion.IUnion>>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    "Resolve<FunctionalPropertyUnion.IUnion>",
                                value: elem,
                            })) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
    FunctionalPropertyUnion.SPOILERS,
);
