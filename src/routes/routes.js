import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { HomePage } from '../pages/HomePage';
import { PasswordGenerator } from '../pages/PasswordGenerator';
import { ColorPalette } from '@/pages/ColorPalette';
import { UnitConverter } from '@/pages/UnitConverter';
const AppRoutes = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/password-generator", element: _jsx(PasswordGenerator, {}) }), _jsx(Route, { path: "/color-palette", element: _jsx(ColorPalette, {}) }), _jsx(Route, { path: "/unit-converter", element: _jsx(UnitConverter, {}) })] }) })] }));
};
export default AppRoutes;
