import { H5 } from "../Headings";
import { ExternalLink } from "../Links";
import { SupportLatestPlasmaCampaign } from ".";
import { Location } from "@/config/links";

type Props = {
  links: { [key: string]: string };
  locations: Location[];
};

export function SupportCurrPlasmaCampainsList({ links, locations }: Props) {
  return (
    <ul>
      {locations.map(({ city, currCampaignEnd }) => {
        const mapURL = `${links.googleMapsCSLSearchURL}+${city}`;

        return (
          currCampaignEnd && (
            <li key={city} className="list-none">
              <H5 className="font-bold">
                <span>Aktuelle Aktion in </span>
                <ExternalLink href={mapURL}>{city}</ExternalLink>
                <span> bis einschließlich:</span>
              </H5>
              <SupportLatestPlasmaCampaign currCampaignEnd={currCampaignEnd} />
            </li>
          )
        );
      })}
    </ul>
  );
}
