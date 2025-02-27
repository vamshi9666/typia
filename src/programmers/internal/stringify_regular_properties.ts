import ts from "typescript";

import { TemplateFactory } from "../../factories/TemplateFactory";
import { ValueFactory } from "../../factories/ValueFactory";

import { Metadata } from "../../metadata/Metadata";

import { IExpressionEntry } from "../helpers/IExpressionEntry";

/**
 * @internal
 */
export function stringify_regular_properties(
    regular: IExpressionEntry<ts.Expression>[],
    dynamic: IExpressionEntry<ts.Expression>[],
): ts.Expression[] {
    const output: ts.Expression[] = [];

    regular.sort((x, y) => sequence(x.meta) - sequence(y.meta));
    regular.forEach((entry, index) => {
        // BASE ELEMENTS
        const key: string = entry.key.getSoleLiteral()!;
        const base: ts.Expression[] = [
            ts.factory.createStringLiteral(`${JSON.stringify(key)}:`),
            entry.expression,
        ];
        if (index !== regular.length - 1 || dynamic.length !== 0)
            base.push(ts.factory.createStringLiteral(`,`));

        const empty: boolean =
            (entry.meta.required === false &&
                entry.meta.nullable === false &&
                entry.meta.size() === 0) ||
            (entry.meta.functional &&
                entry.meta.nullable === false &&
                entry.meta.size() === 1);

        if (empty === true) return;
        else if (
            entry.meta.required === false ||
            entry.meta.functional === true ||
            entry.meta.any === true
        )
            output.push(
                ts.factory.createConditionalExpression(
                    (() => {
                        const conditions: ts.BinaryExpression[] = [];
                        if (entry.meta.required === false || entry.meta.any)
                            conditions.push(
                                ts.factory.createStrictEquality(
                                    ts.factory.createIdentifier("undefined"),
                                    entry.input,
                                ),
                            );
                        if (entry.meta.functional || entry.meta.any)
                            conditions.push(
                                ts.factory.createStrictEquality(
                                    ts.factory.createStringLiteral("function"),
                                    ValueFactory.TYPEOF(entry.input),
                                ),
                            );
                        return conditions.length === 1
                            ? conditions[0]!
                            : conditions.reduce((x, y) =>
                                  ts.factory.createLogicalOr(x, y),
                              );
                    })(),
                    undefined,
                    ts.factory.createStringLiteral(""),
                    undefined,
                    TemplateFactory.generate(base),
                ),
            );
        else output.push(...base);
    });
    return output;
}

function sequence(meta: Metadata): number {
    return meta.any || !meta.required || meta.functional ? 0 : 1;
}
