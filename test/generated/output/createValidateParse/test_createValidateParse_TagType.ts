import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { TagType } from "../../../structures/TagType";

export const test_createValidateParse_TagType = _test_validateParse(
    "TagType",
    TagType.generate,
    (input: string): typia.IValidation<typia.Primitive<TagType>> => {
        const validate = (input: any): typia.IValidation<TagType> => {
            const errors = [] as any[];
            const $report = (typia.createValidateParse as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagType => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.int &&
                            Number.isFinite(input.int) &&
                            parseInt(input.int) === input.int) ||
                            $report(_exceptionable, {
                                path: _path + ".int",
                                expected: "number",
                                value: input.int,
                            }),
                        ("number" === typeof input.uint &&
                            Number.isFinite(input.uint) &&
                            parseInt(input.uint) === input.uint &&
                            0 <= input.uint) ||
                            $report(_exceptionable, {
                                path: _path + ".uint",
                                expected: "number",
                                value: input.uint,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<Resolve<TagType.Type>>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "Resolve<TagType.Type>",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "Resolve<TagType.Type>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TagType.Type>>",
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
    TagType.SPOILERS,
);
