
//Characters on screen
let hero = {
    health: 100,
    strength: 20,
    turn: true
}

let scorpion = {
    name: 'scorpion',
    health: 50,
    strength: 10,
    image: 'scorpion.gif'
}

let fish = {
    name: 'fish',
    health: 40,
    strength: 15,
    image: 'fish.gif'
}

let cactus = {
    name: 'cactus',
    health: 70,
    strength: 5,
    image: 'cactus.gif'
}

let enemies = [scorpion, fish, cactus];

//randomly generates characters and their respective health and strength
let spawnEnemies = () =>{
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


//hero attack targets a single enemy and a random enemy retaliates
let heroAttackEnemy = () =>{
    const clickAttack = document.querySelector('.attack');
    clickAttack.addEventListener('click',()=>{
    console.log('Hero attacks enemy.');
    // getClass.classList.toggle('moveRight');
    })
    let enemyHealth1 = document.querySelector('.enemyHealthbar1');
    let enemyHealth2 = document.querySelector('.enemyHealthbar2');
    let enemyHealth3 = document.querySelector('.enemyHealthbar3');
    let enemyName = document.querySelectorAll('.Sprite');
    let targetEnemy1 = document.querySelector('#enemyOne');
    let targetEnemy2 = document.querySelector('#enemyTwo');
    let targetEnemy3 = document.querySelector('#enemyThree');
    let target1Attribute = targetEnemy1.getAttribute('id');
    console.log(target1Attribute);
    console.log(enemyName[0].style.width)
    targetEnemy1.addEventListener('click',()=>{
        enemyHealth1.innerHTML -=hero.strength;
        enemyAttackHero();
    })
    targetEnemy2.addEventListener('click',()=>{
        enemyHealth2.innerHTML -=hero.strength;
        enemyAttackHero();
    })
    targetEnemy3.addEventListener('click',()=>{
        enemyHealth3.innerHTML -=hero.strength;
        enemyAttackHero();
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
    let targetEnemy1 = document.querySelector('#enemyOne');
    let targetEnemy2 = document.querySelector('#enemyTwo');
    let targetEnemy3 = document.querySelector('#enemyThree');
    let targetGroup = [targetEnemy1, targetEnemy2, targetEnemy3];
    let randTarget = targetGroup[Math.floor(Math.random() * 3)];
    let attacker = randTarget.getAttribute('src');
    if(attacker === 'cactus.gif'){
        playerHealth.innerHTML -=cactus.strength;
    }
    if(attacker === 'fish.gif'){
        playerHealth.innerHTML -=fish.strength;
    }
    if(attacker === 'scorpion.gif'){
        playerHealth.innerHTML -=scorpion.strength;
    }
}


//if all enemies have 0 health, prompt the player has won
let heroWin = () =>{
    let enemyHealth1 = document.querySelector('.enemyHealthbar1');
    let enemyHealth2 = document.querySelector('.enemyHealthbar2');
    let enemyHealth3 = document.querySelector('.enemyHealthbar3');
    console.log(enemyHealth1)
    if(enemyHealth1.innerHTML <= 0 && enemyHealth2.innerHTML <= 0 && enemyHealth3.innerHTML <= 0){
        let restart = prompt("You win! Play again? (y to restart)");
        if(restart === 'y'){
            window.location.reload();
        }
    }
}

//if hero has 0 health, prompt that the player has lost
let heroLose = () =>{
    let heroLife = document.querySelector('.heroHealth');
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
    let heroMana = document.querySelector('.manaNum');
    if(heroMana.innerHTML > 0){
    clickFireSpell.addEventListener('click', ()=>{
        let enemyHealth1 = document.querySelector('.enemyHealthbar1');
        let enemyHealth2 = document.querySelector('.enemyHealthbar2');
        let enemyHealth3 = document.querySelector('.enemyHealthbar3');
        enemyHealth1.innerHTML -=10;
        enemyHealth2.innerHTML -=10;
        enemyHealth3.innerHTML -=10;
        heroMana.innerHTML -=1;
        console.log('Hero uses fire spell.')
    })
    }else{
        clickFireSpell.removeEventListener('click', ()=>{
            let enemyHealth1 = document.querySelector('.enemyHealthbar1');
            let enemyHealth2 = document.querySelector('.enemyHealthbar2');
            let enemyHealth3 = document.querySelector('.enemyHealthbar3');
            enemyHealth1.innerHTML -=10;
            enemyHealth2.innerHTML -=10;
            enemyHealth3.innerHTML -=10;
            heroMana.innerHTML -=1;
            console.log('Hero uses fire spell.')
        })

    }
    enemyAttackHero();
}


//hero can heal 20 health by clicking potion on screen
let heroPotion = () =>{
    const clickPotion = document.querySelector('.potion');
    clickPotion.addEventListener('click', ()=>{
        let heroLife = document.querySelector('.heroHealth');
        heroLife.innerHTML = Number(heroLife.innerHTML) + 20;
    })
}



spawnEnemies();
heroAttackEnemy();
heroFireSpell();
heroPotion();
heroRun();
heroLose();
heroWin();





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


//toggle dead if hitpoints = 0

//indicate if its players turn again
//hide player and enemy turn divs respectively

//prevent action while not your turn