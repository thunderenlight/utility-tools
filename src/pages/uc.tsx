import { useEffect, useState } from 'react';
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

export const uc = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const convert = (value: string, from?: string, to?: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) {
      setResult('');
      return;
    }

    const categoryData = conversions[category as keyof typeof conversions];
    const fromFactor = (categoryData.units as any)[from || fromUnit].factor;
    const toFactor = (categoryData.units as any)[to || toUnit].factor;
    
    const conversionResult = (num * fromFactor) / toFactor;
    setResult(conversionResult.toString());
  };

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    
    // Reset units to first available units in new category
    const categoryData = conversions[newCategory as keyof typeof conversions];
    const unitKeys = Object.keys(categoryData.units);
    const newFromUnit = unitKeys[0];
    const newToUnit = unitKeys[1] || unitKeys[0];
    
    setFromUnit(newFromUnit);
    setToUnit(newToUnit);
    
    // Recalculate with new units if there's an input value
    if (inputValue) {
      convert(inputValue, newFromUnit, newToUnit);
    }
  };

  const handleFromUnitChange = (newFromUnit: string) => {
    setFromUnit(newFromUnit);
    if (inputValue) {
      convert(inputValue, newFromUnit, toUnit);
    }
  };

  const handleToUnitChange = (newToUnit: string) => {
    setToUnit(newToUnit);
    if (inputValue) {
      convert(inputValue, fromUnit, newToUnit);
    }
  };

  return (
    <>
      <Helmet>
        <title> **** Unit Converter - Convert Between Units Instantly | Utility Tools</title>
        <meta name="description" content="Convert between different units of measurement including length, weight, temperature, and more. Fast and accurate unit conversion tool." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-semibold mb-2">Unit Converter</CardTitle>
            <CardDescription>
              Convert between different units assss instantly and accurately
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Select value={category} onValueChange={handleCategoryChange}>
              <SelectTrigger>
                <span>Choose Measurement Type !!! Shit: </span>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(conversions).map(([key, value]) => (
                  <SelectItem key={key} value={key}>{value.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">From</label>
                <Select value={fromUnit} onValueChange={handleFromUnitChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(conversions[category as keyof typeof conversions].units).map(([key, unit]) => (
                      <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  placeholder="Enter value"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    //convert(e.target.value);
                  }}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">To</label>
                <Select value={toUnit} onValueChange={handleToUnitChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(conversions[category as keyof typeof conversions].units).map(([key, unit]) => (
                      <SelectItem key={key} value={key}>{unit.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  placeholder="Result"
                  value={result}
                  readOnly
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
