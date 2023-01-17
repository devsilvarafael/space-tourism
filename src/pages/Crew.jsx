import {DefaultLayout} from "../layouts/DefaultLayout.jsx";
import {DataViewer} from "../components/commons/DataViewer.jsx";

import data from "../data/data.json"
import {Headline} from "../components/commons/Headline.jsx";
export default function Crew() {
    const config = {
        tabsConfig: {
            variant: 'bullet'
        },
        imageConfig: {
            variant: 'large',
            border: true,
        },
        reverseItemsOnTablet: true,
        headingLevel: 6,
    }
    return (
        <DefaultLayout background={"bg-crew-sm md:bg-crew-md lg:bg-crew-lg"}>
            <Headline number={"02"} title={"Meet Your Crew"} />
            <DataViewer
                data={data.crew}
                dataViewerConfig={config}
            />
        </DefaultLayout>
    )
}