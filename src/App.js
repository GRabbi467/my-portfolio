import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About_me from './Components/About Me/About_me';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import WhatIDo from './Components/What_I_do/WhatIDo';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Research from './Components/Research/Research';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        
        {
          path:'whatido',
          element: <WhatIDo/>
        },
        {
          path:'resume',
          element: <Resume/>
        },
        {
          path:'projects',
          element:<Projects/>
        },
        {
          path:'about',
          element:<About_me/>
        },
        {
          path:'education',
          element:<Education/>
        },
        {
          path:'research',
          element:<Research/>
        }
    
      ]
    },

  
  ]);
  return (
    <div className="App">
     
     <RouterProvider router = {router}></RouterProvider>
      
    </div>
  );
}

export default App;
