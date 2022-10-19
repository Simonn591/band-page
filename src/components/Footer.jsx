import React from 'react';
import '../styles/footer.scss';
import mail from '../assets/mail.png';
import bandcamp from '../assets/bandcamp.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';


const Footer = () => {
  return (
    <section className='footer-all' id='footer'>
          <h1 className='footer-title'>Středisko opilých básníků</h1>
          <div className='links-container'>
          <div className='links-mail'>
            <a href='mailto:simon.marchal2@gmail.com'>
              <img className='links-mail-img'src={mail} alt="mail"/>
            </a>
          </div>
          <div className='links-instagram'>
            <a href='https://www.linkedin.com/in/%C5%A1imon-marchal-441690144' target='_blank' rel="noreferrer">
              <img className='links-instagram-img' src={instagram} alt="instagram"/>
            </a>
          </div>
          <div className='links-facebook'>
            <a href='https://github.com/Simonn591' target='_blank' rel="noreferrer">
              <img className='links-facebook-img' src={facebook} alt="facebook"/>
            </a>
          </div>
          <div className='links-bandcamp'>
            <a href='https://github.com/Simonn591' target='_blank' rel="noreferrer">
              <img className='links-bandcamp-img' src={bandcamp} alt="bandcamp"/>
            </a>
          </div>
          <div className='links-youtube'>
            <a href='https://github.com/Simonn591' target='_blank' rel="noreferrer">
              <img className='links-youtube-img' src={youtube} alt="youtube"/>
            </a>
          </div>
        </div>
        <div className='links-presskit'>
          <a href='https://github.com/Simonn591' target='_blank' rel="noreferrer">
            <button onclick="window.location.href='https://w3docs.com';">Presskit</button>
          </a>
        </div>
    </section>
  )
}

export default Footer