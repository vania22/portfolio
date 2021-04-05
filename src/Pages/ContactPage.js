import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className='title'>
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className='ContactPage'>
                <div className='map-sect'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.431440762218!2d-0.10313618388567782!3d51.43187007962294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876040213510c45%3A0x3d6431d76b430fb4!2s36%20Dunelm%20Grove%2C%20West%20Norwood%2C%20London%20SE27%209JZ!5e0!3m2!1sen!2suk!4v1617626594685!5m2!1sen!2suk'
                        width='600'
                        height='450'
                        frameBorder='0'
                        style={{ border: 0 }}
                        allowFullScreen=''
                        aria-hidden='false'
                        tabIndex='0'
                        title='home'
                    ></iframe>
                </div>
                <div className='contact-sect'>
                    <ContactItem icon={phone} text1={'+44 7988925344'} />
                    <ContactItem icon={email} text1={'krupskiy111@gmail.com'} />
                    <ContactItem icon={location} text1={'36 Dunelm Grove, SE27 9JZ, London'} text2={'United Kingdom'} />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
