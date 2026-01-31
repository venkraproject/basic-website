import './wa.css'
import {BsWhatsapp} from 'react-icons/bs'
import socialLinks from '../../config/socialLinks'

const Wa = () => {
  return (
    <div className='WA__section' key="wa">
      <a className='whatsapp-icon' href={socialLinks.whatsapp} target='_blank' rel='noreferrer'><BsWhatsapp/></a>
    </div>
  )
}

export default Wa
