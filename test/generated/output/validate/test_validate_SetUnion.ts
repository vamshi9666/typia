import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { SetUnion } from "../../../structures/SetUnion";

export const test_validate_SetUnion = _test_validate(
    "SetUnion",
    SetUnion.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<SetUnion.Union>> => {
            const errors = [] as any[];
            const $report = (typia.validate as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is Array<SetUnion.Union> => {
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
                        ("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                            $report(_exceptionable, {
                                path: _path + ".age",
                                expected: "number",
                                value: input.age,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<(Set<Array<number>> | Set<Resolve<SetUnion.Person>> | Set<boolean> | Set<number> | Set<string>)>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((elem instanceof Set ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Set<Array<number>> | Set<Resolve<SetUnion.Person>> | Set<boolean> | Set<number> | Set<string>)",
                                            value: elem,
                                        })) &&
                                        (() => {
                                            if (0 === elem.size) return true;
                                            const tupleList = [
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
                                                        Number.isFinite(top),
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
                                                [
                                                    (top: any) =>
                                                        "string" === typeof top,
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
                                                        Array.isArray(top) &&
                                                        top
                                                            .map(
                                                                (
                                                                    elem: any,
                                                                    _index3: number,
                                                                ) =>
                                                                    "number" ===
                                                                        typeof elem &&
                                                                    Number.isFinite(
                                                                        elem,
                                                                    ),
                                                            )
                                                            .every(
                                                                (
                                                                    flag: boolean,
                                                                ) => flag,
                                                            ),
                                                    (top: any) =>
                                                        top
                                                            .map(
                                                                (
                                                                    elem: any,
                                                                    _index2: number,
                                                                ) =>
                                                                    ((Array.isArray(
                                                                        elem,
                                                                    ) ||
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
                                                                                    "Array<number>",
                                                                                value: elem,
                                                                            },
                                                                        )) &&
                                                                        elem
                                                                            .map(
                                                                                (
                                                                                    elem: any,
                                                                                    _index4: number,
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
                                                                                                "][" +
                                                                                                _index4 +
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
                                                                                ) =>
                                                                                    flag,
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
                                                                                "Array<number>",
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
                                                        "object" ===
                                                            typeof top &&
                                                        null !== top &&
                                                        $vo0(
                                                            top,
                                                            _path + "[0]",
                                                            false,
                                                        ),
                                                    (top: any) =>
                                                        top
                                                            .map(
                                                                (
                                                                    elem: any,
                                                                    _index2: number,
                                                                ) =>
                                                                    ((("object" ===
                                                                        typeof elem &&
                                                                        null !==
                                                                            elem) ||
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
                                                                                    "Resolve<SetUnion.Person>",
                                                                                value: elem,
                                                                            },
                                                                        )) &&
                                                                        $vo0(
                                                                            elem,
                                                                            _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index2 +
                                                                                "]",
                                                                            true,
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
                                                                                "Resolve<SetUnion.Person>",
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
                                            const front = elem
                                                .values()
                                                .next().value;
                                            const filtered = tupleList.filter(
                                                (tuple) =>
                                                    true === tuple[0](front),
                                            );
                                            if (1 === filtered.length)
                                                return filtered[0][1]([
                                                    ...elem,
                                                ]);
                                            const array = [...elem];
                                            if (1 < filtered.length)
                                                for (const tuple of filtered)
                                                    if (
                                                        array.every(
                                                            (value: any) =>
                                                                true ===
                                                                tuple[0](value),
                                                        )
                                                    )
                                                        return tuple[1](array);
                                            return $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Set<boolean> | Set<number> | Set<string> | Set<Array<number>> | Set<Resolve<SetUnion.Person>>)",
                                                value: elem,
                                            });
                                        })()) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Set<Array<number>> | Set<Resolve<SetUnion.Person>> | Set<boolean> | Set<number> | Set<string>)",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "Array<(Set<Array<number>> | Set<Resolve<SetUnion.Person>> | Set<boolean> | Set<number> | Set<string>)>",
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
    SetUnion.SPOILERS,
);
