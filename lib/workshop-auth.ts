import { createHmac, timingSafeEqual } from "crypto";

export const WORKSHOP_COOKIE = "lu_workshop_access";

function getPassword(): string | null {
  const pw = process.env.WORKSHOP_RESOURCES_PASSWORD;
  return pw && pw.length > 0 ? pw : null;
}

export function isConfigured(): boolean {
  return getPassword() !== null;
}

/**
 * Access token derived from the password itself — changing the
 * password in the env automatically invalidates all existing cookies.
 */
export function computeToken(): string | null {
  const pw = getPassword();
  if (!pw) return null;
  return createHmac("sha256", pw).update("lu-workshop-resources-v1").digest("hex");
}

export function passwordMatches(candidate: string): boolean {
  const pw = getPassword();
  if (!pw) return false;
  const a = Buffer.from(candidate);
  const b = Buffer.from(pw);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function tokenIsValid(cookieValue: string | undefined): boolean {
  const expected = computeToken();
  if (!expected || !cookieValue) return false;
  const a = Buffer.from(cookieValue);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
