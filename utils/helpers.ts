import z from 'zod'
import sgMail from '@sendgrid/mail'
import { emailTemplate } from '@/lib/emailTemplate'

export const formDataSchema = z.object({
 name: z.string().min(2, { message: 'Must be at least 2 characters' }).max(50),
 email: z.string().email({ message: 'Must be a valid email' }),
 message: z.string().min(2, { message: 'Message must be at least 2 characters' }).max(1000, { message: 'Message must be less than 1000 characters' }),
})

export type MessageFormData = z.infer<typeof formDataSchema>

export async function postMessage(formData: MessageFormData) {
 await fetch('/api/messages', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
 })
}

export async function sendMessage(formData: MessageFormData) {
 const { name, email, message } = formData

 const API_KEY = process.env.SENDGRID_API_KEY
 if (!API_KEY) throw new Error('Missing SENDGRID_API_KEY environment variable')
 sgMail.setApiKey(API_KEY)
 const msg = {
  to: 'jordan@jrobertsweb.dev', // Your email where you'll receive emails
  from: 'noreply@jrobertsweb.dev', // your website email address here
  subject: `From your portfolio contact form`,
  html: emailTemplate(name, email, message),
 }
 try {
  await sgMail.send(msg)
 } catch (error) {
  console.error(error)
  return error
 }
}
