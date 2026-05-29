import type { Metadata } from "next";
import { serviceConfig } from "@/config/service";
import { ServiceLanding } from "@/components/service/ServiceLanding";
import { buildServiceMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildServiceMetadata(serviceConfig);

export default function Home() {
  return <ServiceLanding config={serviceConfig} />;
}
