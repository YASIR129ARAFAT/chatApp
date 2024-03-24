
import './App.css'

import HomePage from './pages/HomePage'
import ChatsPage from './pages/ChatsPage';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route path="" element={<ChatsPage />} />

    </Route>
  )
);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
