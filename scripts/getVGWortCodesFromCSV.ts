const fs = require("fs");
const readline = require("readline");
const path = require("path");

const inputFolder = "/home/kasulk/Downloads";
const inputFilename = "VGWORT_Zaehlmarken_05072024-17_47_52.csv";
const outputFolder = process.cwd();
const outputFilename = ".vgwort.txt";

const inputFilePath = path.join(inputFolder, inputFilename);
const outputFilePath = path.join(outputFolder, outputFilename);
const dateTime = getDateFromVGWortCSVFilename(inputFilename);

/**
 * Extracts VGWort codes from a VGWort CSV file and writes them to a text file.
 *
 * @param {string} inputFilePath - The path to the input CSV file.
 * @param {string} outputFilePath - The path to the output text file.
 * @param {string} dateTime - The date extracted from the input filename.
 * @returns {Promise<void>} A promise that resolves when the process is complete.
 */
async function getVGWortCodesFromCSV(
  inputFilePath: string,
  outputFilePath: string,
  dateTime: string,
): Promise<void> {
  // create readable stream from the input CSV file with correct encoding
  const fileStream = fs.createReadStream(inputFilePath, { encoding: "latin1" });

  // create interface to read the file line by line
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // recognize all instances of CR LF ('\r\n') in input as a single line break
  });

  // create writable stream to the output file, appending to it if it already exists
  const outputStream = fs.createWriteStream(outputFilePath, { flags: "a" });
  outputStream.write(`\n# ${dateTime}\n`); // start with the date from the input filename

  // loop through each line of the CSV file
  for await (const line of rl) {
    const columns = line.split(";");

    // check if first column contains a number and if there are more than one column
    if (!isNaN(Number(columns[0])) && columns.length > 1) {
      const imgTag = columns[1];

      //-- const codeMatch = imgTag.match(/\/([^\/"]+)(?=")/);
      const codeMatch = imgTag.match(/[a-z0-9]{32}/);
      if (codeMatch) {
        const code = codeMatch[0]; // extract the matched code
        outputStream.write(`${code}\n`);
      }
    }
  }

  outputStream.close();
  console.log(`Codes have been written to ${outputFilePath}`);
}

getVGWortCodesFromCSV(inputFilePath, outputFilePath, dateTime);

/**
 * Extracts date and time from a filename.
 *
 * The filename should be in the format 'VGWORT_Zaehlmarken_DDMMYYYY-HH_MM_SS.csv'.
 * Example: 'VGWORT_Zaehlmarken_05072024-17_47_52.csv'
 *
 * @param {string} filename - The filename from which to extract the date and time.
 * @returns {string} - The extracted date and time in the format 'D.M.YYYY, HH:MM', e.g. '5.5.2024, 17:47'
 * @throws {Error} - If the filename format is incorrect.
 */
function getDateFromVGWortCSVFilename(filename: string): string {
  const regex = /_(\d{2})(\d{2})(\d{4})-(\d{2})_(\d{2})_(\d{2})/;
  const match = filename.match(regex);

  if (match) {
    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);
    const hours = Number(match[4]);
    const mins = Number(match[5]);

    return `${day}.${month}.${year}, ${hours}:${mins}`;
  } else throw new Error(`Incorrect filename format!/n'${filename}'`);
}
