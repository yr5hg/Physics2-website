const descriptions = {
    theory: {
        title: "Theory",
        content: "This section provides theoretical explanations for the chapters, including important concepts and formulas.",
        image: "images/theory.jpg"
    },
    lab: {
        title: "Physics Lab",
        content: "Here you will find practical experiments and their procedures to help you understand the concepts better.",
        image: "images/lab.jpg"
    },
    calculator: {
        title: "Calculator",
        content: "Use this calculator to solve physics problems related to the chapters quickly and accurately.",
        image: "images/calculator.jpg"
    },
    quizzes: {
        title: "Quizzes",
        content: "Test your knowledge with short quizzes designed to reinforce your understanding of the material.",
        image: "images/quizzes.jpg"
    }
};

document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const id = this.getAttribute("href").replace("#", "");
        const description = descriptions[id];
        if (description) {
            const titleElement = document.getElementById("section-title");
            const contentElement = document.getElementById("section-content");
            const imageElement = document.getElementById("section-image");

            // تحديث النصوص والصور
            titleElement.textContent = description.title;
            contentElement.textContent = description.content;
            imageElement.src = description.image;
            imageElement.style.display = "block";

            // إضافة التأثيرات
            titleElement.classList.add("fade-in");
            contentElement.classList.add("fade-in");
            imageElement.classList.add("fade-in");

            // إزالة التأثير بعد انتهاء الأنيميشن
            setTimeout(() => {
                titleElement.classList.remove("fade-in");
                contentElement.classList.remove("fade-in");
                imageElement.classList.remove("fade-in");
            }, 1000);
        }

        // تغيير لون الرابط المحدد
        document.querySelectorAll(".main-nav a").forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});
