import React from "react";
import { camelCasify } from "./camelCasify";

/**
 * Extracts a partner name from nested React children up to a specified depth.
 *
 * This function traverses through the React node tree to find the first string content.
 * The string content is then transformed using `camelCasify` and prepended with a "$" sign.
 * If no string content is found within the specified depth, an error is thrown.
 *
 * @param {React.ReactNode} children - The React node tree to traverse.
 * @param {number} [maxDepth=3] - The maximum depth to traverse in the React node tree. Defaults to 3 if not provided.
 * @returns {string} The transformed partner name extracted from the React children.
 * @throws {Error} Throws an error if no string content is found within the specified depth.
 */
export function getPartnerFromLinkText(
  children: React.ReactNode,
  maxDepth: number = 3,
): string {
  let currNode = children;
  let currDepth = 0;

  while (currDepth < maxDepth) {
    const childrenArr = React.Children.toArray(currNode);
    if (!childrenArr.length) break;

    currNode = childrenArr[0];

    if (typeof currNode === "string") return "$" + camelCasify(currNode);
    else if (!React.isValidElement(currNode)) break;

    currNode = (currNode as React.ReactElement).props.children;
    currDepth++;
  }

  throw new Error("No string content found within the specified depth.");
}
