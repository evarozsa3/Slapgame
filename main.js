let player = {
  health: 100,
  attacks: 0,
  slap: ["Phasers", "Photons", "Fire Everything"]

}







function slap(damage) {
  player.health -= damage
  player.attacks++

  if (damage == -100) {
    // document.getElementById("shields").classList.add("hidden")

  }



  if (player.health <= 0) {
    player.health = 0
    //end game
    document.getElementById("health").innerHTML = `<h1 class = "text-danger">GAMEOVER</h1>`
    return
  } else if (player.health > 100) {
    player.health = 100
  }


  document.getElementById("health").innerText = player.health.toString()
  document.getElementById("attacks").innerText = player.attacks.toString()

}





