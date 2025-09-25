import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
const conversions = {
    length: {
        name: 'Length',
        units: {
            meter: { name: 'Meters', factor: 1 },
            kilometer: { name: 'Kilometers', factor: 1000 },
            centimeter: { name: 'Centimeters', factor: 0.01 },
            inch: { name: 'Inches', factor: 0.0254 },
            foot: { name: 'Feet', factor: 0.3048 },
        }
    },
    weight: {
        name: 'Weight',
        units: {
            kilogram: { name: 'Kilograms', factor: 1 },
            gram: { name: 'Grams', factor: 0.001 },
            pound: { name: 'Pounds', factor: 0.453592 },
            ounce: { name: 'Ounces', factor: 0.0283495 },
        }
    }
};
export const UnitConverter = () => {
    const [category, setCategory] = useState('length');
    const [fromUnit, setFromUnit] = useState('meter');
    const [toUnit, setToUnit] = useState('kilometer');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const convert = (value) => {
        const num = parseFloat(value);
        if (isNaN(num)) {
            setResult('');
            return;
        }
        const categoryData = conversions[category];
        const fromFactor = categoryData.units[fromUnit].factor;
        const toFactor = categoryData.units[fromUnit].factor;
        const result = (num * fromFactor) / toFactor;
        setResult(result.toString());
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Unit Converter - Convert Between Units Instantly | Apple Tools" }), _jsx("meta", { name: "description", content: "Convert between different units of measurement including length, weight, temperature, and more. Fast and accurate unit conversion tool." })] }), _jsx("div", { className: "container mx-auto px-4 py-8 max-w-2xl", children: _jsxs(Card, { children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx(CardTitle, { className: "text-3xl font-semibold mb-2", children: "Unit Converter" }), _jsx(CardDescription, { children: "Convert between different units instantly and accurately" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs(Select, { value: category, onValueChange: setCategory, children: [_jsxs(SelectTrigger, { children: [_jsx("h2", { children: "Choose Measurement Type: " }), _jsx(SelectValue, {})] }), _jsx(SelectContent, { children: Object.entries(conversions).map(([key, value]) => (_jsx(SelectItem, { value: key, children: value.name }, key))) })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: "From" }), _jsxs(Select, { value: fromUnit, onValueChange: setFromUnit, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { children: Object.entries(conversions[category].units).map(([key, unit]) => (_jsx(SelectItem, { value: key, children: unit.name }, key))) })] }), _jsx(Input, { type: "number", placeholder: "Enter value", value: inputValue, onChange: (e) => {
                                                        setInputValue(e.target.value);
                                                        convert(e.target.value);
                                                    } })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: "To" }), _jsxs(Select, { value: toUnit, onValueChange: (value) => {
                                                        setToUnit(value);
                                                        if (inputValue)
                                                            convert(inputValue);
                                                    }, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { children: Object.entries(conversions[category].units).map(([key, unit]) => (_jsx(SelectItem, { value: key, children: unit.name }, key))) })] }), _jsx(Input, { type: "number", placeholder: "Result", value: result, readOnly: true })] })] })] })] }) })] }));
};
