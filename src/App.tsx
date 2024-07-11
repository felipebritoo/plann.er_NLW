import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);






export function App() {
  return(
    <h1 className="text-zinc-50">hello-word</h1> 
  )
}
 

