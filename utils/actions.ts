'use server'

import { MessageFormData, formDataSchema, sendMessage } from '@/utils/helpers'

export async function submitMessageForm(formData: MessageFormData) {
 formDataSchema.parse(formData)
 //  await sendMessage(formData)
 console.log(formData)
}
