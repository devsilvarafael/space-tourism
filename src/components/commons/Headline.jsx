export const Headline = ({number, title, menu}) => {
    return (
        <div className={"flex container tracking-widest md:justify-start md:text-2xl md:mt-10 mb-8 pl-8"}>
            <span className={`text-white ${menu && 'opacity-100'} opacity-40`}><strong>{number}</strong></span>
            <span className={"font-body uppercase ml-4 text-white"}>{title}</span>
        </div>
    )
}