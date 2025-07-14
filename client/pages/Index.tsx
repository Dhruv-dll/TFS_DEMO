import { Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GeometricShapes from "@/components/3d/GeometricShapes";
import FloatingCards from "@/components/3d/FloatingCards";
import {
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  ArrowRight,
  Star,
  Users,
  DollarSign,
  Target,
  Sparkles,
  Globe,
  Lock,
} from "lucide-react";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">FinanceAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a
                href="#features"
                className="text-sm hover:text-accent transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm hover:text-accent transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-sm hover:text-accent transition-colors"
              >
                About
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-purple-gradient hover:opacity-90">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]" />

        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <Suspense fallback={null}>
            <GeometricShapes />
          </Suspense>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Finance Platform
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Revolutionize</span>
              <br />
              Your Financial
              <br />
              <span className="gradient-text">Future</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
              Experience next-generation trading with AI-powered insights,
              real-time analytics, and institutional-grade security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-purple-gradient hover:opacity-90 text-lg px-8 py-6 glow-effect"
              >
                Start Trading Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-purple-500/30 hover:bg-purple-500/10"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 px-4">
              <div className="glass-card p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  $2.4B+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Assets Under Management
                </div>
              </div>
              <div className="glass-card p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  150K+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Active Traders
                </div>
              </div>
              <div className="glass-card p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  99.9%
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Uptime
                </div>
              </div>
              <div className="glass-card p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Powerful Features</span>
              <br />
              for Modern Trading
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the tools and technologies that make FinanceAI the most
              advanced trading platform.
            </p>
          </div>

          {/* 3D Floating Cards - Hidden on mobile for performance */}
          <div className="relative h-64 md:h-96 mb-16 hidden sm:block">
            <Suspense fallback={null}>
              <FloatingCards />
            </Suspense>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all group">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-purple-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  AI-Powered Trading
                </h3>
                <p className="text-muted-foreground">
                  Advanced algorithms analyze market patterns and execute trades
                  with precision, maximizing your returns while minimizing risk.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all group">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-purple-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Real-Time Analytics
                </h3>
                <p className="text-muted-foreground">
                  Get instant insights with comprehensive charts, indicators,
                  and market data updated in real-time across all major
                  exchanges.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/20 hover:border-purple-500/40 transition-all group">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-purple-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Bank-Grade Security
                </h3>
                <p className="text-muted-foreground">
                  Your funds and data are protected with military-grade
                  encryption, multi-factor authentication, and cold storage
                  solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-purple-gradient opacity-10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="gradient-text">Trading Experience?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders who have already discovered the power of
            AI-driven finance.
          </p>
          <Button
            size="lg"
            className="bg-purple-gradient hover:opacity-90 text-lg px-12 py-6 glow-effect"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-purple-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">FinanceAI</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 FinanceAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
