import {DefaultLayout} from "../layouts/DefaultLayout.jsx";
import {DataViewer} from "../components/commons/DataViewer.jsx";

import data from "../data/data.json"
import {Headline} from "../components/commons/Headline.jsx";

export default function Destination() {
    const config = {
        tabsConfig: {
            variant: 'named'
        },
        imageConfig: {
            variant: 'medium'
        },
        itemDescriptionConfig: {
          headingSize: 'text-[80px]'
        },
        headingLevel: 3,
    }

    return (
        <DefaultLayout background={"bg-destination-sm md:bg-destination-md lg:bg-destination-lg"}>
            <Headline number={"01"} title={"Pick Your Destination"} />
            <DataViewer
                data={data.destinations}
                dataViewerConfig={config}
            />
        </DefaultLayout>
    )
}