import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_createAssert_ToJsonTuple = _test_assert(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input: any): ToJsonTuple => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ToJsonTuple => {
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
            const $ao1 = (
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
            const $ao2 = (
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
            const $ao3 = (
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
                            "[Resolve<ToJsonTuple.IToJson<string>>, Resolve<ToJsonTuple.IToJson<number>>, Resolve<ToJsonTuple.IToJson<boolean>>, Resolve<ToJsonTuple.IObject>]",
                        value: input,
                    })) &&
                (input.length === 4 ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "[Resolve<ToJsonTuple.IToJson<string>>, Resolve<ToJsonTuple.IToJson<number>>, Resolve<ToJsonTuple.IToJson<boolean>>, Resolve<ToJsonTuple.IObject>]",
                        value: input,
                    })) &&
                (("object" === typeof input[0] && null !== input[0]) ||
                    $guard(true, {
                        path: _path + "[0]",
                        expected: "Resolve<ToJsonTuple.IToJson<string>>",
                        value: input[0],
                    })) &&
                $ao0(input[0], _path + "[0]", true) &&
                (("object" === typeof input[1] && null !== input[1]) ||
                    $guard(true, {
                        path: _path + "[1]",
                        expected: "Resolve<ToJsonTuple.IToJson<number>>",
                        value: input[1],
                    })) &&
                $ao1(input[1], _path + "[1]", true) &&
                (("object" === typeof input[2] && null !== input[2]) ||
                    $guard(true, {
                        path: _path + "[2]",
                        expected: "Resolve<ToJsonTuple.IToJson<boolean>>",
                        value: input[2],
                    })) &&
                $ao2(input[2], _path + "[2]", true) &&
                (("object" === typeof input[3] && null !== input[3]) ||
                    $guard(true, {
                        path: _path + "[3]",
                        expected: "Resolve<ToJsonTuple.IObject>",
                        value: input[3],
                    })) &&
                $ao3(input[3], _path + "[3]", true)
            );
        })(input, "$input", true);
        return input;
    },
);
