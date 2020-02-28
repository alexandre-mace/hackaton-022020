import React from 'react';

const Navigation = ({ setCurrentPage }) => {
    return (
        <div className={"top-navigation"}>
            <button className={"logo"} onClick={() => setCurrentPage(0)}>
                <img width={46} height={39} src='./../assets/images/logo-colors.png'/>
                <div className={"logo-name"}>EKO</div>
            </button>
            <div className={'nav-icons'}>
                <div className={'nav-icon'} onClick={() => setCurrentPage(1)}>
                    <img width={23} height={23} src={'./../assets/images/ic_cup.svg'} />
                </div>
                <div className={'nav-icon'} onClick={() => setCurrentPage(2)}>
                    <img width={23} height={23} src={'./../assets/images/ic_fight.svg'} />
                </div>
                <div className={'nav-icon'} onClick={() => setCurrentPage(2)}>
                    <img width={23} height={23} src={'./../assets/images/ic_menu.svg'} />
                </div>
            </div>
        </div>
    )
};
export default Navigation;