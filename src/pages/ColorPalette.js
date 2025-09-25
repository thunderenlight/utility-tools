import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RefreshCw, Copy } from "lucide-react";
export const ColorPalette = () => {
    const [colors, setColors] = useState([]);
    const generatePalette = () => {
        const newColors = Array.from({ length: 5 }, () => {
            return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        });
        setColors(newColors);
    };
    const copyColor = async (color) => {
        await navigator.clipboard.writeText(color);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Color Palette Generator - Create Beautiful Color Combinations | Apple Tools" }), _jsx("meta", { name: "description", content: "Generate beautiful color palettes for your design projects. Copy hex codes instantly and create harmonious color schemes." })] }), _jsx("div", { className: "container mx-auto px-4 py-8 max-w-2xl", children: _jsxs(Card, { children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx(CardTitle, { className: "text-2xl", children: "Color Palette Generator" }), _jsx(CardDescription, { children: "Create beautiful color combinations for your projects" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsx("div", { className: "grid grid-cols-5 gap-4 mb-6", children: colors.map((color, index) => (_jsxs("div", { className: "space-y-2", children: [_jsx("div", { className: "h-32 rounded-lg cursor-pointer hover:scale-105 transition-transform", style: { backgroundColor: color }, onClick: () => copyColor(color) }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-sm font-mono", children: color }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => copyColor(color), children: _jsx(Copy, { className: "h-3 w-3" }) })] })] }, index))) }), _jsxs(Button, { onClick: generatePalette, className: "w-full", size: "lg", children: [_jsx(RefreshCw, { className: "h-4 w-4 mr-2" }), "Generate New Palette"] })] })] }) })] }));
};
