import { heartlandSite } from "@/lib/heartland-site";

type RealScoutEmbedProps = {
  widget: "simple-search" | "listings" | "home-value";
  className?: string;
};

export default function RealScoutEmbed({
  widget,
  className,
}: RealScoutEmbedProps) {
  const id = heartlandSite.realscoutAgentId;
  let html = "";

  switch (widget) {
    case "simple-search":
      html = `<realscout-simple-search agent-encoded-id="${id}"></realscout-simple-search>`;
      break;
    case "listings":
      html = `<realscout-office-listings agent-encoded-id="${id}" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF,TC"></realscout-office-listings>`;
      break;
    case "home-value":
      html = `<realscout-home-value agent-encoded-id="${id}"></realscout-home-value>`;
      break;
    default: {
      const _exhaustive: never = widget;
      return _exhaustive;
    }
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
