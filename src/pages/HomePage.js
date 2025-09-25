import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Lock, Palette, Calculator, ArrowRight } from "lucide-react";
const tools = [
    {
        id: 'password-generator',
        title: 'Password Generator',
        description: 'Generate secure, random passwords with custom parameters',
        icon: Lock,
        href: '/password-generator',
        badge: 'Security'
    },
    {
        id: 'color-palette',
        title: 'Color Palette',
        description: 'Create beautiful color combinations and export them',
        icon: Palette,
        href: '/color-palette',
        badge: 'Design'
    },
    {
        id: 'unit-converter',
        title: 'Unit Converter',
        description: 'Convert between different units instantly and accurately',
        icon: Calculator,
        href: '/unit-converter',
        badge: 'Utility'
    }
];
export const HomePage = () => {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Utility Tools Suite - Professional Online Utilities" }), _jsx("meta", { name: "description", content: "Free professional online tools including password generator, color palette creator, and unit converter. Clean, fast, and secure." }), _jsx("meta", { name: "keywords", content: "online tools, password generator, color palette, unit converter, utilities" })] }), _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h1", { className: "text-4xl font-bold tracking-tight mb-4", children: "Professional Tools" }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: "A collection of beautiful, fast, and secure online tools designed with Apple's attention to detail" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto", children: tools.map((tool) => {
                            const Icon = tool.icon;
                            return (_jsxs(Card, { className: "group hover:shadow-lg transition-all duration-200 border-0 shadow-sm", children: [_jsxs(CardHeader, { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "p-2 bg-primary/10 rounded-lg w-fit", children: _jsx(Icon, { className: "h-5 w-5 text-primary" }) }), _jsx(Badge, { variant: "secondary", children: tool.badge })] }), _jsx(CardTitle, { className: "text-xl", children: tool.title }), _jsx(CardDescription, { children: tool.description })] }), _jsx(CardContent, { children: _jsx(Button, { asChild: true, className: "w-full group-hover:bg-primary/90 transition-colors", children: _jsxs("a", { href: tool.href, className: "flex items-center justify-center gap-2", children: ["Open Tool", _jsx(ArrowRight, { className: "h-4 w-4" })] }) }) }), _jsx("br", {})] }, tool.id));
                        }) })] })] }));
};
