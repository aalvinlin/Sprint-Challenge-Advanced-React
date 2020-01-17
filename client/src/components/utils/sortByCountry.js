// sorts players by country. For ties, sorts by Id ascending.

const sortByCountry = (playerData) => {
 
    playerData.sort((player1, player2) => player2.country - player1.country || player2.id - player1.id);

    return playerData;

}

export default sortByCountry;