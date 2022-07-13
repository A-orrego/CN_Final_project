function darkMode(){
    let element = document.body;
    let mainBox = document.getElementsByName("main-container")
    let state = localStorage.getItem("state")

    element.classList.toggle("dark");

    for (const i of mainBox) {
        i.classList.toggle("dark")
}

    if (state !== "dark"){
        localStorage.setItem("state", "dark")
    } else{
        localStorage.setItem("state", "light")
    }


}



function darkCheck(){
    let element = document.body;
    let mainBox = document.getElementsByName("main-container")
    let state = localStorage.getItem("state")


    if (state =="dark") {
        element.classList.toggle("dark");
    
        for (const i of mainBox) {
            i.classList.toggle("dark")
        }

    }


}