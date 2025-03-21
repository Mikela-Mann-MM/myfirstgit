import "./style.scss";

export default function vitecomp(){
    let divElm = document.createElement("div")
    divElm.className="vite"

    Elm.innerHTML = `
    <h2>Hello, Vite!</h2>

    `
    return divElm
}

document.querySelector("#root").append(vitecomp());