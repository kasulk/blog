type Props = {
  payoutOn: string;
};

export function AffiliateLinkListItemTerms({ payoutOn }: Props) {
  return (
    payoutOn && (
      <div>
        <div className="font-semibold">Auszahlung bei: </div>
        <div dangerouslySetInnerHTML={{ __html: payoutOn }} />
      </div>
    )
  );
}
