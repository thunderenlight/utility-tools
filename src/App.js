import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/theme-provider';
import Approutes from './routes/routes';
import './App.css';
import './index.css';
function App() {
    return (_jsx(HelmetProvider, { children: _jsx(ThemeProvider, { defaultTheme: "system", storageKey: "utility-tools-theme", children: _jsx(Router, { children: _jsx("div", { className: "min-h-screen bg-background font-sf-pro", children: _jsx(Approutes, {}) }) }) }) }));
}
export default App;
