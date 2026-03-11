import { locales } from "nextra/locales"

export function middleware(request) {
  return locales(request)
}
