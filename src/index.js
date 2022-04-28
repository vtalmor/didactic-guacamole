import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TaskProvider } from './context/TaskContext';
import { ServiceProvider } from './services/ServiceContext';
import { ControllerProvider } from './context/ControllerContext';
import { AlertProvider } from './context/AlertContext';
import { SpinnerProvider } from './context/SpinnerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <TaskProvider>
    <SpinnerProvider>
      <AlertProvider>
        <ServiceProvider>
          <ControllerProvider>
          
            <App />
          
          </ControllerProvider>
        </ServiceProvider>
      </AlertProvider>
    </SpinnerProvider>
  </TaskProvider> 
);
