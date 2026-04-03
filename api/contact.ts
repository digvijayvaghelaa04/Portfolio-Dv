import { Resend } from 'resend';

// Initialize Resend with the provided API Key from Vercel Environment Variables.
// Will fail safely if the key is missing rather than crashing the whole site.
const resend = new Resend(process.env.RESEND_API_KEY || "missing_key");
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "digvijayvahelaa04@gmail.com";

export default async function handler(req: any, res: any) {
  // 1. CORS & Methods Check
  // We only accept POST requests to our contact form
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message, honeypot } = req.body;

    // 2. Security: Anti-Spam Honeypot Verification
    // Bots scan and blindly fill all fields. If 'honeypot' has a value, it's a bot!
    if (honeypot) {
      // Return a fake success to trick the bot into thinking it worked
      return res.status(200).json({ message: 'Success' });
    }

    // 3. Backend Validation Ensure required fields exist
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // 4. Send Email via Resend
    // Format the email cleanly for the intended recipient
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Default Resend testing domain (update when you have a custom domain)
      to: [CONTACT_EMAIL],
      subject: `New Portfolio Message: ${subject}`,
      reply_to: email, // Extremely helpful: allows you to hit "Reply" directly to the recruiter
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #6366f1; padding: 24px; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 24px;">New Contact Request</h2>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <p style="margin: 0 0 16px; color: #475569; font-size: 16px;">
              <strong>From:</strong> ${name} (<a href="mailto:${email}" style="color: #6366f1;">${email}</a>)
            </p>
            <p style="margin: 0 0 24px; color: #475569; font-size: 16px;">
              <strong>Subject:</strong> ${subject}
            </p>
            
            <div style="background-color: #f8fafc; padding: 24px; border-radius: 8px; border-left: 4px solid #6366f1;">
              <p style="margin: 0; color: #1e293b; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="margin: 32px 0 0; color: #94a3b8; font-size: 12px; text-align: center;">
              Submitted via Portfolio Contact Form • ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        </div>
      `,
    });

    if (data.error) {
       console.error("Resend API Error:", data.error);
       return res.status(500).json({ message: `Resend Error: ${data.error.message || 'Unknown error'}` });
    }

    // 5. Success Flow
    return res.status(200).json({ message: 'Email sent successfully!' });

  } catch (error: any) {
    console.error('Contact Form Error:', error);
    return res.status(500).json({ message: error.message || 'Internal Server Error' });
  }
}
