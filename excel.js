const ExcelJS = require('exceljs');

async function readQuestionsFromFile(fileName) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(fileName);
  const worksheet = workbook.getWorksheet(1);

  const questions = [];
  worksheet.eachRow((row, rowNumber) => {
    const question = row.getCell(1).text;
    questions.push(question);
  });

  return questions;
}

async function writeAnswersToFile(fileName, qaPairs) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Results');

  qaPairs.forEach(pair => {
    worksheet.addRow(pair);
  });

  await workbook.xlsx.writeFile(fileName);
}

module.exports = {
  readQuestionsFromFile,
  writeAnswersToFile
};
