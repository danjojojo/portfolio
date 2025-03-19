import './wrapper.scss';
import NavBar from '../navbar/navbar';
import MainPage from '../mainpage/mainpage';

const Wrapper = () => {
    return (
        <div className="wrapper">
            <MainPage />
            <NavBar />
        </div>

    )
}

export default Wrapper;