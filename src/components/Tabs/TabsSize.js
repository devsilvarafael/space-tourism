const TabsSize = (variant) => {
    switch(variant) {
        case "numbered":
            return 'max-w-[9.5rem] md:max-w-[13.12rem]';
        case "bullet":
            return 'max-w-[5.5rem]'
        case "named":
            return 'max-w-[14.81rem]'
    }
}

export default TabsSize;