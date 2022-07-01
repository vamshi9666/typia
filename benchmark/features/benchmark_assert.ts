import TSON from "../../src";
import * as Similar from "typescript-is";

import { AssertBenchmarker } from "../internal/AssertBenchmarker";

import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionImplicit } from "../../test/structures/ArrayRecursiveUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";

const assert = () => [
    AssertBenchmarker.prepare(
        "object (hierarchical)",
        () => ObjectHierarchical.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    AssertBenchmarker.prepare(
        "object (recursive)",
        () => ObjectRecursive.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    AssertBenchmarker.prepare(
        "object (union)",
        () => ObjectUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    AssertBenchmarker.prepare(
        "array (recursive)",
        () => ArrayRecursive.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    AssertBenchmarker.prepare(
        "array (union)",
        () => ArrayRecursiveUnionImplicit.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
    AssertBenchmarker.prepare(
        "ultimate union",
        () => UltimateUnion.generate(),
        {
            "typescript-json": (input) => TSON.assertType(input),
            "typescript-is": (input) => Similar.assertType<typeof input>(input),
        },
    ),
];
export { assert as benchmark_assert };
