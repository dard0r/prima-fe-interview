import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tab/Tab";
import Badge from "./components/Badge/Badge";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<React.StrictMode>
  <Tabs variant="pill">
      <Tab label="Emails">Test content</Tab>
      <Tab label="Files" badge={<Badge variant="neutral">Warning</Badge>}>
        Test content 1
      </Tab>
      <Tab label="Edits">Test content 2</Tab>
      <Tab label="Dashboard">Test content 3</Tab>
      <Tab label="Messages">Test content 4</Tab>
      <Tab label="Test 2">Test content 5</Tab>
    </Tabs>
</React.StrictMode>);
