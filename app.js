let counter = 0;

function counterIncrement() {
    counter = counter + 1;
    console.log(counter);
}

const element = document.querySelector("#btnCounter");

element.addEventListener("click", counterIncrement, false);
