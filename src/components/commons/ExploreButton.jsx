export const ExploreButton = () => {
    const hovering = "hover:outline hover:outline-[40px] hover:outline-gray-800/50"

    return (
        <button
            className={`w-40 h-40 md:w-60 md:h-60 bg-white rounded-full text-2xl md:text-3xl uppercase font-heading ${hovering}`}>
            Explore
        </button>
    )
}