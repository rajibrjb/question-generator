# Question Answer Generator

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

Automate the process of generating answers to questions using OpenAI's GPT-3.5 model. This tool reads input passages from an Excel file, processes them through the GPT-3.5 model, generates 2 multiple-choice and 2 true-false questions with answers, and saves them back to Excel.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- Process input passages from an Excel file.
- Utilize OpenAI's GPT-3.5 model to generate answers.
- Generate multiple-choice questions and true-false questions.
- Write the generated question and answers to an Excel file.

## Getting Started

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/question-answer-generator.git
   ```

2. Install dependencies using npm:

   ```bash
   cd question-answer-generator
   npm install
   ```

3. Rename `.env.example` to `.env` and add your OpenAI API key.

### Configuration

- Modify the `questions.xlsx` file with your input questions.
- Adjust the template used to interact with the GPT-3.5 model in the `handleProcessExcelQuestion` function.
- Configure the output filename in the `writeAnswersToFile` function call.

## Usage

1. Prepare your input questions in an Excel file (e.g., `questions.xlsx`).
2. Run the application:

   ```bash
   npm start
   ```

3. The generated answers will be saved in an Excel file (e.g., `answers.xlsx`).

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to submit pull requests or open issues.

## Dependencies

- [`openai`](https://www.npmjs.com/package/openai): Official OpenAI API wrapper for JavaScript.
- [`exceljs`](https://www.npmjs.com/package/exceljs): A library for reading, manipulating, and writing Excel files.
- [`dotenv`](https://www.npmjs.com/package/dotenv): A zero-dependency module that loads environment variables from a `.env` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Feel free to copy and paste this markdown content into your README file. Make sure to replace placeholders with your actual project details.