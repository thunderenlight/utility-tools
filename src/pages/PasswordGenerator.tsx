import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription,
     CardHeader, CardTitle } from "@/components/ui/Card";
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
      if (enabled) charset += chars[key as keyof typeof chars];
    });

    if (!charset) return;

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

  return (
    <>
      <Helmet>
        <title>Password Generator - Generate Secure Passwords | UtilityTools</title>
        <meta name="description" content="Generate strong, secure passwords with customizable options. Include uppercase, lowercase, numbers, and symbols for maximum security." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 max-w-2xl"> 
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Password Generator</CardTitle>
            <CardDescription>
              Create secure passwords with custom parameterz
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Generated Password</label>
              <div className="flex gap-2">
                <Input 
                  value={password} 
                  readOnly 
                  placeholder="Your secure password will appear here..."
                  className="font-mono"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={copyPassword}
                  disabled={!password}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Password Length: {length}</label>
                <input
                  type="range"
                  min="4"
                  max="50"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(options).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <label className="text-sm font-medium capitalize">{key}</label>
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) => 
                        setOptions(prev => ({ ...prev, [key]: checked }))
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            <Button 
              onClick={generatePassword} 
              className="w-full"
              size="lg"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate Password
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
