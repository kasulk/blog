export function getRelativePath(filePath: string): string {
  const srcIndex = filePath.indexOf("/src/content/blogs") + "/src".length;

  if (srcIndex !== -1) return filePath.substring(srcIndex);
  return filePath;
}
