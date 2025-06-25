import {FaTimes, FaRegEdit, FaRegCircle} from 'react-icons/fa';

function Icon({iconName}) {
    if(iconName === 'circle') return <FaTimes />
    else if(iconName === 'cross') return <FaRegCircle />
    return <FaRegEdit />
}

export default Icon;
