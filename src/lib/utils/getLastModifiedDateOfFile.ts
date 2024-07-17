"use server";
import fs from "fs";
import path from "path";

/**
 * Gets the last modified date of a file.
 *
 * @param {string} filePath - The path to the file, e.g. 'src/example/file.ts'
 * @returns {Promise<Date | null>} A promise that resolves to the last modified date of the file, or null if an error occurs.
 */
export async function getLastModifiedDateOfFile(
  filePath: string,
): Promise<Date | null> {
  try {
    const fullPath = path.resolve(process.cwd(), filePath);
    const stats = fs.statSync(fullPath);
    return stats.mtime;
  } catch (error) {
    console.error("Error getting file stats:", error);
    return null;
  }
}
