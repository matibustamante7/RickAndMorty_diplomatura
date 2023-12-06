import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
export default function Footer() {

    const handleVisitGithub = () => {
        const githubUrl = 'https://github.com/matibustamante7/RickAndMorty_diplomatura';
        window.open(githubUrl, '_blank'); // '_blank' abre el enlace en una nueva pestaña
    };

    return (
        <div className='footer'>
            <h2>Matias Bustamante</h2>
            {/* Utiliza el componente FontAwesomeIcon y pasa el icono faGithub como propiedad */}
            <div className="icons_container">
                <h4>Visit the project repository</h4>
                <FontAwesomeIcon icon={faGithub} className='icon' onClick={handleVisitGithub} />
            </div>
        </div>
    );
}
