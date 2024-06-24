import React from "react";
import { slugify } from "./slugify";

/**
 * @function getAnchorFromLinkText
 * @description Converts React node children into an anchor link.
 * @param {React.ReactNode} children - The React node children from which to derive the anchor link.
 * @returns {string} A string representing the anchor link. If the content is a string, it returns a slugified version prefixed with '#'. Otherwise, it returns '/oops'.
 *
 * Example usage:
 * ```
 * const anchor = getAnchorFromLinkText(<div>Some Link Text</div>);
 * console.log(anchor); // Output: "#some-link-text" or "/oops" if the content is not a string
 * ```
 *
 * The function works as follows:
 * 1. Converts the `children` prop to an array using `React.Children.toArray`.
 * 2. Extracts the first element and assigns it to `rawContent`.
 * 3. Attempts to traverse up to three levels deep into nested children, looking for a string type.
 * 4. If a string is found, it is slugified and prefixed with '#'. Otherwise, returns "/oops".
 */
export function getAnchorFromLinkText(children: React.ReactNode): string {
  const childrenArr = React.Children.toArray(children);
  let rawContent = childrenArr[0] as React.ReactElement;
  console.log("rawContent (before):", rawContent);

  // limited to 3 tests for nested children
  for (let i = 0; i < 3 && typeof rawContent !== "string"; i++) {
    const nextChildrenArr = React.Children.toArray(rawContent);
    rawContent = (nextChildrenArr[0] as React.ReactElement).props.children;
  }

  const anchor =
    typeof rawContent === "string" ? "#" + slugify(rawContent) : "/oops";

  return anchor;
}
