export { Layout }

import React from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from 'vike/types'
import './css/index.css'
import './Layout.css'
import Header from '../components/nav/header'

function Layout({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>     
          <Header />    
          <Slot>{children}</Slot>
      </PageContextProvider>
    </React.StrictMode>
  )
}





function Slot({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
       
      >
    {children}
      </div>
    </div>
  )
}


