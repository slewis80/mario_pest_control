const form = document.form;

form.addEventListener("submit", totalCost);

function totalCost(e){
    e.preventDefault();

    let numberOfGoombas = form.goombas.value;
    let numberOfBobombs = form.bobombs.value;
    let numberOfCheepcheeps = form.cheepcheeps.value;

    let goombasCost = function countGoombas(){
        return (numberOfGoombas * 5);
    }
    let bobombsCost = function countBobombs(){
        return (numberOfBobombs * 7);
    }
    let cheepcheepsCost = function countCheepcheeps(){
        return (numberOfCheepcheeps * 11);
    }
    const result = goombasCost + bobombsCost + cheepcheepsCost;
}
document.getElementById("totalCost").innerHTML = `Your total cost is ${result} coins.`
