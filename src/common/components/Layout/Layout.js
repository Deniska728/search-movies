import React from 'react'

import Header from 'common/components/Header/Header';

const Layout = ({ children }) => (
  <div className="layout">
    <Header/>
    {children}
  </div>
)

export default Layout