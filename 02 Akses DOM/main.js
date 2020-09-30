function myUniversal(){
    document.querySelector("*").style.backgroundColor = "red";
}

function myType(){
    document.querySelector("h1").style.backgroundColor = "blue";
}

function myClass(){
    document.querySelector(".container").style.backgroundColor = "green";
}

function myId(){
    document.querySelector("#logo").style.backgroundColor = "pink";
}

function myAttribute(){
    document.querySelector("a[target]").style.backgroundColor = "yellow";
}

function myGroup(){
    document.querySelector("h2,     h1").style.backgroundColor = "grey";
}