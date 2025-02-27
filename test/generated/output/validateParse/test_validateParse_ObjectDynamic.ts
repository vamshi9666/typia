import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_validateParse_ObjectDynamic = _test_validateParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) =>
        ((input: string): typia.IValidation<typia.Primitive<ObjectDynamic>> => {
            const validate = (input: any): typia.IValidation<ObjectDynamic> => {
                const errors = [] as any[];
                const $report = (typia.validateParse as any).report(errors);
                const $join = (typia.validateParse as any).join;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectDynamic => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            false === _exceptionable ||
                                Object.keys(input)
                                    .map((key) => {
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        if (RegExp(/(.*)/).test(key))
                                            return (
                                                "string" === typeof value ||
                                                ("number" === typeof value &&
                                                    Number.isFinite(value)) ||
                                                "boolean" === typeof value ||
                                                $report(_exceptionable, {
                                                    path: _path + $join(key),
                                                    expected:
                                                        "(boolean | number | string)",
                                                    value: value,
                                                })
                                            );
                                        return true;
                                    })
                                    .every((flag: boolean) => flag),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Resolve<ObjectDynamic>",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectDynamic>",
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
        })(input),
    ObjectDynamic.SPOILERS,
);
