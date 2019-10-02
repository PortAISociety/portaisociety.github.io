const buttons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-item");

buttons[0].classList.add("button-active");

buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        tabContents.forEach(function (tabContent) {
            if (button.textContent === tabContent.id) {
                tabContent.setAttribute("style", "display: block;");

                buttons.forEach(function (button) {
                    button.classList.remove("button-active");
                });

                button.classList.add("button-active");
            } else {
                tabContent.setAttribute("style", "display: none;");
            }
        })
    });
});