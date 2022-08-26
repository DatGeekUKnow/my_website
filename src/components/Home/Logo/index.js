/* Deprecated... requires gsap which costs money.  the idea was to animate my last name like it's being drawn on the webpage background */
/* No dice...  Guess I'll stick with no fancy background drawing animation */

import './index.scss';
import { useRef } from 'react';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();

    return (
        <div className="logo-container" ref={bgRef}>
    
          

        </div>
      )
    }

export default Logo;