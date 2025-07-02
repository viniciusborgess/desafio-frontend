import { LucideIcon } from "lucide-react";
import { ReactElement, ElementType } from "react";

export interface PropertyData {
  name: string;
  code: string;
  tagline: string;
  location: string;
  summary: {
    details: string;
    parking: string;
  };
  images: string[];
  about: {
    description: string;
    highlights: string[];
  };
  characteristics: {
    icon: ElementType;
    label: string;
    value: string;
  }[];
  neighborhoodDifferentials: {
    icon: ElementType;
    iconColor: string;
    iconBackground: string;
    title: string;
    description: string;
  }[];
  walkDistanceStats: {
    value: string;
    label: string;
  }[];
  contact: {
    whatsappNumber: string;
    formId: string;
  };
}
