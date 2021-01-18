import React from 'react';
import Title from './Title'

export default function FeaturedBoard({Children,title}) {
    return(
        <div className="featuredboard">
            <div className="coverboard">
                <Title title={title}/>
                {Children}
            </div>
        </div>
    ) 
    
}
