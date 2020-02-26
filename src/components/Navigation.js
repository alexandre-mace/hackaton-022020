import React from 'react';

const Navigation = ({ setCurrentPage }) => {
    return (
        <div className={"bottom-navigation"}>
            <div onClick={() => setCurrentPage("user")}>
                user
            </div>
            <div onClick={() => setCurrentPage("loupe")}>
                loupe
            </div>
            <div onClick={() => setCurrentPage("friends")}>
                friends
            </div>
        </div>
    )
};
export default Navigation;