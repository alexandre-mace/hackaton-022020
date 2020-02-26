import React from 'react';

const Navigation = ({ setCurrentPage }) => {
    return (
        <div className={"bottom-navigation"}>
            <div onClick={() => setCurrentPage(0)}>
                user
            </div>
            <div onClick={() => setCurrentPage(1)}>
                loupe
            </div>
            <div onClick={() => setCurrentPage(2)}>
                friends
            </div>
        </div>
    )
};
export default Navigation;