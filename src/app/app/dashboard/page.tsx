import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MessageSquare,
  Phone,
  Send,
  TrendingUp,
  TrendingDown,
  Users,
  CheckCircle,
  Clock,
  AlertTriangle,
  ArrowRight,
  Bot,
  Shield,
  BarChart3,
} from "lucide-react";

const stats = [
  {
    title: "Total Messages",
    value: "12,847",
    change: "+12%",
    changeType: "increase" as const,
    icon: MessageSquare,
    description: "This month",
  },
  {
    title: "Voice Minutes",
    value: "2,340",
    change: "+8%",
    changeType: "increase" as const,
    icon: Phone,
    description: "This month",
  },
  {
    title: "Campaigns Sent",
    value: "47",
    change: "-2%",
    changeType: "decrease" as const,
    icon: Send,
    description: "This month",
  },
  {
    title: "Response Rate",
    value: "94.2%",
    change: "+5%",
    changeType: "increase" as const,
    icon: TrendingUp,
    description: "Average",
  },
];

const recentMessages = [
  {
    id: "1",
    from: "+1 (555) 123-4567",
    preview: "Hi, I'm having issues with my apartment heater...",
    timestamp: "2 min ago",
    status: "unread" as const,
    type: "sms" as const,
    assignedTo: "Sarah",
  },
  {
    id: "2",
    from: "Microsoft Teams",
    preview: "Conference call scheduled for 3:00 PM",
    timestamp: "5 min ago",
    status: "read" as const,
    type: "teams" as const,
    assignedTo: "Auto",
  },
  {
    id: "3",
    from: "+1 (555) 987-6543",
    preview: "Thank you for the quick response!",
    timestamp: "12 min ago",
    status: "read" as const,
    type: "sms" as const,
    assignedTo: "Mike",
  },
  {
    id: "4",
    from: "+1 (555) 456-7890",
    preview: "API integration test message",
    timestamp: "1 hour ago",
    status: "read" as const,
    type: "api" as const,
    assignedTo: "System",
  },
];

const recentCampaigns = [
  {
    id: "1",
    name: "Rent Reminder - Unit 4B",
    status: "completed" as const,
    sent: 1,
    delivered: 1,
    timestamp: "30 min ago",
  },
  {
    id: "2",
    name: "Maintenance Schedule",
    status: "sending" as const,
    sent: 45,
    delivered: 42,
    timestamp: "2 hours ago",
  },
  {
    id: "3",
    name: "2FA Verification Codes",
    status: "completed" as const,
    sent: 234,
    delivered: 231,
    timestamp: "3 hours ago",
  },
];

const aiInsights = [
  {
    type: "suggestion",
    title: "High-volume keywords detected",
    description: "Consider creating auto-responses for 'maintenance request' (23 mentions)",
    priority: "medium" as const,
  },
  {
    type: "alert",
    title: "Unusual call volume",
    description: "20% increase in calls between 2-4 PM this week",
    priority: "low" as const,
  },
  {
    type: "optimization",
    title: "Response time improved",
    description: "Average response time decreased by 15% this week",
    priority: "positive" as const,
  },
];

const quickActions = [
  {
    title: "Send Campaign",
    description: "Broadcast SMS/MMS to contacts",
    icon: Send,
    href: "/app/campaigns/new",
  },
  {
    title: "View Analytics",
    description: "Detailed performance metrics",
    icon: BarChart3,
    href: "/app/analytics",
  },
  {
    title: "Manage Team",
    description: "Add users and assign roles",
    icon: Users,
    href: "/app/team",
  },
  {
    title: "AI Settings",
    description: "Configure automation rules",
    icon: Bot,
    href: "/app/ai/settings",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your communications.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            All systems operational
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                {stat.changeType === "increase" ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={stat.changeType === "increase" ? "text-green-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span>{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Messages */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Latest incoming communications</CardDescription>
            </div>
            <Link href="/app/messages">
              <Button variant="outline" size="sm">
                View All <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0">
                    {message.type === "sms" && <MessageSquare className="h-4 w-4 text-blue-500" />}
                    {message.type === "teams" && <Users className="h-4 w-4 text-purple-500" />}
                    {message.type === "api" && <Bot className="h-4 w-4 text-green-500" />}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{message.from}</p>
                      <div className="flex items-center space-x-2">
                        {message.status === "unread" && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                        <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {message.preview}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs">
                        {message.assignedTo}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-4 w-4" />
              <span>AI Insights</span>
            </CardTitle>
            <CardDescription>Automated recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start space-x-2">
                    {insight.priority === "positive" && <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />}
                    {insight.priority === "medium" && <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />}
                    {insight.priority === "low" && <Clock className="h-4 w-4 text-blue-500 mt-0.5" />}
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{insight.title}</p>
                      <p className="text-xs text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                  {index < aiInsights.length - 1 && <div className="border-t" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Campaigns */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Campaigns</CardTitle>
              <CardDescription>Latest broadcast activities</CardDescription>
            </div>
            <Link href="/app/campaigns">
              <Button variant="outline" size="sm">
                View All <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCampaigns.map((campaign) => (
                <div key={campaign.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{campaign.name}</p>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={campaign.status === "completed" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {campaign.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {campaign.sent} sent, {campaign.delivered} delivered
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{campaign.timestamp}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {quickActions.map((action, index) => (
                <Link key={index} href={action.href}>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <action.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{action.title}</p>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
