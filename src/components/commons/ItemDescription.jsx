export const ItemDescription = ({level, data, itemDescriptionConfig}) => {
    switch (level) {
        case 1:
            level = 'text-heading-1'
            break;
        case 2:
            level = 'text-heading-2'
            break;
        case 3:
            level = `text-heading-3 ${itemDescriptionConfig.headingSize}`
            break;
        case 4:
            level = 'text-heading-4'
            break;
        case 5:
            level = 'text-heading-5'
            break;
        case 6:
            level = 'text-heading-6 md:text-4xl'
            break;
    }

    return (

        <div className={"text-center w-full flex flex-col items-center min-h-[210px]"}>
            {itemDescriptionConfig && <p className={`text-light-blue uppercase tracking-widest ${itemDescriptionConfig.size} text-base mb-1 md:mb-4`}>{itemDescriptionConfig.beforeTitle}</p>}
            {data.role && <p className={"text-gray-400 uppercase md:mb-1 md:text-2xl font-heading"}>{data.role}</p>}
            <span className={`text-white uppercase ${level} font-heading`}>{data.name || data.title}</span>
            <p className={"text-light-blue font-barlow leading-6 w-[327px] md:w-[27rem] text-[0.93rem] mt-4"}>{data.description || data.bio}</p>
        </div>
    )
}