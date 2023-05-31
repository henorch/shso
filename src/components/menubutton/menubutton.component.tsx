import { AiOutlineMenu } from "react-icons/ai"
import { useMainContext } from "../../context/mainContext";
import './menu.style.scss'

const MenuButton = () => {
    const { openMenu } = useMainContext();
        return <AiOutlineMenu 
        onClick={openMenu}
        className='menu'/>
}
export default MenuButton;