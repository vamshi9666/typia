import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { MapUnion } from "../../../structures/MapUnion";

export const test_createValidateStringify_MapUnion = _test_validateStringify(
    "MapUnion",
    MapUnion.generate,
    (input: MapUnion): typia.IValidation<string> => {
        const validate = (input: any): typia.IValidation<MapUnion> => {
            const errors = [] as any[];
            const $report = (typia.createValidateStringify as any).report(
                errors,
            );
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is MapUnion => {
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
                                "Array<(Map<Array<number>, number> | Map<Resolve<MapUnion.Person>, number> | Map<boolean, number> | Map<number, number> | Map<string, number>)>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((elem instanceof Map ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Map<Array<number>, number> | Map<Resolve<MapUnion.Person>, number> | Map<boolean, number> | Map<number, number> | Map<string, number>)",
                                            value: elem,
                                        })) &&
                                        (() => {
                                            if (0 === elem.size) return true;
                                            const tupleList = [
                                                [
                                                    (top: any) =>
                                                        "boolean" ===
                                                            typeof top[0] &&
                                                        "number" ===
                                                            typeof top[1] &&
                                                        Number.isFinite(top[1]),
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
                                                                                    "[boolean, number]",
                                                                                value: elem,
                                                                            },
                                                                        )) &&
                                                                        (elem.length ===
                                                                            2 ||
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
                                                                                        "[boolean, number]",
                                                                                    value: elem,
                                                                                },
                                                                            )) &&
                                                                        [
                                                                            "boolean" ===
                                                                                typeof elem[0] ||
                                                                                $report(
                                                                                    true,
                                                                                    {
                                                                                        path:
                                                                                            _path +
                                                                                            "[" +
                                                                                            _index1 +
                                                                                            "][" +
                                                                                            _index2 +
                                                                                            "][0]",
                                                                                        expected:
                                                                                            "boolean",
                                                                                        value: elem[0],
                                                                                    },
                                                                                ),
                                                                            ("number" ===
                                                                                typeof elem[1] &&
                                                                                Number.isFinite(
                                                                                    elem[1],
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
                                                                                            "][1]",
                                                                                        expected:
                                                                                            "number",
                                                                                        value: elem[1],
                                                                                    },
                                                                                ),
                                                                        ].every(
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
                                                                                "[boolean, number]",
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
                                                            typeof top[0] &&
                                                        Number.isFinite(
                                                            top[0],
                                                        ) &&
                                                        "number" ===
                                                            typeof top[1] &&
                                                        Number.isFinite(top[1]),
                                                    (top: any) =>
                                                        top
                                                            .map(
                                                                (
                                                                    elem: any,
                                                                    _index3: number,
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
                                                                                    _index3 +
                                                                                    "]",
                                                                                expected:
                                                                                    "[number, number]",
                                                                                value: elem,
                                                                            },
                                                                        )) &&
                                                                        (elem.length ===
                                                                            2 ||
                                                                            $report(
                                                                                true,
                                                                                {
                                                                                    path:
                                                                                        _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index3 +
                                                                                        "]",
                                                                                    expected:
                                                                                        "[number, number]",
                                                                                    value: elem,
                                                                                },
                                                                            )) &&
                                                                        [
                                                                            ("number" ===
                                                                                typeof elem[0] &&
                                                                                Number.isFinite(
                                                                                    elem[0],
                                                                                )) ||
                                                                                $report(
                                                                                    true,
                                                                                    {
                                                                                        path:
                                                                                            _path +
                                                                                            "[" +
                                                                                            _index1 +
                                                                                            "][" +
                                                                                            _index3 +
                                                                                            "][0]",
                                                                                        expected:
                                                                                            "number",
                                                                                        value: elem[0],
                                                                                    },
                                                                                ),
                                                                            ("number" ===
                                                                                typeof elem[1] &&
                                                                                Number.isFinite(
                                                                                    elem[1],
                                                                                )) ||
                                                                                $report(
                                                                                    true,
                                                                                    {
                                                                                        path:
                                                                                            _path +
                                                                                            "[" +
                                                                                            _index1 +
                                                                                            "][" +
                                                                                            _index3 +
                                                                                            "][1]",
                                                                                        expected:
                                                                                            "number",
                                                                                        value: elem[1],
                                                                                    },
                                                                                ),
                                                                        ].every(
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
                                                                                _index3 +
                                                                                "]",
                                                                            expected:
                                                                                "[number, number]",
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
                                                        "string" ===
                                                            typeof top[0] &&
                                                        "number" ===
                                                            typeof top[1] &&
                                                        Number.isFinite(top[1]),
                                                    (top: any) =>
                                                        top
                                                            .map(
                                                                (
                                                                    elem: any,
                                                                    _index4: number,
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
                                                                                    _index4 +
                                                                                    "]",
                                                                                expected:
                                                                                    "[string, number]",
                                                                                value: elem,
                                                                            },
                                                                        )) &&
                                                                        (elem.length ===
                                                                            2 ||
                                                                            $report(
                                                                                true,
                                                                                {
                                                                                    path:
                                                                                        _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index4 +
                                                                                        "]",
                                                                                    expected:
                                                                                        "[string, number]",
                                                                                    value: elem,
                                                                                },
                                                                            )) &&
                                                                        [
                                                                            "string" ===
                                                                                typeof elem[0] ||
                                                                                $report(
                                                                                    true,
                                                                                    {
                                                                                        path:
                                                                                            _path +
                                                                                            "[" +
                                                                                            _index1 +
                                                                                            "][" +
                                                                                            _index4 +
                                                                                            "][0]",
                                                                                        expected:
                                                                                            "string",
                                                                                        value: elem[0],
                                                                                    },
                                                                                ),
                                                                            ("number" ===
                                                                                typeof elem[1] &&
                                                                                Number.isFinite(
                                                                                    elem[1],
                                                                                )) ||
                                                                                $report(
                                                                                    true,
                                                                                    {
                                                                                        path:
                                                                                            _path +
                                                                                            "[" +
                                                                                            _index1 +
                                                                                            "][" +
                                                                                            _index4 +
                                                                                            "][1]",
                                                                                        expected:
                                                                                            "number",
                                                                                        value: elem[1],
                                                                                    },
                                                                                ),
                                                                        ].every(
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
                                                                                _index4 +
                                                                                "]",
                                                                            expected:
                                                                                "[string, number]",
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
                                                        Array.isArray(top[0]) &&
                                                        top[0]
                                                            .map(
                                                                (
                                                                    elem: any,
                                                                    _index5: number,
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
                                                            ) &&
                                                        "number" ===
                                                            typeof top[1] &&
                                                        Number.isFinite(top[1]),
                                                    (top: any) =>
                                                        top
                                                            .map(
                                                                (
                                                                    elem: any,
                                                                    _index6: number,
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
                                                                                    _index6 +
                                                                                    "]",
                                                                                expected:
                                                                                    "[Array<number>, number]",
                                                                                value: elem,
                                                                            },
                                                                        )) &&
                                                                        (elem.length ===
                                                                            2 ||
                                                                            $report(
                                                                                true,
                                                                                {
                                                                                    path:
                                                                                        _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index6 +
                                                                                        "]",
                                                                                    expected:
                                                                                        "[Array<number>, number]",
                                                                                    value: elem,
                                                                                },
                                                                            )) &&
                                                                        [
                                                                            ((Array.isArray(
                                                                                elem[0],
                                                                            ) ||
                                                                                $report(
                                                                                    true,
                                                                                    {
                                                                                        path:
                                                                                            _path +
                                                                                            "[" +
                                                                                            _index1 +
                                                                                            "][" +
                                                                                            _index6 +
                                                                                            "][0]",
                                                                                        expected:
                                                                                            "Array<number>",
                                                                                        value: elem[0],
                                                                                    },
                                                                                )) &&
                                                                                elem[0]
                                                                                    .map(
                                                                                        (
                                                                                            elem: any,
                                                                                            _index7: number,
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
                                                                                                        _index6 +
                                                                                                        "][0][" +
                                                                                                        _index7 +
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
                                                                                            _index6 +
                                                                                            "][0]",
                                                                                        expected:
                                                                                            "Array<number>",
                                                                                        value: elem[0],
                                                                                    },
                                                                                ),
                                                                            ("number" ===
                                                                                typeof elem[1] &&
                                                                                Number.isFinite(
                                                                                    elem[1],
                                                                                )) ||
                                                                                $report(
                                                                                    true,
                                                                                    {
                                                                                        path:
                                                                                            _path +
                                                                                            "[" +
                                                                                            _index1 +
                                                                                            "][" +
                                                                                            _index6 +
                                                                                            "][1]",
                                                                                        expected:
                                                                                            "number",
                                                                                        value: elem[1],
                                                                                    },
                                                                                ),
                                                                        ].every(
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
                                                                                _index6 +
                                                                                "]",
                                                                            expected:
                                                                                "[Array<number>, number]",
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
                                                            typeof top[0] &&
                                                        null !== top[0] &&
                                                        $vo0(
                                                            top[0],
                                                            _path + "[0]"[0],
                                                            false,
                                                        ) &&
                                                        "number" ===
                                                            typeof top[1] &&
                                                        Number.isFinite(top[1]),
                                                    (top: any) =>
                                                        top
                                                            .map(
                                                                (
                                                                    elem: any,
                                                                    _index8: number,
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
                                                                                    _index8 +
                                                                                    "]",
                                                                                expected:
                                                                                    "[Resolve<MapUnion.Person>, number]",
                                                                                value: elem,
                                                                            },
                                                                        )) &&
                                                                        (elem.length ===
                                                                            2 ||
                                                                            $report(
                                                                                true,
                                                                                {
                                                                                    path:
                                                                                        _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index8 +
                                                                                        "]",
                                                                                    expected:
                                                                                        "[Resolve<MapUnion.Person>, number]",
                                                                                    value: elem,
                                                                                },
                                                                            )) &&
                                                                        [
                                                                            ((("object" ===
                                                                                typeof elem[0] &&
                                                                                null !==
                                                                                    elem[0]) ||
                                                                                $report(
                                                                                    true,
                                                                                    {
                                                                                        path:
                                                                                            _path +
                                                                                            "[" +
                                                                                            _index1 +
                                                                                            "][" +
                                                                                            _index8 +
                                                                                            "][0]",
                                                                                        expected:
                                                                                            "Resolve<MapUnion.Person>",
                                                                                        value: elem[0],
                                                                                    },
                                                                                )) &&
                                                                                $vo0(
                                                                                    elem[0],
                                                                                    _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index8 +
                                                                                        "][0]",
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
                                                                                            _index8 +
                                                                                            "][0]",
                                                                                        expected:
                                                                                            "Resolve<MapUnion.Person>",
                                                                                        value: elem[0],
                                                                                    },
                                                                                ),
                                                                            ("number" ===
                                                                                typeof elem[1] &&
                                                                                Number.isFinite(
                                                                                    elem[1],
                                                                                )) ||
                                                                                $report(
                                                                                    true,
                                                                                    {
                                                                                        path:
                                                                                            _path +
                                                                                            "[" +
                                                                                            _index1 +
                                                                                            "][" +
                                                                                            _index8 +
                                                                                            "][1]",
                                                                                        expected:
                                                                                            "number",
                                                                                        value: elem[1],
                                                                                    },
                                                                                ),
                                                                        ].every(
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
                                                                                _index8 +
                                                                                "]",
                                                                            expected:
                                                                                "[Resolve<MapUnion.Person>, number]",
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
                                                .entries()
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
                                                    "(Map<boolean, number> | Map<number, number> | Map<string, number> | Map<Array<number>, number> | Map<Resolve<MapUnion.Person>, number>)",
                                                value: elem,
                                            });
                                        })()) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Map<Array<number>, number> | Map<Resolve<MapUnion.Person>, number> | Map<boolean, number> | Map<number, number> | Map<string, number>)",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "Array<(Map<Array<number>, number> | Map<Resolve<MapUnion.Person>, number> | Map<boolean, number> | Map<number, number> | Map<string, number>)>",
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
        const stringify = (input: MapUnion): string => {
            const $string = (typia.createValidateStringify as any).string;
            const $number = (typia.createValidateStringify as any).number;
            return `[${input.map((elem: any) => "{}").join(",")}]`;
        };
        const output = validate(input) as any;
        if (output.success) output.data = stringify(input);
        return output;
    },
    MapUnion.SPOILERS,
);
