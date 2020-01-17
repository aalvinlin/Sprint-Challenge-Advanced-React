const sortByName = (playerData) => {
 
    playerData.sort((player1, player2) => player2[0] - player1[0]);

    return playerData;

}

export default sortByName;