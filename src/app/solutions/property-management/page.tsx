import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Building,
  Users,
  MessageSquare,
  Phone,
  Shield,
  Bot,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  Zap,
  Bell,
  Wrench,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Building,
    title: "Multi-Tenant Management",
    description: "Separate communication channels for each property, building, and unit.",
    benefits: [
      "Dedicated phone numbers per property",
      "Branded caller ID for each building",
      "Tenant-specific messaging threads",
      "Property manager assignments",
    ],
  },
  {
    icon: Bell,
    title: "Emergency Notifications",
    description: "Instant alerts for urgent situations across all units or specific buildings.",
    benefits: [
      "Mass notification system",
      "Location-based alerts",
      "Emergency contact lists",
      "Delivery confirmation tracking",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance Coordination",
    description: "Streamline maintenance requests and vendor communications.",
    benefits: [
      "Automated ticket creation",
      "Vendor notification system",
      "Photo/video request handling",
      "Completion confirmations",
    ],
  },
  {
    icon: Bot,
    title: "AI-Powered Routing",
    description: "Smart categorization and routing of tenant communications.",
    benefits: [
      "Automatic intent recognition",
      "Priority-based routing",
      "After-hours handling",
      "Language detection",
    ],
  },
];

const useCases = [
  {
    title: "Rent Collection",
    scenario: "Tenant receives late payment reminder",
    flow: [
      "System automatically sends personalized SMS reminder",
      "Tenant responds with payment questions",
      "AI routes to billing specialist",
      "Payment link sent with instructions",
      "Confirmation received and logged",
    ],
    icon: TrendingUp,
  },
  {
    title: "Emergency Response",
    scenario: "Water leak reported in Unit 4B",
    flow: [
      "Tenant texts emergency maintenance line",
      "AI flags as urgent and immediately alerts manager",
      "Automated calls sent to emergency plumber",
      "Status updates sent to affected units",
      "Resolution confirmation logged",
    ],
    icon: AlertTriangle,
  },
  {
    title: "Move-In Process",
    scenario: "New tenant onboarding",
    flow: [
      "Welcome message sent with property info",
      "Building access codes provided",
      "Maintenance contact numbers shared",
      "Community guidelines sent",
      "Follow-up satisfaction check",
    ],
    icon: Users,
  },
];

const integrations = [
  { name: "Yardi", category: "Property Management", logo: "🏢" },
  { name: "RentManager", category: "Property Management", logo: "📊" },
  { name: "AppFolio", category: "Property Management", logo: "📱" },
  { name: "Rent Spree", category: "Leasing", logo: "🔑" },
  { name: "Buildium", category: "Property Management", logo: "🏗️" },
  { name: "RealPage", category: "Property Operations", logo: "📋" },
];

const testimonials = [
  {
    quote: "Never Busy transformed our property management communications. The AI automation saves us 20+ hours per week, and tenant satisfaction has increased by 35%.",
    author: "Sarah Chen",
    role: "CTO, PropTech Solutions",
    company: "Managing 2,500+ units",
    rating: 5,
  },
  {
    quote: "The emergency notification system is a game-changer. We can alert entire buildings in seconds, and the delivery confirmation gives us peace of mind.",
    author: "Michael Torres",
    role: "Operations Manager",
    company: "Metro Property Group",
    rating: 5,
  },
];

const stats = [
  { label: "Average Response Time", value: "< 2 min", description: "From tenant message to staff response" },
  { label: "Automation Rate", value: "67%", description: "Of routine inquiries handled automatically" },
  { label: "Tenant Satisfaction", value: "94%", description: "Improvement in communication ratings" },
  { label: "Time Savings", value: "20+ hrs", description: "Per week for property management teams" },
];

export default function PropertyManagementPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300">
            <Building className="w-3 h-3 mr-1" />
            Property Management Solution
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Property Communications
            <br />
            <span className="text-primary">That Actually Work</span>
          </h1>

          <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Multi-tenant VoIP and messaging designed for property managers. Handle tenant communications,
            emergency notifications, and maintenance requests with AI-powered automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/app">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Schedule Demo
              </Button>
            </Link>
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
              Built for Property Management
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Features designed specifically for multi-tenant buildings, property portfolios, and tenant communications.
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

      {/* Use Cases */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Real-World Scenarios
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              See how Never Busy handles common property management communications.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <useCase.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-base font-medium">
                    {useCase.scenario}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {useCase.flow.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold mt-0.5">
                          {stepIndex + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Integrates with Your Stack
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Connect with popular property management platforms and tools.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center p-4">
                <div className="text-3xl mb-2">{integration.logo}</div>
                <div className="font-medium text-sm">{integration.name}</div>
                <div className="text-xs text-muted-foreground">{integration.category}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Property Managers
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              See what property management professionals are saying about Never Busy.
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
      <section className="py-24">
        <div className="container">
          <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground lg:p-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Transform Your Property Communications?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of property management companies using Never Busy to streamline tenant communications
              and reduce response times.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Talk to Property Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
