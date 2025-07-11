import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Phone,
  Shield,
  Bot,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  Zap,
  Headphones,
  FileText,
  Star,
  Building,
  Globe,
  Lock,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Direct Routing",
    description: "Seamless integration with Microsoft Teams Direct Routing and Operator Connect.",
    benefits: [
      "SIP trunk connectivity",
      "Number porting support",
      "Failover and redundancy",
      "Global PSTN access",
    ],
  },
  {
    icon: Bot,
    title: "AI Call Intelligence",
    description: "Advanced AI-powered call analytics and insights for enterprise teams.",
    benefits: [
      "Real-time transcription",
      "Sentiment analysis",
      "Action item extraction",
      "Compliance monitoring",
    ],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Enterprise-grade security with compliance recording and data protection.",
    benefits: [
      "Call recording & archival",
      "Data loss prevention",
      "Advanced threat protection",
      "Zero-trust architecture",
    ],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive reporting and analytics for enterprise communication patterns.",
    benefits: [
      "Call quality metrics",
      "Usage analytics",
      "Performance dashboards",
      "Custom reporting",
    ],
  },
];

const useCases = [
  {
    title: "Law Firm Communication",
    scenario: "Client calls law firm's main number",
    flow: [
      "Call routed through Teams Direct Routing",
      "AI identifies caller and case number",
      "Routes to appropriate attorney's Teams",
      "Records conversation for compliance",
      "Automatically updates case management system",
      "Sends summary to case team",
    ],
    icon: Building,
  },
  {
    title: "Customer Support",
    scenario: "Enterprise customer service call",
    flow: [
      "Inbound call distributed via Teams queue",
      "AI analyzes customer sentiment in real-time",
      "Provides live coaching to agent",
      "Escalates high-priority issues automatically",
      "Generates post-call summary",
      "Updates CRM with interaction details",
    ],
    icon: Headphones,
  },
  {
    title: "Global Enterprise",
    scenario: "International team collaboration",
    flow: [
      "Multi-region Teams deployment",
      "Local PSTN numbers in each country",
      "Unified dial plan and routing",
      "Cross-border compliance handling",
      "Centralized analytics and reporting",
      "24/7 global support coverage",
    ],
    icon: Globe,
  },
];

const integrations = [
  { name: "Microsoft Teams", category: "Core Platform", logo: "🟦" },
  { name: "Office 365", category: "Productivity Suite", logo: "📊" },
  { name: "Azure AD", category: "Identity Management", logo: "🔐" },
  { name: "SharePoint", category: "Document Management", logo: "📄" },
  { name: "Power BI", category: "Analytics", logo: "📈" },
  { name: "Dynamics 365", category: "CRM", logo: "💼" },
];

const complianceFeatures = [
  { name: "Call Recording", description: "Automatic recording with compliance archival" },
  { name: "Data Retention", description: "Configurable retention policies" },
  { name: "GDPR Compliance", description: "European data protection standards" },
  { name: "HIPAA Ready", description: "Healthcare data security compliance" },
  { name: "SOX Compliance", description: "Financial reporting requirements" },
  { name: "ISO 27001", description: "Information security management" },
];

const testimonials = [
  {
    quote: "The Teams integration is seamless. Our lawyers love the AI call insights and compliance features. It's transformed how we handle client communications.",
    author: "Jennifer Walsh",
    role: "IT Director",
    company: "Walsh & Associates Law",
    rating: 5,
  },
  {
    quote: "Never Busy's Direct Routing solution reduced our telecom costs by 40% while improving call quality. The AI analytics are a game-changer.",
    author: "David Kim",
    role: "CTO",
    company: "Global Enterprise Corp",
    rating: 5,
  },
];

const stats = [
  { label: "Call Quality Score", value: "4.8/5", description: "Average MOS rating across all calls" },
  { label: "Uptime SLA", value: "99.99%", description: "Enterprise-grade reliability guarantee" },
  { label: "Setup Time", value: "< 24hrs", description: "From purchase to full deployment" },
  { label: "Cost Savings", value: "35%", description: "Average reduction in telecom costs" },
];

export default function TeamsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section flex flex-col items-center justify-center space-y-8 py-24 lg:py-32 text-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-8">
            <Badge className="status-operational">
              <Users className="w-3 h-3 mr-1" />
              Microsoft Teams Integration
            </Badge>

            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                Microsoft Teams
                <br />
                <span className="text-primary-bold">That Actually Works</span>
              </h1>

              <p className="max-w-3xl text-lg sm:text-xl text-gray-200">
                Direct Routing and AI tools for intensive Office 365 users like law firms, enterprises, and organizations
                that need enterprise-grade communication with compliance built-in.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/app">
                <Button size="lg" className="btn-primary-bold text-lg px-8">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white text-lg px-8">
                  Contact Enterprise Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="stats-bold grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="stat-value text-black">{stat.value}</div>
                <div className="stat-label text-black">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Enterprise Teams Integration
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Purpose-built for organizations that need more than basic calling - compliance, AI insights, and enterprise security.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="card-high-contrast bg-white">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg primary-gradient text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-black">{feature.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{benefit}</span>
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
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Enterprise Use Cases
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              See how Never Busy transforms Microsoft Teams for different enterprise scenarios.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="card-high-contrast">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg primary-gradient text-white">
                    <useCase.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl text-black">{useCase.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-gray-600">
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
                        <span className="text-sm text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Enterprise Compliance & Security
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Built for organizations with strict compliance and security requirements.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="card-high-contrast bg-white text-center p-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold text-sm text-black">{feature.name}</div>
                    <div className="text-xs text-gray-600">{feature.description}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Microsoft Ecosystem Integration
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Deep integration with your existing Microsoft infrastructure.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="card-high-contrast text-center p-4">
                <div className="text-3xl mb-2">{integration.logo}</div>
                <div className="font-medium text-sm text-black">{integration.name}</div>
                <div className="text-xs text-gray-600">{integration.category}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Trusted by Enterprise Teams
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              See what enterprise customers are saying about Never Busy Teams integration.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-high-contrast bg-white">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-6 text-gray-700">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-black">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="rounded-lg high-contrast-section p-8 text-center lg:p-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
              Ready to Transform Your Teams Experience?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              Join hundreds of enterprises using Never Busy to enhance Microsoft Teams with AI insights,
              compliance features, and enterprise-grade communication tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app">
                <Button size="lg" className="btn-primary-bold text-lg px-8">
                  Start Enterprise Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white text-lg px-8">
                  Talk to Enterprise Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
