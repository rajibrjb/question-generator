// Import required modules and dependencies
const { Configuration, OpenAIApi } = require('openai');
const { readQuestionsFromFile, writeAnswersToFile } = require('./excel');
require('dotenv').config();

// Define the constant column headers for the output
const COLUMN_HEADERS = [
  "Text", "MC1", "MC1-option1", "MC1-option2", "MC1-option3", "MC1-option4", "MC1-correct",
  "MC2", "MC2-option1", "MC2-option2", "MC2-option3", "MC2-option4", "MC2-correct",
  "TF1", "TF1-correct", "TF2", "TF2-correct"
];


// Function to process question sections and remove patterns
const handleProcessQuestion = (answerString) => {
  const pattern = /(Correct Answer:|True or False:)\s+/g;
  const sections = answerString
    .split("\n")
    .map(section => section.trim())
    .filter(section => section !== '' && !['Multiple-Choice:', 'True-False:'].includes(section))
    .map(section => section.replace(pattern, ''));

  return sections;
};

// Function to handle processing of Excel questions
const handleProcessExcelQuestion = async (questionData, openAi) => {
  const answerData = [COLUMN_HEADERS];

  for (let i = 1; i < questionData.length; i++) {
    const response = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Generate 2 multiple-choice and 2 true-false questions, each with its correct answer. Use this format:

          Multiple-Choice:
          1. Question
              Options
              Correct Answer: answer
          
          2. Question
              Options
              Correct Answer: answer
          
          True-False:
          1. Statement.
            Correct Answer: answer
          
          2. Statement.
             Correct Answer: answer
          
          Follow this structure for the passage provided. Avoid numbering or extra details. for the following passage: ${questionData[i]}`,

        },
      ],
    });

    const processedQuestions = handleProcessQuestion(response.data.choices[0].message.content);
    answerData.push([questionData[i], ...processedQuestions]);
  }

  return answerData;
};

// Main function to execute the entire process
async function main() {
  try {
    // Read questions from input file
    const questions = await readQuestionsFromFile('questions.xlsx');

    // Initialize OpenAI API
    const openAi = new OpenAIApi(
      new Configuration({
        apiKey: process.env.OPEN_AI_API_KEY,
      })
    );

    // Process questions and generate answers
    const answerData = await handleProcessExcelQuestion(questions, openAi);

    // Write answers to output file
    await writeAnswersToFile('answers.xlsx', answerData);
  } catch (error) {
    console.error('Error in main:', error);
  }
}

// Call the main function to start the process
main();
