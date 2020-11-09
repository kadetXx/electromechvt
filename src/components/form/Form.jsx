import React, { useState } from "react";
import "./Form.scss";

function Form() {
  const [name, setName] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        required
        type='text'
        placeholder='Your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        type='text'
        placeholder='Subject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        required
        id=''
        cols='30'
        rows='10'
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <a
        target='_blank'
        rel='noreferrer noopener'
        href={`mailto:${`contact@electromechanicsvt.com`}?subject=${name}: ${subject}&body=${message}`}
      >
        <button type='button'>Send</button>
      </a>
    </form>
  );
}

export default Form;
