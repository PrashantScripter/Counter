const increase = document.querySelector(".increase");
const countVal = document.querySelector('.countVal');
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

num = 0;
increase.addEventListener('click',()=> {
    num = num + 1;
    countVal.innerText = num;
});

decrease.addEventListener('click',() => {
    num = num - 1;
    countVal.innerText = num;
});

reset.addEventListener('click',()=> {
    countVal.innerText = 0;
});
