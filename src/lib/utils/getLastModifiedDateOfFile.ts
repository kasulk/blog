import fs from "fs";
import path from "path";

/**
 * Gets the last modified date of a file.
 *
 * @param {string} filePath - The path to the file, e.g. 'src/example/file.ts'
 * @returns {Date | null} The last modified date of the file, or null if an error occurs.
 */
export function getLastModifiedDateOfFile(filePath: string): Date | null {
  try {
    const fullPath = path.resolve(process.cwd(), filePath);
    const stats = fs.statSync(fullPath);
    return stats.mtime;
  } catch (error) {
    console.error("Error getting file stats:", error);
    return null;
  }
}
