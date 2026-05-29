/**
 * Interactive client site config generator.
 * Run: npm run create:client
 */
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { clientRegistry, demoRegistry } from "../src/config/site-registry";
import { dentistConfig } from "../src/config/sites/demos/dentist";
import { cafeConfig } from "../src/config/sites/demos/cafe";
import { gymConfig } from "../src/config/sites/demos/gym";
import { beautyConfig } from "../src/config/sites/demos/beauty";
import { realEstateConfig } from "../src/config/sites/demos/realEstate";
import type { SiteConfig } from "../src/types/site-config";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const DEMO_BASES: Record<string, SiteConfig> = {
  dentist: dentistConfig,
  cafe: cafeConfig,
  gym: gymConfig,
  beauty: beautyConfig,
  "real-estate": realEstateConfig,
};

const DEMO_OPTIONS = ["dentist", "cafe", "gym", "beauty", "real-estate", "none"] as const;

interface ClientInput {
  businessName: string;
  clientKey: string;
  sector: string;
  baseDemo: (typeof DEMO_OPTIONS)[number];
  slogan: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  city: string;
  primaryColor: string;
}

function slugToExportName(slug: string): string {
  const camel = slug
    .split("-")
    .map((part, index) =>
      index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join("");
  return `${camel}Config`;
}

function createMinimalTemplate(input: ClientInput): SiteConfig {
  return {
    businessName: input.businessName,
    sector: input.sector,
    slogan: input.slogan,
    description: input.description,
    contact: {
      phone: input.phone,
      email: input.email,
      address: input.address,
      city: input.city,
      whatsapp: input.whatsapp,
      workingHours: "Pzt–Cmt: 09:00 – 18:00",
    },
    theme: {
      primary: input.primaryColor,
      primaryForeground: "oklch(0.99 0 0)",
      accent: input.primaryColor,
      accentForeground: "oklch(0.2 0.04 220)",
      heroGradientFrom: "oklch(0.97 0.02 220)",
      heroGradientTo: "oklch(0.99 0 0)",
    },
    services: [
      {
        id: "service-1",
        title: "Ana Hizmet",
        description: "Hizmet açıklamasını config dosyasında güncelleyin.",
        icon: "Sparkles",
      },
    ],
    testimonials: [],
    faqs: [],
    socialLinks: [],
    about: {
      title: `${input.businessName} hakkında`,
      paragraphs: [input.description],
      bullets: ["Profesyonel hizmet", "Mobil uyumlu site"],
    },
    sections: {
      hero: {
        badge: input.businessName,
        primaryCta: "İletişime Geç",
        secondaryCta: "Hizmetler",
      },
      services: {
        eyebrow: "Hizmetler",
        title: `${input.businessName} hizmetleri`,
        description: input.description,
      },
      testimonials: {
        eyebrow: "Yorumlar",
        title: "Müşteri yorumları",
        description: "Referanslar yakında eklenecek.",
      },
      faq: {
        eyebrow: "SSS",
        title: "Sık sorulan sorular",
        description: "Sorularınız için bize ulaşın.",
      },
      contact: {
        eyebrow: "İletişim",
        title: "Bize ulaşın",
        description: input.description,
      },
      cta: {
        title: input.slogan,
        description: input.description,
        callLabel: "Hemen Ara",
        whatsappLabel: "WhatsApp ile yazın",
      },
    },
    seo: {
      title: `${input.businessName} | ${input.sector}`,
      description: input.description,
    },
  };
}

function buildConfigFromInput(input: ClientInput): SiteConfig {
  const base =
    input.baseDemo === "none"
      ? createMinimalTemplate(input)
      : structuredClone(DEMO_BASES[input.baseDemo]);

  base.businessName = input.businessName;
  base.sector = input.sector;
  base.slogan = input.slogan;
  base.description = input.description;

  base.contact = {
    ...base.contact,
    phone: input.phone,
    email: input.email,
    address: input.address,
    city: input.city,
    whatsapp: input.whatsapp,
  };

  base.theme = {
    ...base.theme,
    primary: input.primaryColor,
    accent: base.theme.accent ?? input.primaryColor,
  };

  if (base.seo) {
    base.seo = {
      ...base.seo,
      title: `${input.businessName} | ${input.sector}`,
      description: input.description,
    };
  } else {
    base.seo = {
      title: `${input.businessName} | ${input.sector}`,
      description: input.description,
    };
  }

  if (base.sections?.hero) {
    base.sections.hero.badge = input.businessName;
  }

  if (base.about) {
    base.about.title = base.about.title || `${input.businessName} hakkında`;
    if (base.about.paragraphs?.length) {
      base.about.paragraphs[0] = input.description;
    }
  }

  return base;
}

function serializeConfigFile(
  exportName: string,
  config: SiteConfig,
  clientKey: string
): string {
  const body = JSON.stringify(config, null, 2);
  return `import type { SiteConfig } from "@/types/site-config";

/**
 * Client site: ${config.businessName}
 * Registry key: ${clientKey}
 * Generated by: npm run create:client
 */
export const ${exportName}: SiteConfig = ${body};
`;
}

function getExistingClientKeys(): Set<string> {
  const keys = new Set<string>();
  for (const entry of [...demoRegistry, ...clientRegistry]) {
    keys.add(entry.key);
  }
  const clientsDir = join(process.cwd(), "src/config/sites/clients");
  if (existsSync(clientsDir)) {
    for (const file of readdirSync(clientsDir)) {
      if (file.endsWith(".ts")) {
        keys.add(file.replace(/\.ts$/, ""));
      }
    }
  }
  return keys;
}

function updateSiteRegistry(
  clientKey: string,
  exportName: string,
  label: string,
  description: string
): boolean {
  const resolvedPath = join(process.cwd(), "src/config/site-registry.ts");
  let content = readFileSync(resolvedPath, "utf8");

  const importPath = `@/config/sites/clients/${clientKey}`;
  if (content.includes(importPath)) {
    console.warn("Registry import already exists — skipping import insert.");
  } else {
    const anchor = 'import type { SiteConfig } from "@/types/site-config";';
    const importLine = `import { ${exportName} } from "${importPath}";\n`;
    if (!content.includes(anchor)) {
      return false;
    }
    content = content.replace(anchor, `${importLine}${anchor}`);
  }

  const entryBlock = `  {
    key: "${clientKey}",
    type: "client",
    label: ${JSON.stringify(label)},
    description: ${JSON.stringify(description)},
    config: ${exportName},
  },`;

  if (content.includes(`key: "${clientKey}"`)) {
    console.warn("Registry entry already exists — skipping entry insert.");
  } else {
    const endMarker =
      "] as const satisfies readonly SiteRegistryEntry[];\n\nexport const siteRegistry";
    const registryStart = content.indexOf("export const clientRegistry = [");
    const registryEnd = content.indexOf(endMarker, registryStart);
    if (registryStart === -1 || registryEnd === -1) {
      return false;
    }
    content =
      content.slice(0, registryEnd) +
      entryBlock +
      "\n" +
      content.slice(registryEnd);
  }

  writeFileSync(resolvedPath, content, "utf8");
  return true;
}

function updateConfigIndex(clientKey: string, exportName: string): void {
  const indexPath = join(process.cwd(), "src/config/index.ts");
  if (!existsSync(indexPath)) return;

  let content = readFileSync(indexPath, "utf8");
  const exportLine = `export { ${exportName} } from "@/config/sites/clients/${clientKey}";`;

  if (content.includes(exportLine)) return;

  const anchor = 'export { sampleClientConfig } from "@/config/sites/clients/sampleClient";';
  if (content.includes(anchor)) {
    content = content.replace(anchor, `${anchor}\n${exportLine}`);
  } else {
    content += `\n${exportLine}\n`;
  }

  writeFileSync(indexPath, content, "utf8");
}

async function promptRequired(
  rl: ReturnType<typeof createInterface>,
  label: string,
  defaultValue?: string
): Promise<string> {
  const suffix = defaultValue ? ` [${defaultValue}]` : "";
  while (true) {
    const answer = (await rl.question(`${label}${suffix}: `)).trim();
    if (answer) return answer;
    if (defaultValue) return defaultValue;
    console.log("  Bu alan zorunludur.");
  }
}

async function promptSlug(
  rl: ReturnType<typeof createInterface>,
  existingKeys: Set<string>
): Promise<string> {
  while (true) {
    const raw = await promptRequired(
      rl,
      "clientKey (slug, örn. dentavia-klinik)"
    );
    const key = raw.toLowerCase().replace(/\s+/g, "-");

    if (!SLUG_PATTERN.test(key)) {
      console.log(
        "  Geçersiz slug. Yalnızca küçük harf, rakam ve tire kullanın (ör. my-clinic)."
      );
      continue;
    }

    if (existingKeys.has(key)) {
      console.log(
        `  "${key}" zaten kullanılıyor. Başka bir slug seçin veya mevcut dosyayı silin.`
      );
      continue;
    }

    return key;
  }
}

async function main(): Promise<void> {
  console.log("\n=== sector-site-os — Yeni müşteri sitesi oluştur ===\n");

  const rl = createInterface({ input, output });
  const existingKeys = getExistingClientKeys();

  try {
    const businessName = await promptRequired(rl, "businessName");
    const clientKey = await promptSlug(rl, existingKeys);

    console.log("\nBase demo seçenekleri:", DEMO_OPTIONS.join(", "));
    const baseDemoRaw = (
      await promptRequired(rl, "base demo", "dentist")
    ).toLowerCase();

    const baseDemo = (
      DEMO_OPTIONS.includes(baseDemoRaw as (typeof DEMO_OPTIONS)[number])
        ? baseDemoRaw
        : "none"
    ) as (typeof DEMO_OPTIONS)[number];

    const defaultSector =
      baseDemo !== "none" ? DEMO_BASES[baseDemo].sector : "dentist";

    const sector = await promptRequired(rl, "sector", String(defaultSector));
    const slogan = await promptRequired(rl, "slogan");
    const description = await promptRequired(rl, "description");
    const email = await promptRequired(rl, "email");
    const phone = await promptRequired(rl, "phone");
    const whatsapp = await promptRequired(rl, "whatsapp");
    const address = await promptRequired(rl, "address");
    const city = await promptRequired(rl, "city", "İstanbul");
    const primaryColor = await promptRequired(
      rl,
      "primaryColor (oklch veya hex)",
      "oklch(0.52 0.14 220)"
    );

    const clientInput: ClientInput = {
      businessName,
      clientKey,
      sector,
      baseDemo,
      slogan,
      description,
      email,
      phone,
      whatsapp,
      address,
      city,
      primaryColor,
    };

    const configPath = join(
      process.cwd(),
      "src/config/sites/clients",
      `${clientKey}.ts`
    );

    if (existsSync(configPath)) {
      console.error(`\nHata: Dosya zaten var — ${configPath}`);
      console.error("Üzerine yazılmadı.\n");
      process.exit(1);
    }

    const exportName = slugToExportName(clientKey);
    const config = buildConfigFromInput(clientInput);
    const fileContent = serializeConfigFile(exportName, config, clientKey);

    writeFileSync(configPath, fileContent, "utf8");

    const imagesDir = join(
      process.cwd(),
      "public/images/clients",
      clientKey
    );
    mkdirSync(imagesDir, { recursive: true });
    const gitkeepPath = join(imagesDir, ".gitkeep");
    if (!existsSync(gitkeepPath)) {
      writeFileSync(gitkeepPath, "", "utf8");
    }

    const registryLabel = businessName;
    const registryDescription = description;
    const registryUpdated = updateSiteRegistry(
      clientKey,
      exportName,
      registryLabel,
      registryDescription
    );

    updateConfigIndex(clientKey, exportName);

    console.log("\n--- Oluşturuldu ---\n");
    console.log(`Config:   src/config/sites/clients/${clientKey}.ts`);
    console.log(`Export:   ${exportName}`);
    console.log(`Images:   public/images/clients/${clientKey}/`);

    if (registryUpdated) {
      console.log(`Registry: src/config/site-registry.ts güncellendi`);
    } else {
      console.log("\nRegistry snippet (manuel ekleyin):\n");
      console.log(`import { ${exportName} } from "@/config/sites/clients/${clientKey}";`);
      console.log(`
{
  key: "${clientKey}",
  type: "client",
  label: ${JSON.stringify(registryLabel)},
  description: ${JSON.stringify(registryDescription)},
  config: ${exportName},
},`);
    }

    console.log("\nClient mode test (.env.local):\n");
    console.log("NEXT_PUBLIC_SITE_MODE=client");
    console.log(`NEXT_PUBLIC_SITE_KEY=${clientKey}`);

    console.log("\nSonraki adımlar:\n");
    console.log("  npm run validate:sites");
    console.log("  npm run build");
    console.log("  npm run lint\n");
  } finally {
    rl.close();
  }
}

main().catch((error) => {
  console.error("\nScript failed:", error);
  process.exit(1);
});
