import { PropsWithChildren, ReactNode } from "react";

export type TabProps = {
  label: string;
  badge?: ReactNode;
};

export default function Tab({ children }: PropsWithChildren<TabProps>) {
  return children;
}
