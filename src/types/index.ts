export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  quote: string;
}

export interface WorkItem {
  title: string;
  category: string;
  description: string;
  tag: string;
}
