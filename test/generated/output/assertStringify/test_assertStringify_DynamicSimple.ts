import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_assertStringify_DynamicSimple = _test_assertStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) =>
        ((input: any): string => {
            const assert = (input: any): DynamicSimple => {
                const $guard = (typia.assertStringify as any).guard;
                const $join = (typia.assertStringify as any).join;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is DynamicSimple => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    ("number" === typeof value &&
                                        Number.isFinite(value)) ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "number",
                                        value: value,
                                    })
                                );
                            return true;
                        });
                    return (
                        (("object" === typeof input &&
                            null !== input &&
                            false === Array.isArray(input)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Resolve<DynamicSimple>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: DynamicSimple): string => {
                const $join = (typia.assertStringify as any).join;
                const $number = (typia.assertStringify as any).number;
                const $so0 = (input: any): any =>
                    `{${Object.entries(input)
                        .map(([key, value]: [string, any]) => {
                            if (undefined === value) return "";
                            return `${JSON.stringify(key)}:${$number(value)}`;
                        })
                        .filter((str) => "" !== str)
                        .join(",")}}`;
                return $so0(input);
            };
            return stringify(assert(input));
        })(input),
    DynamicSimple.SPOILERS,
);
