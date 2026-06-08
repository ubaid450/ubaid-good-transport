import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadEmail(
  subject: string,
  html: string
) {
  if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY not configured");
    return;
  }

  await resend.emails.send({
    from:
      process.env.EMAIL_FROM ||
      "Ubaid Goods Transport <onboarding@resend.dev>",
    to: [
      process.env.LEAD_NOTIFY_EMAIL ||
      "ubaidtransport5482@gmail.com",
    ],
    subject,
    html,
  });
}