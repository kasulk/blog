"use client";

import { Fragment } from "react";
import { DateFormatter } from "../DateFormatter";

type Props = {
  currCampaignEnd: Date;
};

export function SupportLatestPlasmaCampaign({ currCampaignEnd }: Props) {
  const numDays = getNumDaysFromNowToDate(currCampaignEnd);

  const color = getColorByDaysLeft(numDays);
  const message = getDaysLeftMessage(numDays);
  const messageLines = message.split("\n");

  return (
    <>
      <p className={`text-center font-bold ${color}`}>
        <DateFormatter date={currCampaignEnd} weekday />
      </p>
      <p className="text-center">
        {messageLines.map((line, i) => (
          <Fragment key={i}>
            {line}
            {i < messageLines.length - 1 && <br />}
          </Fragment>
        ))}
      </p>
    </>
  );
}

function getNumDaysFromNowToDate(targetDate: Date): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // set time to midnight, to only compare the date

  const timeDifference = targetDate.getTime() - today.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // ms to days

  return daysDifference;
}

function getColorByDaysLeft(numDays: number): string {
  if (numDays === 1) return "bg-warning text-warning-800";
  if (numDays < 0) return "bg-danger text-danger-800";
  return "bg-success text-success-800";
}

function getDaysLeftMessage(numDays: number): string {
  if (numDays === 1) return "Nur noch heute!";
  if (numDays > 1) return `Noch ${numDays} Tage`;
  return (
    "Leider aktuell abgelaufen...\n" +
    "Die nächste Aktion kommt bestimmt.\n" +
    "Schaue nächsten Monat noch mal vorbei!"
  );
}
