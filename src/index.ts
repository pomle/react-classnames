type ClassEntry = Record<string, boolean> | string[] | string;

export function classNames(...entries: ClassEntry[]) {
  const names: string[] = [];
  for (const entry of entries) {
    if (typeof entry === "string") {
      names.push(entry);
    } else if (Array.isArray(entry)) {
      names.push(...entry);
    } else {
      for (const [key, value] of Object.entries(entry)) {
        if (value) {
          names.push(key);
        }
      }
    }
  }
  return names.join(" ");
}
