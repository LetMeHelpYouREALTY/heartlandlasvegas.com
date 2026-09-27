import CtaButtons from "@/components/heartland/CtaButtons";

type CtaActionsProps = {
  variant?: "onDark" | "onLight";
  bookLabel?: string;
};

export default function CtaActions(props: CtaActionsProps) {
  return <CtaButtons {...props} />;
}
