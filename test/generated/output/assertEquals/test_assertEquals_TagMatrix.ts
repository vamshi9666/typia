import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_assertEquals_TagMatrix = _test_assertEquals(
    "TagMatrix",
    TagMatrix.generate,
    (input) =>
        ((input: any): TagMatrix => {
            const $guard = (typia.assertEquals as any).guard;
            const $is_uuid = (typia.assertEquals as any).is_uuid;
            const $join = (typia.assertEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagMatrix => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.matrix) &&
                        3 === input.matrix.length) ||
                        $guard(_exceptionable, {
                            path: _path + ".matrix",
                            expected: "Array<Array<string>>",
                            value: input.matrix,
                        })) &&
                    input.matrix.every(
                        (elem: any, _index1: number) =>
                            ((Array.isArray(elem) && 3 === elem.length) ||
                                $guard(_exceptionable, {
                                    path: _path + ".matrix[" + _index1 + "]",
                                    expected: "Array<string>",
                                    value: elem,
                                })) &&
                            elem.every(
                                (elem: any, _index2: number) =>
                                    ("string" === typeof elem &&
                                        true === $is_uuid(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".matrix[" +
                                            _index1 +
                                            "][" +
                                            _index2 +
                                            "]",
                                        expected: "string",
                                        value: elem,
                                    }),
                            ),
                    ) &&
                    (1 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (["matrix"].some((prop) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<TagMatrix>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        })(input),
);
