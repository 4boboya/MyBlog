import React,{useState}from 'react'
import Title from './Title'

export default function Article({article,title,className}) {
    const [text,setText] = useState(article);
    return (
        <div className="article">
            <Title title={title} className={className}/>
            {article.map((item)=>{
                if(article.length>1){
                    /* 判斷是否為段落 */
                    return <section><p>&bull;&nbsp;{item}</p></section>
                    
                }
                    return <article>{item}</article>
            })}
        </div>
    )
}
