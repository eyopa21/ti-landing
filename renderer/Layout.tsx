export { Layout };

import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "vike/types";
import "./css/index.css";
import "./Layout.css";
import Header from "../components/nav/header";
import { Button } from "@/components/ui/button";

function Layout({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Header />
        <Slot>{children}</Slot>
        <Header>
          <Button variant={"link"}>Privacy Policy</Button>
        </Header>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Slot({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container" className="bg-gray-50">
      <div id="page-content">{children}</div>
    </div>
  );
}
