import MenuButton from '../menubutton/menubutton.component';
import './header.style.scss';
import logo from '../../assets/admin/logo.jpg';
import MobileNav from './mobileNav';
import StickyNav from './stickyNav';

const Header = () => {
    return(
        <>
        <MobileNav/>
        <div className="mainImage">
            <div className='menu2'>
                <MenuButton/>
            </div>
            <div className="mainer">
                 <h4>the</h4>
                 <img src={logo} alt="logo" width="250px"/>
                <b className="name">SHSO Alumni`2004</b>
                <p>ASSOCIATION</p>
            </div>
        </div>
        <StickyNav/>
        
        </>
    )
}

export default Header;