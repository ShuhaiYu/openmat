import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, discipline, email, chinaReach } = req.body

    if (!name || !discipline || !email || !chinaReach) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    const { data, error } = await resend.emails.send({
      from: 'OpenMat <noreply@openmat.com.cn>',
      to: ['shen@openmat.com.cn'],
      subject: `New Talent Application - ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #171717; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">New Talent Application</h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #737373; width: 120px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #171717; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #737373;">Discipline</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #171717; font-weight: 500;">${discipline}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #737373;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #171717; font-weight: 500;">
                <a href="mailto:${email}" style="color: #171717;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #737373;">China Reach</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #171717; font-weight: 500;">${chinaReach}</td>
            </tr>
          </table>

          <p style="margin-top: 24px; color: #a3a3a3; font-size: 12px;">
            Submitted: ${timestamp} (Shanghai Time)
          </p>
        </div>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true, id: data.id })
  } catch (error) {
    console.error('Server error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
