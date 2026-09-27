'use client'

import { FormEvent, useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL_HREF, ADDRESS_LINE } from '@/lib/site-contact'

type LeadFormProps = {
  source: string
  heading?: string
  submitLabel?: string
}

type FieldErrors = Partial<Record<'firstName' | 'lastName' | 'email' | 'phone' | 'message', string>>

export default function LeadForm({
  source,
  heading = 'Request a private Homestead West tour',
  submitLabel = 'Send to Dr. Jan',
}: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [serverMessage, setServerMessage] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = {
      firstName: String(data.get('firstName') || '').trim(),
      lastName: String(data.get('lastName') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      message: String(data.get('message') || '').trim(),
      source,
    }

    const nextErrors: FieldErrors = {}
    if (payload.firstName.length < 2) nextErrors.firstName = 'First name required'
    if (payload.lastName.length < 2) nextErrors.lastName = 'Last name required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) nextErrors.email = 'Valid email required'
    if (payload.phone.replace(/\D/g, '').length < 10) nextErrors.phone = 'Valid phone required'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    setServerMessage('')
    try {
      const response = await fetch('/api/leads/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = (await response.json()) as { error?: string; success?: boolean }
      if (!response.ok) {
        setStatus('error')
        setServerMessage(json.error || `Unable to send right now. Call ${PHONE_DISPLAY}.`)
        return
      }
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setServerMessage(`Network error. Call ${PHONE_DISPLAY} or email DrJanSells@HomesteadWestLasVegas.com.`)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-green-900">
        <p className="font-semibold text-lg mb-2">Request received.</p>
        <p>
          Dr. Jan Duffy will follow up. For faster help call{' '}
          <a className="underline font-semibold" href={PHONE_TEL_HREF}>
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    )
  }

  const fieldClass =
    'mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#1a365d] focus:outline-none focus:ring-1 focus:ring-[#1a365d]'

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900">{heading}</h3>
      <p className="text-sm text-gray-600">
        Homestead West | Homes by Dr Jan Duffy · {ADDRESS_LINE} · {PHONE_DISPLAY}
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm font-medium text-gray-800">
          First name
          <input className={fieldClass} name="firstName" autoComplete="given-name" required />
          {errors.firstName ? <span className="text-red-600 text-sm">{errors.firstName}</span> : null}
        </label>
        <label className="block text-sm font-medium text-gray-800">
          Last name
          <input className={fieldClass} name="lastName" autoComplete="family-name" required />
          {errors.lastName ? <span className="text-red-600 text-sm">{errors.lastName}</span> : null}
        </label>
      </div>
      <label className="block text-sm font-medium text-gray-800">
        Email
        <input className={fieldClass} name="email" type="email" autoComplete="email" required />
        {errors.email ? <span className="text-red-600 text-sm">{errors.email}</span> : null}
      </label>
      <label className="block text-sm font-medium text-gray-800">
        Phone
        <input className={fieldClass} name="phone" type="tel" autoComplete="tel" required />
        {errors.phone ? <span className="text-red-600 text-sm">{errors.phone}</span> : null}
      </label>
      <label className="block text-sm font-medium text-gray-800">
        How can Dr. Jan help?
        <textarea className={fieldClass} name="message" rows={4} />
      </label>
      {status === 'error' ? <p className="text-red-700 text-sm">{serverMessage}</p> : null}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-lg bg-[#1a365d] px-4 py-3 font-bold text-white hover:bg-[#0f2439] disabled:opacity-50 min-h-[44px]"
      >
        {status === 'submitting' ? 'Sending…' : submitLabel}
      </button>
    </form>
  )
}
