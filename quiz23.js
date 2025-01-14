document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const resultSection = document.getElementById("quiz-result");

    if (quizForm) {
        quizForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let score = 0;
            const totalQuestions = 14; // عدد الأسئلة في Chapter 23

            // الإجابات الصحيحة
            const answers = {
                q1a: "c", q1b: "b",
                q2: "e",
                q3: "b",
                q4: "a",
                q5: "d",
                q6: "a",
                q7: "b",
                q8: "e",
                q9a: "d", q9b: "b",
                q10: "a",
                q11: "b",
                q12: "a",
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

            // عرض النتيجة في تصميم محسّن
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
