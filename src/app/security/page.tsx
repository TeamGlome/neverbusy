import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Lock,
  Eye,
  CheckCircle,
  AlertTriangle,
  FileCheck,
  Globe,
  Users,
  Phone,
  Key,
  Database,
  Zap,
  Building,
  Scale,
  Clock,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "STIR/SHAKEN Verification",
    description: "Industry-leading call authentication to prevent spoofing and robocalls.",
    benefits: [
      "Automatic caller ID verification",
      "Digital signature validation",
      "Spam call blocking",
      "Attestation level reporting",
    ],
    compliance: "FCC Required",
  },
  {
    icon: Phone,
    title: "10DLC Compliance",
    description: "Application-to-person messaging compliance for business communications.",
    benefits: [
      "Brand registration support",
      "Campaign approval process",
      "Message throughput optimization",
      "Carrier relationship management",
    ],
    compliance: "CTIA Standards",
  },
  {
    icon: Lock,
    title: "Advanced Fraud Prevention",
    description: "AI-powered fraud detection and prevention systems.",
    benefits: [
      "Real-time threat detection",
      "Behavioral pattern analysis",
      "Automated blocking rules",
      "Suspicious activity alerts",
    ],
    compliance: "Enterprise Security",
  },
  {
    icon: Database,
    title: "Data Protection & Privacy",
    description: "Comprehensive data protection meeting global privacy standards.",
    benefits: [
      "End-to-end encryption",
      "Data residency controls",
      "Access logging & monitoring",
      "Automated data retention",
    ],
    compliance: "GDPR/CCPA Ready",
  },
];

const complianceStandards = [
  {
    name: "GDPR",
    description: "European General Data Protection Regulation",
    status: "Compliant",
    icon: Globe,
    details: [
      "Data subject rights implementation",
      "Privacy by design architecture",
      "Data processing agreements",
      "EU data residency options",
    ],
  },
  {
    name: "HIPAA",
    description: "Healthcare Information Portability and Accountability Act",
    status: "Ready",
    icon: FileCheck,
    details: [
      "Business Associate Agreements (BAA)",
      "PHI encryption and access controls",
      "Audit logging and monitoring",
      "Risk assessment procedures",
    ],
  },
  {
    name: "SOC 2 Type II",
    description: "Service Organization Control 2 Certification",
    status: "Certified",
    icon: Building,
    details: [
      "Annual third-party audits",
      "Security controls validation",
      "Availability and confidentiality",
      "Processing integrity assurance",
    ],
  },
  {
    name: "ISO 27001",
    description: "Information Security Management System",
    status: "Certified",
    icon: Lock,
    details: [
      "Information security policies",
      "Risk management framework",
      "Continuous improvement process",
      "International standard compliance",
    ],
  },
];

const threatProtection = [
  {
    threat: "Robocalls & Spam",
    description: "Automated unwanted calls",
    protection: "STIR/SHAKEN verification blocks 99.5% of spoofed calls",
    icon: Phone,
  },
  {
    threat: "Caller ID Spoofing",
    description: "Fake caller identification",
    protection: "Digital signatures verify authentic caller identity",
    icon: Eye,
  },
  {
    threat: "SMS Phishing",
    description: "Fraudulent text messages",
    protection: "AI content analysis and sender verification",
    icon: AlertTriangle,
  },
  {
    threat: "Data Breaches",
    description: "Unauthorized data access",
    protection: "Zero-trust architecture with end-to-end encryption",
    icon: Database,
  },
  {
    threat: "Account Takeover",
    description: "Unauthorized account access",
    protection: "Multi-factor authentication and behavioral monitoring",
    icon: Key,
  },
  {
    threat: "Regulatory Violations",
    description: "Non-compliance penalties",
    protection: "Built-in compliance monitoring and automated reporting",
    icon: Scale,
  },
];

const securityMetrics = [
  { label: "Call Verification Rate", value: "99.8%", description: "Successful STIR/SHAKEN verification" },
  { label: "Fraud Blocked", value: "2.3M+", description: "Fraudulent calls prevented monthly" },
  { label: "Response Time", value: "<50ms", description: "Real-time threat detection" },
  { label: "Uptime SLA", value: "99.99%", description: "Security system availability" },
];

const certifications = [
  { name: "SOC 2 Type II", logo: "🛡️" },
  { name: "ISO 27001", logo: "🔒" },
  { name: "GDPR Compliant", logo: "🇪🇺" },
  { name: "HIPAA Ready", logo: "🏥" },
  { name: "FCC Approved", logo: "📞" },
  { name: "CTIA Certified", logo: "📱" },
];

const enterpriseFeatures = [
  {
    title: "Call Recording & Archival",
    description: "Secure recording with compliance-ready storage and retrieval.",
    icon: FileCheck,
  },
  {
    title: "Access Controls",
    description: "Role-based permissions with audit trails for all user actions.",
    icon: Users,
  },
  {
    title: "Threat Intelligence",
    description: "Real-time threat feeds and automated response mechanisms.",
    icon: Zap,
  },
  {
    title: "Incident Response",
    description: "24/7 security monitoring with automated incident response.",
    icon: Clock,
  },
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section flex flex-col items-center justify-center space-y-8 py-24 lg:py-32 text-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-8">
            <Badge className="status-operational">
              <Shield className="w-3 h-3 mr-1" />
              Enterprise Security & Compliance
            </Badge>

            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                Security & Compliance
                <br />
                <span className="text-primary-bold">Built to Protect</span>
              </h1>

              <p className="max-w-3xl text-lg sm:text-xl text-gray-200">
                STIR/SHAKEN verification, 10DLC compliance, fraud prevention, and enterprise-grade security.
                Protecting your communications with the highest industry standards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/app">
                <Button size="lg" className="btn-primary-bold text-lg px-8">
                  Security Overview <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white text-lg px-8">
                  Security Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="stats-bold grid grid-cols-2 gap-8 lg:grid-cols-4">
            {securityMetrics.map((metric, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="stat-value text-black">{metric.value}</div>
                <div className="stat-label text-black">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Security Features */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Advanced Security Features
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Comprehensive security measures protecting every aspect of your communications.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="card-high-contrast bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg primary-gradient text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.compliance}
                    </Badge>
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

      {/* Threat Protection */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Comprehensive Threat Protection
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Advanced protection against modern communication threats and attack vectors.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {threatProtection.map((threat, index) => (
              <Card key={index} className="card-high-contrast">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
                    <threat.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg text-black">{threat.threat}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {threat.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{threat.protection}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Compliance & Certifications
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Meeting the highest industry standards for security, privacy, and compliance.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="card-high-contrast bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                        <standard.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-black">{standard.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-600">
                          {standard.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {standard.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {standard.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Security Certifications & Standards
            </h2>
          </div>

          <div className="grid gap-4 grid-cols-3 lg:grid-cols-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-4 border-2">
                <div className="text-2xl mb-2">{cert.logo}</div>
                <div className="font-medium text-xs text-black">{cert.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Enterprise Security Features
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Advanced security capabilities for enterprise organizations.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg primary-gradient text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="rounded-lg high-contrast-section p-8 text-center lg:p-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
              Ready for Enterprise-Grade Security?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              Protect your communications with industry-leading security, compliance, and fraud prevention.
              Schedule a security assessment with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app">
                <Button size="lg" className="btn-primary-bold text-lg px-8">
                  Security Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white text-lg px-8">
                  Contact Security Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
