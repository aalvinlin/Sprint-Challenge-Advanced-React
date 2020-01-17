// sorts players by searches. For ties, sorts by Id ascending.

const sortBySearches = (playerData) => {
 
    playerData.sort((player1, player2) => player2.searches - player1.searches || player2.id - player1.id);

    return playerData;

}

export default sortBySearches;