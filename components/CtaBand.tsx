import GbpActions from '@/components/GbpActions'
import LeadForm from '@/components/LeadForm'
import { ADDRESS_LINE, PHONE_DISPLAY, PHONE_TEL_HREF } from '@/lib/site-contact'

type CtaBandProps = {
  heading: string
  body?: string
  source: string
  showForm?: boolean
}

export default function CtaBand({
  heading,
  body = 'Call, get directions, or leave a Google review — then tell Dr. Jan which Homestead West plan you want to tour.',
  source,
  showForm = true,
}: CtaBandProps) {
  return (
    <section className="py-16 bg-[#1a365d] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-lg text-blue-100 mb-6">{body}</p>
          <GbpActions className="justify-center mb-6" compact />
          <p className="text-sm text-blue-100 mb-8">
            <a href={PHONE_TEL_HREF} className="text-[#d4af37] font-semibold hover:text-[#f4d03f]">
              {PHONE_DISPLAY}
            </a>
            {' · '}
            {ADDRESS_LINE}
          </p>
          {showForm ? (
            <div className="text-left">
              <LeadForm source={source} heading="Request a private tour" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
