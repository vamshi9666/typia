import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_createAssert_ObjectLiteralType = _test_assert(
    "ObjectLiteralType",
    ObjectLiteralType.generate,
    (input: any): ObjectLiteralType => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectLiteralType => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.id ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "string",
                        value: input.id,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                (("number" === typeof input.age &&
                    Number.isFinite(input.age)) ||
                    $guard(_exceptionable, {
                        path: _path + ".age",
                        expected: "number",
                        value: input.age,
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<__object>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
    ObjectLiteralType.SPOILERS,
);
