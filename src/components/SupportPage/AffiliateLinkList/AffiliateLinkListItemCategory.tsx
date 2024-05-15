type Props = {
  category: string;
  subCategory: string;
};

export function AffiliateLinkListItemCategory({
  category,
  subCategory,
}: Props) {
  return (
    <div>
      <span className="font-semibold">{category}</span>
      {category && subCategory && <span className="mx-2">|</span>}
      <span>{subCategory}</span>
    </div>
  );
}
