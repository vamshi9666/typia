import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_createValidateClone_ClassGetter = _test_validateClone(
    "ClassGetter",
    ClassGetter.generate,
    (input: any): typia.IValidation<typia.Primitive<ClassGetter>> => {
        const validate = (input: any): typia.IValidation<ClassGetter> => {
            const errors = [] as any[];
            const $report = (typia.createValidateClone as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ClassGetter => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.id ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        null === input.dead ||
                            "boolean" === typeof input.dead ||
                            $report(_exceptionable, {
                                path: _path + ".dead",
                                expected: "(boolean | null)",
                                value: input.dead,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<ClassGetter.Person>",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<ClassGetter.Person>",
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
        const clone = (input: ClassGetter): typia.Primitive<ClassGetter> => {
            const $co0 = (input: any): any => ({
                id: input.id as any,
                name: input.name as any,
                dead: input.dead as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = clone(input);
        return output;
    },
    ClassGetter.SPOILERS,
);
