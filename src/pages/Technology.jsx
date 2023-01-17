import {DefaultLayout} from "../layouts/DefaultLayout.jsx";
import {DataViewer} from "../components/commons/DataViewer.jsx";

import data from "../data/data.json";
import {Headline} from "../components/commons/Headline.jsx";

export default function Technology() {
    const item = data.technology;

    return (
        <DefaultLayout background={"bg-technology-sm md:bg-technology-md lg:bg-technology-lg"}>
            <Headline number={"03"} title={"Space Launch 101"} />
            <DataViewer
                data={item}
                dataViewerConfig={{
                    headingLevel: 6,
                    tabsConfig: {
                        variant: 'numbered'
                    },
                    imageConfig: {
                        variant: "fullScreenImage",
                    },
                    itemDescriptionConfig: {
                        beforeTitle: 'The Terminology...',
                        size: 'text-sm md:text-base'
                    }

                }}
            />
        </DefaultLayout>
    )
}