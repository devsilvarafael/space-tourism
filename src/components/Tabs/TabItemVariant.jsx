const TabItemVariant = ({ variant, item, selected, index, onClick }) => {
    if(variant === "numbered") {
        return (
            <li className={`w-10 h-10 rounded-full flex justify-center items-center 
                md:w-14 md:h-14 md:text-base md:text-2xl
                ${selected === index ? 'bg-white text-black' : 'bg-transparent outline outline-1 outline-gray-500'}
            `} onClick={onClick}
            >
                {index + 1}
            </li>
        )
    }

    if(variant === "named") {
        return (
            <li className={`${selected === index && 'border-b-2'}`} onClick={onClick}>
                {item.name}
            </li>
        )
    }

    if(variant === "bullet") {
        return (
            <li className={`w-2.5 h-2.5 rounded-full
                ${selected === index ? 'bg-white' : 'bg-gray-500'}
            `} onClick={onClick}>
            </li>
        )
    }
}

export default TabItemVariant;