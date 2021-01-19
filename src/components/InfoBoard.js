import React from 'react'

export default function InfoBoard({children,pic,className}) {
    return(
        <div className={className}>
            {children}
            <img alt="" src={pic}/>
        </div>
    ) 
    
}
