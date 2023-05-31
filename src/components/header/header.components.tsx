import MenuButton from '../menubutton/menubutton.component';
import './header.style.scss'
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
                <b className="name">STATE HIGH SCHOOL OYEWOLE (SHSO), AGEGE ALUMNI CLASS 2004</b>
                <p>ASSOCIATION</p>
            </div>
        </div>
        <StickyNav/>
        
        </>
    )
}

export default Header;