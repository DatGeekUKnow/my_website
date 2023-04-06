import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                    strArray={['A','b','o','u','t', ' ', 'M', 'e']}
                    idx={15}
                />
            </h1>
            <p>
                I'm a very ambitious back-end developer looking for
                a role at an established Tech company with the opportunity to work with the latest
                technologies on challenging and diverse projects.
            </p>
            <p>
                I'm confident, curious, and perpetually investigating emerging technologies.
            </p>
        </div>
        
    </div>
    )
}

export default About;