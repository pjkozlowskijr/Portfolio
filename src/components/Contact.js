import { useRef } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const contact_number = Math.random() * 100000 | 0;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('default_service', 'contact_form', form.current, 'KlBx0GIMp8GUxNj1I')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return(
        <div className='container flex flex-row'>
            <div className='basis-6/12'>
                <h1>Let's Connect!</h1>
                <p>I welcome the opportunity to connect with companies and organizations on potential employment. I'd also love to work with like-minded individuals looking to learn and expand our skillsets together. Reach out to me through one of the methods below or the form to the right. I can't wait to chat with you!</p>
                <div>
                    <ul>
                        <li className='inline'><a href="mailto:pjkozlowskijr@gmail.com"><EmailIcon className='rounded-full border-2 p-0.5'/></a></li>
                        <li className='inline'><a href="https://www.linkedin.com/in/pjkozlowskijr" target="_blank" rel="noreferrer"><LinkedInIcon /></a></li>
                        <li className='inline'><a href="https://www.github.com/pjkozlowskijr" target="_blank" rel="noreferrer"><GitHubIcon /></a></li>
                    </ul>
                </div>
            </div>
            <div className='basis-6/12'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" defaultValue={contact_number}></input>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="user_name"><strong>Name: </strong></label></td>
                                <td><input type="text" id="user_name" name="user_name" placeholder="Your name..."></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="user_email"><strong>Email: </strong></label></td>
                                <td><input type="email" id="user_email" name="user_email" placeholder="Your email..."></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="message"><strong>Message: </strong></label></td>
                                <td><textarea id="message" name="message" placeholder="Your message..."></textarea></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input id="submit" type="submit" value="Submit"></input></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}