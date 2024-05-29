import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { useMainContext } from '../../context/mainContext';
import MenuButton from '../menubutton/menubutton.component';
import logo from '../../assets/admin/b.png';

const MobileNav = () => {
    return (
        <div className="mobileNav">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '210px'
            }}>
                <img src={logo} alt='logo' width="120px" height="120px" />
                <h4 style={{
                    marginLeft: '-15px'
                }}>STATE HIGH SCHOOL OYEWOLE '04</h4>
            </div>
            <MenuButton />
        </div>
    )
}
export default MobileNav;