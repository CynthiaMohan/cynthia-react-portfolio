import React from "react";
function Nav() {
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">Cynthia Mohan</a>
            </h2>
            <nav>
                <ul>
                    {/* About Section header/link */}
                    <li className="mx-2">
                        <a href="#about" >About</a>
                    </li>
                    {/* Work/Projects Section header/Link */}
                    <li><a href="#work">Work</a></li>
                    {/* Contact Me Section header/Link */}
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <Button variant="contained" color="primary">
                            Resume
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Nav;