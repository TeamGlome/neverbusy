import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowRight,
  Users,
  MessageSquare,
  Phone,
  Shield,
  Zap,
  Headphones,
  Clock,
  Star,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and teams",
    companySize: "1-25 employees",
    price: {
      monthly: 199,
      annual: 1990,
    },
    features: [
      "Unlimited users",
      "Unlimited SMS/MMS",
      "5 phone numbers",
      "Basic AI automation",
      "Email support",
      "Standard integrations",
      "10DLC compliance",
      "Basic analytics",
    ],
    limitations: [
      "Up to 10,000 messages/month",
      "Up to 500 voice minutes/month",
    ],
    popular: false,
  },
  {
    name: "Growth",
    description: "Built for growing companies that need more",
    companySize: "26-100 employees",
    price: {
      monthly: 499,
      annual: 4990,
    },
    features: [
      "Everything in Starter",
      "Unlimited messaging",
      "Unlimited voice minutes",
      "15 phone numbers",
      "Advanced AI automation",
      "Priority support",
      "Custom integrations",
      "Advanced analytics",
      "Team collaboration tools",
      "API access",
    ],
    limitations: [],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    companySize: "100+ employees",
    price: {
      monthly: 1299,
      annual: 12990,
    },
    features: [
      "Everything in Growth",
      "Unlimited phone numbers",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom AI training",
      "White-label options",
      "Advanced security controls",
      "Compliance reporting",
      "SLA guarantees",
      "Custom contracts",
    ],
    limitations: [],
    popular: false,
  },
];

const features = [
  {
    icon: Users,
    title: "Unlimited Users",
    description: "No per-user fees. Add your entire team without worrying about cost.",
  },
  {
    icon: MessageSquare,
    title: "Unified Communications",
    description: "SMS, MMS, voice, and internal messaging in one platform.",
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Smart routing, auto-responders, and conversation insights.",
  },
  {
    icon: Shield,
    title: "Compliance Built-In",
    description: "STIR/SHAKEN, 10DLC, GDPR, and TCPA compliance included.",
  },
];

const faqs = [
  {
    question: "How is pricing calculated?",
    answer: "Our pricing is based on your company size, not the number of users. This means you can add unlimited team members without increasing costs.",
  },
  {
    question: "What's included in unlimited messaging?",
    answer: "Unlimited SMS and MMS within your plan limits. Starter plan includes 10,000 messages/month, while Growth and Enterprise have truly unlimited messaging.",
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees, no hidden costs. The price you see is what you pay.",
  },
  {
    question: "Do you offer custom pricing for enterprise?",
    answer: "Yes, we offer custom pricing and contracts for large enterprises with specific needs. Contact our sales team for a quote.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
            One price per company size. Unlimited users, unlimited usage.
            No per-user fees, no surprise charges.
          </p>

          <div className="flex items-center space-x-4 mt-8">
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
              <Check className="w-3 h-3 mr-1" />
              30-day free trial
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300">
              <Shield className="w-3 h-3 mr-1" />
              No setup fees
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300">
              <Users className="w-3 h-3 mr-1" />
              Unlimited users
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container pb-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-xl' : 'border'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="text-sm text-muted-foreground mt-2">
                  {plan.companySize}
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">${plan.price.monthly}</span>
                    <span className="text-sm text-muted-foreground ml-1">/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    ${plan.price.annual}/year (save 2 months)
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations.length > 0 && (
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-medium mb-2">Usage Limits:</h4>
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="text-sm text-muted-foreground">
                        • {limitation}
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-4">
                  <Link href="/app">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <div className="text-center mt-2">
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <div className="rounded-lg border bg-muted/30 p-8">
            <h3 className="text-2xl font-bold mb-4">Need something custom?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Large enterprise? Government? Non-profit? We offer custom pricing and features
              tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  <Headphones className="mr-2 h-4 w-4" />
                  Talk to Sales
                </Button>
              </Link>
              <Link href="/enterprise">
                <Button size="lg" variant="outline">
                  Enterprise Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What's included in every plan
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Core features that power your communications, included at every tier.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Link href="/contact">
              <Button variant="outline">
                <Headphones className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
