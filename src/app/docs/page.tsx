"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Code,
  Play,
  Copy,
  CheckCircle,
  Book,
  Zap,
  Globe,
  Key,
  Webhook,
  Database,
  Terminal,
  FileText,
  Settings,
} from "lucide-react";

const apiEndpoints = [
  {
    method: "POST",
    endpoint: "/v1/messages",
    description: "Send SMS, MMS, or voice messages",
    rateLimit: "1000/min",
    example: {
      request: `{
  "to": "+1555123456",
  "body": "Hello from Never Busy!",
  "type": "sms"
}`,
      response: `{
  "id": "msg_abc123",
  "status": "queued",
  "to": "+1555123456",
  "created_at": "2025-01-15T10:30:00Z"
}`
    }
  },
  {
    method: "GET",
    endpoint: "/v1/messages/{id}",
    description: "Retrieve message status and details",
    rateLimit: "5000/min",
    example: {
      request: `GET /v1/messages/msg_abc123`,
      response: `{
  "id": "msg_abc123",
  "status": "delivered",
  "to": "+1555123456",
  "body": "Hello from Never Busy!",
  "created_at": "2025-01-15T10:30:00Z",
  "delivered_at": "2025-01-15T10:30:15Z"
}`
    }
  },
  {
    method: "POST",
    endpoint: "/v1/verify",
    description: "Send verification codes",
    rateLimit: "100/min",
    example: {
      request: `{
  "to": "+1555123456",
  "template": "verification",
  "data": {
    "code": "123456"
  }
}`,
      response: `{
  "id": "verify_xyz789",
  "status": "sent",
  "expires_at": "2025-01-15T10:40:00Z"
}`
    }
  },
  {
    method: "POST",
    endpoint: "/v1/campaigns",
    description: "Create bulk messaging campaigns",
    rateLimit: "50/min",
    example: {
      request: `{
  "name": "Product Launch",
  "recipients": ["+1555123456", "+1555789012"],
  "message": "New product available!",
  "scheduled_at": "2025-01-15T12:00:00Z"
}`,
      response: `{
  "id": "campaign_def456",
  "status": "scheduled",
  "recipients_count": 2,
  "scheduled_at": "2025-01-15T12:00:00Z"
}`
    }
  }
];

const sdks = [
  {
    language: "JavaScript",
    install: "npm install @neverbusy/sdk",
    example: `import { NeverBusy } from '@neverbusy/sdk';

const client = new NeverBusy('your_api_key');

// Send SMS
const message = await client.messages.send({
  to: '+1555123456',
  body: 'Hello World!'
});

console.log(message.id);`,
    icon: "🟨"
  },
  {
    language: "Python",
    install: "pip install neverbusy-python",
    example: `from neverbusy import Client

client = Client('your_api_key')

# Send SMS
message = client.messages.send(
    to='+1555123456',
    body='Hello World!'
)

print(message.id)`,
    icon: "🐍"
  },
  {
    language: "PHP",
    install: "composer require neverbusy/php-sdk",
    example: `<?php
use NeverBusy\\Client;

$client = new Client('your_api_key');

// Send SMS
$message = $client->messages->send([
    'to' => '+1555123456',
    'body' => 'Hello World!'
]);

echo $message->id;`,
    icon: "🐘"
  },
  {
    language: "cURL",
    install: "Built into most systems",
    example: `curl -X POST https://api.neverbusy.com/v1/messages \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+1555123456",
    "body": "Hello World!"
  }'`,
    icon: "⚡"
  }
];

const webhookEvents = [
  {
    event: "message.delivered",
    description: "Message successfully delivered to recipient",
    payload: `{
  "event": "message.delivered",
  "data": {
    "id": "msg_abc123",
    "status": "delivered",
    "delivered_at": "2025-01-15T10:30:15Z"
  }
}`
  },
  {
    event: "message.failed",
    description: "Message delivery failed",
    payload: `{
  "event": "message.failed",
  "data": {
    "id": "msg_abc123",
    "status": "failed",
    "error": "Invalid phone number"
  }
}`
  },
  {
    event: "message.received",
    description: "Inbound message received",
    payload: `{
  "event": "message.received",
  "data": {
    "from": "+1555123456",
    "body": "Reply message",
    "received_at": "2025-01-15T10:35:00Z"
  }
}`
  }
];

export default function DocsPage() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);
  const [selectedSDK, setSelectedSDK] = useState(0);
  const [apiKey, setApiKey] = useState("sk_test_...");
  const [testResponse, setTestResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTestAPI = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setTestResponse(apiEndpoints[selectedEndpoint].example.response);
      setIsLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section flex flex-col items-center justify-center space-y-8 py-24 lg:py-32 text-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-8">
            <Badge className="status-operational">
              <Code className="w-3 h-3 mr-1" />
              API Documentation
            </Badge>

            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                Developer Documentation
                <br />
                <span className="text-primary-bold">Build With Confidence</span>
              </h1>

              <p className="max-w-3xl text-lg sm:text-xl text-gray-200">
                Complete API reference, interactive examples, and testing tools.
                Everything you need to integrate Never Busy into your applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#quickstart">
                <Button size="lg" className="btn-primary-bold text-lg px-8">
                  Quick Start Guide <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#api-console">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white text-lg px-8">
                  API Console
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid gap-4 lg:grid-cols-4">
            <Link href="#authentication" className="group">
              <Card className="card-high-contrast group-hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <Key className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-black">Authentication</h3>
                  <p className="text-sm text-gray-600 mt-1">API keys and security</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="#endpoints" className="group">
              <Card className="card-high-contrast group-hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-black">API Endpoints</h3>
                  <p className="text-sm text-gray-600 mt-1">Complete reference</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="#webhooks" className="group">
              <Card className="card-high-contrast group-hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <Webhook className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-black">Webhooks</h3>
                  <p className="text-sm text-gray-600 mt-1">Real-time events</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="#sdks" className="group">
              <Card className="card-high-contrast group-hover:border-primary transition-colors">
                <CardContent className="p-6 text-center">
                  <Code className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-black">SDKs</h3>
                  <p className="text-sm text-gray-600 mt-1">Libraries & tools</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quickstart" className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Quick Start Guide
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Get started with Never Busy API in under 5 minutes.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="card-high-contrast bg-white">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold">
                  1
                </div>
                <CardTitle className="text-black">Get API Key</CardTitle>
                <CardDescription>Sign up and get your API credentials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                  sk_live_1234567890abcdef
                </div>
                <Link href="/app">
                  <Button className="w-full btn-outline-bold">Get API Key</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-high-contrast bg-white">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold">
                  2
                </div>
                <CardTitle className="text-black">Install SDK</CardTitle>
                <CardDescription>Choose your preferred programming language</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-gray-900 p-3 rounded text-green-400 font-mono text-sm">
                  $ npm install @neverbusy/sdk
                </div>
                <Link href="#sdks">
                  <Button className="w-full btn-outline-bold">View All SDKs</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-high-contrast bg-white">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold">
                  3
                </div>
                <CardTitle className="text-black">Send Message</CardTitle>
                <CardDescription>Your first API call in seconds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                  client.messages.send()
                </div>
                <Link href="#api-console">
                  <Button className="w-full btn-outline-bold">Try in Console</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Console */}
      <section id="api-console" className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Interactive API Console
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Test API endpoints directly from your browser with live examples.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-black">API Endpoints</CardTitle>
                  <CardDescription>Select an endpoint to test</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {apiEndpoints.map((endpoint, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedEndpoint(index)}
                      className={`w-full text-left p-3 rounded border transition-colors ${
                        selectedEndpoint === index
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge variant={endpoint.method === 'POST' ? 'default' : 'secondary'}>
                            {endpoint.method}
                          </Badge>
                          <span className="font-mono text-sm">{endpoint.endpoint}</span>
                        </div>
                        <Badge variant="outline">{endpoint.rateLimit}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{endpoint.description}</p>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-black">Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input
                      placeholder="Your API key"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="font-mono"
                    />
                    <Button
                      onClick={handleTestAPI}
                      disabled={isLoading}
                      className="w-full btn-primary-bold"
                    >
                      {isLoading ? (
                        <>Testing...</>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Test API Call
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-black">Request</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(apiEndpoints[selectedEndpoint].example.request)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    {apiEndpoints[selectedEndpoint].example.request}
                  </pre>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-black">Response</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(testResponse || apiEndpoints[selectedEndpoint].example.response)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                    {testResponse || apiEndpoints[selectedEndpoint].example.response}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section id="sdks" className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              SDKs & Libraries
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Official libraries with full type support and comprehensive examples.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex justify-center space-x-4">
              {sdks.map((sdk, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSDK(index)}
                  className={`px-4 py-2 rounded border transition-colors ${
                    selectedSDK === index
                      ? 'border-primary bg-primary text-white'
                      : 'border-gray-300 bg-white text-black hover:border-gray-400'
                  }`}
                >
                  <span className="mr-2">{sdk.icon}</span>
                  {sdk.language}
                </button>
              ))}
            </div>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-black flex items-center">
                    <span className="mr-2 text-2xl">{sdks[selectedSDK].icon}</span>
                    {sdks[selectedSDK].language}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    onClick={() => copyToClipboard(sdks[selectedSDK].example)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription className="font-mono text-sm bg-gray-100 p-2 rounded">
                  {sdks[selectedSDK].install}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
                  {sdks[selectedSDK].example}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section id="webhooks" className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Webhooks & Events
            </h2>
            <p className="max-w-2xl text-lg text-gray-600">
              Real-time notifications for message events and status updates.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {webhookEvents.map((webhook, index) => (
              <Card key={index} className="card-high-contrast">
                <CardHeader>
                  <CardTitle className="text-black flex items-center">
                    <Webhook className="mr-2 h-5 w-5 text-primary" />
                    {webhook.event}
                  </CardTitle>
                  <CardDescription>{webhook.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
                    {webhook.payload}
                  </pre>
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
              Ready to Start Building?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              Get your API keys and start integrating Never Busy into your applications today.
              Free tier includes 1,000 messages per month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app">
                <Button size="lg" className="btn-primary-bold text-lg px-8">
                  Get API Keys <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 border-white text-lg px-8">
                  Developer Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
