import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createValidate_ToJsonAtomicUnion = _test_validate(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    typia.createValidate<ToJsonAtomicUnion>(),
);
