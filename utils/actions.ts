'use server'

import { MessageFormData, formDataSchema, sendMessage } from '@/utils/helpers'

export async function submitMessageForm(formData: MessageFormData) {
 try {
  formDataSchema.parse(formData)
  await sendMessage(formData)
 } catch (error) {
  console.error(error)
  return error
 }
}
