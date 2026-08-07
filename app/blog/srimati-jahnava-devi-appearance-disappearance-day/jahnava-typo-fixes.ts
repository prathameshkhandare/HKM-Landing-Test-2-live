/** Post-process docx-extracted strings (Cyrillic typos, etc.) */
export function fixJahnavaTypos(s: string): string {
  return s.replace(/Reватī/g, "Revatī").replace(/śix Gosvāmīs/g, "Six Gosvāmīs")
}
