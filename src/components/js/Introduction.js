import { TypeAnimation } from 'react-type-animation';
import { AiOutlineDownload } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';




function Introduction()
{

    function clickHandler()
    {
        window.location.href = '../../../docs/Resume.pdf'
    }
    
    return(
        <div class="intro">

            <div class="type">
       <TypeAnimation
      sequence={[
        'Hello! I am a Unity Dev!',
        2000, // Waits 1s
        'Hello! I am a JavaScript Dev!',
        2000,

      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    />

        </div>
        
        <div class="description">
            <p>Hello, i'm <strong>Lorran de Barros</strong>! I am a <strong>Unity Engine</strong> and <strong>JavaScript</strong> developer who loves learning new technologies. I have experience working on various projects and am always looking to improve my skills.</p>



            <button class="curriculum" onClick={clickHandler}><AiOutlineDownload class="download-icon" span style={{play:'inline-flex', alignItems: 'center'}}/>Download CV.pdf</button>
            <div class="container">
            <button class="github" onClick={() => window.open('https://github.com/waizu0', '_blank')}><AiFillGithub /></button>           
            <button class="linkedin"><AiFillLinkedin /></button>

            </div>

        </div>

        <div class="avatar">
            <img src="../../../img/lorran.png" ></img>
        </div>

    

        </div>
        

        
    );
}

export default Introduction;
