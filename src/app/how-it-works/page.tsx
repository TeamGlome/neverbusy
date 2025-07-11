import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ArrowDown,
  MessageSquare,
  Bot,
  Users,
  Shield,
  Code,
  Zap,
  Phone,
  Globe,
  Building,
  CheckCircle,
  TrendingUp,
  Clock,
  Settings,
  Database,
  Webhook,
} from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Connect Your Channels",
    description: "Integrate SMS, MMS, voice calls, and Microsoft Teams in minutes.",
    icon: Globe,
    details: [
      "Choose from Twilio, Bandwidth, or our network",
      "Import existing phone numbers",
      "Configure Microsoft Teams Direct Routing",
      "Set up webhooks and API endpoints",
    ],
    time: "5 minutes setup",
  },
  {
    step: 2,
    title: "AI Takes Over",
    description: "Our AI analyzes conversations and automatically routes, tags, and responds.",
    icon: Bot,
    details: [
      "Natural language processing identifies intent",
      "Smart routing to the right team member",
      "Auto-responses for common questions",
      "Sentiment analysis and priority scoring",
    ],
    time: "Instant automation",
  },
  {
    step: 3,
    title: "Team Collaboration",
    description: "Your team works together seamlessly with unified messaging and AI insights.",
    icon: Users,
    details: [
      "Shared inbox for all communications",
      "Internal notes and tags",
      "Team assignments and handoffs",
      "Real-time collaboration tools",
    ],
    time: "Ongoing efficiency",
  },
  {
    step: 4,
    title: "Scale & Optimize",
    description: "Analytics and AI recommendations help you improve over time.",
    icon: TrendingUp,
    details: [
      "Performance analytics and insights",
      "AI-powered optimization suggestions",
      "Compliance monitoring and reporting",
      "Automated scaling and load balancing",
    ],
    time: "Continuous improvement",
  },
];

const integrations = [
  {
    category: "Telecom Providers",
    items: [
      { name: "Bandwidth", description: "Enterprise-grade voice and messaging" },
      { name: "Twilio", description: "Global communications platform" },
      { name: "TransNexus", description: "CNAM/VNAM and fraud prevention" },
    ],
  },
  {
    category: "Microsoft Ecosystem",
    items: [
      { name: "Microsoft Teams", description: "Direct Routing and Operator Connect" },
      { name: "Office 365", description: "Calendar and contact integration" },
      { name: "Azure AD", description: "Single sign-on and user management" },
    ],
  },
  {
    category: "Business Tools",
    items: [
      { name: "CRM Systems", description: "Salesforce, HubSpot, Pipedrive" },
      { name: "Help Desk", description: "Zendesk, Freshdesk, Intercom" },
      { name: "Property Management", description: "Yardi, RentManager, AppFolio" },
    ],
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "Unified Inbox",
    description: "All messages from SMS, MMS, voice, and Teams in one place.",
    capabilities: ["Multi-channel support", "Thread management", "Search and filtering", "Bulk actions"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Smart automation that learns from your communication patterns.",
    capabilities: ["Intent recognition", "Auto-routing", "Response suggestions", "Sentiment analysis"],
  },
  {
    icon: Shield,
    title: "Compliance Engine",
    description: "Built-in compliance for telecommunications regulations.",
    capabilities: ["STIR/SHAKEN verification", "10DLC registration", "GDPR compliance", "Call recording"],
  },
  {
    icon: Code,
    title: "Developer APIs",
    description: "RESTful APIs and webhooks for custom integrations.",
    capabilities: ["RESTful endpoints", "Webhook notifications", "SDK libraries", "Rate limiting"],
  },
];

const useCases = [
  {
    icon: Building,
    title: "Property Management",
    scenario: "Tenant calls about maintenance",
    flow: [
      "Call comes in to main property number",
      "AI identifies tenant and property unit",
      "Routes to appropriate maintenance team",
      "Creates ticket with conversation history",
      "Sends confirmation SMS to tenant",
    ],
  },
  {
    icon: Code,
    title: "App Development",
    scenario: "User needs 2FA verification",
    flow: [
      "App triggers SMS via API call",
      "Never Busy validates and sends code",
      "Tracks delivery and response",
      "Handles failed delivery attempts",
      "Returns status to your application",
    ],
  },
  {
    icon: Users,
    title: "Enterprise Teams",
    scenario: "Client calls law firm",
    flow: [
      "Call routed through Teams Direct Routing",
      "AI identifies caller and case",
      "Routes to appropriate attorney",
      "Records conversation for compliance",
      "Automatically updates case notes",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            How Never Busy Works
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
            From setup to scale, see how our AI-powered platform transforms your communications
            in four simple steps.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="container pb-24">
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    {step.step}
                  </div>
                  <Badge variant="secondary">{step.time}</Badge>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>

                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                <Card className="w-full max-w-md">
                  <CardContent className="p-8 text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                      <step.icon className="h-12 w-12" />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </CardContent>
                </Card>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex justify-center py-8">
                  <ArrowDown className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Core Platform Features
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              The building blocks that power every Never Busy implementation.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
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
                    {feature.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See It In Action
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Real-world scenarios showing how Never Busy handles your communications.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-2">
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
                  <div className="space-y-4">
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
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Integrations & Partners
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Connect with the tools and services you already use.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {integrations.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    ))}
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
              Ready to see it in action?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Start your free trial today or schedule a personalized demo to see how
              Never Busy can transform your communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
