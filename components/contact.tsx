'use client'
import { FC } from 'react'
import { SyncLoader } from 'react-spinners'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formDataSchema, MessageFormData } from '@/utils/helpers'
import { submitMessageForm } from '@/utils/actions'
import { useState } from 'react'

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
 const heading = "Let's talk!"
 const [isSuccess, setIsSuccess] = useState(false)
 const [isError, setIsError] = useState(false)

 const {
  register,
  handleSubmit,
  reset,
  formState: { errors, isSubmitting },
 } = useForm<MessageFormData>({
  resolver: zodResolver(formDataSchema),
 })

 const onSubmit = async (data: MessageFormData) => {
  await submitMessageForm(data)
  setIsSuccess(true)
  setTimeout(() => {
   setIsSuccess(false)
  }, 4000)
  reset()
 }

 const onError = (errors: any) => {
  console.log(errors)
  setIsError(true)
  setTimeout(() => {
   setIsError(false)
  }, 4000)
 }

 const inputClasses = 'text-base p-2 bg-bg-primary border-2 border-white focus-visible:ring-2 focus-visible:ring-white focus-within:outline-none font-secondary'

 return (
  <div className='bg-bg-secondary w-full px-6 pb-6 '>
   <h2 className='text-center p-4 text-2xl font-primary'>{heading}</h2>
   <form
    onSubmit={(e) =>
     handleSubmit(
      onSubmit,
      onError
     )(e).catch((e) => {
      console.log(e)
     })
    }>
    <div className='flex flex-col md:flex-row md:gap-8'>
     <div className='flex flex-col pb-2 pt-6 w-full'>
      {errors.name && <p className='text-xs text-red-600'>{errors.name?.message}</p>}

      <label
       className='text-base'
       htmlFor='name'>
       Your name:
      </label>
      <input
       className={inputClasses}
       id='name'
       type='text'
       {...register('name')}
      />
     </div>
     <div className='flex pb-2 flex-col pt-6 w-full'>
      {errors.email && <p className='text-xs text-red-600'>{errors.email?.message}</p>}
      <label
       className='text-base'
       htmlFor='email'>
       Your email:
      </label>

      <input
       className={inputClasses}
       id='email'
       type='email'
       {...register('email')}
      />
     </div>
    </div>
    <div className='flex pt-6 pb-4 flex-col'>
     {errors.message && <p className='text-xs text-red-600'>{errors.message?.message}</p>}
     <label
      className='text-base'
      htmlFor='message'>
      Your message:
     </label>

     <textarea
      className='text-base p-2 w-full bg-bg-primary border-2 border-white  focus-visible:ring-2 focus-visible:ring-white focus-within:outline-none font-secondary'
      id='message'
      cols={30}
      rows={10}
      {...register('message')}
     />
    </div>
    <div className='flex flex-col justify-end'>
     {isError && <p className='text-xs text-red-600 text-center'>Something went wrong, please try again.</p>}
     <button
      type='submit'
      className='text-base w-full bg-bg-secondary border-2 border-white py-2 px-4 hover:bg-bg-primary focus-visible:ring-2 focus-visible:ring-white focus-within:outline-none '>
      {isSuccess ? 'Sent!' : 'Send'}
      <SyncLoader
       loading={isSubmitting}
       color='#fff'
       size={10}
      />
     </button>
    </div>
   </form>
  </div>
 )
}

export default Contact
