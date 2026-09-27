import { NextRequest, NextResponse } from 'next/server'
import { submitLeadToFollowUpBoss } from '@/lib/fub/client'

export const runtime = 'nodejs'

type LeadBody = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  source?: string
}

function isLeadBody(value: unknown): value is LeadBody {
  return typeof value === 'object' && value !== null
}

export async function POST(request: NextRequest) {
  try {
    const json: unknown = await request.json()
    if (!isLeadBody(json)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const firstName = (json.firstName || '').trim()
    const lastName = (json.lastName || '').trim()
    const email = (json.email || '').trim()
    const phone = (json.phone || '').trim()
    const message = (json.message || '').trim()
    const source = (json.source || 'website').trim()

    if (firstName.length < 2 || lastName.length < 2) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }
    if (phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json({ error: 'Valid phone is required' }, { status: 400 })
    }

    await submitLeadToFollowUpBoss({
      firstName,
      lastName,
      email,
      phone,
      message,
      source,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Lead submit failed', error)
    return NextResponse.json(
      { error: 'Unable to save this inquiry. Please call (702) 299-6607.' },
      { status: 500 }
    )
  }
}
