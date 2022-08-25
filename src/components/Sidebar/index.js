import './index.scss';
import LogoW from '../../assets/images/logo-w.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoW} alt="logo" />
            <img src={LogoSubtitle} alt="whitener" />
        </Link>
    </div>
);

export default Sidebar