//indicate if its players turn again
//hide player and enemy turn divs respectively

//prevent action while not attacking

let heroPlayer = {
    health: 100,
    strength: 20
}

let cactus = {
    health: 100,
    strength: 20
}

let  fish = {
    health: 100,
    strength: 20
}

let scorpion = {
    health: 100,
    strength: 20
}

let targetEnemy1 = document.querySelector('.enemySprite1');
let targetEnemy2 = document.querySelector('.enemySprite2');
let targetEnemy3 = document.querySelector('.enemySprite3');
let enemyName1 = 'cactus';
let enemyName2 = 'fish';
let enemyName3 = 'scorpion';

let enemySpawn = () =>{
    let cactusSpawn1 = document.createElement("img");
    cactusSpawn1.setAttribute("src","cactus.gif");
    cactusSpawn1.style.width = "129px";
    let cactusSpawn2 = document.createElement("img");
    cactusSpawn2.setAttribute("src","cactus.gif");
    cactusSpawn2.style.width = "129px";
    let cactusSpawn3 = document.createElement("img");
    cactusSpawn3.setAttribute("src","cactus.gif");
    cactusSpawn3.style.width = "129px";
    let fishSpawn1 = document.createElement("img");
    fishSpawn1.setAttribute("src","fish.gif");
    fishSpawn1.style.width = "90px";
    let fishSpawn2 = document.createElement("img");
    fishSpawn2.setAttribute("src","fish.gif");
    fishSpawn2.style.width = "90px";
    let fishSpawn3 = document.createElement("img");
    fishSpawn3.setAttribute("src","fish.gif");
    fishSpawn3.style.width = "90px";
    let scorpionSpawn1 = document.createElement("img");
    scorpionSpawn1.setAttribute("src","scorpion.gif");
    scorpionSpawn1.style.width = "101px";
    let scorpionSpawn2 = document.createElement("img");
    scorpionSpawn2.setAttribute("src","scorpion.gif");
    scorpionSpawn2.style.width = "101px";
    let scorpionSpawn3 = document.createElement("img");
    scorpionSpawn3.setAttribute("src","scorpion.gif");
    scorpionSpawn3.style.width = "101px";

    let randNumber1 = Math.floor(Math.random() * (3 - 0) + 0);
    let randNumber2 = Math.floor(Math.random() * (3 - 0) + 0);
    let randNumber3 = Math.floor(Math.random() * (3 - 0) + 0);

    if(randNumber1 === 0){
        targetEnemy1.replaceWith(cactusSpawn1);
        console.log('enemy 1 is cactus');
        enemyName1 = 'cactus';
    }
    if(randNumber1 === 1){
        targetEnemy1.replaceWith(fishSpawn1);
        console.log('enemy 1 is fish');
        enemyName1 = 'fish';
    }
    if(randNumber1 === 2){
        targetEnemy1.replaceWith(scorpionSpawn1);
        console.log('enemy 1 is scorpion');
        enemyName1 = 'scorpion';
    }
    if(randNumber2 === 0){
        targetEnemy2.replaceWith(cactusSpawn2);
        console.log('enemy 2 is cactus');
        enemyName2 = 'cactus';
    }
    if(randNumber2 === 1){
        targetEnemy2.replaceWith(fishSpawn2);
        console.log('enemy 2 is fish');
        enemyName2 = 'fish';
    }
    if(randNumber2 === 2){
        targetEnemy2.replaceWith(scorpionSpawn2);
        console.log('enemy 2 is scorpion');
        enemyName2 = 'scorpion';
    }
    if(randNumber3 === 0){
        targetEnemy3.replaceWith(cactusSpawn3);
        console.log('enemy 3 is cactus');
        enemyName3 = 'cactus';
    }
    if(randNumber3 === 1){
        targetEnemy3.replaceWith(fishSpawn3);
        console.log('enemy 3 is fish');
        enemyName3 = 'fish';
    }
    if(randNumber3 === 2){
        targetEnemy3.replaceWith(scorpionSpawn3);
        console.log('enemy 3 is scorpion');
        enemyName3 = 'scorpion';
    }
}

enemySpawn();


let heroAttackEnemy = () =>{
    let playerHealth = document.querySelector('.heroHealth');
    let enemyHealth1 = document.querySelector('.enemyHealthbar1');
    let enemyHealth2 = document.querySelector('.enemyHealthbar2');
    let enemyHealth3 = document.querySelector('.enemyHealthbar3');

    targetEnemy1.addEventListener('click',()=>{
        if(enemyName1 === 'cactus'){
        enemyHealth1.innerHTML -=cactus.strength;
        }
        if(enemyName1 === 'fish'){
            enemyHealth1.innerHTML -=fish.strength;
        }
        if(enemyName1 === 'scorpion'){
            enemyHealth1.innerHTML -=scorpion.strength;
        }
    })
    targetEnemy2.addEventListener('click',()=>{
        if(enemyName2 === 'cactus'){
            enemyHealth2.innerHTML -=cactus.strength;
        }
        if(enemyName2 === 'fish'){
            enemyHealth2.innerHTML -=fish.strength;
        }
        if(enemyName2 === 'scorpion'){
            enemyHealth2.innerHTML -=scorpion.strength;
        }
    })
    targetEnemy3.addEventListener('click',()=>{
        if(enemyName3 === 'cactus'){
            enemyHealth3.innerHTML -=cactus.strength;
        }
        if(enemyName3 === 'fish'){
            enemyHealth3.innerHTML -=fish.strength;
        }
        if(enemyName3 === 'scorpion'){
            enemyHealth3.innerHTML -=scorpion.strength;
        }
    })
}

//hero attack reduces enemy health
const clickAttack = document.querySelector('.attack');
clickAttack.addEventListener('click',()=>{
    console.log('Hero attacks enemy');
    // getClass.classList.toggle('moveRight');
    heroAttackEnemy();
})



//enemy attack reduces hero health


//enemy attacks player
//random id if health > 0
//id angle keyframe towards hero
//reduce player health

//fire magic attack 
    //an attack that doesnt miss and does a lot of damage
    

//potion increase health
    

//run - lose game and ask to start over


//if all enemies health === 0, alert you won the game
//ask to start over

//if player health === 0, you lose
//ask to start over


//separate function to start over and call in other state functions
//location.reload()?


//hero attacks are charged up and an onclick event determines the power of the attack

//random spawn enemies
//toggle class list 

//if class === goblin, stats
//hitpoints: 20
//damage:5

//if class === skeleton, stats
//hitpoints: 10
//damage: 10

//if class === blob, stats
//hitpoints: 5
//damage: 5

//select who to attack
//if id === 1, attackenemy(), angle keyframe up 45 degrees
//if id === 2, attackenemy(), keyframe horizontal
//if id === 3, attackenemy(), keyframe -45 degrees

//attackenemy(){
//get enemy id
//reduce hitpoints if > 0
//toggle dead if hitpoints = 0

