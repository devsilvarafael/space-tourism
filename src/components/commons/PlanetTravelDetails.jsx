export const PlanetTravelDetails = ({ distance, travel }) => {
    return (
        <section className={"flex flex-col text-white md:flex-row md:max-w-md w-full justify-evenly " +
            "text-center md:mt-8 md:border-t md:border-gray-600 p-5"}>
            <div>
                <p className={"uppercase tracking-widest"}>Avg. Distance</p>
                <h5>{distance}</h5>
            </div>
            <div>
                <p className={"uppercase tracking-widest mt-8 md:mt-0"}>Est. travel time</p>
                <h5>{travel}</h5>
            </div>
        </section>
    )
}