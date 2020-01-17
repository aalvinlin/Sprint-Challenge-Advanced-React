// sorts players by searches. For ties, sorts by Id ascending.

const sortBySearches = (playerData) => {
 
    playerData.sort((player1, player2) => player2[2] - player1[2] || player2[3] - player1[3]);

    return playerData;

}

export default sortBySearches;