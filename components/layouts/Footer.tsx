import Link from "next/link";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Navigation,
} from "lucide-react";
import {
  nap,
  businessHours,
  maps,
  socialProfiles,
  SITE_URL,
  ctaPhone,
} from "@/lib/contact";
import { navLinks } from "@/lib/heartland-site";
import MlsDisclaimer from "@/components/shared/MlsDisclaimer";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h2 className="font-bold text-xl mb-4">{nap.shortName}</h2>
            <p className="text-slate-300 mb-4 text-sm">
              Independent buyer guidance for D.R. Horton Heartland Cottages at
              Tule Springs and North Las Vegas resale search. License{" "}
              {nap.license}.
            </p>
            <address className="not-italic text-slate-300 text-sm mb-4">
              {nap.street}
              <br />
              {nap.city}, {nap.state} {nap.zip}
            </address>
            <p className="text-slate-400 text-xs">{nap.brokerage}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Site map</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center hover:text-white"
                >
                  <Mail className="h-4 w-4 mr-2 shrink-0" aria-hidden="true" />
                  Contact form
                </Link>
              </li>
              <li>
                <a
                  href={maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-white"
                >
                  <Navigation
                    className="h-4 w-4 mr-2 shrink-0"
                    aria-hidden="true"
                  />
                  Directions to office
                </a>
              </li>
              <li className="flex items-start">
                <MapPin
                  className="h-4 w-4 mr-2 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>{nap.fullAddress}</span>
              </li>
              {ctaPhone ? (
                <li>
                  <a href={`tel:${ctaPhone.tel}`} className="hover:text-white">
                    {ctaPhone.display}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-slate-300 mb-6">
              {businessHours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4">
                  <span>{row.day}</span>
                  <span className="text-slate-400">{row.label}</span>
                </li>
              ))}
            </ul>
            <div className="flex space-x-3">
              <a
                href={socialProfiles.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white p-2"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialProfiles.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white p-2"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialProfiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialProfiles.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white p-2"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <MlsDisclaimer className="mt-10 text-slate-400 border-t border-slate-800 pt-8" />

        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {nap.shortName}. {nap.brokerage}. All rights
            reserved.
          </p>
          <p>
            <Link href="/security-policy" className="hover:text-slate-300">
              Privacy & security
            </Link>
            {" · "}
            <a href={`${SITE_URL}/llms.txt`} className="hover:text-slate-300">
              llms.txt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
