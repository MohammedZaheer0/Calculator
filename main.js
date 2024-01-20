let Screen = document.querySelector("#input");
let Buttons = document.querySelectorAll(".btn");
let Equal = document.querySelector(".btn-green");
let Clear = document.querySelector(".btn-red");

Buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        let value = e.target.dataset.num;
        Screen.value +=  value;
    });
});

Equal.addEventListener("click",function(e){
    if(Screen.value === ""){
        Screen.value = "Enter Something";
    }
    else{
        let Answer  = eval(Screen.value);
        Screen.value = Answer;
    }

});

Clear.addEventListener("click",function(e){
    Screen.value = "";
})

