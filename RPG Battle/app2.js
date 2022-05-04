hero = {
    health: 100,
    strength: 20
}

scorpion = {
    name: 'scorpion',
    health: 50,
    strength: 10,
    image: 'scorpion.gif'
}

fish = {
    name: 'fish',
    health: 40,
    strength: 15,
    image: 'fish.gif'
}

cactus = {
    name: 'cactus',
    health: 70,
    strength: 5,
    image: 'cactus.gif'
}

enemies = [scorpion, fish, cactus];


spawnEnemies = () =>{
    for(let i = 0; i<enemies.length;i++){
        let enemyTarget = document.querySelectorAll(".enemyHealthbar");
        let enemyImage = document.querySelectorAll(".Sprite");
        let randNum = Math.floor(Math.random() * 3);
        enemyTarget[i].innerHTML = enemies[randNum].health;
        enemyImage[i].setAttribute("src", enemies[randNum].image)
        if(randNum === 0){
            enemyImage[i].style.width = "101px";
        }
        if(randNum === 1){
            enemyImage[i].style.width = "90px";
        }
        if(randNum === 2){
            enemyImage[i].style.width = "129px";
        }
      }
}
spawnEnemies();