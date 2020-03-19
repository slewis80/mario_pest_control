const form = document.form;

form.addEventListener("submit", totalCost);

function totalCost(e){
    e.preventDefault();

    let goombas = form.goombas.value;
    let bobombs = form.bobombs.value;
    let cheepcheeps = form.cheepcheeps.value;

    const goombasCost = function countGoombas(goombas){
        return (goombas * 5);
    }
    const bobombsCost = function countBobombs(bobombs){
        return (bobombs * 7);
    }
    const cheepcheepsCost = function countCheepcheeps(cheepcheeps){
        return (cheepcheeps * 11);
    }
    const result = goombasCost + bobombsCost + cheepcheepsCost;

    document.getElementById("totalCost").innerHTML = `Your total cost is ${result} coins.`

}