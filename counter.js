let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count_el")
let count = 0
console.log(saveEl)
function increment(){
    count += 1
    countEl.textContent = count

}

function save(){
    let counterStr = count +" - "
    saveEl.textContent += counterStr
    countEl.textContent = 0
    count = 0
    
}

