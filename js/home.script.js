{
    const welcome = () => {
        console.log("Cześć wszystkim zarywającym nocki.");
    }
    
    welcome();
    
    
    
    let button__changeHeader = document.querySelector(".button__changeHeader");
    let container__header = document.querySelector(".container__header");
    
    button__changeHeader.addEventListener("click", () => {
        container__header.innerText = "Natalia_welcome"
    })
    
    console.log(button__changeHeader);
    
    
    
    let button__removeBackground = document.querySelector(".button__removeBackground");
    let container = document.querySelector(".container");
    
    button__removeBackground.addEventListener("click", () => {
        container.remove();
    });
    
    console.log(button__removeBackground);
    
    const onChangeBackgroundClick = () => {
        body.classList.toggle("yellowBackground")
        nextColorName.innerText = body.classList.contains("yellowBackground") ? "zimne" : "ciepłe";
    };
    
    let button__changeBackground = document.querySelector(".button__changeBackground");
    let body = document.querySelector(".body");
    let nextColorName = document.querySelector(".nextColorName");
    
    button__changeBackground.addEventListener("click", onChangeBackgroundClick);
    
    
    
    let button__hello = document.querySelector(".button__hello");
    
    button__hello.addEventListener("click", () => {
        if (button__hello.innerText === "Przywitaj się") {
            button__hello.innerText = "Dzień dobry!";
        }
    });
    
    console.log (button__hello);
    
    
    
    
    let aside__button = document.querySelector(".aside__button");
    let aside__header = document.querySelector(".aside__header");
    
    aside__button.addEventListener("click", () => {
        aside__header.innerText = "Odwiedź stony z listy";
    });
    
    console.log(aside__button);
}