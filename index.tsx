
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mountApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Could not find root element to mount to");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // Hide loading screen after a short delay for smooth transition
    setTimeout(() => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
      }
    }, 500);
    
    console.log("KaiCA Application successfully mounted.");
  } catch (error) {
    console.error("Error mounting KaiCA application:", error);
  }
};

// Ensure DOM is ready before mounting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
