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
        name: "Logout"
    }
]

const Button = () => {
    return ( <div>
        
        {buttons.map((btn,i) => {
            return <button className='nav-btns' key={i}>{btn.name}</button>
        })}
        
        </div> );
}
 
export default Button;