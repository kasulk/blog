type Props = {
  rewards: { [key: string]: string };
};

export function AffiliateLinkListItemRewards({ rewards }: Props) {
  return (
    <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 ">
      {rewards.referrer && (
        <div className="sm:flex-1">
          <div className="font-semibold">Bonus für mich:</div>
          <div dangerouslySetInnerHTML={{ __html: rewards.referrer }} />
        </div>
      )}

      {rewards.user && (
        <div className="sm:flex-1">
          <div className="font-semibold">Bonus für dich:</div>
          <div dangerouslySetInnerHTML={{ __html: rewards.user }} />
        </div>
      )}
    </div>
  );
}
