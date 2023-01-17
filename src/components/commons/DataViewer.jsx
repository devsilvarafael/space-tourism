import {Fragment, useState} from "react";

import {Headline} from "./Headline.jsx";
import {Image} from "./Image.jsx";
import {Tabs} from "./Tabs.jsx";
import {ItemDescription} from "./ItemDescription.jsx";
import {PlanetTravelDetails} from "./PlanetTravelDetails.jsx";

export const DataViewer = ({data, dataViewerConfig}) => {
    const reverse = dataViewerConfig.reverseItemsOnTablet && 'md:flex-col-reverse flex-1 -mb-6'
    const [selectedItem, setSelectedItem] = useState(0)

    const updateSelectedItem = (index) => {
        setSelectedItem(index)
    }

    const item = data[selectedItem];

    return (
        <section className={`flex flex-col items-center ${reverse}`}>
            <Image
                src={item.images.png || item.images.landscape}
                alt={item.name} screen={dataViewerConfig.imageFullSize}
                imageConfig={dataViewerConfig.imageConfig}
            />

            <Tabs
                items={data}
                selected={selectedItem}
                updateInfo={updateSelectedItem}
                tabsConfig={dataViewerConfig.tabsConfig}
            />
            <ItemDescription
                data={item}
                level={dataViewerConfig.headingLevel}
                itemDescriptionConfig={dataViewerConfig.itemDescriptionConfig}
            />

            {data[selectedItem].distance &&
                <PlanetTravelDetails distance={data[selectedItem].distance} travel={data[selectedItem].travel}/>}
        </section>
    )
}

