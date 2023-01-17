export const Headline = ({number, title}) => {
    return (
        <div className={"flex container justify-center tracking-widest md:justify-start md:text-2xl mb-14 md:mt-10"}>
            <span className={"text-white opacity-40"}><strong>{number}</strong></span>
            <span className={"font-body uppercase ml-4 text-white"}>{title}</span>
        </div>
    )
}