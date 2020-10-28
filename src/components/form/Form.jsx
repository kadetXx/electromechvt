import React from 'react'
import './Form.scss'

function Form() {
  return (
    <form>
      <input type="text" placeholder='Your name' />
      <input type="text" placeholder='Subject' />
      <textarea id="" cols="30" rows="10" placeholder='Message'></textarea>
      <button type='submit'>Send</button>
    </form>
  )
}

export default Form
