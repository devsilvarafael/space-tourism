import TabsSize from "../Tabs/TabsSize";
import TabItemVariant from "../Tabs/TabItemVariant.jsx";
import {cloneElement, Fragment} from "react";

export const Tabs = ({tabsConfig, items, selectedTab, handleUpdateSelectedTab}) => {
    return (
        <ul className={`flex flex-row justify-between w-full uppercase text-white tracking-widest mb-4 mt-8 md:mb-11 ${TabsSize(tabsConfig.variant)}`}>
            {items.map((item, index) => (
                <Fragment
                    key={index}
                >
                    <TabItemVariant
                        item={item}
                        variant={tabsConfig.variant}
                        selected={selectedTab}
                        index={index}
                        onClick={() => handleUpdateSelectedTab(index)}
                    />
                </Fragment>
            ))}
        </ul>
    )
}