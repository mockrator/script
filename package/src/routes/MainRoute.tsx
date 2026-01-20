import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PrivateRoot } from '../pages/private/PrivateRoot'
import { PublicRoot } from '../pages/public/PublicRoot'


const browserRouter = createBrowserRouter([
 {
    path: '/',
    element: <PrivateRoot /> 
 },
 {
    path: '/public',
    element: <PublicRoot />
 }
])

export function MainRoute() {
  return <RouterProvider router={ browserRouter } />
}