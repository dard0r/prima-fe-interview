import { forwardRef, PropsWithChildren, KeyboardEvent } from "react";

import styles from "./TabButton.module.css";

export type TabButtonProps = {
  variant: "pill" | "underline";
  controls: string;
  selected?: boolean;
  onTabButtonSelect?: () => void;
  onRightArrowPress?: () => void;
  onLeftArrowPress?: () => void;
};

const isRightArrow = (key: string): boolean => key === "ArrowRight";
const isLeftArrow = (key: string): boolean => key === "ArrowLeft";
const isSelect = (key: string): boolean => key === "Enter" || key === " ";

export default forwardRef<HTMLButtonElement, PropsWithChildren<TabButtonProps>>(
  function TabButton(
    {
      variant,
      controls,
      selected,
      children,
      onTabButtonSelect,
      onRightArrowPress,
      onLeftArrowPress,
    },
    ref,
  ) {
    const selectedClass = selected ? "tab--selected" : "";
    const onTabButtonKeyDown = (event: KeyboardEvent) => {
      switch (true) {
        case isRightArrow(event.key):
          event.preventDefault();
          onRightArrowPress?.();
          break;

        case isLeftArrow(event.key):
          event.preventDefault();
          onLeftArrowPress?.();
          break;

        case isSelect(event.key):
          event.preventDefault();
          onTabButtonSelect?.();
          break;
      }
    };

    return (
      <button
        className={`${styles.tab} ${styles[`tab--${variant}`]} ${styles[selectedClass]}`}
        role="tab"
        aria-selected={selected}
        aria-controls={controls}
        tabIndex={selected ? 0 : -1}
        onClick={() => onTabButtonSelect?.()}
        onKeyDown={onTabButtonKeyDown}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
