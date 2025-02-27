import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_createValidateEquals_TagObjectUnion = _test_validateEquals(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input: any): typia.IValidation<TagObjectUnion> => {
        const errors = [] as any[];
        const $report = (typia.createValidateEquals as any).report(errors);
        const $join = (typia.createValidateEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagObjectUnion => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        }),
                    1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (["value"].some((prop) => key === prop))
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
            const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "string",
                            value: input.value,
                        }),
                    1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (["value"].some((prop) => key === prop))
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
            const $vu0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if ("number" === typeof input.value)
                        return $vo0(input, _path, true && _exceptionable);
                    if ("string" === typeof input.value)
                        return $vo1(input, _path, true && _exceptionable);
                    return $report(_exceptionable, {
                        path: _path,
                        expected:
                            "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
                        value: input,
                    });
                })();
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "Array<(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)",
                                        value: elem,
                                    })) &&
                                    $vu0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $report(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected:
                        "Array<(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)>",
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
