import React from "react";

const DataTable = ({playerData}) => {

    return (

        <table className="dataTable">
            <thead>
                <tr>
                    {Object.keys(playerData[0]).map(heading =>
                        { return (<th key={heading}>{heading[0].toUpperCase() + heading.slice(1, heading.length)}</th>) }
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