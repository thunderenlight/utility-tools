import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/theme-provider';
import Approutes from './routes/routes';
import './App.css'
import './index.css'

function App() {

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="utility-tools-theme">
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