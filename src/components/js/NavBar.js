import {useRef} from "react";

function NavBar()
{
    const navRef = useRef();

    function scrollHandler(id)
    {
        const skillsSection = document.getElementById(id);
        skillsSection.scrollIntoView({ behavior: "smooth" });
    }
    

    return(
        <header>
            <h1 class="logo">waizudev</h1>
            <nav ref={navRef}>
                <button onClick={() => scrollHandler('skills')}>Skills</button>
                <button onClick={() => scrollHandler('my-work')}>My Work</button>
                <button onClick={() => scrollHandler('contact-me')}>Contact Me!</button>

            </nav>

      

        </header>
    );
}

export default NavBar;