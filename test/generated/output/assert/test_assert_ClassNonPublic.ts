import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_assert_ClassNonPublic = _test_assert(
    "ClassNonPublic",
    ClassNonPublic.generate,
    (input) =>
        ((input: any): ClassNonPublic.Accessor => {
            const $guard = (typia.assert as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ClassNonPublic.Accessor => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.implicit ||
                        $guard(_exceptionable, {
                            path: _path + ".implicit",
                            expected: "string",
                            value: input.implicit,
                        })) &&
                    ("string" === typeof input.shown ||
                        $guard(_exceptionable, {
                            path: _path + ".shown",
                            expected: "string",
                            value: input.shown,
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<ClassNonPublic.Accessor>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        })(input),
    ClassNonPublic.SPOILERS,
);
