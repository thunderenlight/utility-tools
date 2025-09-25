import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Switch } from "@/components/ui/Switch";
import { Copy, RefreshCw, Check } from "lucide-react";
export const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(16);
    const [options, setOptions] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
    });
    const [copied, setCopied] = useState(false);
    const generatePassword = () => {
        const chars = {
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            numbers: '0123456789',
            symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
        };
        let charset = '';
        Object.entries(options).forEach(([key, enabled]) => {
            if (enabled)
                charset += chars[key];
        });
        if (!charset)
            return;
        let result = '';
        for (let i = 0; i < length; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setPassword(result);
    };
    const copyPassword = async () => {
        if (password) {
            await navigator.clipboard.writeText(password);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("title", { children: "Password Generator - Generate Secure Passwords | UtilityTools" }), _jsx("meta", { name: "description", content: "Generate strong, secure passwords with customizable options. Include uppercase, lowercase, numbers, and symbols for maximum security." })] }), _jsx("div", { className: "mx-auto px-4 py-8 max-w-2xl", children: _jsxs(Card, { children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx(CardTitle, { className: "text-2xl", children: "Password Generator" }), _jsx(CardDescription, { children: "Create secure passwords with custom parameters" })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium", children: "Generated Password" }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { value: password, readOnly: true, placeholder: "Your secure password will appear here...", className: "font-mono" }), _jsx(Button, { variant: "outline", size: "icon", onClick: copyPassword, disabled: !password, children: copied ? _jsx(Check, { className: "h-4 w-4" }) : _jsx(Copy, { className: "h-4 w-4" }) })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("label", { className: "text-sm font-medium", children: ["Password Length: ", length] }), _jsx("input", { type: "range", min: "4", max: "50", value: length, onChange: (e) => setLength(Number(e.target.value)), className: "w-full" })] }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: Object.entries(options).map(([key, value]) => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { className: "text-sm font-medium capitalize", children: key }), _jsx(Switch, { checked: value, onCheckedChange: (checked) => setOptions(prev => ({ ...prev, [key]: checked })) })] }, key))) })] }), _jsxs(Button, { onClick: generatePassword, className: "w-full", size: "lg", children: [_jsx(RefreshCw, { className: "h-4 w-4 mr-2" }), "Generate Password"] })] })] }) })] }));
};
