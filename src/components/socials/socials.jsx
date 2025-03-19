import "./socials.scss";
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import gmail from '../../assets/images/gmail.png';
import docs from '../../assets/images/docs.png';

const Socials = () => {
    return (
        <div className="socials">
            <a href="https://www.linkedin.com/in/daniel-john-molina/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="Contact via LinkedIn" />
                <p>My LinkedIn</p>
            </a>

            <a href="https://github.com/danjojojo" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="View Github" />
                <p>My Github</p>
            </a>

            <a href="mailto:dnljhnmolina@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={gmail} alt="Contact via Gmail" />
                <p>Contact via Gmail</p>
            </a>

            <a href="https://drive.google.com/file/d/1zC1_kWSh6GJfU8ohwisfGzSNRYVpX3l3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <img src={docs} alt="View Resume" />
                <p>My Resume</p>
            </a>
        </div>
    )
}

export default Socials;