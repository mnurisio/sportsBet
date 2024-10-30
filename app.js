let bank = 100

const players = [
    { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
    { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
    { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
    { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
    { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
    { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
    { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
    { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
    { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
    { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
    { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
    { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
    { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
    { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
    { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
    { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
    { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
    { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
    { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
    { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]


function draftPlayers(){
    players.forEach(player => {
    const randomTeamNumber = Math.ceil(Math.random() * 2)
    player.teamNumber = randomTeamNumber
})
    drawteam1()
    drawteam2()
}

function drawteam1() {
    const team1Players = document.getElementById('team-1');
    team1content = ''
    for (let i = 0; i < players.length; i++) {
        let player = players[i]
        if (player.teamNumber == '1'){
            console.log('team 1', player.emoji)
            team1content += player.emoji
        }
    }
    team1Players.innerText = team1content
    console.log(team1content);
}

function drawteam2() {
    const team2Players = document.getElementById('team-2');
    team2content = ''
    for(let i = 0; i < players.length; i++) {
        let player = players[i]
        if(player.teamNumber =='2') {
            console.log('team 2', player.emoji)
            team2content += player.emoji
        }
    }
    team2Players.innerText = team2content
    console.log(team2content)
}

function drawBank(){
    const bankElem = document.getElementById('bank')
    bankElem.innerText = `$${bank}`
}


function betTeam1(betAmount){

    const team1Players = players.filter(player => player.teamNumber == 1)
    const team2Players = players.filter(player => player.teamNumber == 2)

    let team1Skill = 0
    let team2Skill = 0

    team1Players.forEach(player => team1Skill += player.skill)
    team2Players.forEach(player => team2Skill += player.skill)
    
    if(team1Skill > team2Skill){
        bank -= betAmount
    }
    else if(team2Skill > team1Skill){
        bank += betAmount
    }
    
    draftPlayers()
    drawBank()
}

function betTeam2(betAmount){

    const team1Players = players.filter(player => player.teamNumber == 1)
    const team2Players = players.filter(player => player.teamNumber == 2)

    let team1Skill = 0
    let team2Skill = 0

    team1Players.forEach(player => team1Skill += player.skill)
    team2Players.forEach(player => team2Skill += player.skill)
    
    if(team1Skill > team2Skill){
        bank -= betAmount
    }
    else if(team2Skill > team1Skill){
        bank += betAmount
    }
    
    draftPlayers()
    drawBank()
}


function betTeam(teamNumber, betAmount){

    let yourTeamScore = 0
    let opposingTeamScore = 0

    players.forEach(player => {
        if(player.teamNumber == teamNumber){
            yourTeamScore += player.skill
        }
        else{
            opposingTeamScore += player.skill
        }
    })

    if(yourTeamScore > opposingTeamScore){
        bank += betAmount
    }
    else if(opposingTeamScore > yourTeamScore){
        bank -= betAmount
    }
    draftPlayers()
    drawBank()
}