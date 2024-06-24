import React from "react";
import { slugify } from "./slugify";

/**
 * @function getAnchorFromLinkText
 * @description Converts React node children into an anchor link.
 * @param {React.ReactNode} children - The React node children from which to derive the anchor link.
 * @param {number} maxDepth - Maximum depth to search for string content (default is 3).
 * @returns {string} A string representing the anchor link. If the content is a string, it returns a slugified version prefixed with '#'. Throws an error if no string content is found within the specified depth.
 * @throws Will throw an error if no string content is found within the specified depth.
 */
export function getAnchorFromLinkText(
  children: React.ReactNode,
  maxDepth: number = 3,
): string {
  let currNode = children;
  let currDepth = 0;

  while (currDepth < maxDepth) {
    const childrenArr = React.Children.toArray(currNode);
    if (!childrenArr.length) break;

    currNode = childrenArr[0];

    if (typeof currNode === "string") return "#" + slugify(currNode);
    else if (!React.isValidElement(currNode)) break;

    currNode = (currNode as React.ReactElement).props.children;
    currDepth++;
  }

  throw new Error("No string content found within the specified depth.");
}
