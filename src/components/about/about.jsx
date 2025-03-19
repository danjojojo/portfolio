import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import me from '../../assets/images/me.jpg';
import PUPLogo from '../../assets/images/PUPLogo.png';
import { useState, useEffect } from 'react';
import quotes from '../../data/quotes.json'

const About = () => {

    const interests = [
        [faGlobe, 'Web Development'],
        [faGears, 'System Analysis and Design'],
        [faPaintBrush, 'UI/UX Design'],
        [faMicrochip, 'Embedded Systems']
    ];

    const [quote, setQuote] = useState('If the code works, don\'t fix it.');
    const [quoteBy, setQuoteBy] = useState('danjo');

    const getRandomQuotes = async () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex].text);
        setQuoteBy(quotes[randomIndex].author);
    }

    useEffect(() => {
        getRandomQuotes();
    }, []);

    return (
        <div className="about">

            <div className="me">
                <div className="left">
                    <img src={me} alt="Daniel John Y. Molina" />
                </div>

                <div className="right">
                    <div className="name-resume">
                        <h1 className='title'>Daniel John Y. Molina</h1>
                    </div>

                    <div className="school">
                        <img src={PUPLogo} alt="Polytechnic University of the Philippines" />
                        <p>BS Information Technology - PUP Manila</p>
                    </div>
                    
                    <div className="addresses">
                        <p>📍 Quezon City, Philippines</p>
                        <p>📍 Laguna, Philippines</p>
                    </div>
                </div>
            </div>

            <div className="quote">
                <p className='title'>Quote of the day</p>
                <p className='text'>"{quote}"</p>
                <p className='author'>- {quoteBy}</p>
            </div>

            <div className="description">
                <p>
                    Just a guy interested in technology.
                </p>
            </div>

            <div className="interests-list">
                {interests.map((interest, index) => (
                    <div className="interest" key={index}>
                        <FontAwesomeIcon icon={interest[0]} />
                        <p>{interest[1]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About;