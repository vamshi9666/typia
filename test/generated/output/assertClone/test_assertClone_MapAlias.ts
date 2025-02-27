import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { MapAlias } from "../../../structures/MapAlias";

export const test_assertClone_MapAlias = _test_assertClone(
    "MapAlias",
    MapAlias.generate,
    (input) =>
        ((input: any): typia.Primitive<MapAlias> => {
            const assert = (input: any): MapAlias => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is MapAlias => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (input.boolean instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".boolean",
                                expected: "Map<boolean, number>",
                                value: input.boolean,
                            })) &&
                        [...input.boolean].every(
                            (elem: any, _index1: number) =>
                                (Array.isArray(elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".boolean[" + _index1 + "]",
                                        expected: "[boolean, number]",
                                        value: elem,
                                    })) &&
                                (elem.length === 2 ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".boolean[" + _index1 + "]",
                                        expected: "[boolean, number]",
                                        value: elem,
                                    })) &&
                                ("boolean" === typeof elem[0] ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean[" +
                                            _index1 +
                                            "][0]",
                                        expected: "boolean",
                                        value: elem[0],
                                    })) &&
                                (("number" === typeof elem[1] &&
                                    Number.isFinite(elem[1])) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".boolean[" +
                                            _index1 +
                                            "][1]",
                                        expected: "number",
                                        value: elem[1],
                                    })),
                        ) &&
                        (input.number instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".number",
                                expected: "Map<number, number>",
                                value: input.number,
                            })) &&
                        [...input.number].every(
                            (elem: any, _index2: number) =>
                                (Array.isArray(elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".number[" + _index2 + "]",
                                        expected: "[number, number]",
                                        value: elem,
                                    })) &&
                                (elem.length === 2 ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".number[" + _index2 + "]",
                                        expected: "[number, number]",
                                        value: elem,
                                    })) &&
                                (("number" === typeof elem[0] &&
                                    Number.isFinite(elem[0])) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".number[" +
                                            _index2 +
                                            "][0]",
                                        expected: "number",
                                        value: elem[0],
                                    })) &&
                                (("number" === typeof elem[1] &&
                                    Number.isFinite(elem[1])) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".number[" +
                                            _index2 +
                                            "][1]",
                                        expected: "number",
                                        value: elem[1],
                                    })),
                        ) &&
                        (input.strings instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".strings",
                                expected: "Map<string, number>",
                                value: input.strings,
                            })) &&
                        [...input.strings].every(
                            (elem: any, _index3: number) =>
                                (Array.isArray(elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".strings[" + _index3 + "]",
                                        expected: "[string, number]",
                                        value: elem,
                                    })) &&
                                (elem.length === 2 ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".strings[" + _index3 + "]",
                                        expected: "[string, number]",
                                        value: elem,
                                    })) &&
                                ("string" === typeof elem[0] ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".strings[" +
                                            _index3 +
                                            "][0]",
                                        expected: "string",
                                        value: elem[0],
                                    })) &&
                                (("number" === typeof elem[1] &&
                                    Number.isFinite(elem[1])) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".strings[" +
                                            _index3 +
                                            "][1]",
                                        expected: "number",
                                        value: elem[1],
                                    })),
                        ) &&
                        (input.arrays instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".arrays",
                                expected: "Map<Array<number>, number>",
                                value: input.arrays,
                            })) &&
                        [...input.arrays].every(
                            (elem: any, _index4: number) =>
                                (Array.isArray(elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".arrays[" + _index4 + "]",
                                        expected: "[Array<number>, number]",
                                        value: elem,
                                    })) &&
                                (elem.length === 2 ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".arrays[" + _index4 + "]",
                                        expected: "[Array<number>, number]",
                                        value: elem,
                                    })) &&
                                (Array.isArray(elem[0]) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".arrays[" +
                                            _index4 +
                                            "][0]",
                                        expected: "Array<number>",
                                        value: elem[0],
                                    })) &&
                                elem[0].every(
                                    (elem: any, _index5: number) =>
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".arrays[" +
                                                _index4 +
                                                "][0][" +
                                                _index5 +
                                                "]",
                                            expected: "number",
                                            value: elem,
                                        }),
                                ) &&
                                (("number" === typeof elem[1] &&
                                    Number.isFinite(elem[1])) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".arrays[" +
                                            _index4 +
                                            "][1]",
                                        expected: "number",
                                        value: elem[1],
                                    })),
                        ) &&
                        (input.objects instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".objects",
                                expected:
                                    "Map<Resolve<MapAlias.Person>, number>",
                                value: input.objects,
                            })) &&
                        [...input.objects].every(
                            (elem: any, _index6: number) =>
                                (Array.isArray(elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".objects[" + _index6 + "]",
                                        expected:
                                            "[Resolve<MapAlias.Person>, number]",
                                        value: elem,
                                    })) &&
                                (elem.length === 2 ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".objects[" + _index6 + "]",
                                        expected:
                                            "[Resolve<MapAlias.Person>, number]",
                                        value: elem,
                                    })) &&
                                (("object" === typeof elem[0] &&
                                    null !== elem[0]) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".objects[" +
                                            _index6 +
                                            "][0]",
                                        expected: "Resolve<MapAlias.Person>",
                                        value: elem[0],
                                    })) &&
                                $ao1(
                                    elem[0],
                                    _path + ".objects[" + _index6 + "][0]",
                                    true && _exceptionable,
                                ) &&
                                (("number" === typeof elem[1] &&
                                    Number.isFinite(elem[1])) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".objects[" +
                                            _index6 +
                                            "][1]",
                                        expected: "number",
                                        value: elem[1],
                                    })),
                        );
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                            $guard(_exceptionable, {
                                path: _path + ".age",
                                expected: "number",
                                value: input.age,
                            }));
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Resolve<MapAlias>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const clone = (input: MapAlias): typia.Primitive<MapAlias> => {
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age;
                const $co0 = (input: any): any => ({
                    boolean:
                        input.boolean instanceof Map
                            ? {}
                            : (input.boolean as any),
                    number:
                        input.number instanceof Map
                            ? {}
                            : (input.number as any),
                    strings:
                        input.strings instanceof Map
                            ? {}
                            : (input.strings as any),
                    arrays:
                        input.arrays instanceof Map
                            ? {}
                            : (input.arrays as any),
                    objects:
                        input.objects instanceof Map
                            ? {}
                            : (input.objects as any),
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    MapAlias.SPOILERS,
);
