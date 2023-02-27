import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_createValidateParse_ObjectGenericAlias = _test_validateParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (
        input: string,
    ): typia.IValidation<
        typia.Primitive<ObjectGenericAlias.ISomething<string>>
    > => {
        const validate = (
            input: any,
        ): typia.IValidation<ObjectGenericAlias.Alias> => {
            const errors = [] as any[];
            const $report = (typia.createValidateParse as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectGenericAlias.Alias => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.value ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected: "string",
                                value: input.value,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectGenericAlias.Alias>",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<ObjectGenericAlias.Alias>",
                        value: input,
                    })
                );
            })(input, "$input", true);
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        input = JSON.parse(input);
        const output = validate(input);
        return output;
    },
    ObjectGenericAlias.SPOILERS,
);