document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const resultSection = document.getElementById("quiz-result");

    if (quizForm) {
        quizForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent page reload

            let score = 0;
            const totalQuestions = 11; // Updated total questions

            // Correct answers
            const answers = {
                q1: "b",
                q2: "d",
                q3: "a",
                q3b: "c",
                q4: "b",
                q5: "b",
                q6a: "b",
                q6b: "c",
                q6c: "d",
                q7: "b",
                q8: "b" // Formerly q9
            };

            // Create styled table for correct answers
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

            // Check the answers and generate the table rows
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

            // Display the score and correct answers in a styled section
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
