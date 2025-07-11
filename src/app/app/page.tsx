import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  ArrowRight,
  Shield,
  Building,
  Code,
  Users,
  CheckCircle,
} from "lucide-react";

const features = [
  "Unified messaging dashboard",
  "AI-powered automation",
  "Microsoft Teams integration",
  "Enterprise-grade security",
  "No per-user fees",
];

const testimonials = [
  {
    company: "PropTech Solutions",
    industry: "Property Management",
    result: "20+ hours saved per week",
  },
  {
    company: "FinanceApp",
    industry: "Fintech",
    result: "99.9% API uptime",
  },
  {
    company: "Walsh & Associates",
    industry: "Legal",
    result: "Seamless Teams integration",
  },
];

export default function AppLoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Never Busy</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground mt-2">
              Sign in to your workspace
            </p>
          </div>

          {/* Login Form */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to access your workspace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Link href="/app/dashboard">
                <Button className="w-full" size="lg">
                  Sign In <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <Button variant="outline" className="w-full" size="lg">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Sign in with Microsoft</span>
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Start your free trial
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Features & Testimonials */}
      <div className="hidden lg:flex lg:flex-1 bg-muted/30 p-8 items-center">
        <div className="w-full max-w-lg space-y-8">
          {/* Status Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              All systems operational
            </Badge>
          </div>

          {/* Headline */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">
              Always Available.
              <br />
              <span className="text-primary">Never Busy.</span>
            </h2>
            <p className="text-muted-foreground">
              AI-powered unified communications for modern businesses.
            </p>
          </div>

          {/* Features */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>What's included</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Trusted by industry leaders</h3>
            <div className="space-y-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{testimonial.company}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.industry}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.result}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Ready to transform your communications?
            </p>
            <Link href="/pricing">
              <Button variant="outline" className="w-full">
                View Pricing & Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
