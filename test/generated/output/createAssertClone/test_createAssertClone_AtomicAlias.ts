import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_createAssertClone_AtomicAlias = _test_assertClone(
    "AtomicAlias",
    AtomicAlias.generate,
    (input: any): typia.Primitive<AtomicAlias> => {
        const assert = (input: any): AtomicAlias => {
            const $guard = (typia.createAssertClone as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is AtomicAlias => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "[boolean, number, string]",
                            value: input,
                        })) &&
                    (input.length === 3 ||
                        $guard(true, {
                            path: _path + "",
                            expected: "[boolean, number, string]",
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
                    ("string" === typeof input[2] ||
                        $guard(true, {
                            path: _path + "[2]",
                            expected: "string",
                            value: input[2],
                        }))
                );
            })(input, "$input", true);
            return input;
        };
        const clone = (input: AtomicAlias): typia.Primitive<AtomicAlias> => {
            return Array.isArray(input) &&
                input.length === 3 &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                "string" === typeof input[2]
                ? ([input[0] as any, input[1] as any, input[2] as any] as any)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    AtomicAlias.SPOILERS,
);
