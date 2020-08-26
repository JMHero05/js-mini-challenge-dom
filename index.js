document.addEventListener('DOMContentLoaded', (event) => {
  /***** Deliverable 1 *****/
  const header = document.querySelector("#header")
  console.log("Here's your header:", header)


  /***** Deliverable 2 *****/
  header.style.color = "red";


  /***** Deliverable 3 *****/
  console.log("PLAYERS array looks like this:", PLAYERS)

  for (let i = 0; i < PLAYERS.length; i++) {
    const playerDiv = document.createElement("div")
    playerDiv.classList.add("player")
    playerDiv.dataset.number = `(${PLAYERS[i].number})`

    playerDiv.innerHTML = `
      <h3>
        ${PLAYERS[i].name} (<em>${PLAYERS[i].nickname}</em>)
      </h3>
      <img src="${PLAYERS[i].photo}" alt="${PLAYERS[i].name}">
      `

    const playersList = document.querySelector(".player-container")
    playersList.append(playerDiv)
  }


  /***** Deliverable 4 *****/
  document.querySelector("div[data-number*='7']").remove()



});