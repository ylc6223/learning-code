import { useState } from 'react';
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import './App.css';
import Base from './base';
import Travel from './time_travel';
import Layout from './Layout';
const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Base,
      },
      {
        path: 'time_travel',
        Component: Travel,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
