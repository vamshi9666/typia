import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_assertPrune_TemplateConstant = _test_assertPrune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) =>
        ((input: any): Array<TemplateConstant.Type> => {
            const assert = (input: any): Array<TemplateConstant.Type> => {
                const $guard = (typia.assertPrune as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<TemplateConstant.Type> => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("prefix_A" === input.prefix ||
                            "prefix_B" === input.prefix ||
                            "prefix_C" === input.prefix ||
                            $guard(_exceptionable, {
                                path: _path + ".prefix",
                                expected:
                                    '("prefix_A" | "prefix_B" | "prefix_C")',
                                value: input.prefix,
                            })) &&
                        ("1_postfix" === input.postfix ||
                            "3_postfix" === input.postfix ||
                            "2_postfix" === input.postfix ||
                            $guard(_exceptionable, {
                                path: _path + ".postfix",
                                expected:
                                    '("1_postfix" | "2_postfix" | "3_postfix")',
                                value: input.postfix,
                            })) &&
                        ("the_1_value_with_label_A" === input.combined ||
                            "the_1_value_with_label_B" === input.combined ||
                            "the_1_value_with_label_C" === input.combined ||
                            "the_3_value_with_label_A" === input.combined ||
                            "the_3_value_with_label_B" === input.combined ||
                            "the_3_value_with_label_C" === input.combined ||
                            "the_2_value_with_label_A" === input.combined ||
                            "the_2_value_with_label_B" === input.combined ||
                            "the_2_value_with_label_C" === input.combined ||
                            $guard(_exceptionable, {
                                path: _path + ".combined",
                                expected:
                                    '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                                value: input.combined,
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "Array<Resolve<TemplateConstant.Type>>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "Resolve<TemplateConstant.Type>",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            const prune = (input: Array<TemplateConstant.Type>): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "prefix" === key ||
                            "postfix" === key ||
                            "combined" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    TemplateConstant.SPOILERS,
);
