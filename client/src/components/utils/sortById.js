const sortById = (playerData) => {
 
    playerData.sort((player1, player2) => player2.id - player1.id);

    return playerData;

}

export default sortById;