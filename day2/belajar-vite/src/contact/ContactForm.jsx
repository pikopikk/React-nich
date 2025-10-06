import {useImmer} from 'use-immer'

const initialData= {
  name: '',
  message: ''
}

export default function ContactForm(){
  const [contact, setContact] = useImmer(initialData)

  function handleNameChange(e){
    setContact(draft =>{
      draft.name= e.target.value
    })
  }
  function handleMessageChange(e){
    setContact(draft =>{
      draft.message= e.target.value
    })
  }

  return(
    <div>
      <h1>
        contact form
      </h1>

      <input type="text" placeholder="name" value={contact.name} onChange={handleNameChange}/>
      <br />
      <input type="text" placeholder="message" value={contact.message} onChange={handleMessageChange}/>

      <h1>
        contact detail
      </h1>
      <p>
        name: {contact.name}
      </p>
      <p>
        message: {contact.message}
      </p>
    </div>
  )
}