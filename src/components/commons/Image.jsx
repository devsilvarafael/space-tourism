export const Image = ({ src, alt, imageConfig }) => {
    const border = imageConfig.border && 'border-b border-gray-600 md:border-none'
    let variant;

    if (imageConfig.variant === "medium") {
        variant = 'md:max-h-[300px] md:max-w-[300px]';
    }

    if (imageConfig.variant === "large") {
        variant = 'md:h-[33.25rem]'
    }

    if (imageConfig.variant === "fullScreenImage") {
        variant = 'w-screen p-0';
    }

    return (
        <figure className={`w-full h-full ${border} mt-8`}>
            <img src={`./src/${src}`} alt={alt} className={`${variant} max-h-56 md:max-h-full m-auto`}/>
        </figure>
    )
}