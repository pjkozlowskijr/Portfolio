import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
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
                <form>
                    <table>
                        <tr>
                            <td><label for="name"><strong>Name: </strong></label></td>
                            <td><input type="text" id="name" placeholder="Your name..."></input></td>
                        </tr>
                        <tr>
                            <td><label for="email"><strong>Email: </strong></label></td>
                            <td><input type="email" id="email" placeholder="Your email..."></input></td>
                        </tr>
                        <tr>
                            <td><label for="message"><strong>Message: </strong></label></td>
                            <td><textarea id="message" placeholder="Your message..."></textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input id="submit" type="submit" value="Submit"></input></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}