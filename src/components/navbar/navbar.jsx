import './navbar.scss'
import Socials from '../socials/socials';
import { motion } from 'framer-motion';

const NavBar = () => {

    const year = new Date().getFullYear();
    return (
        <div className="navbar">
            <div className='upper'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2 }}
                    transition={{ duration: 2 }}
                    className="navbar-content"
                >
                    {/* <p className='name'>hi! i am dj.</p> */}
                    <Socials />
                </motion.div>
            </div>
            <div className="lower">
                <p>{year}</p>
            </div>
        </div>
    )    
}

export default NavBar;