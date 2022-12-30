import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

function NavBar()
{
    const navRef = useRef();

    function scrollHandler(id)
    {
        const skillsSection = document.getElementById(id);
        skillsSection.scrollIntoView({ behavior: "smooth" });
    }
    

    const showNavbar = () =>
    {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <h1 class="logo">waizudev</h1>
            <nav ref={navRef}>
                <button onClick={() => scrollHandler('skills')}>Skills</button>
                <button onClick={() => scrollHandler('projects')}>Projects</button>
                <button onClick={() => scrollHandler('contact-me')}>Contact Me!</button>


                

                


            </nav>

      

        </header>
    );
}

export default NavBar;