import { RouterProvider } from 'react-router-dom';
import Routes from './Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import './App.css';



function App() {
  
  return (
    <div  className="max-w-screen-lg
     md:mx-auto " >
        <RouterProvider  router={Routes}>
        </RouterProvider>
        <Toaster></Toaster>
    </div>
  );
}

export default App;
