import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_random_AtomicAlias = _test_random(
    "AtomicAlias",
    () =>
        ((
            generator: Partial<typia.IRandomGenerator> = (typia.random as any)
                .generator,
        ): typia.Primitive<AtomicAlias> => {
            const $generator = (typia.random as any).generator;
            return [
                (generator.boolean ?? $generator.boolean)(),
                (generator.number ?? $generator.number)(0, 100),
                (generator.string ?? $generator.string)(),
            ];
        })(),
    (input: any): AtomicAlias => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is AtomicAlias => {
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "[boolean, number, string]",
                        value: input,
                    })) &&
                (input.length === 3 ||
                    $guard(true, {
                        path: _path + "",
                        expected: "[boolean, number, string]",
                        value: input,
                    })) &&
                ("boolean" === typeof input[0] ||
                    $guard(true, {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: input[0],
                    })) &&
                (("number" === typeof input[1] && Number.isFinite(input[1])) ||
                    $guard(true, {
                        path: _path + "[1]",
                        expected: "number",
                        value: input[1],
                    })) &&
                ("string" === typeof input[2] ||
                    $guard(true, {
                        path: _path + "[2]",
                        expected: "string",
                        value: input[2],
                    }))
            );
        })(input, "$input", true);
        return input;
    },
);
