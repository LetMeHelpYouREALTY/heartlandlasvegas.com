/**
 * Follow Up Boss Events API — used only when FOLLOW_UP_BOSS_API_KEY is set.
 * Does not run unless a site visitor submits the public lead form.
 */
export type FubLead = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message?: string
  source: string
}

export async function submitLeadToFollowUpBoss(lead: FubLead): Promise<{ ok: boolean; skipped?: boolean }> {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY
  if (!apiKey) {
    return { ok: true, skipped: true }
  }

  const base = (process.env.FOLLOW_UP_BOSS_BASE_URL || 'https://api.followupboss.com/v1').replace(/\/$/, '')
  const auth = Buffer.from(`${apiKey}:`).toString('base64')

  const body = {
    source: lead.source || 'Homestead West website',
    system: 'HomesteadWestLasVegas.com',
    type: 'General Inquiry',
    message: lead.message || 'Website inquiry',
    person: {
      firstName: lead.firstName,
      lastName: lead.lastName,
      emails: [{ value: lead.email }],
      phones: [{ value: lead.phone }],
      tags: ['Homestead West', 'Website Lead'],
    },
  }

  const response = await fetch(`${base}/events`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Follow Up Boss error ${response.status}: ${text.slice(0, 200)}`)
  }

  return { ok: true }
}
