import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  Clock,
  TrendingUp,
  Database,
  Webhook,
  Terminal,
  Key,
  BarChart3,
  Smartphone,
  Lock,
  Star,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Code,
    title: "RESTful APIs",
    description: "Clean, well-documented APIs for SMS, MMS, voice, and notifications.",
    benefits: [
      "OpenAPI 3.0 specification",
      "Comprehensive code examples",
      "Postman collections",
      "SDKs for popular languages",
    ],
  },
  {
    icon: Webhook,
    title: "Real-time Webhooks",
    description: "Instant notifications for delivery receipts, responses, and events.",
    benefits: [
      "Delivery confirmations",
      "Inbound message notifications",
      "Status change alerts",
      "Custom event triggers",
    ],
  },
  {
    icon: Shield,
    title: "Fraud Prevention",
    description: "Built-in security features to protect your applications and users.",
    benefits: [
      "Rate limiting and throttling",
      "Suspicious activity detection",
      "IP whitelisting",
      "Request signing",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Detailed metrics and reporting for your communication flows.",
    benefits: [
      "Real-time delivery metrics",
      "Usage analytics",
      "Performance monitoring",
      "Custom reporting",
    ],
  },
];

const sdks = [
  {
    language: "JavaScript",
    icon: "🟨",
    features: ["Node.js support", "TypeScript definitions", "Promise-based", "Webhook validation"],
    installation: "npm install @neverbusy/sdk",
  },
  {
    language: "Python",
    icon: "🐍",
    features: ["Async/await support", "Type hints", "Django integration", "Flask helpers"],
    installation: "pip install neverbusy-python",
  },
  {
    language: "PHP",
    icon: "🐘",
    features: ["Composer support", "Laravel integration", "PSR-4 compliant", "Exception handling"],
    installation: "composer require neverbusy/php-sdk",
  },
  {
    language: "Ruby",
    icon: "💎",
    features: ["Rails integration", "RSpec helpers", "Active Job support", "Gem packaging"],
    installation: "gem install neverbusy-ruby",
  },
];

const useCases = [
  {
    title: "2FA & Verification",
    description: "Secure user authentication with SMS verification codes.",
    code: `// Send verification code
const verification = await neverbusy.messages.send({
  to: '+1555123456',
  body: 'Your verification code is: {{code}}',
  template: 'verification'
});

// Verify code
const isValid = await neverbusy.verify(verification.id, userCode);`,
    icon: Lock,
  },
  {
    title: "Notification System",
    description: "Send transactional alerts and updates to your users.",
    code: `// Send notification
await neverbusy.notifications.send({
  to: '+1555123456',
  template: 'order_shipped',
  data: {
    orderNumber: 'ORD-12345',
    trackingUrl: 'https://track.example.com/12345'
  }
});`,
    icon: Bell,
  },
  {
    title: "Bulk Messaging",
    description: "Send messages to multiple recipients efficiently.",
    code: `// Bulk SMS campaign
const campaign = await neverbusy.campaigns.create({
  recipients: ['+1555123456', '+1555789012'],
  message: 'Flash sale: 50% off everything!',
  scheduledAt: '2024-01-15T10:00:00Z'
});`,
    icon: Smartphone,
  },
];

const apiFeatures = [
  {
    endpoint: "POST /messages",
    description: "Send SMS, MMS, or voice messages",
    rateLimit: "1000/min",
  },
  {
    endpoint: "GET /messages/{id}",
    description: "Retrieve message status and details",
    rateLimit: "5000/min",
  },
  {
    endpoint: "POST /verify",
    description: "Send verification codes",
    rateLimit: "100/min",
  },
  {
    endpoint: "GET /analytics",
    description: "Retrieve usage and delivery metrics",
    rateLimit: "1000/min",
  },
];

const testimonials = [
  {
    quote: "The API is incredibly reliable. We've processed over 1M messages with 99.9% uptime and the documentation is the best I've seen.",
    author: "Michael Rodriguez",
    role: "Lead Developer",
    company: "FinanceApp",
    rating: 5,
  },
  {
    quote: "Integration took us less than a day. The SDKs are well-designed and the webhook system is rock solid.",
    author: "Emily Chen",
    role: "Backend Engineer",
    company: "StartupCo",
    rating: 5,
  },
];

const stats = [
  { label: "API Uptime", value: "99.9%", description: "Guaranteed SLA" },
  { label: "Response Time", value: "< 200ms", description: "Average API response" },
  { label: "Messages/Sec", value: "10,000+", description: "Peak throughput" },
  { label: "Global Reach", value: "195+", description: "Countries supported" },
];

export default function DevelopersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
            <Code className="w-3 h-3 mr-1" />
            Developer Platform
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            APIs That Developers
            <br />
            <span className="text-primary">Actually Love</span>
          </h1>

          <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Complete SMS/MMS APIs with notifications, fraud prevention, and analytics.
            Clean documentation, reliable delivery, and SDKs for every platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/docs">
              <Button size="lg" className="text-lg px-8">
                View API Docs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/app">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Get API Keys
              </Button>
            </Link>
          </div>

          <div className="pt-8">
            <div className="rounded-lg bg-muted p-4 font-mono text-sm">
              <span className="text-muted-foreground">$ </span>
              <span>curl -X POST https://api.neverbusy.com/v1/messages \</span>
              <br />
              <span className="text-muted-foreground ml-6">-H "Authorization: Bearer your_api_key" \</span>
              <br />
              <span className="text-muted-foreground ml-6">-d "to=+1555123456&body=Hello World!"</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="font-medium">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for Developers
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Everything you need to integrate reliable messaging into your applications.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              SDKs for Every Platform
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Official libraries with full type support and comprehensive documentation.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {sdks.map((sdk, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{sdk.icon}</span>
                    <CardTitle className="text-xl">{sdk.language}</CardTitle>
                  </div>
                  <CardDescription className="font-mono text-sm bg-muted p-2 rounded">
                    {sdk.installation}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sdk.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases with Code */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Common Use Cases
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Real code examples for popular messaging scenarios.
            </p>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="grid gap-8 lg:grid-cols-2 items-center">
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <useCase.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold">{useCase.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground">{useCase.description}</p>
                  <Link href="/docs">
                    <Button variant="outline">
                      View Full Documentation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="bg-slate-900 text-slate-100">
                    <CardContent className="p-6">
                      <pre className="text-sm overflow-x-auto">
                        <code>{useCase.code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              API Reference
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Core endpoints with rate limits and response examples.
            </p>
          </div>

          <div className="grid gap-4">
            {apiFeatures.map((api, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline" className="font-mono">
                        {api.endpoint.split(' ')[0]}
                      </Badge>
                      <span className="font-mono text-sm">{api.endpoint.split(' ')[1]}</span>
                    </div>
                    <Badge variant="secondary">{api.rateLimit}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{api.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Loved by Developers
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              See what developers are saying about our API platform.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-24">
        <div className="container">
          <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground lg:p-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get your API keys today and start sending messages in minutes.
              Free tier includes 1,000 messages per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Get API Keys <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
