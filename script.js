const container = document.querySelector(".container");

for (let i = 0; i < 800; i++) {
    const box = document.createElement("div");
    box.classList.add("square");
    container.appendChild(box);

    box.addEventListener("mouseenter", () => {
        const color = getRandomColor();

        box.style.backgroundColor = color;
        box.style.boxShadow = `0 0 15px ${color}`;

        setTimeout(() => {
            box.style.backgroundColor = "#1d1d1d";
            box.style.boxShadow = "none";
        }, 1000);
    });
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}