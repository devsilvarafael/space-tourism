export const Headline = ({number, title, menu}) => {
    return (
        <div className={"flex container justify-center tracking-widest md:justify-start md:text-2xl     md:mt-10 md:pl-6"}>
            <span className={`text-white ${menu && 'opacity-100'} opacity-40`}><strong>{number}</strong></span>
            <span className={"font-body uppercase ml-4 text-white"}>{title}</span>
        </div>
    )
}