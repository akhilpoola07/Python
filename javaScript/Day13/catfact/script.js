// const url = "https://catfact.ninja/fact"
// async function getCatFact(){
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log(data)
//     console.log(data.fact)
//     console.log(data["fact"])
// }
// getCatFact()
const url = "https://catfact.ninja/fact"
async function getCatFact(){
    let response = await fetch(url)
    let data = await response.json()
    let fact = data.fact
    let p = document.querySelector("p")
    p.innerText = fact
}
let button = document.querySelector("button")
button.addEventListener("click",getCatFact)
