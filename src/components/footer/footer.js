import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <div className="Footer">
            <div className="foot">
                <div className="contacto">
                <p>E-Mail: <a href="mailto:alejandroocampol@gmail.com">Alejandroocampol@gmail.com</a></p>
                <p>Phone: +57 300 8637165</p>
            </div>
            <div className="enlaces">
                <a href="https://www.linkedin.com/in/alejandro-ocampo-l%C3%B3pez-882773207/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/AlejandrOcLz" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="derechos">
                <p>&copy; 2023 Alejandro Ocampo López. All rights reserved.</p>
            </div>
        </div>
            
        </div>
    )
}

export default Footer;