import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
  MessageSquare,
  Phone,
  Code,
  Building,
  Bot,
  Globe,
  Lock,
  TrendingUp,
  Clock,
  Star,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Unified Messaging",
    description: "SMS, MMS, voice, and internal messaging in one dashboard with AI-powered conversation handling.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Smart routing, auto-responders, and NLP tagging that actually work - no vaporware.",
  },
  {
    icon: Shield,
    title: "Compliance Built-In",
    description: "STIR/SHAKEN, 10DLC, GDPR, and TCPA compliance with robocall prevention.",
  },
  {
    icon: Code,
    title: "Developer APIs",
    description: "RESTful APIs, webhooks, and SDKs for seamless integration into your applications.",
  },
  {
    icon: Users,
    title: "Teams Integration",
    description: "Direct Routing and Operator Connect for Microsoft Teams with AI tools.",
  },
  {
    icon: TrendingUp,
    title: "No Per-User Fees",
    description: "One simple price per company size. Unlimited users, unlimited usage.",
  },
];

const useCases = [
  {
    icon: Building,
    title: "Property Management",
    description: "Multi-tenant, building, and office-level VoIP + messaging solutions for property managers.",
    features: ["Tenant communication", "Emergency notifications", "Maintenance requests", "Bulk messaging"],
  },
  {
    icon: Code,
    title: "App Developers",
    description: "Complete SMS/MMS APIs with notifications and fraud prevention for your applications.",
    features: ["RESTful APIs", "Webhook notifications", "Fraud detection", "Rate limiting"],
  },
  {
    icon: Users,
    title: "Enterprise Teams",
    description: "Microsoft Teams Direct Routing with AI tools for intensive Office 365 users like law firms.",
    features: ["Direct Routing", "AI call insights", "Compliance recording", "Team collaboration"],
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, PropTech Solutions",
    content: "Never Busy transformed our property management communications. The AI automation saves us 20+ hours per week.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Developer, FinanceApp",
    content: "The API is incredibly reliable. We've processed over 1M messages with 99.9% uptime.",
    rating: 5,
  },
  {
    name: "Jennifer Walsh",
    role: "IT Director, Walsh & Associates Law",
    content: "The Teams integration is seamless. Our lawyers love the AI call insights and compliance features.",
    rating: 5,
  },
];

const stats = [
  { label: "Messages Delivered", value: "50M+" },
  { label: "API Uptime", value: "99.9%" },
  { label: "Average Response Time", value: "<200ms" },
  { label: "Customer Satisfaction", value: "4.9/5" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section flex flex-col items-center justify-center space-y-8 py-24 lg:py-32 text-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center space-x-2 text-sm">
              <Badge className="status-operational">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                All systems operational
              </Badge>
            </div>

            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                Always Available.
                <br />
                <span className="text-primary-bold">Never Busy.</span>
              </h1>
              <p className="max-w-3xl text-lg sm:text-xl text-gray-200">
                AI-powered unified communications platform for property management, developers, and Microsoft Teams users.
                No per-user licensing. No vaporware. Just AI tools that actually work.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/app">
                <Button size="lg" className="btn-primary-bold text-lg px-8">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" className="btn-outline-bold bg-white border-white text-black hover:bg-gray-100 text-lg px-8">
                  View API Docs
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="ghost" className="text-white hover:bg-white hover:text-black text-lg px-8">
                  Contact Sales
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="stats-bold grid grid-cols-2 gap-8 lg:grid-cols-4 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="stat-value text-white">{stat.value}</div>
                  <div className="stat-label text-gray-200 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Everything you need for modern communications
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Built for real-time telecom integrations with security and compliance as core features.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="card-high-contrast">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg primary-gradient text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-black">{feature.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Built for your industry
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Tailored solutions for property management, app developers, and enterprise teams.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="card-high-contrast bg-white">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg primary-gradient text-white">
                    <useCase.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-black">{useCase.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/solutions/${useCase.title.toLowerCase().replace(/ /g, '-')}`}>
                    <Button className="mt-6 w-full btn-outline-bold">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Trusted by industry leaders
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              See what our customers are saying about Never Busy.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-high-contrast">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-base italic mb-4 text-gray-700">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="rounded-lg high-contrast-section p-8 text-center lg:p-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
              Ready to get started?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              Join thousands of companies using Never Busy for their communications needs.
              No setup fees, no per-user costs, just reliable AI-powered communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app">
                <Button size="lg" className="btn-primary-bold text-lg px-8">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white text-lg px-8">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
