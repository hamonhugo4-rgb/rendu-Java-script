let boutonCouleur=document.getElementById("changerCouleur")
let div = document.querySelectorAll("div")
let body = document.querySelectorAll("body")
let header = document.querySelectorAll("header")
//let toggleimagebutton = document.getElementById("toggleimage")
let image = document.querySelector("img")

boutonCouleur.addEventListener('click',function(){
    div.forEach(div => div.classList.toggle('dark1'))
    body.forEach(body => body.classList.toggle('dark'))
    header.forEach(header => header.classList.toggle('dark'))
})


 image.style.visibility ='block'
// image.style.transition ='0.4s'
// function toggleimage(){if (image.style.visibility ==='hidden'){
//         image.style.visibility ='visible'
//         toggleimagebutton.innerHTML ="caché l'image"
//     }
//     else{
//         image.style.visibility ='hidden'
//         toggleimagebutton.innerHTML ="afficher l'image"
//     }}

// toggleimagebutton.addEventListener('click',toggleimage)


let tab1=document.getElementById("tab1")
let tab2=document.getElementById("tab2")
let tab3=document.getElementById("tab3")
let tab4=document.getElementById("tab4")
let texte =document.querySelector("p")
function intro(){
    image.display ='none'
    texte.innerHTML =`Elden Ring est un jeu vidéo d'action-RPG développé par FromSoftware et édité par Bandai Namco Entertainment, issu de la collaboration entre le créateur de
                    jeux vidéo Hidetaka Miyazaki et l'écrivain George R. R. Martin. Il sort le 25 février 2022 sur PlayStation 4, PlayStation 5, Xbox One, Xbox Series et Windows et est prévu pour 2025 sur Nintendo Switch 2.
                    Le jeu reçoit un excellent accueil critique et commercial : il remporte plusieurs récompenses de jeu vidéo de l'année, dont celle de la cérémonie des Game Awards 2022, et se vend à plus de 20 millions d'exemplaires lors de sa première année.
                    Une extension intitulée Shadow of the Erdtree est annoncée en février 2023 et est sortie le 21 juin 2024 et un spin-off multijoueur intitulé Elden Ring Nightreign est sorti en mai 2025.`
    
                }
function histoire(){
    image.display ='none'
    texte.innerHTML =`Elden Ring se déroule dans le royaume de l'Entre-terre, quelque temps après la destruction
        du Cercle d’Elden et la dispersion de ses fragments, les runes majeures. Autrefois honoré par la présence du Cercle 
        et de l'Arbre-Monde, le royaume est maintenant gouverné par les descendants demi-dieux de la reine Marika l'Éternelle,
        chacun possédant un éclat du Cercle d'Elden qui les corrompt et les empoisonne par leur pouvoir. Le joueur incarne un
        Sans-éclat, un exilé de l'Entre-terre qui a perdu la grâce du Cercle, rappelé après l'Éclatement, qui doit traverser 
        le royaume pour trouver toutes les runes majeures, restaurer le Cercle d’Elden et devenir le Seigneur d'Elden`
    
}
function mecanique(){
    image.style.visibility ='hidden'
    texte.innerHTML =`Elden Ring est un jeu d'action-RPG en monde ouvert à la troisième personne se déroulant dans un univers de dark fantasy.
        Il est décrit par son créateur comme une évolution de Dark Souls, même si contrairement à celui-ci, Elden Ring prend place dans un monde 
        ouvert qui peut être parcouru à cheval. En effet, si le début du jeu est linéaire, les joueurs finissent en progressant par pouvoir explorer librement l'Entre-terre,
        composée de six zones principales, ainsi que de châteaux, de forteresses et de catacombes dispersés sur la carte du monde ouvert. Le jeu comporte un hub central 
        auquel les joueurs peuvent accéder plus tard dans la progression du jeu (fonctionnant de façon similaire au Sanctuaire de Lige-Feu dans Dark Souls). Les différentes zones composant le jeu sont explorables en utilisant la monture du personnage comme mode de transport principal, bien qu'un système de voyage rapide soit disponible. Tout au long du jeu, les joueurs rencontreront des PNJ et des ennemis, dont les demi-dieux qui gouvernent chaque zone principale et qui constituent les principaux boss du jeu.
        Le combat dans Elden Ring s'appuie fortement sur des éléments de jeu vidéo de rôle trouvés dans les précédents jeux de la série des Souls :
        les combats au corps à corps se font avec l'utilisation de compétences, de capacités magiques, ainsi que des mécanismes de blocage et d'esquive. 
        Elden Ring introduit également un système de furtivité ainsi que du combat sur montures ; ces nouvelles fonctionnalités devraient encourager les 
        joueurs à élaborer des stratégies de combat avec chaque ennemi qu'ils rencontrent. Le jeu comporte toujours une barre d'endurance du personnage, 
        bien que son influence globale sur le combat ait été réduite. Enfin, contrairement à Sekiro: Shadows Die Twice, il n'y a pas de mécanisme de 
        résurrection après la mort,.
        D'après le réalisateur Hidetaka Miyazaki, Elden Ring propose davantage de possibilités de personnalisation, dans la mesure où les joueurs peuvent
        découvrir différentes compétences grâce à leur exploration de la carte au lieu de déverrouiller des arbres de compétences comme dans les 
        précédents jeux de FromSoftware[réf. souhaitée]. Ces compétences s'ajoutent à une grande variété d'armes qui, en plus de l'équipement, des 
        capacités magiques et des objets que les joueurs peuvent fabriquer à l'aide de matériaux trouvés dans le monde, peuvent être utilisées pour personnaliser le personnage du joueur.
        Elden Ring propose également des mécanismes d'invocation : les joueurs peuvent en effet invoquer une grande variété d'esprits à collectionner 
        cachés sur la carte, dont des ennemis précédemment vaincus, en tant qu'alliés pour les aider au combat. De façon similaire aux Souls, le jeu 
        dispose d'une fonctionnalité multijoueur via les mécanismes d'invocation permettant à d'autres joueurs d'être invoqués pour un jeu coopératif.`
    
}
function developpeur(){
    image.display ='none'
    texte.innerHTML =`Le développement d'Elden Ring débute en 2017 après la publication du second DLC de Dark Souls III, intitulé The
     Ringed City[4]. Le développement est dirigé par Hidetaka Miyazaki, connu pour la série des Souls. L'univers du jeu est conçu par 
     l'écrivain George R. R. Martin, connu pour sa série de fantasy Le Trône de fer. La compositrice Yuka Kitamura participe 
     à la bande originale du jeu.
    Le jeu est annoncé à l'occasion de l'E3 2019. Aux Game Awards 2020, il est élu « jeu le plus attendu ». En juin 2021, à 
    l'occasion du Summer Game Fest, un nouveau trailer est publié et la date de sortie est annoncée pour le 21 janvier 2022. Le 
    18 octobre 2021, FromSoftware annonce via le compte Twitter officiel du jeu que celui-ci est reporté au 25 février 2022.
    Une extension intitulée Shadow of the Erdtree est annoncée le 28 février 2023. Une date de sortie est annoncée le 22 février 
    2024 pour le 21 juin 2024. Un spin-off multijoueur intitulé Elden Ring Nightreign est annoncé aux Game Awards 2024 pour une sortie en 2025.`
    
}
tab1.addEventListener('click',intro)
tab2.addEventListener('click',histoire)
tab3.addEventListener('click',mecanique)
tab4.addEventListener('click',developpeur)
