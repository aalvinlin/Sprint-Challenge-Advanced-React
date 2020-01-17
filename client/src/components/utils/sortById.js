const sortById = (playerData) => {
 
    playerData.sort((player1, player2) => player2[3] - player1[3]);

    return playerData;

}

export default sortById;