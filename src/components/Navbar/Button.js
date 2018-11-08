import React from 'react';

const buttons = [
    {
        name: "View Notes"
    },
    {
        name: "Create Notes"
    },
    {
        name: "Group Notes"
    },
    {
        name: "Logout",
        id: "logout"
    }
]

const Button = () => {
    return ( <div>
        
        {/*{buttons.map((btn,i) => {
            return <button className='nav-btns ' id={btn.id} key={i}>{btn.name}</button>
        })}*/}
        
        </div> );
}
 
export default Button;