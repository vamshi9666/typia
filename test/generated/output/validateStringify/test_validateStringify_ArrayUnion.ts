import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_validateStringify_ArrayUnion = _test_validateStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((input: Array<ArrayUnion.IUnion>): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<Array<ArrayUnion.IUnion>> => {
                const errors = [] as any[];
                const $report = (typia.validateStringify as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<ArrayUnion.IUnion> => {
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Array<boolean> | Array<number> | Array<string>)>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((Array.isArray(elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Array<boolean> | Array<number> | Array<string>)",
                                                value: elem,
                                            })) &&
                                            (() => {
                                                if (0 === elem.length)
                                                    return true;
                                                const tupleList = [
                                                    [
                                                        (top: any) =>
                                                            "string" ===
                                                            typeof top,
                                                        (top: any) =>
                                                            top
                                                                .map(
                                                                    (
                                                                        elem: any,
                                                                        _index2: number,
                                                                    ) =>
                                                                        "string" ===
                                                                            typeof elem ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][" +
                                                                                    _index2 +
                                                                                    "]",
                                                                                expected:
                                                                                    "string",
                                                                                value: elem,
                                                                            },
                                                                        ),
                                                                )
                                                                .every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                    ],
                                                    [
                                                        (top: any) =>
                                                            "boolean" ===
                                                            typeof top,
                                                        (top: any) =>
                                                            top
                                                                .map(
                                                                    (
                                                                        elem: any,
                                                                        _index2: number,
                                                                    ) =>
                                                                        "boolean" ===
                                                                            typeof elem ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][" +
                                                                                    _index2 +
                                                                                    "]",
                                                                                expected:
                                                                                    "boolean",
                                                                                value: elem,
                                                                            },
                                                                        ),
                                                                )
                                                                .every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                    ],
                                                    [
                                                        (top: any) =>
                                                            "number" ===
                                                                typeof top &&
                                                            Number.isFinite(
                                                                top,
                                                            ),
                                                        (top: any) =>
                                                            top
                                                                .map(
                                                                    (
                                                                        elem: any,
                                                                        _index2: number,
                                                                    ) =>
                                                                        ("number" ===
                                                                            typeof elem &&
                                                                            Number.isFinite(
                                                                                elem,
                                                                            )) ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][" +
                                                                                    _index2 +
                                                                                    "]",
                                                                                expected:
                                                                                    "number",
                                                                                value: elem,
                                                                            },
                                                                        ),
                                                                )
                                                                .every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                    ],
                                                ];
                                                const front = elem[0];
                                                const filtered =
                                                    tupleList.filter(
                                                        (tuple) =>
                                                            true ===
                                                            tuple[0](front),
                                                    );
                                                if (1 === filtered.length)
                                                    return filtered[0][1](elem);
                                                const array = elem;
                                                if (1 < filtered.length)
                                                    for (const tuple of filtered)
                                                        if (
                                                            array.every(
                                                                (value: any) =>
                                                                    true ===
                                                                    tuple[0](
                                                                        value,
                                                                    ),
                                                            )
                                                        )
                                                            return tuple[1](
                                                                array,
                                                            );
                                                return $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(Array<string> | Array<boolean> | Array<number>)",
                                                    value: elem,
                                                });
                                            })()) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Array<boolean> | Array<number> | Array<string>)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<(Array<boolean> | Array<number> | Array<string>)>",
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
            const stringify = (input: Array<ArrayUnion.IUnion>): string => {
                const $string = (typia.validateStringify as any).string;
                const $number = (typia.validateStringify as any).number;
                const $throws = (typia.validateStringify as any).throws;
                return `[${input
                    .map((elem: any) =>
                        (() => {
                            if (0 === elem.length) return "[]";
                            const tupleList = [
                                [
                                    (top: any) => "string" === typeof top,
                                    (top: any) =>
                                        `[${top
                                            .map((elem: any) => $string(elem))
                                            .join(",")}]`,
                                ],
                                [
                                    (top: any) => "boolean" === typeof top,
                                    (top: any) =>
                                        `[${top
                                            .map((elem: any) => elem)
                                            .join(",")}]`,
                                ],
                                [
                                    (top: any) => "number" === typeof top,
                                    (top: any) =>
                                        `[${top
                                            .map((elem: any) => $number(elem))
                                            .join(",")}]`,
                                ],
                            ];
                            const front = elem[0];
                            const filtered = tupleList.filter(
                                (tuple) => true === tuple[0](front),
                            );
                            if (1 === filtered.length)
                                return filtered[0][1](elem);
                            const array = elem;
                            if (1 < filtered.length)
                                for (const tuple of filtered)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === tuple[0](value),
                                        )
                                    )
                                        return tuple[1](array);
                            $throws({
                                expected:
                                    "(Array<string> | Array<boolean> | Array<number>)",
                                value: elem,
                            });
                        })(),
                    )
                    .join(",")}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    ArrayUnion.SPOILERS,
);
