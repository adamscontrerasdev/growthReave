export interface ServiceEntity {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  order: number;
  points: string[];
}

export interface ProcessEntity {
  step: string;
  title: string;
  description: string;
  image: string;
}

export interface BenefitEntity {
  icon: string;
  title: string;
  description: string;
}

export interface PricingEntity {
  title: string;
  price: string;
  currency: string;
  features: string[];
  RedirectToPay: string;
  icon: string;
  description: string;
}
