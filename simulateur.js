let BOB ={
    nom:"BOB" ,
    hp: 120,
    dmg:15,
    aim:0.53,
}
let GREG ={
    nom:"GREG" ,
    hp: 100,
    dmg:250,
    aim:0.05,
}

function attaque(personnage1,personnage2){
    personnage2.hp-=personnage1.dmg
}
function precision(personnage){
    let alea =Math.random()
    console.log(alea)
    if( alea>personnage.aim){
        console.log("il rate ce nul")
        return false
    }
    else{
        console.log("il touche")
        return true
    }
}
function combat(){console.log("le combat commence GREG vs BOB ")
    while (BOB.hp >0 && GREG.hp >0 ){
        console.log("GREG attaque")
        let aim =precision(GREG)
        if (aim==true){
            attaque(GREG,BOB)
            console.log(`GREG a attaquer et a fait ${GREG.dmg} dégat`)
            if (BOB.hp <0){
                console.log(`GREG a donné le coup fatal (BOB a tribucher et a plonger ca tete dans une friteuse) il reste ${GREG.hp}hp à GREG`)
                console.log(`VICTOIRE DE GREG`)
            }
        }
        if (BOB.hp >0){
            console.log("BOB attaque")
            let aim=precision(BOB)
            if (aim==true){
            attaque(BOB,GREG)
            console.log(`BOB a attaquer et a fait ${BOB.dmg} dégat`)
            if (GREG.hp <0){
                console.log(`BOB a donné le coup fatal (avant de mourrir GREG cria qu'il savait comment sortir du fer sur LOL mais mourru avant de donner la solution mais il lanca la grande ere du gaming ) il reste ${BOB.hp}hp à BOB`)
                console.log(`VICTOIRE DE BOB`)
            }
        console.log(`le combat est intense il reste ${GREG.hp}hp à GREG et il reste ${BOB.hp}hp à BOB`)
        }
        
}}}
    

combat()