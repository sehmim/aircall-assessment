import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Layout from './Layout/Layout';
import { Inbox } from './components/Inbox';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Inbox />
      </Layout>
    ),
  },
  {
    path: '/all-calls',
    element: <Layout>All Calls</Layout>,
  },
  {
    path: '/settings',
    element: <Layout>Settings</Layout>,
  },
  {
    path: '/call',
    element: <Layout>call</Layout>,
  },
  {
    path: '/contact',
    element: <Layout>contact</Layout>,
  },
  {
    path: '/dial',
    element: <Layout>dial</Layout>,
  },
  {
    path: '/settings',
    element: <Layout>settings</Layout>,
  },
  {
    path: '/circle',
    element: <Layout>circle</Layout>,
  },
  {
    path: '/call/:id',
    element: <Layout>DETAILS</Layout>,
  },
]);
