import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
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
);

export default About;