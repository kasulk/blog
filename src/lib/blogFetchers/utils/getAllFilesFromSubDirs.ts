import fs from "fs";
import path from "path";

/// Helper to get all files from blog directory AND subdirectories
export function getAllFilesFromSubDirs(directory: string): string[] {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const files = entries
    .filter((file) => !file.isDirectory())
    .map((file) => path.join(directory, file.name));

  const directories = entries.filter((directory) => directory.isDirectory());

  const directoryFiles = directories.reduce<string[]>((all, dirEntry) => {
    const newDirPath = path.join(directory, dirEntry.name);
    return all.concat(getAllFilesFromSubDirs(newDirPath));
  }, []);

  return [...files, ...directoryFiles];
}
