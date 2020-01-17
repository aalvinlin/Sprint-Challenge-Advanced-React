const sortByName = (playerData) => {
 
    playerData.sort((player1, player2) => player2.name - player1.name);

    return playerData;

}

export default sortByName;