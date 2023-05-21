import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Layout from './components/layout';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout> 
        <h1>Test</h1>
      </Layout>
    </BrowserRouter>
  )
};

export default App
