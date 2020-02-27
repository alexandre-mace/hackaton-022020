import React from 'react';

const Navigation = ({ setCurrentPage }) => {
    return (
        <div className={"top-navigation"}>
            <div onClick={() => setCurrentPage(0)}>
                A propos
            </div>
            <div onClick={() => setCurrentPage(1)}>
                Logo
            </div>
            <div onClick={() => setCurrentPage(2)}>
                Défis
            </div>
        </div>
    )
};
export default Navigation;