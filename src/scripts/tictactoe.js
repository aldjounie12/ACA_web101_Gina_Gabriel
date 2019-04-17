//chose player:x & o
//select location on board
//append x or o to location
// change player

var player1
var player2

function selectX() {
    player1 ='X'
    console.log('player1',player1)
}
function selectO () {
    player= "O"
}
function setValue(el) {
    // console.log('player', player)
    if (!player) {
        alert('select a player')
    }else if (prevPlayer=== player) {
        alert('pick new player')
    }else{
        el.innerText=player
        prevPlayer=player
    }
}
