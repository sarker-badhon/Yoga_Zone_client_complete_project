import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import AuthProviders from './Providers/AuthProviders';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='max-w-screen-xl mx-auto'>
        <AuthProviders>
          <RouterProvider router={router} />
        </AuthProviders>
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
