import type { Categories } from "@/config";
import { Link } from "@/components/Links/Link";
import { capitalize } from "./capitalize";

/**
 * Joins an array of strings into a JSX element, separating elements with commas,
 * and using 'und' before the last element. Each element is rendered as a link.
 *
 * @param {string[] | Categories} arr - The array of strings (categories) to join.
 * @returns {JSX.Element} A JSX element with all elements from the array joined together,
 * separated by commas, with 'und' before the last element, each as a link.
 */
export function createLinksJoinedWithCommasAndOrAnd(
  arr: string[] | Categories,
): JSX.Element {
  if (arr.length === 0) return <></>;
  if (arr.length === 1) return createCategoryLink(arr[0]);

  const links = arr.reduce((acc, curr, i) => {
    if (!i) return [createCategoryLink(curr)];

    const isLast = i === arr.length - 1;
    const separator = isLast ? " und " : ", ";

    return [
      ...acc,
      <span key={`sep-${i}`}>{separator}</span>,
      createCategoryLink(curr),
    ];
  }, [] as JSX.Element[]);

  return <>{links}</>;
}

/**
 * Creates a JSX link for a given category.
 *
 * @param {string} category - The category to create a link for.
 * @returns {JSX.Element} A JSX element containing the link to the category.
 */
function createCategoryLink(category: string): JSX.Element {
  return (
    <Link href={`/blog/category/${category}`} key={category}>
      {capitalize(category)}
    </Link>
  );
}
