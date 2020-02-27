import React from 'react';

const Navigation = ({ setCurrentPage }) => {
    return (
        <div className={"bottom-navigation"}>
            <div onClick={() => setCurrentPage(0)}>
                home
            </div>
            <div onClick={() => setCurrentPage(1)}>
                leaderboard
            </div>
            <div onClick={() => setCurrentPage(2)}>
                game
            </div>
        </div>
    )
};
export default Navigation;