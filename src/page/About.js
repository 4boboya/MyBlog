import React from 'react'
import Banner from '../components/Banner'
import FeaturedBoard from '../components/FeaturedBoard'

export default function About() {
    let article=
        ["畢業於國立高雄應用科技大學資訊管理系。個性隨和，也喜歡嘗試新的事物，創新是工作中最大的樂趣，並透過不斷學習新的事物進而累積經驗，在專案上找到更有效的執行方法。平時喜歡聽聽音樂，有時出走走旅遊，透過旅遊放下平時的壓力，並思考生活中的一些問題，去反省並改變。喜歡學習新的事物，並在做事時會希望能追求做到最好。"];
    return (
        <div>
            <FeaturedBoard title="About Me" className="title">
                <Banner article={article}/>
            </FeaturedBoard>
        </div>
    )
}
