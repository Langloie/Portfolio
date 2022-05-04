//indicate if its players turn again
//hide player and enemy turn divs respectively

//prevent action while not attacking

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

