import React from 'react';


import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard';

import GlobalStyle from './styles/global';


const App: React.FC = () => {
  
  return (
    <>
      <Header />
      <main>
        <Dashboard/>
      </main>
      <Footer />
      <GlobalStyle/>
    </>
  )
}  
export default App;
