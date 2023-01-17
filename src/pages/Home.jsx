import {DefaultLayout} from "../layouts/DefaultLayout.jsx";
import {ItemDescription} from "../components/commons/ItemDescription.jsx";
import {ExploreButton} from "../components/commons/ExploreButton.jsx";

export default function Home() {
    const homeData = {
        'title': 'Space',
        'subtitle': 'So, you want to travel to',
        'description': 'Let’s face it; if you want to go to space, you might as well genuinely go to outer space and' +
            ' not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of' +
            ' this world experience!'
    }

    return (
        <DefaultLayout background={"bg-home-sm md:bg-home-md lg:bg-home-lg"} space>
            <ItemDescription
                data={homeData}
                level={3}
                itemDescriptionConfig={{
                    beforeTitle: homeData.subtitle,
                    headingSize: 'md:text-[150px]',
                    size: 'md:text-xl'
                }}
            />
            <ExploreButton />
        </DefaultLayout>)
}