// quiz24.js

document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const resultSection = document.getElementById("quiz-result");

    if (quizForm) {
        quizForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let score = 0;
            const totalQuestions = 12; // عدد الأسئلة في Chapter 24

            // الإجابات الصحيحة
            const answers = {
                q1a: "a", q1b: "b",
                q2: "c",
                q3: "e",
                q4a: "c", q4b: "b",
                q5: "b",
                q6a: "c", q6b: "e",
                q7: "c",
                q8a: "a", q8b: "c",
            };

            // إنشاء جدول الإجابات النموذجية
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

            // عرض النتيجة بتصميم محسّن
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
