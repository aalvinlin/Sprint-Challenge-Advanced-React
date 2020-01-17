// sorts players by country. For ties, sorts by Id ascending.

const sortByCountry = (playerData) => {
 
    playerData.sort((player1, player2) => player2[1] - player1[1] || player2[3] - player1[3]);

    return playerData;

}

export default sortByCountry;