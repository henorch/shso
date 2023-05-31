import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { useMainContext } from '../../context/mainContext';
import MenuButton from '../menubutton/menubutton.component';

const MobileNav = () => {
    return(
        <div className="mobileNav">
            <>
            <MenuButton/>
                <b style={{
                    marginLeft:10,
                    fontSize:"1em"
                }}>SHSO'04</b>
            
            </>
            <AiOutlineSearch style={{
                fontSize:"1.5em"
            }}/>
        </div>
    )
}
export default MobileNav;