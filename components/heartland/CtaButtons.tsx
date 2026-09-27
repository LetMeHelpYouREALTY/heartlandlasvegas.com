import Link from "next/link";
import { Mail, Calendar } from "lucide-react";
import { calendly, ctaPhone, nap } from "@/lib/contact";

type CtaButtonsProps = {
  variant?: "onDark" | "onLight";
  bookLabel?: string;
};

export default function CtaButtons({
  variant = "onDark",
  bookLabel = "Book a Showing",
}: CtaButtonsProps) {
  const isDark = variant === "onDark";
  const messageClass = isDark
    ? "bg-white text-blue-700 hover:bg-blue-50 focus-visible:ring-white focus-visible:ring-offset-blue-600"
    : "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600 focus-visible:ring-offset-white";
  const bookClass = isDark
    ? "border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-blue-600"
    : "border-2 border-blue-600 text-blue-700 hover:bg-blue-50 focus-visible:ring-blue-600 focus-visible:ring-offset-white";
  const napClass = isDark ? "text-white/75" : "text-slate-500";

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {ctaPhone ? (
          <a
            href={ctaPhone.href}
            className={`inline-flex items-center justify-center px-8 py-4 rounded-md font-bold text-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${messageClass}`}
          >
            Call {ctaPhone.display}
          </a>
        ) : null}
        <Link
          href="/contact"
          className={`inline-flex items-center justify-center px-8 py-4 rounded-md font-bold text-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${messageClass}`}
        >
          <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
          Send a Message
        </Link>
        <a
          href={calendly.showingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center px-8 py-4 rounded-md font-bold text-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${bookClass}`}
        >
          <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
          {bookLabel}
        </a>
      </div>
      <p className={`mt-6 text-center text-sm ${napClass}`}>
        {nap.brokerage} · {nap.fullAddress}
        {ctaPhone ? ` · Call ${ctaPhone.display}` : ""}
      </p>
    </div>
  );
}
