/**
 * Validates demo and client site configs before build/deploy.
 * Run: npm run validate:sites
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  clientRegistry,
  demoRegistry,
  type SiteRegistryEntry,
} from "../src/config/site-registry";
import type { SectionId, SiteConfig } from "../src/types/site-config";
import { SUPPORTED_SECTION_IDS } from "../src/lib/section-layout";

const SUPPORTED_SECTION_ID_SET = new Set<string>(SUPPORTED_SECTION_IDS);

type IssueLevel = "error" | "warn";

interface Issue {
  level: IssueLevel;
  message: string;
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s().-]{7,20}$/;

function loadEnvFiles(): void {
  for (const file of [".env.local", ".env"]) {
    const filePath = join(process.cwd(), file);
    if (!existsSync(filePath)) continue;

    const content = readFileSync(filePath, "utf8");
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const eqIndex = trimmed.indexOf("=");
      if (eqIndex === -1) continue;

      const key = trimmed.slice(0, eqIndex).trim();
      let value = trimmed.slice(eqIndex + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  }
}

function normalizeDigits(value: string): string {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("0") && digits.length === 11) {
    digits = `90${digits.slice(1)}`;
  }
  return digits;
}

function isNonEmpty(value: string | undefined): boolean {
  return Boolean(value?.trim());
}

function validateSlug(key: string, issues: Issue[]): void {
  if (!isNonEmpty(key)) {
    issues.push({ level: "error", message: "key is required" });
    return;
  }
  if (!SLUG_PATTERN.test(key)) {
    issues.push({
      level: "error",
      message: "key must be a lowercase slug (e.g. my-site)",
    });
  }
}

function validateSiteConfig(config: SiteConfig, issues: Issue[]): void {
  if (!isNonEmpty(config.businessName)) {
    issues.push({ level: "error", message: "config.businessName is required" });
  }
  if (!isNonEmpty(config.sector)) {
    issues.push({ level: "error", message: "config.sector is required" });
  }
  if (!isNonEmpty(config.slogan)) {
    issues.push({ level: "error", message: "config.slogan is required" });
  }
  if (!isNonEmpty(config.description)) {
    issues.push({ level: "error", message: "config.description is required" });
  }

  const { contact } = config;

  if (isNonEmpty(contact.email) && !EMAIL_PATTERN.test(contact.email.trim())) {
    issues.push({
      level: "error",
      message: "config.contact.email has invalid format",
    });
  }

  if (isNonEmpty(contact.phone) && !PHONE_PATTERN.test(contact.phone.trim())) {
    issues.push({
      level: "error",
      message: "config.contact.phone has invalid format",
    });
  }

  if (contact.whatsapp !== undefined && contact.whatsapp !== null) {
    const wa = String(contact.whatsapp).trim();
    if (!wa) {
      issues.push({
        level: "error",
        message: "config.contact.whatsapp must not be empty when set",
      });
    } else if (normalizeDigits(wa).length < 10) {
      issues.push({
        level: "error",
        message:
          "config.contact.whatsapp must contain at least 10 digits for wa.me links",
      });
    }
  }

  if (config.services?.length) {
    config.services.forEach((service, index) => {
      if (!isNonEmpty(service.title)) {
        issues.push({
          level: "error",
          message: `config.services[${index}].title is required`,
        });
      }
      if (!isNonEmpty(service.description)) {
        issues.push({
          level: "error",
          message: `config.services[${index}].description is required`,
        });
      }
    });
  }

  if (config.testimonials?.length) {
    config.testimonials.forEach((item, index) => {
      if (!isNonEmpty(item.name)) {
        issues.push({
          level: "error",
          message: `config.testimonials[${index}].name is required`,
        });
      }
      if (!isNonEmpty(item.content)) {
        issues.push({
          level: "error",
          message: `config.testimonials[${index}].content is required`,
        });
      }
    });
  }

  if (config.faqs?.length) {
    config.faqs.forEach((faq, index) => {
      if (!isNonEmpty(faq.question)) {
        issues.push({
          level: "error",
          message: `config.faqs[${index}].question is required`,
        });
      }
      if (!isNonEmpty(faq.answer)) {
        issues.push({
          level: "error",
          message: `config.faqs[${index}].answer is required`,
        });
      }
    });
  }

  if (config.socialLinks?.length) {
    config.socialLinks.forEach((link) => {
      if (!isNonEmpty(link.url)) {
        issues.push({
          level: "warn",
          message: `${link.platform} link is empty`,
        });
      }
    });
  }

  validateSectionLayout(config, issues);
}

function validateSectionLayout(config: SiteConfig, issues: Issue[]): void {
  if (!config.sectionLayout?.length) {
    return;
  }

  const seen = new Set<SectionId>();

  config.sectionLayout.forEach((item, index) => {
    const prefix = `config.sectionLayout[${index}]`;

    if (!SUPPORTED_SECTION_ID_SET.has(item.id)) {
      issues.push({
        level: "error",
        message: `${prefix}.id "${item.id}" is not supported (allowed: ${SUPPORTED_SECTION_IDS.join(", ")})`,
      });
      return;
    }

    if (seen.has(item.id)) {
      issues.push({
        level: "error",
        message: `${prefix}.id duplicate section id "${item.id}"`,
      });
    } else {
      seen.add(item.id);
    }

    if (typeof item.enabled !== "boolean") {
      issues.push({
        level: "error",
        message: `${prefix}.enabled must be a boolean`,
      });
    }

    if (item.variant !== undefined && item.variant !== null) {
      const variant = String(item.variant).trim();
      if (!variant) {
        issues.push({
          level: "warn",
          message: `${prefix}.variant is empty — treated as "default"`,
        });
      }
    }
  });
}

function validateEntry(entry: SiteRegistryEntry): Issue[] {
  const issues: Issue[] = [];

  validateSlug(entry.key, issues);

  if (!isNonEmpty(entry.label)) {
    issues.push({ level: "error", message: "label is required" });
  }
  if (!isNonEmpty(entry.description)) {
    issues.push({ level: "error", message: "description is required" });
  }

  validateSiteConfig(entry.config, issues);

  return issues;
}

function checkDuplicateKeys(entries: SiteRegistryEntry[]): Issue[] {
  const issues: Issue[] = [];
  const seen = new Map<string, string>();

  for (const entry of entries) {
    const existing = seen.get(entry.key);
    if (existing) {
      issues.push({
        level: "error",
        message: `duplicate key "${entry.key}" (also used by ${existing})`,
      });
    } else {
      seen.set(entry.key, `${entry.type}:${entry.key}`);
    }
  }

  return issues;
}

function validateClientModeEnv(): Issue[] {
  const issues: Issue[] = [];
  const mode = process.env.NEXT_PUBLIC_SITE_MODE?.trim().toLowerCase();

  if (mode !== "client") return issues;

  const siteKey = process.env.NEXT_PUBLIC_SITE_KEY?.trim();
  if (!siteKey) {
    issues.push({
      level: "error",
      message:
        "NEXT_PUBLIC_SITE_MODE=client requires NEXT_PUBLIC_SITE_KEY to be set",
    });
    return issues;
  }

  const exists = clientRegistry.some((entry) => entry.key === siteKey);
  if (!exists) {
    issues.push({
      level: "error",
      message: `NEXT_PUBLIC_SITE_KEY="${siteKey}" not found in clientRegistry`,
    });
  }

  return issues;
}

function printEntryResult(entry: SiteRegistryEntry, issues: Issue[]): void {
  const id = `${entry.type}:${entry.key}`;
  const errors = issues.filter((i) => i.level === "error");
  const warnings = issues.filter((i) => i.level === "warn");

  if (errors.length === 0 && warnings.length === 0) {
    console.log(`[OK] ${id}`);
    return;
  }

  for (const issue of errors) {
    console.log(`[ERROR] ${id} -> ${issue.message}`);
  }
  for (const issue of warnings) {
    console.log(`[WARN] ${id} -> ${issue.message}`);
  }
}

function main(): void {
  loadEnvFiles();

  console.log("Validating site configs...\n");

  const allEntries: SiteRegistryEntry[] = [...demoRegistry, ...clientRegistry];
  let errorCount = 0;
  let warnCount = 0;

  for (const entry of allEntries) {
    const issues = validateEntry(entry);
    printEntryResult(entry, issues);
    errorCount += issues.filter((i) => i.level === "error").length;
    warnCount += issues.filter((i) => i.level === "warn").length;
  }

  const duplicateIssues = checkDuplicateKeys(allEntries);
  for (const issue of duplicateIssues) {
    console.log(`[ERROR] registry -> ${issue.message}`);
    errorCount += 1;
  }

  const envIssues = validateClientModeEnv();
  for (const issue of envIssues) {
    console.log(`[ERROR] env -> ${issue.message}`);
    errorCount += 1;
  }

  console.log("");
  console.log(
    `Summary: ${allEntries.length} sites checked, ${errorCount} error(s), ${warnCount} warning(s).`
  );

  if (errorCount > 0) {
    console.log("\nValidation failed.");
    process.exit(1);
  }

  if (warnCount > 0) {
    console.log("\nValidation passed with warnings.");
  } else {
    console.log("\nValidation passed.");
  }
}

main();
