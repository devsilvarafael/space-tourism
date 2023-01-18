export const Tabs = ({tabsConfig, items, selected, updateInfo}) => {
    let tabSize;

    // Needs refactor.
    switch(tabsConfig.variant) {
        case "numbered":
            tabSize = 'max-w-[9.5rem] md:max-w-[13.12rem]';
            break;
        case "bullet":
            tabSize = 'max-w-[5.5rem]'
            break;
        default: tabSize = 'max-w-[14.81rem]'
    }

    // This function needs refactor.
    function checkStyle(index) {
        if(tabsConfig.variant === "numbered") {
            return `${selected === index ? 'bg-white text-black' : 'bg-transparent outline outline-1 outline-gray-500'}
             w-10 h-10 rounded-full md:w-14 md:h-14 md:text-base`
        }

        if (tabsConfig.variant === "bullet") {
            return `${selected === index ? 'bg-white' : 'bg-gray-500'} w-2.5 h-2.5 rounded-full`
        }
        return `${selected === index && 'border-b-2'}`
    }

    function isNumbered(item, index) {
        if(tabsConfig.variant === "numbered") {
            return <div className={"w-full h-full flex justify-center items-center md:text-2xl"}>{index + 1}</div>
        }

        if(tabsConfig.variant === "bullet") {
            return;
        }

        return item.name;
    }

    return (
        <ul className={`flex flex-row justify-between w-full uppercase text-white tracking-widest mb-4 mt-8 md:mb-11 ${tabSize}`}>
            {items.map((item, index) => (
                <li key={index} className={checkStyle(index)}
                    onClick={() => updateInfo(index)}>{isNumbered(item, index)}</li>
            ))}
        </ul>
    )
}