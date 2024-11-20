export { Layout };

import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "vike/types";
import "./css/index.css";
import "./Layout.css";
import Header from "../components/nav/header";
import BottomNav from "../components/nav/bottomNav";
import { NavHeader } from "../components/nav/navHeader"; 


function Layout({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  
console.log(pageContext.urlPathname)

 const isHomePage = pageContext.urlPathname === '/'
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {isHomePage ? ( <Header>
          <div className="hidden md:flex items-center space-x-20">
            <a
              href="#"
              className="text-white hover:text-orange-500 text-xl transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-500 text-xl transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-orange-500 text-xl transition"
            >
              Privacy Policy
            </a>
          </div>
        </Header>) : (
          <NavHeader/>
        )}
       
        <Slot>{children}</Slot>
        <BottomNav/>
          
        
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
