import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Debug logging
console.log('Application initialization started');
console.log('Environment:', import.meta.env);

// Error tracking
const trackError = (error: Error, errorInfo: any) => {
  console.group('Application Error');
  console.error('Error:', error);
  console.error('Error Info:', errorInfo);
  console.error('Location:', window.location.href);
  console.error('User Agent:', navigator.userAgent);
  console.groupEnd();
};

// Error boundary component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    trackError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center', 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0F',
          color: '#F7FFF7',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}>
          <h1 style={{ marginBottom: '20px', fontSize: '24px' }}>Something went wrong</h1>
          <pre style={{ 
            marginBottom: '20px',
            padding: '15px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '8px',
            maxWidth: '80%',
            overflow: 'auto',
            textAlign: 'left'
          }}>
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              padding: '10px 20px',
              backgroundColor: '#4ECDC4',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              color: '#0A0A0F',
              fontSize: '16px'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Root element check
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found! Make sure there is a div with id="root" in index.html');
} else {
  console.log('Root element found, proceeding with render');
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
    console.log('Initial render completed');
  } catch (error) {
    console.error('Error during render:', error);
    trackError(error as Error, {});
  }
} 