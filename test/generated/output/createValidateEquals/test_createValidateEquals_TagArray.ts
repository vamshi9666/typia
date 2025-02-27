import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TagArray } from "../../../structures/TagArray";

export const test_createValidateEquals_TagArray = _test_validateEquals(
    "TagArray",
    TagArray.generate,
    (input: any): typia.IValidation<TagArray> => {
        const errors = [] as any[];
        const $report = (typia.createValidateEquals as any).report(errors);
        const $is_uuid = (typia.createValidateEquals as any).is_uuid;
        const $join = (typia.createValidateEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagArray => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    (((Array.isArray(input.items) &&
                        3 === input.items.length) ||
                        $report(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<string>",
                            value: input.items,
                        })) &&
                        input.items
                            .map(
                                (elem: any, _index2: number) =>
                                    ("string" === typeof elem &&
                                        true === $is_uuid(elem)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".items[" + _index2 + "]",
                                        expected: "string",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<string>",
                            value: input.items,
                        }),
                    (((Array.isArray(input.minItems) &&
                        3 <= input.minItems.length) ||
                        $report(_exceptionable, {
                            path: _path + ".minItems",
                            expected: "Array<number>",
                            value: input.minItems,
                        })) &&
                        input.minItems
                            .map(
                                (elem: any, _index3: number) =>
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem) &&
                                        3 <= elem) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            ".minItems[" +
                                            _index3 +
                                            "]",
                                        expected: "number",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(_exceptionable, {
                            path: _path + ".minItems",
                            expected: "Array<number>",
                            value: input.minItems,
                        }),
                    (((Array.isArray(input.maxItems) &&
                        7 >= input.maxItems.length) ||
                        $report(_exceptionable, {
                            path: _path + ".maxItems",
                            expected: "Array<(number | string)>",
                            value: input.maxItems,
                        })) &&
                        input.maxItems
                            .map(
                                (elem: any, _index4: number) =>
                                    ("string" === typeof elem &&
                                        7 >= elem.length) ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem) &&
                                        7 >= elem) ||
                                    $report(_exceptionable, {
                                        path:
                                            _path +
                                            ".maxItems[" +
                                            _index4 +
                                            "]",
                                        expected: "(number | string)",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(_exceptionable, {
                            path: _path + ".maxItems",
                            expected: "Array<(number | string)>",
                            value: input.maxItems,
                        }),
                    (((Array.isArray(input.both) &&
                        3 <= input.both.length &&
                        7 >= input.both.length) ||
                        $report(_exceptionable, {
                            path: _path + ".both",
                            expected: "Array<string>",
                            value: input.both,
                        })) &&
                        input.both
                            .map(
                                (elem: any, _index5: number) =>
                                    ("string" === typeof elem &&
                                        true === $is_uuid(elem)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".both[" + _index5 + "]",
                                        expected: "string",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(_exceptionable, {
                            path: _path + ".both",
                            expected: "Array<string>",
                            value: input.both,
                        }),
                    4 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    [
                                        "items",
                                        "minItems",
                                        "maxItems",
                                        "both",
                                    ].some((prop) => key === prop)
                                )
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $report(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TagArray.Type>>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "Resolve<TagArray.Type>",
                                        value: elem,
                                    })) &&
                                    $vo0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $report(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<TagArray.Type>",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Array<Resolve<TagArray.Type>>",
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
    },
);
