import './contact.css'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import socialLinks from '../../config/socialLinks'

const Contact = () => {
  return (
    <section id='contact' className="container contact__container">
      <div className="contact-center">
        Contáctanos
      </div>
      <div className="contact__options">
        <article className="contact__option">
          <BsMessenger className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>venkra.com/fb</h5>
          <a href={socialLinks.messenger.url} target='_blank' rel='noreferrer'>Escríbenos</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <h5>+57 304 60 500 80</h5>
          <a href={socialLinks.whatsapp.url} target='_blank' rel='noreferrer'>Escríbenos</a>
        </article>
      </div>
      {/* <form action="">
        <input type="text" name='name' placeholder='Tu Nombre Completo' required />
        <input type="email" name='email' placeholder='Tu Correo Electrónico' required />
        <textarea name="message" id="form-message" rows="5" required></textarea>
        <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
      </form> */}
    </section>
  )
}

export default Contact
