import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_createValidateEquals_ObjectGenericUnion =
    _test_validateEquals(
        "ObjectGenericUnion",
        ObjectGenericUnion.generate,
        (input: any): typia.IValidation<ObjectGenericUnion> => {
            const errors = [] as any[];
            const $report = (typia.createValidateEquals as any).report(errors);
            const $join = (typia.createValidateEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectGenericUnion => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.writer ||
                            $report(_exceptionable, {
                                path: _path + ".writer",
                                expected: "string",
                                value: input.writer,
                            }),
                        null === input.answer ||
                            ((("object" === typeof input.answer &&
                                null !== input.answer) ||
                                $report(_exceptionable, {
                                    path: _path + ".answer",
                                    expected:
                                        "(Resolve<ObjectGenericUnion.ISaleAnswer> | null)",
                                    value: input.answer,
                                })) &&
                                $vo1(
                                    input.answer,
                                    _path + ".answer",
                                    true && _exceptionable,
                                )) ||
                            $report(_exceptionable, {
                                path: _path + ".answer",
                                expected:
                                    "(Resolve<ObjectGenericUnion.ISaleAnswer> | null)",
                                value: input.answer,
                            }),
                        "string" === typeof input.id ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            }),
                        ("number" === typeof input.hit &&
                            Number.isFinite(input.hit)) ||
                            $report(_exceptionable, {
                                path: _path + ".hit",
                                expected: "number",
                                value: input.hit,
                            }),
                        ((Array.isArray(input.contents) ||
                            $report(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<Resolve<ObjectGenericUnion.ISaleArticle.IContent>>",
                                value: input.contents,
                            })) &&
                            input.contents
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".contents[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectGenericUnion.ISaleArticle.IContent>",
                                                value: elem,
                                            })) &&
                                            $vo2(
                                                elem,
                                                _path +
                                                    ".contents[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".contents[" +
                                                _index1 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectGenericUnion.ISaleArticle.IContent>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<Resolve<ObjectGenericUnion.ISaleArticle.IContent>>",
                                value: input.contents,
                            }),
                        "string" === typeof input.created_at ||
                            $report(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            }),
                        6 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "writer",
                                            "answer",
                                            "id",
                                            "hit",
                                            "contents",
                                            "created_at",
                                        ].some((prop) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
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
                        ("number" === typeof input.hit &&
                            Number.isFinite(input.hit)) ||
                            $report(_exceptionable, {
                                path: _path + ".hit",
                                expected: "number",
                                value: input.hit,
                            }),
                        ((Array.isArray(input.contents) ||
                            $report(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<Resolve<ObjectGenericUnion.ISaleArticle.IContent>>",
                                value: input.contents,
                            })) &&
                            input.contents
                                .map(
                                    (elem: any, _index2: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".contents[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectGenericUnion.ISaleArticle.IContent>",
                                                value: elem,
                                            })) &&
                                            $vo2(
                                                elem,
                                                _path +
                                                    ".contents[" +
                                                    _index2 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".contents[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectGenericUnion.ISaleArticle.IContent>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<Resolve<ObjectGenericUnion.ISaleArticle.IContent>>",
                                value: input.contents,
                            }),
                        "string" === typeof input.created_at ||
                            $report(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            }),
                        4 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "id",
                                            "hit",
                                            "contents",
                                            "created_at",
                                        ].some((prop) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo2 = (
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
                        "string" === typeof input.created_at ||
                            $report(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            }),
                        "string" === typeof input.title ||
                            $report(_exceptionable, {
                                path: _path + ".title",
                                expected: "string",
                                value: input.title,
                            }),
                        "string" === typeof input.body ||
                            $report(_exceptionable, {
                                path: _path + ".body",
                                expected: "string",
                                value: input.body,
                            }),
                        ((Array.isArray(input.files) ||
                            $report(_exceptionable, {
                                path: _path + ".files",
                                expected:
                                    'Array<Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>>',
                                value: input.files,
                            })) &&
                            input.files
                                .map(
                                    (elem: any, _index3: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".files[" +
                                                    _index3 +
                                                    "]",
                                                expected:
                                                    'Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                                value: elem,
                                            })) &&
                                            $vo3(
                                                elem,
                                                _path +
                                                    ".files[" +
                                                    _index3 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".files[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                'Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".files",
                                expected:
                                    'Array<Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>>',
                                value: input.files,
                            }),
                        5 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "id",
                                            "created_at",
                                            "title",
                                            "body",
                                            "files",
                                        ].some((prop) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        null === input.extension ||
                            "string" === typeof input.extension ||
                            $report(_exceptionable, {
                                path: _path + ".extension",
                                expected: "(null | string)",
                                value: input.extension,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        "string" === typeof input.url ||
                            $report(_exceptionable, {
                                path: _path + ".url",
                                expected: "string",
                                value: input.url,
                            }),
                        3 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        ["extension", "name", "url"].some(
                                            (prop) => key === prop,
                                        )
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        "string" === typeof input.writer ||
                            $report(_exceptionable, {
                                path: _path + ".writer",
                                expected: "string",
                                value: input.writer,
                            }),
                        null === input.answer ||
                            ((("object" === typeof input.answer &&
                                null !== input.answer) ||
                                $report(_exceptionable, {
                                    path: _path + ".answer",
                                    expected:
                                        "(Resolve<ObjectGenericUnion.ISaleAnswer> | null)",
                                    value: input.answer,
                                })) &&
                                $vo1(
                                    input.answer,
                                    _path + ".answer",
                                    true && _exceptionable,
                                )) ||
                            $report(_exceptionable, {
                                path: _path + ".answer",
                                expected:
                                    "(Resolve<ObjectGenericUnion.ISaleAnswer> | null)",
                                value: input.answer,
                            }),
                        "string" === typeof input.id ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            }),
                        ("number" === typeof input.hit &&
                            Number.isFinite(input.hit)) ||
                            $report(_exceptionable, {
                                path: _path + ".hit",
                                expected: "number",
                                value: input.hit,
                            }),
                        ((Array.isArray(input.contents) ||
                            $report(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<Resolve<ObjectGenericUnion.ISaleReview.IContent>>",
                                value: input.contents,
                            })) &&
                            input.contents
                                .map(
                                    (elem: any, _index4: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".contents[" +
                                                    _index4 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectGenericUnion.ISaleReview.IContent>",
                                                value: elem,
                                            })) &&
                                            $vo5(
                                                elem,
                                                _path +
                                                    ".contents[" +
                                                    _index4 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".contents[" +
                                                _index4 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectGenericUnion.ISaleReview.IContent>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".contents",
                                expected:
                                    "Array<Resolve<ObjectGenericUnion.ISaleReview.IContent>>",
                                value: input.contents,
                            }),
                        "string" === typeof input.created_at ||
                            $report(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            }),
                        6 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "writer",
                                            "answer",
                                            "id",
                                            "hit",
                                            "contents",
                                            "created_at",
                                        ].some((prop) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.score &&
                            Number.isFinite(input.score)) ||
                            $report(_exceptionable, {
                                path: _path + ".score",
                                expected: "number",
                                value: input.score,
                            }),
                        "string" === typeof input.id ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            }),
                        "string" === typeof input.created_at ||
                            $report(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "string",
                                value: input.created_at,
                            }),
                        "string" === typeof input.title ||
                            $report(_exceptionable, {
                                path: _path + ".title",
                                expected: "string",
                                value: input.title,
                            }),
                        "string" === typeof input.body ||
                            $report(_exceptionable, {
                                path: _path + ".body",
                                expected: "string",
                                value: input.body,
                            }),
                        ((Array.isArray(input.files) ||
                            $report(_exceptionable, {
                                path: _path + ".files",
                                expected:
                                    'Array<Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>>',
                                value: input.files,
                            })) &&
                            input.files
                                .map(
                                    (elem: any, _index5: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".files[" +
                                                    _index5 +
                                                    "]",
                                                expected:
                                                    'Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                                value: elem,
                                            })) &&
                                            $vo3(
                                                elem,
                                                _path +
                                                    ".files[" +
                                                    _index5 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".files[" +
                                                _index5 +
                                                "]",
                                            expected:
                                                'Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>',
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".files",
                                expected:
                                    'Array<Resolve<Omit<ObjectGenericUnion.IAttachmentFile, "id">>>',
                                value: input.files,
                            }),
                        6 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "score",
                                            "id",
                                            "created_at",
                                            "title",
                                            "body",
                                            "files",
                                        ].some((prop) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vu0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ($vo0(input, _path, false && _exceptionable))
                            return $vo0(input, _path, true && _exceptionable);
                        if ($vo4(input, _path, false && _exceptionable))
                            return $vo4(input, _path, true && _exceptionable);
                        return $report(_exceptionable, {
                            path: _path,
                            expected:
                                "(ObjectGenericUnion.ISaleQuestion | ObjectGenericUnion.ISaleReview)",
                            value: input,
                        });
                    })();
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "(Resolve<ObjectGenericUnion.ISaleQuestion> | Resolve<ObjectGenericUnion.ISaleReview>)",
                            value: input,
                        })) &&
                        $vu0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "(Resolve<ObjectGenericUnion.ISaleQuestion> | Resolve<ObjectGenericUnion.ISaleReview>)",
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
        },
    );
