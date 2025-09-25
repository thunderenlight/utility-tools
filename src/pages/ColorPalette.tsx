import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RefreshCw, Copy } from "lucide-react";

export const ColorPalette = () => {
  const [colors, setColors] = useState<string[]>([]);

  const generatePalette = () => {
    const newColors = Array.from({ length: 5 }, () => {
      return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    });
    setColors(newColors);
  };

  const copyColor = async (color: string) => {
    await navigator.clipboard.writeText(color);
  };

  return (
    <>
      <Helmet>
        <title>Color Palette Generator - Create Beautiful Color Combinations | Apple Tools</title>
        <meta name="description" content="Generate beautiful color palettes for your design projects. Copy hex codes instantly and create harmonious color schemes." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Color Palette Generator</CardTitle>
            <CardDescription>
              Create beautiful color combinations for your projects
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-5 gap-4 mb-6">
              {colors.map((color, index) => (
                <div key={index} className="space-y-2">
                  <div 
                    className="h-32 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                    style={{ backgroundColor: color }}
                    onClick={() => copyColor(color)}
                  />
                  <div className="text-center">
                    <p className="text-sm font-mono">{color}</p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => copyColor(color)}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={generatePalette} 
              className="w-full"
              size="lg"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate New Palette
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
