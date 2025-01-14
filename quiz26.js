document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const resultSection = document.getElementById("quiz-result");

    if (quizForm) {
        quizForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let score = 0;
            const totalQuestions = 22; // Updated total number of questions

            // Correct answers
            const answers = {
                q1a: "a", q1b: "a", q1c: "c", q1d: "a",
                q2: "b",
                q3: "a",
                q4: "c",
                q5: "b",
                q6: "b",
                q7a: "b", q7b: "a",
                q8: "d",
                q9: "a",
                q10a: "c", q10b: "e",
                q11: "b",
                q12a: "false", q12b: "true",
                q13a: "b", q13b: "c", q13c: "c", q13d: "a"
            };

            // Generate table for correct answers
            let correctAnswersTable = `
                <h4>Correct Answers:</h4>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr style="background-color: #f4f4f4;">
                            <th style="padding: 8px; border: 1px solid #ddd;">Question</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Correct Answer</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            for (const [question, correctAnswer] of Object.entries(answers)) {
                const selectedOption = quizForm.elements[question]?.value;
                if (selectedOption === correctAnswer) {
                    score++;
                }
                correctAnswersTable += `
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">${question.toUpperCase()}</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${correctAnswer.toUpperCase()}</td>
                    </tr>
                `;
            }

            correctAnswersTable += `
                    </tbody>
                </table>
            `;

            // Display the result in a styled box
            resultSection.innerHTML = `
                <div style="margin: 20px auto; max-width: 600px; padding: 15px; border: 2px solid #0056b3; background-color: #e9f7fe; border-radius: 8px;">
                    <h3 style="color: #0056b3;">Your Score: ${score} / ${totalQuestions}</h3>
                </div>
                ${correctAnswersTable}
            `;
            resultSection.style.display = "block";
        });
    }
});
