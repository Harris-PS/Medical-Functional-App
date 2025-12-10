specialitiesBtn = document.querySelectorAll(".specialities-btn");
specialitiesBtn.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        btn.style.backgroundColor = "#e6e6e679";
    });
    btn.addEventListener("mouseout", () => {
        btn.style.backgroundColor = "";
    });
});