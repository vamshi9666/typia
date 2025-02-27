import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_createRandom_ArrayMatrix = _test_random(
    "ArrayMatrix",
    (
        generator: Partial<typia.IRandomGenerator> = (typia.createRandom as any)
            .generator,
    ): typia.Primitive<ArrayMatrix> => {
        const $generator = (typia.createRandom as any).generator;
        return (generator.array ?? $generator.array)(() =>
            (generator.array ?? $generator.array)(() =>
                (generator.array ?? $generator.array)(() =>
                    (generator.number ?? $generator.number)(0, 100),
                ),
            ),
        );
    },
    (input: any): ArrayMatrix => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ArrayMatrix => {
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Array<Array<Array<number>>>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (Array.isArray(elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "Array<Array<number>>",
                                value: elem,
                            })) &&
                        elem.every(
                            (elem: any, _index2: number) =>
                                (Array.isArray(elem) ||
                                    $guard(true, {
                                        path:
                                            _path +
                                            "[" +
                                            _index1 +
                                            "][" +
                                            _index2 +
                                            "]",
                                        expected: "Array<number>",
                                        value: elem,
                                    })) &&
                                elem.every(
                                    (elem: any, _index3: number) =>
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        $guard(true, {
                                            path:
                                                _path +
                                                "[" +
                                                _index1 +
                                                "][" +
                                                _index2 +
                                                "][" +
                                                _index3 +
                                                "]",
                                            expected: "number",
                                            value: elem,
                                        }),
                                ),
                        ),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
