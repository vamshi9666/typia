import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TagType } from "../../../structures/TagType";

export const test_validate_TagType = _test_validate(
    "TagType",
    TagType.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<TagType.Type>> => {
            const errors = [] as any[];
            const $report = (typia.validate as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is Array<TagType.Type> => {
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
        })(input),
    TagType.SPOILERS,
);
