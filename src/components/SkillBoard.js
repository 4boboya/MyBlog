import React from 'react'

export default function SkillBoard({children,pic,className}) {
    return (
        <div className={className}>
            <img alt="" src={pic}/>
            {children}
        </div>
    )
}
