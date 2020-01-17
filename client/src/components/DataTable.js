import React from "react";

import sortByName from "./utils/sortByName";
import sortByCountry from "./utils/sortByCountry";
import sortBySearches from "./utils/sortBySearches";
import sortById from "./utils/sortById";

const DataTable = ({playerData}) => {

    const sortBy = (heading) => {

        if (heading === "name")
            { playerData = sortByName(playerData); }

        else if (heading === "country")
            { playerData = sortByCountry(playerData); }
        
        else if (heading === "searches")
            { playerData = sortBySearches(playerData); }

        else if (heading === "id")
            { playerData = sortById(playerData); }

        console.log(playerData);
    }


    return (

        <table className="dataTable">
            <thead>
                <tr>
                    {Object.keys(playerData[0]).map(heading =>
                        { return (<th key={heading} onClick={sortBy(heading)}>{heading[0].toUpperCase() + heading.slice(1, heading.length)}</th>) }
                    )}
                </tr>
            </thead>
            <tbody>
            {playerData.map(individualPlayerData =>
                        {
                            return (
                            <tr key={Object.values(individualPlayerData)[0]}>
                                {Object.values(individualPlayerData).map((entry, arrayId) => (<td key={entry}>{entry}</td>))}
                            </tr>)
                        }
                    )}
            </tbody>
        </table>

    )
}

export default DataTable;