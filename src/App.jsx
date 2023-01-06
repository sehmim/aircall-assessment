import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from "react-router-dom";
import { router } from './RouterProvider';
import AppContextProvider from './Provider';

const App = () => {
  return (
    <div className='container'>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
