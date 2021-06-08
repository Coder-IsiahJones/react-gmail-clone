import { Button } from "@material-ui/core"
import React from "react"
import CloseIcon from "@material-ui/icons/Close"
import "./SendMail.css"
import { useForm } from "react-hook-form"

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className='sendMail'>
      <div className='sendMail-header'>
        <h3>New Message</h3>
        <CloseIcon className='sendMail-close' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='To'
          {...register("to", { required: true })}
        />
        {errors.to && <p className='sendMail-error'>To is Required</p>}

        <input
          type='text'
          placeholder='Subject'
          {...register("subject", { required: true })}
        />
        {errors.to && <p className='sendMail-error'>Subject is Required</p>}

        <input
          type='text'
          placeholder='Message...'
          className='sendMail-message'
          {...register("message", { required: true })}
        />
        {errors.to && <p className='sendMail-error'>Message is Required</p>}

        <div className='sendMail-options'>
          <Button
            className='sendMail-send'
            variant='contained'
            color='primary'
            type='submit'>
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
