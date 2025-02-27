import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createIsStringify_ObjectUnionNonPredictable =
    _test_isStringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        typia.createIsStringify<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );
