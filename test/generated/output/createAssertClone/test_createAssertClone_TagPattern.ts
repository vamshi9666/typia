import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { TagPattern } from "../../../structures/TagPattern";

export const test_createAssertClone_TagPattern = _test_assertClone(
    "TagPattern",
    TagPattern.generate,
    (input: any): typia.Primitive<TagPattern> => {
        const assert = (input: any): TagPattern => {
            const $guard = (typia.createAssertClone as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagPattern => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("string" === typeof input.uuid &&
                        true ===
                            RegExp(
                                /[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/,
                            ).test(input.uuid)) ||
                        $guard(_exceptionable, {
                            path: _path + ".uuid",
                            expected: "string",
                            value: input.uuid,
                        })) &&
                    (("string" === typeof input.email &&
                        true ===
                            RegExp(
                                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                            ).test(input.email)) ||
                        $guard(_exceptionable, {
                            path: _path + ".email",
                            expected: "string",
                            value: input.email,
                        })) &&
                    (("string" === typeof input.ipv4 &&
                        true ===
                            RegExp(
                                /(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                            ).test(input.ipv4)) ||
                        $guard(_exceptionable, {
                            path: _path + ".ipv4",
                            expected: "string",
                            value: input.ipv4,
                        })) &&
                    (("string" === typeof input.ipv6 &&
                        true ===
                            RegExp(
                                /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
                            ).test(input.ipv6)) ||
                        $guard(_exceptionable, {
                            path: _path + ".ipv6",
                            expected: "string",
                            value: input.ipv6,
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<TagPattern>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        const clone = (input: TagPattern): typia.Primitive<TagPattern> => {
            const $co0 = (input: any): any => ({
                uuid: input.uuid as any,
                email: input.email as any,
                ipv4: input.ipv4 as any,
                ipv6: input.ipv6 as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    TagPattern.SPOILERS,
);
