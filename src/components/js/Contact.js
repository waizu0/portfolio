import emailjs from '@emailjs/browser';

const templateParams = {
    name: 'James',
    message: 'Check this out!',
    email: 'email@email.com',
    subject: 'subject'
};


function Contact()
{

    const handleClick = (e) => {
        
        const nameInput = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        templateParams.name = nameInput;
        templateParams.message = message;
        templateParams.email = email;
        templateParams.subject = subject;
        
        e.preventDefault();
        emailjs.send('service_94r2x1f','template_g4p5drd', templateParams, 'PTdRJ4NFyVs5VqOUn')
	.then((response) => {
        document.getElementById('form').reset();
	}, (err) => {
	});
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    }

    

    return(
        <div class="intro-contact" id="contact-me">
       <h1>Contact</h1>
       
        
        <div class="form">
            <form method="post">
                <input type="text" placeholder="Name" id="name" autocomplete="off"></input>
                <input type="email" placeholder="E-mail Address" id="email" autocomplete="off"></input>
                <input type="email" placeholder="Subject" id="subject" autocomplete="off"></input>
                <textarea id="message" placeholder="Message" cols="30" rows="10"></textarea>
                <button id="send" onClick={handleClick}><p>SEND</p></button>

            </form>
        </div>

       </div>

    );
}


export default Contact;
