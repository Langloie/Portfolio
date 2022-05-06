
//Characters on screen
const hero = {
    health: 100,
    strength: 20,
}

const scorpion = {
    name: 'scorpion',
    health: 50,
    strength: 15,
    image: 'scorpion.gif'
}

const fish = {
    name: 'fish',
    health: 40,
    strength: 20,
    image: 'fish.gif'
}

const cactus = {
    name: 'cactus',
    health: 70,
    strength: 10,
    image: 'cactus.gif'
}

const enemies = [scorpion, fish, cactus];

const enemyHealth1 = document.querySelector('.enemyHealthbar1');
const enemyHealth2 = document.querySelector('.enemyHealthbar2');
const enemyHealth3 = document.querySelector('.enemyHealthbar3');
const targetEnemy1 = document.querySelector('#enemyOne');
const targetEnemy2 = document.querySelector('#enemyTwo');
const targetEnemy3 = document.querySelector('#enemyThree');
const heroMana = document.querySelector('.manaNum');
const heroLife = document.querySelector('.heroHealth');
const enemy1progress = document.querySelector('#enemy1progress');
const enemy2progress = document.querySelector('#enemy2progress');
const enemy3progress = document.querySelector('#enemy3progress');
const heroHealthBar = document.querySelector('#heroHealthBar');
const manaBar = document.querySelector('.manaBar');
const enemyProgress = [enemy1progress,enemy2progress,enemy3progress];



//set hero health and mana bars to max
heroHealthBar.setAttribute('max', hero.health);
manaBar.setAttribute('max', 3);
heroHealthBar.setAttribute('value', hero.health);
manaBar.setAttribute('value', 3);

//randomly generates characters and their respective health and strength
//fill health bar to max health value of enemy
let spawnEnemies = () =>{
    for(let i = 0; i<enemies.length;i++){
        let enemyTarget = document.querySelectorAll(".enemyHealthbar");
        let enemyImage = document.querySelectorAll(".Sprite");
        let randNum = Math.floor(Math.random() * 3);
        enemyTarget[i].innerHTML = enemies[randNum].health;
        enemyImage[i].setAttribute("src", enemies[randNum].image)
        enemyProgress[i].setAttribute('max',enemies[randNum].health)
        enemyProgress[i].setAttribute('value',enemies[randNum].health)
        if(randNum === 0){
            enemyImage[i].style.width = "101px";
        }
        if(randNum === 1){
            enemyImage[i].style.width = "90px";
        }
        if(randNum === 2){
            enemyImage[i].style.width = "129px";
            // enemy1progress.setAttribute('max',cactus.health);
        }
      }
}



//hero attack targets a single enemy and a random enemy retaliates
let heroAttackEnemy = () =>{
    const clickAttack = document.querySelector('.attack');
    clickAttack.addEventListener('click',()=>{
    console.log('Hero attacks enemy.');
    // getClass.classList.toggle('moveRight');
    })
    targetEnemy1.addEventListener('click',()=>{
        enemyHealth1.innerHTML -=hero.strength;
        enemy1progress.value -= hero.strength;
        enemyAttackHero();
        noNegative();
        enemyDespawn();
        heroLose();
        heroWin();


    })
    targetEnemy2.addEventListener('click',()=>{
        enemyHealth2.innerHTML -=hero.strength;
        enemy2progress.value -= hero.strength;
        enemyAttackHero();
        noNegative();
        enemyDespawn();
        heroLose();
        heroWin();
    })
    targetEnemy3.addEventListener('click',()=>{
        enemyHealth3.innerHTML -=hero.strength;
        enemy3progress.value -= hero.strength;
        enemyAttackHero();
        noNegative();
        enemyDespawn();
        heroLose();
        heroWin();
    })
    targetEnemy1.removeEventListener('click',()=>{
        enemyHealth1.innerHTML -=hero.strength;
    })
    targetEnemy2.removeEventListener('click',()=>{
        enemyHealth2.innerHTML -=hero.strength;
    })
    targetEnemy3.removeEventListener('click',()=>{
        enemyHealth3.innerHTML -=hero.strength;
    })
}

//enemy attack reduces hero health based on respective enemy strength
let enemyAttackHero = () =>{
    let playerHealth = document.querySelector('.heroHealth');
    let targetGroup = [targetEnemy1, targetEnemy2, targetEnemy3];

    //if enemy is dead, it won't attack hero
    
    if(enemyHealth1.innerHTML <= 0){
    for(let i =0;i<targetGroup.length;i++){
        if(targetGroup[i]===targetEnemy1){
            targetGroup.splice(i,1)
        }
    }
    }

    if(enemyHealth2.innerHTML <= 0){
        for(let i =0;i<targetGroup.length;i++){
            if(targetGroup[i]===targetEnemy2){
                targetGroup.splice(i,1)
            }
        }
    }
    if(enemyHealth3.innerHTML <= 0){
        for(let i =0;i<targetGroup.length;i++){
            if(targetGroup[i]===targetEnemy3){
                targetGroup.splice(i,1)
            }
        }
    }
    
    let randTarget = targetGroup[Math.floor(Math.random() * targetGroup.length)];
    let attacker = '';
    if(randTarget){
        attacker = randTarget.getAttribute('src');
    }           
    if(attacker === 'cactus.gif'){
        playerHealth.innerHTML -=cactus.strength;
        let heroHealthBar = document.querySelector('#heroHealthBar');
        heroHealthBar.value -= cactus.strength;
    }
    if(attacker === 'fish.gif'){
        playerHealth.innerHTML -=fish.strength;
        let heroHealthBar = document.querySelector('#heroHealthBar');
        heroHealthBar.value -= fish.strength;
    }
    if(attacker === 'scorpion.gif'){
        playerHealth.innerHTML -=scorpion.strength;
        let heroHealthBar = document.querySelector('#heroHealthBar');
        heroHealthBar.value -= scorpion.strength;
    }
    
}


//if all enemies have 0 health, prompt the player has won
let heroWin = () =>{
    if(enemyHealth1.innerHTML <= 0 && enemyHealth2.innerHTML <= 0 && enemyHealth3.innerHTML <= 0){
        let restart = prompt("You win! Play again? (y to restart)");
        if(restart === 'y'){
            window.location.reload();
        }
    }
}

//if hero has 0 health, prompt that the player has lost
let heroLose = () =>{
    if(heroLife.innerHTML <= 0){
        let restart = prompt("You lost! Play again? (y to restart)");
        if(restart === 'y'){
            window.location.reload();
        }
    }
}


//click run on screen to surrender and restart
let heroRun = () =>{
    const clickRun = document.querySelector('.run')
    clickRun.addEventListener('click',()=>{
        let restart = prompt("You ran away! Play again? (y to restart)");
        if(restart === 'y'){
            window.location.reload();
        }
    })
}

//use fire spell that reduces health of all three enemies by 10
let heroFireSpell = () =>{
    const clickFireSpell = document.querySelector('.fireSpell');
    
    clickFireSpell.addEventListener('click', ()=>{
        if(heroMana.innerHTML > 0){
            enemyHealth1.innerHTML -=10;
            enemyHealth2.innerHTML -=10;
            enemyHealth3.innerHTML -=10;
            enemy1progress.value -= 10;
            enemy2progress.value -= 10;
            enemy3progress.value -= 10;
            heroMana.innerHTML -=1;
            manaBar.value -= 1;
            console.log('Hero uses fire spell.')
            enemyAttackHero();
            noNegative();
            enemyDespawn();
            heroLose();
            heroWin();
        }
    })
}


//hero can heal 20 health by clicking potion on screen
let heroPotion = () =>{
    const clickPotion = document.querySelector('.potion');
    clickPotion.addEventListener('click', ()=>{
        heroLife.innerHTML = Number(heroLife.innerHTML) + 20;
        heroHealthBar.value += 20;
        console.log('Hero uses potion.')
    })
}

let noNegative = () =>{
    if(enemyHealth1.innerHTML < 0){
        enemyHealth1.innerHTML = 0;
    }
    if(enemyHealth2.innerHTML < 0){
        enemyHealth2.innerHTML = 0;
    }
    if(enemyHealth3.innerHTML < 0){
        enemyHealth3.innerHTML = 0;
    }
    if(heroMana.innerHTML < 0){
        heroMana.innerHTML = 0;
    }
    if(heroLife.innerHTML < 0){
        heroLife.innerHTML = 0;
    }
    if(heroLife.innerHTML > 100){
        heroLife.innerHTML = 100;
    }
}

let enemyDespawn = () =>{
    let despawnEnemy1 = document.querySelector(".cactusSprite");
    let despawnEnemy2 = document.querySelector(".fishSprite");
    let despawnEnemy3 = document.querySelector(".scorpionSprite");
    if(despawnEnemy1 !== null){
        if(enemyHealth1.innerHTML <=0){
            despawnEnemy1.style.visibility = "hidden";
        }
    }
    if(despawnEnemy2 !== null){
        if(enemyHealth2.innerHTML <=0){
            despawnEnemy2.style.visibility = "hidden";
        }
    }
    if(despawnEnemy3 !== null){
        if(enemyHealth3.innerHTML <=0){
            despawnEnemy3.style.visibility = "hidden";
        }
    }
}


alert("Welcome to RPG Battle. To win, you must help our hero to defeat the enemies. You can choose ATTACK and reduce one enemies health by 20. To select which enemy to attack, click the enemy on the battlefield. You can choose FIRE SPELL to reduce the health of every enemy on the field by 10, but you only have enough magic to cast it 3 times. Enemies will attack back if you use ATTACK or FIRE SPELL on them. You can use a potion to restore some health. You can choose RUN if you don't think you can win. When all enemies have 0 health, you win the game. If you lose all of your health, you lose the game.");
spawnEnemies();
// noNegative();
heroAttackEnemy();
heroFireSpell();
heroPotion();
heroRun();
// heroLose();
// heroWin();


//add music ?victory music?lose music?
//keyframes
//timimg


//enemy attacks player
    //if old health != new health
    //random enemy > 0 health attack player

//id angle keyframe towards hero
//reduce player health


//hero attacks are charged up and an onclick event determines the power of the attack



//select who to attack
//if id === 1, attackenemy(), angle keyframe up 45 degrees
//if id === 2, attackenemy(), keyframe horizontal
//if id === 3, attackenemy(), keyframe -45 degrees


//indicate if its players turn again
//hide player and enemy turn divs respectively

//prevent action while not your turn