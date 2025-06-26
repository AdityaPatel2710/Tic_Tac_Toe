import {FaTimes, FaRegEdit, FaRegCircle} from 'react-icons/fa';

function Icon({iconName}) {
    if(iconName === 'X') return <FaTimes />
    else if(iconName === 'O') return <FaRegCircle />
    return <FaRegEdit />
}

export default Icon;
