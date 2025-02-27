import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createIs_FunctionalTupleUnion = _test_is(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    typia.createIs<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);
