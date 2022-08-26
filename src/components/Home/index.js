import './index.scss';
import LogoTitle from '../../assets/images/logo-c.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 's', 'e', 'y', ' ', 'W', 'h', 'i', 't', 'e', 'n', 'e', 'r'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                  <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>i,</span>
                  <br/>
                  <span className={`${letterClass} _13`}>I</span>
                  <span className={`${letterClass} _14`}>'m</span>
                  <img src={LogoTitle} alt="developer"/>
                  <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    delay={15}/>
                  <br />
                  <AnimatedLetters letterClass={letterClass}
                  strArray={jobArray}
                  delay={22}/>
                </h1>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        </>
    );
}

export default Home;