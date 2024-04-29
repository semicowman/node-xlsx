const xlsx = require('node-xlsx');

const files = [
  "SSG_Infocomm_Technology",
  "SSG_Healthcare",
  "V3.0 Skillsframework for ESG (WeavInsight)",
  "Skillsframework for SSG",
  "test"
];

const readSheet = (sheet) => {
  const { data } = sheet
  console.log(data);
}

files.forEach((file) => {
  const path = `${file}.xlsx`;
  const workSheetsFromFile = xlsx.parse(path)
  workSheetsFromFile.forEach(sheets => readSheet(sheets))
});
