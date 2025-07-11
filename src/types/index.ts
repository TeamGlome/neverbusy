// User and Authentication Types
export interface User {
  id: string;
  email: string;
  name: string;
  company: string;
  role: 'admin' | 'user' | 'developer';
  plan: 'starter' | 'growth' | 'enterprise';
  avatar?: string;
}

// Messaging Types
export interface Message {
  id: string;
  type: 'sms' | 'mms' | 'voice' | 'internal';
  from: string;
  to: string;
  content: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read' | 'failed';
  threadId?: string;
  assignedTo?: string;
  tags?: string[];
  aiGenerated?: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage: Message;
  unreadCount: number;
  labels: string[];
  priority: 'low' | 'normal' | 'high' | 'urgent';
  assignedAgent?: string;
  status: 'open' | 'closed' | 'waiting';
}

// Campaign Types
export interface Campaign {
  id: string;
  name: string;
  type: 'sms' | 'mms' | 'voice';
  status: 'draft' | 'scheduled' | 'sending' | 'completed';
  recipients: string[];
  content: string;
  scheduledAt?: Date;
  sentAt?: Date;
  stats: {
    sent: number;
    delivered: number;
    failed: number;
    replies: number;
  };
}

// Integration Types
export interface Integration {
  id: string;
  name: string;
  type: 'twilio' | 'bandwidth' | 'teams' | 'webhook';
  status: 'connected' | 'disconnected' | 'error';
  apiKey?: string;
  settings: Record<string, unknown>;
  lastSync?: Date;
}

// API Types
export interface ApiKey {
  id: string;
  name: string;
  key: string;
  permissions: string[];
  lastUsed?: Date;
  createdAt: Date;
  rateLimit: number;
}

// Phone Number Types
export interface PhoneNumber {
  id: string;
  number: string;
  type: 'local' | 'toll-free' | '800';
  status: 'active' | 'suspended' | 'ported';
  reputation: 'high' | 'medium' | 'low' | 'blocked';
  brandedName?: string;
  assignedTo?: string;
  monthlyUsage: number;
}

// Billing Types
export interface BillingInfo {
  planType: 'starter' | 'growth' | 'enterprise';
  billingCycle: 'monthly' | 'annual';
  nextBillingDate: Date;
  usageStats: {
    smsCount: number;
    voiceMinutes: number;
    apiCalls: number;
  };
  invoices: Invoice[];
}

export interface Invoice {
  id: string;
  amount: number;
  currency: string;
  status: 'paid' | 'pending' | 'overdue';
  issueDate: Date;
  dueDate: Date;
  downloadUrl?: string;
}

// Feature Types
export interface Feature {
  name: string;
  description: string;
  icon: string;
  available: boolean;
  comingSoon?: boolean;
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// Dashboard Stats
export interface DashboardStats {
  totalMessages: number;
  unreadMessages: number;
  activeCampaigns: number;
  phoneNumbers: number;
  monthlyUsage: {
    sms: number;
    voice: number;
    api: number;
  };
}

// Company Settings
export interface CompanySettings {
  id: string;
  name: string;
  domain: string;
  plan: string;
  users: number;
  maxUsers: number;
  features: string[];
  compliance: {
    stirShaken: boolean;
    tenDlc: boolean;
    gdpr: boolean;
    tcpa: boolean;
  };
}
