import { sisterLinks } from "@/lib/heartland-site";

export default function SisterLinks() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Related Tule Springs resources
        </h2>
        <ul className="space-y-3 text-left inline-block">
          {sisterLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-blue-700 font-medium hover:underline"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
