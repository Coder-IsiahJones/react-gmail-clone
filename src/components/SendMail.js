import { Button, ButtonGroup, IconButton } from "@material-ui/core"
import React from "react"
import CloseIcon from "@material-ui/icons/Close"
import "./SendMail.css"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { closeSendMessage } from "../features/mailSlice"
import { db } from "../firebase"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import FormatColorTextIcon from "@material-ui/icons/FormatColorText"
import AttachFileIcon from "@material-ui/icons/AttachFile"
import InsertLinkIcon from "@material-ui/icons/InsertLink"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import ImageIcon from "@material-ui/icons/Image"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption"
import firebase from "firebase"

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (formData) => {
    console.log(formData)
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    dispatch(closeSendMessage())
  }

  const dispatch = useDispatch()

  return (
    <div className='sendMail'>
      <div className='sendMail-header'>
        <h3>New Message</h3>
        <CloseIcon
          className='sendMail-close'
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='To'
          type='email'
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
          <ButtonGroup>
            <Button
              className='sendMail-send'
              variant='contained'
              color='primary'
              type='submit'>
              Send
            </Button>

            <Button
              className='sendMail-carrot'
              color='primary'
              variant='contained'
              size='small'>
              <ArrowDropDownIcon className='carrot' />
            </Button>
          </ButtonGroup>

          <div className='sendMail-Icons'>
            <IconButton>
              <FormatColorTextIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <AttachFileIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <InsertLinkIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <InsertEmoticonIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <CloudUploadIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <ImageIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <EnhancedEncryptionIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <MoreVertIcon fontSize='small' />
            </IconButton>
            <IconButton>
              <DeleteIcon fontSize='small' />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SendMail
