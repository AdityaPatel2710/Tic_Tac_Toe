import {FaTimes, FaRegEdit, FaRegCircle} from 'react-icons/fa';

function Icon({iconName}) {
    if(iconName === 'cross') return <FaTimes />
    else if(iconName === 'circle') return <FaRegCircle />
    return <FaRegEdit />
}

export default Icon;
