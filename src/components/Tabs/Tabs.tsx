import {
  Children,
  PropsWithChildren,
  ReactElement,
  useRef,
  useState,
} from "react";

import { TabProps } from "../Tab/Tab";
import TabButton from "../TabButton/TabButton";

import styles from "./Tabs.module.css";
import Text from "../Text/Text";

type TabsProps = {
  variant: "pill" | "underline";
};

export default function Tabs({
  variant,
  children,
}: PropsWithChildren<TabsProps>) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabRefs = useRef<HTMLButtonElement[]>([]);

  const onTabButtonClick = (index: number) => setActiveTab(index);
  const onTabRightArrow = (index: number) =>
    tabRefs.current[index + 1]?.focus();
  const onTabLeftArrow = (index: number) => tabRefs.current[index - 1]?.focus();

  return (
    <>
      <div
        className={`${styles["tabs-list"]} ${styles[`tabs-list--${variant}`]}`}
        role="tablist"
      >
        {Children.map(
          children as ReactElement<TabProps>[],
          (child: ReactElement<TabProps>, index: number) => (
            <TabButton
              variant={variant}
              selected={index === activeTab}
              controls={`tabpanel-${index}`}
              onRightArrowPress={() => onTabRightArrow(index)}
              onLeftArrowPress={() => onTabLeftArrow(index)}
              onTabButtonSelect={() => onTabButtonClick(index)}
              ref={(button) => button && (tabRefs.current[index] = button)}
            >
              <Text>{child.props.label}</Text> {child.props.badge}
            </TabButton>
          ),
        )}
      </div>
      <div
        id={`tabpanel-${activeTab}`}
        className={styles["tabs__content"]}
        role="tabpanel"
      >
        <Text>{Children.toArray(children)[activeTab]}</Text>
      </div>
    </>
  );
}
