function yesAnswer() {
    alert("Yay! ❤️");
}

const noBtn = document.querySelector(".no");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

function nextPage(current, next){

    document.getElementById(current).style.display = "none";

    document.getElementById(next).style.display = "flex";

}

nextPage("page1","page2");
nextPage("page2","page3");
nextPage("page3","page4");
nextPage("page4","page5");