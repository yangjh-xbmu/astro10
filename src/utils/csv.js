// utils/parseCSV.js
import fs from "fs";
import { parse } from "csv-parse/sync";

export function parseCSV(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
}
