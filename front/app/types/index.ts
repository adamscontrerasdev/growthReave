import { IconType } from "react-icons";

export interface ServiceEntity {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  order: number;
  points: string[];
}

export interface BenefitEntity {
  icon: string;
  title: string;
  description: string;
}
