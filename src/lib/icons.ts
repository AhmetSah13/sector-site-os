import {
  Activity,
  AlignCenter,
  Building2,
  ChefHat,
  Coffee,
  Dumbbell,
  Flower2,
  Heart,
  Home,
  Key,
  MapPin,
  Scissors,
  Siren,
  Smile,
  Sparkles,
  Sun,
  Users,
  Utensils,
  Wine,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Sun,
  AlignCenter,
  Heart,
  Smile,
  Siren,
  Coffee,
  ChefHat,
  Utensils,
  Wine,
  Users,
  Dumbbell,
  Activity,
  Scissors,
  Flower2,
  Home,
  Building2,
  Key,
  MapPin,
};

export function getServiceIcon(name?: string): LucideIcon {
  if (!name) return Sparkles;
  return iconMap[name] ?? Sparkles;
}
