import './index.scss';
import LogoTitle from '../../assets/images/logo-c.png'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoTitle} alt="developer"/>
                asey Whitener
                <br />
                Software Developer
                </h1>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home;