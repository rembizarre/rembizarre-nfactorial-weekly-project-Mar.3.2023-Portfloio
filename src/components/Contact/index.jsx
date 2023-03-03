import React from 'react'
import { email, linkedin, whatssapp } from '../../assets'
import './index.scss'

export default function Contact() {

  return (
    <div className='contact'>
        <h3>Say hello</h3>
        <p>You can reach me with one of the following methods</p>
        <div className='contact_button'>
            <button onClick={()=> {window.open("https://www.linkedin.com/in/rustem-usserov-8015661a/", '_blank')}}><img src={linkedin} alt="" /></button>
            <button onClick={()=> {window.open("mailto:usrustem@gmail.com", '_blank')}}><img src={email} alt="" /></button>
            <button onClick={()=> {window.open("https://api.whatsapp.com/send/?phone=77019745342&text&type=phone_number&app_absent=0", '_blank')}}><img src={whatssapp} alt="" /></button>
        </div>
    </div>
  )
}
