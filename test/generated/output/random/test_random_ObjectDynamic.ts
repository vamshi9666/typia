import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_random_ObjectDynamic = _test_random(
    "ObjectDynamic",
    () =>
        ((
            generator: Partial<typia.IRandomGenerator> = (typia.random as any)
                .generator,
        ): typia.Primitive<ObjectDynamic> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => {
                const output = {} as any;
                (generator.array ?? $generator.array)(
                    () =>
                        (output[(generator.string ?? $generator.string)()] =
                            $pick([
                                () => (generator.string ?? $generator.string)(),
                                () =>
                                    (generator.number ?? $generator.number)(
                                        0,
                                        100,
                                    ),
                                () =>
                                    (generator.boolean ?? $generator.boolean)(),
                            ])()),
                    (generator.integer ?? $generator.integer)(0, 3),
                );
                return output;
            };
            return $ro0();
        })(),
    (input: any): ObjectDynamic => {
        const $guard = (typia.createAssert as any).guard;
        const $join = (typia.createAssert as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectDynamic => {
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
                            "string" === typeof value ||
                            ("number" === typeof value &&
                                Number.isFinite(value)) ||
                            "boolean" === typeof value ||
                            $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "(boolean | number | string)",
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
                        expected: "Resolve<ObjectDynamic>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
