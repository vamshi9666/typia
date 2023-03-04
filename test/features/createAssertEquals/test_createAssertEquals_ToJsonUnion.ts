import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertEquals_ToJsonUnion = _test_assertEquals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createAssertEquals<ToJsonUnion>(),
);