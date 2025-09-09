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
  return (
    <>
      <Helmet>
        <title>Utility Tools Suite - Professional Online Utilities</title>
        <meta name="description" content="Free professional online tools including password generator, color palette creator, and unit converter. Clean, fast, and secure." />
        <meta name="keywords" content="online tools, password generator, color palette, unit converter, utilities" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Professional Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of beautiful, fast, and secure online tools designed with Apple's attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.id} className="group hover:shadow-lg transition-all duration-200 border-0 shadow-sm">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-primary/10 rounded-lg w-fit">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary">{tool.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                    <a href={tool.href} className="flex items-center justify-center gap-2">
                      Open Tool
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
                <br></br>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
