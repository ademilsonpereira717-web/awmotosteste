/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from "react";
import { 
  Wrench, 
  Disc, 
  Zap, 
  Droplet, 
  Settings, 
  Activity, 
  Compass, 
  ShieldAlert, 
  CircleDot 
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "revisao",
    name: "Revisão Geral",
    description: "Inspeção completa de segurança, lubrificação, ajustes estruturais e verificação de sistemas vitais.",
    icon: Wrench,
  },
  {
    id: "troca-oleo",
    name: "Troca de Óleo",
    description: "Substituição rápida e eficiente do óleo do motor seguindo as especificações recomendadas para cada moto.",
    icon: Droplet,
  },
  {
    id: "conserto-freio",
    name: "Conserto e Manutenção de Freio",
    description: "Substituição de pastilhas, sapatas, discos, fluidos e regulagem completa para frenagem 100% segura.",
    icon: Disc,
  },
  {
    id: "injecao-eletronica",
    name: "Injeção Eletrônica",
    description: "Diagnóstico computadorizado, limpeza de bicos e calibração de sensores do sistema de injeção.",
    icon: Settings,
  },
  {
    id: "alinhamento-pneus",
    name: "Alinhamento de Pneus",
    description: "Alinhamento preciso para garantir a estabilidade direcional e segurança do piloto.",
    icon: Compass,
  },
  {
    id: "balanceamento-rodas",
    name: "Balanceamento das Rodas",
    description: "Correção de vibrações nas rodas para um rodar suave e prolongar a vida útil dos pneus.",
    icon: Activity,
  },
  {
    id: "bateria",
    name: "Bateria",
    description: "Teste de carga, diagnóstico do sistema de partida e substituição de baterias com alto padrão técnico.",
    icon: Zap,
  },
  {
    id: "reparo-suspensao",
    name: "Reparo de Suspensão e Direção",
    description: "Troca de retentores, óleo de bengala, buchas e ajuste fino para absorção máxima de impactos.",
    icon: CircleDot,
  },
  {
    id: "reparo-eletrico",
    name: "Reparo Elétrico",
    description: "Identificação e correção de panes elétricas, chicotes, faróis, setas e estator.",
    icon: ShieldAlert,
  },
];

export interface PartItem {
  id: string;
  name: string;
  description: string;
  imageAlt: string;
  imagePlaceholder: string; // Unsplash image matching our dark theme
}

export const PARTS: PartItem[] = [
  {
    id: "oleo",
    name: "Óleo para motos",
    description: "Produtos para manutenção e troca de óleo.",
    imageAlt: "Óleo para motos - Imagem ilustrativa",
    imagePlaceholder: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cabos",
    name: "Cabos",
    description: "Cabos de alta resistência para comandos e acionamentos.",
    imageAlt: "Cabos para motos - Imagem ilustrativa",
    imagePlaceholder: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pneus",
    name: "Pneus",
    description: "Opções para diferentes necessidades de uso.",
    imageAlt: "Pneus de motos - Imagem ilustrativa",
    imagePlaceholder: "/src/assets/images/motorcycle_tire_1786621655625.jpg"
  },
  {
    id: "relacao",
    name: "Kit relação",
    description: "Componentes para transmissão da motocicleta.",
    imageAlt: "Kit relação e transmissão - Imagem ilustrativa",
    imagePlaceholder: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "freios",
    name: "Componentes de freio",
    description: "Pastilhas, discos e componentes de fricção confiáveis.",
    imageAlt: "Componentes de freio - Imagem ilustrativa",
    imagePlaceholder: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "baterias",
    name: "Baterias",
    description: "Produtos para alimentação elétrica da motocicleta.",
    imageAlt: "Baterias para motos - Imagem ilustrativa",
    imagePlaceholder: "https://images.unsplash.com/photo-1620223342087-356641b69d0d?auto=format&fit=crop&w=600&q=80"
  }
];

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  initials: string;
  source: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev1",
    name: "Cliente do Google",
    rating: 5,
    text: "A melhor oficina, as meninas na recepção são super simpáticas, tiram dúvidas.",
    initials: "C",
    source: "Google"
  },
  {
    id: "rev2",
    name: "Cliente do Google",
    rating: 5,
    text: "Excelentes profissionais / preço justo / serviço de qualidade.",
    initials: "G",
    source: "Google"
  },
  {
    id: "rev3",
    name: "Cliente do Google",
    rating: 5,
    text: "Mecânicos ótimos profissionais e verdadeiros sinceros, ótima oficina.",
    initials: "M",
    source: "Google"
  }
];

export interface OperatingHour {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export const OPERATING_HOURS: OperatingHour[] = [
  { day: "Segunda-feira", hours: "08:30–19:00" },
  { day: "Terça-feira", hours: "08:30–19:00" },
  { day: "Quarta-feira", hours: "08:30–19:00" },
  { day: "Quinta-feira", hours: "08:30–19:00" },
  { day: "Sexta-feira", hours: "08:30–19:00" },
  { day: "Sábado", hours: "08:30–14:00" },
  { day: "Domingo", hours: "Fechado", isClosed: true }
];

export const COMPANY_INFO = {
  name: "WA Motos",
  tagline: "Oficina, Peças e Acessórios",
  address: "Estr. da Gabiroba, 156",
  neighborhood: "Jardim Santo Estevão",
  cityState: "Carapicuíba - SP",
  zip: "06334-000",
  whatsapp: "(11) 97121-2468",
  email: "wamotos951@gmail.com",
  instagram: "wamotos2024",
  instagramUrl: "https://www.instagram.com/wamotos2024/",
  rating: "5,0",
  ratingCount: 18,
  whatsappGeneralUrl: "https://wa.me/5511971212468?text=Ol%C3%A1%2C%20WA%20Motos!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20oficina.",
  whatsappPartsUrl: "https://wa.me/5511971212468?text=Ol%C3%A1%2C%20WA%20Motos!%20Gostaria%20de%20consultar%20a%20disponibilidade%20e%20o%20valor%20de%20uma%20pe%C3%A7a.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Estrada%20da%20Gabiroba%2C%20156%2C%20Jardim%20Santo%20Estev%C3%A3o%2C%20Carapicu%C3%ADba%2C%20SP%2C%2006334-000"
};
