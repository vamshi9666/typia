import typia from "../../../../src";
import { TagFormat } from "../../../structures/TagFormat";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagFormat = _test_validatePrune(
    "TagFormat",
    TagFormat.generate,
    (input) =>
        ((input: any): typia.IValidation<TagFormat> => {
            const validate = (input: any): typia.IValidation<TagFormat> => {
                const errors = [] as any[];
                const $report = (typia.validatePrune as any).report(errors);
                const $is_uuid = (typia.validatePrune as any).is_uuid;
                const $is_email = (typia.validatePrune as any).is_email;
                const $is_url = (typia.validatePrune as any).is_url;
                const $is_ipv4 = (typia.validatePrune as any).is_ipv4;
                const $is_ipv6 = (typia.validatePrune as any).is_ipv6;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagFormat => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("string" === typeof input.uuid &&
                                true === $is_uuid(input.uuid)) ||
                                $report(_exceptionable, {
                                    path: _path + ".uuid",
                                    expected: "string",
                                    value: input.uuid,
                                }),
                            ("string" === typeof input.email &&
                                true === $is_email(input.email)) ||
                                $report(_exceptionable, {
                                    path: _path + ".email",
                                    expected: "string",
                                    value: input.email,
                                }),
                            ("string" === typeof input.url &&
                                true === $is_url(input.url)) ||
                                $report(_exceptionable, {
                                    path: _path + ".url",
                                    expected: "string",
                                    value: input.url,
                                }),
                            ("string" === typeof input.ipv4 &&
                                true === $is_ipv4(input.ipv4)) ||
                                $report(_exceptionable, {
                                    path: _path + ".ipv4",
                                    expected: "string",
                                    value: input.ipv4,
                                }),
                            ("string" === typeof input.ipv6 &&
                                true === $is_ipv6(input.ipv6)) ||
                                $report(_exceptionable, {
                                    path: _path + ".ipv6",
                                    expected: "string",
                                    value: input.ipv6,
                                }),
                            "string" === typeof input.custom ||
                                $report(_exceptionable, {
                                    path: _path + ".custom",
                                    expected: "string",
                                    value: input.custom,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Resolve<TagFormat>",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<TagFormat>",
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
            const prune = (input: TagFormat): void => {
                const $is_uuid = (typia.validatePrune as any).is_uuid;
                const $is_email = (typia.validatePrune as any).is_email;
                const $is_url = (typia.validatePrune as any).is_url;
                const $is_ipv4 = (typia.validatePrune as any).is_ipv4;
                const $is_ipv6 = (typia.validatePrune as any).is_ipv6;
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "uuid" === key ||
                            "email" === key ||
                            "url" === key ||
                            "ipv4" === key ||
                            "ipv6" === key ||
                            "custom" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    TagFormat.SPOILERS,
);