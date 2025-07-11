"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MessageSquare,
  Send,
  Search,
  Filter,
  MoreVertical,
  Bot,
  Tag,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Paperclip,
  Smile,
  ArrowRight,
  Users,
  Star,
  Archive,
  Trash2,
  Forward,
} from "lucide-react";

// Mock data for conversations
const conversations = [
  {
    id: "1",
    participant: "+1 (555) 123-4567",
    name: "Sarah Johnson",
    lastMessage: "Hi, I'm having issues with my apartment heater. It's not working properly.",
    timestamp: "2 min ago",
    unreadCount: 2,
    status: "open" as const,
    priority: "high" as const,
    type: "sms" as const,
    assignedTo: "Mike Chen",
    tags: ["maintenance", "urgent"],
    avatar: "/avatars/user-1.jpg",
  },
  {
    id: "2",
    participant: "Microsoft Teams",
    name: "Legal Team Call",
    lastMessage: "Conference call scheduled for 3:00 PM regarding the Johnson case",
    timestamp: "5 min ago",
    unreadCount: 0,
    status: "closed" as const,
    priority: "normal" as const,
    type: "teams" as const,
    assignedTo: "Auto",
    tags: ["teams", "scheduled"],
    avatar: "/avatars/teams.jpg",
  },
  {
    id: "3",
    participant: "+1 (555) 987-6543",
    name: "Robert Kim",
    lastMessage: "Thank you for the quick response! The issue has been resolved.",
    timestamp: "12 min ago",
    unreadCount: 0,
    status: "closed" as const,
    priority: "low" as const,
    type: "sms" as const,
    assignedTo: "Sarah Liu",
    tags: ["resolved", "satisfaction"],
    avatar: "/avatars/user-2.jpg",
  },
  {
    id: "4",
    participant: "+1 (555) 456-7890",
    name: "API Integration",
    lastMessage: "Test message for API integration validation",
    timestamp: "1 hour ago",
    unreadCount: 0,
    status: "open" as const,
    priority: "normal" as const,
    type: "api" as const,
    assignedTo: "System",
    tags: ["api", "test"],
    avatar: "/avatars/api.jpg",
  },
];

// Mock data for messages in selected conversation
const messages = [
  {
    id: "1",
    from: "+1 (555) 123-4567",
    content: "Hi, I'm having issues with my apartment heater.",
    timestamp: "10:28 AM",
    type: "inbound" as const,
    status: "delivered" as const,
  },
  {
    id: "2",
    from: "+1 (555) 123-4567",
    content: "It's not working properly and my apartment is getting cold.",
    timestamp: "10:29 AM",
    type: "inbound" as const,
    status: "delivered" as const,
  },
  {
    id: "3",
    from: "Mike Chen",
    content: "I understand your concern about the heater. Let me check our maintenance schedule and get someone out to you as soon as possible.",
    timestamp: "10:32 AM",
    type: "outbound" as const,
    status: "delivered" as const,
    aiGenerated: true,
  },
  {
    id: "4",
    from: "+1 (555) 123-4567",
    content: "Thank you! When can I expect someone?",
    timestamp: "10:33 AM",
    type: "inbound" as const,
    status: "delivered" as const,
  },
];

const aiSuggestions = [
  "Our maintenance team can visit you today between 2-4 PM. Would that work for you?",
  "I'll schedule an emergency repair for your heater. Someone will be there within 2 hours.",
  "Let me escalate this to our urgent maintenance queue. You should hear from our team within 30 minutes.",
];

const quickActions = [
  { icon: Forward, label: "Forward", action: "forward" },
  { icon: Archive, label: "Archive", action: "archive" },
  { icon: Tag, label: "Tag", action: "tag" },
  { icon: Users, label: "Assign", action: "assign" },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAISuggestions, setShowAISuggestions] = useState(true);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Add message logic here
      setMessageInput("");
    }
  };

  const handleUseSuggestion = (suggestion: string) => {
    setMessageInput(suggestion);
    setShowAISuggestions(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "bg-green-100 text-green-800";
      case "closed": return "bg-gray-100 text-gray-800";
      case "waiting": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "normal": return "bg-blue-100 text-blue-800";
      case "low": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "sms": return <MessageSquare className="h-4 w-4" />;
      case "teams": return <Users className="h-4 w-4" />;
      case "api": return <Bot className="h-4 w-4" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6">
      {/* Conversations List */}
      <div className="w-1/3 flex flex-col">
        <Card className="flex-1">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Messages</CardTitle>
              <Button size="sm" variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`w-full text-left p-4 hover:bg-gray-50 transition-colors border-l-4 ${
                    selectedConversation.id === conversation.id
                      ? 'border-l-primary bg-primary/5'
                      : 'border-l-transparent'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {conversation.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          {getTypeIcon(conversation.type)}
                          <span className="font-medium text-sm truncate">
                            {conversation.name || conversation.participant}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {conversation.unreadCount > 0 && (
                            <Badge variant="default" className="text-xs">
                              {conversation.unreadCount}
                            </Badge>
                          )}
                          <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 truncate mb-2">
                        {conversation.lastMessage}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Badge className={`text-xs ${getStatusColor(conversation.status)}`}>
                            {conversation.status}
                          </Badge>
                          <Badge className={`text-xs ${getPriorityColor(conversation.priority)}`}>
                            {conversation.priority}
                          </Badge>
                        </div>
                        <span className="text-xs text-gray-500">{conversation.assignedTo}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversation View */}
      <div className="flex-1 flex flex-col">
        <Card className="flex-1">
          {/* Conversation Header */}
          <CardHeader className="pb-3 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>
                    {selectedConversation.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(selectedConversation.type)}
                    <h3 className="font-semibold">
                      {selectedConversation.name || selectedConversation.participant}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge className={`text-xs ${getStatusColor(selectedConversation.status)}`}>
                      {selectedConversation.status}
                    </Badge>
                    <Badge className={`text-xs ${getPriorityColor(selectedConversation.priority)}`}>
                      {selectedConversation.priority}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      Assigned to {selectedConversation.assignedTo}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {quickActions.map((action) => (
                  <Button key={action.action} variant="ghost" size="sm">
                    <action.icon className="h-4 w-4" />
                  </Button>
                ))}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Star className="mr-2 h-4 w-4" />
                      Mark as Important
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Archive className="mr-2 h-4 w-4" />
                      Archive Conversation
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Conversation
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'outbound' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.type === 'outbound'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">
                        {message.type === 'outbound' ? message.from : selectedConversation.name}
                      </span>
                      {message.aiGenerated && (
                        <Badge variant="secondary" className="text-xs ml-2">
                          <Bot className="h-3 w-3 mr-1" />
                          AI
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm">{message.content}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs ${
                        message.type === 'outbound' ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </span>
                      {message.type === 'outbound' && (
                        <CheckCircle className={`h-3 w-3 ${
                          message.status === 'delivered' ? 'text-green-300' : 'text-white/50'
                        }`} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* AI Suggestions */}
          {showAISuggestions && (
            <div className="border-t p-4 bg-blue-50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">AI Suggestions</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAISuggestions(false)}
                >
                  ×
                </Button>
              </div>
              <div className="space-y-2">
                {aiSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleUseSuggestion(suggestion)}
                    className="w-full text-left p-2 text-sm bg-white rounded border hover:border-blue-300 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message Input */}
          <div className="border-t p-4">
            <div className="flex items-end space-x-2">
              <Button variant="ghost" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
              <div className="flex-1">
                <Input
                  placeholder="Type your message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="resize-none"
                />
              </div>
              <Button variant="ghost" size="sm">
                <Smile className="h-4 w-4" />
              </Button>
              <Button onClick={handleSendMessage} disabled={!messageInput.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
              <span>Press Enter to send, Shift+Enter for new line</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAISuggestions(true)}
                className="text-xs"
              >
                <Bot className="h-3 w-3 mr-1" />
                AI Assist
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Conversation Details Sidebar */}
      <div className="w-80">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Conversation Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contact Info */}
            <div>
              <h4 className="font-medium mb-3">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Phone:</span>
                  <span>{selectedConversation.participant}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Name:</span>
                  <span>{selectedConversation.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Type:</span>
                  <span className="capitalize">{selectedConversation.type}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h4 className="font-medium mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {selectedConversation.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                  <Tag className="h-3 w-3 mr-1" />
                  Add Tag
                </Button>
              </div>
            </div>

            {/* AI Insights */}
            <div>
              <h4 className="font-medium mb-3 flex items-center">
                <Bot className="h-4 w-4 mr-2 text-blue-600" />
                AI Insights
              </h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded">
                  <div className="font-medium text-blue-900">Sentiment</div>
                  <div className="text-blue-700">Urgent concern</div>
                </div>
                <div className="p-3 bg-yellow-50 rounded">
                  <div className="font-medium text-yellow-900">Intent</div>
                  <div className="text-yellow-700">Maintenance request</div>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <div className="font-medium text-green-900">Priority</div>
                  <div className="text-green-700">High - requires immediate attention</div>
                </div>
              </div>
            </div>

            {/* Internal Notes */}
            <div>
              <h4 className="font-medium mb-3">Internal Notes</h4>
              <div className="space-y-2">
                <div className="text-sm p-2 bg-gray-50 rounded">
                  <div className="font-medium">Mike Chen</div>
                  <div className="text-gray-600">Scheduling maintenance visit for today</div>
                  <div className="text-xs text-gray-500 mt-1">2 min ago</div>
                </div>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  + Add Internal Note
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
