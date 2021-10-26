import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import AppContext from '../context/AppContext';
import { useExps } from '../hooks/useExps';

const Layout = ({ children }) => {
  const initialState = useExps();
	return (
    <AppContext.Provider value={initialState}>
      <div className="Layout">
        <Header />
        {children}
        <Footer />
      </div>
    </AppContext.Provider>
	);
}

export default Layout;
