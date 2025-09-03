import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/theme-provider';
import Approutes from './routes';
import './App.css'

function App() {

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey='"utility-tools-theme'>
        <Router>
          <div className="min-h-screen bg-background font-sf-pro">
          <Approutes />
          </div>
        </Router> 
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
