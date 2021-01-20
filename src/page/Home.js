import React from 'react'
import Article from '../components/Article'
import Banner from '../components/Banner'
import FeaturedBoard from '../components/FeaturedBoard'
import InfoBoard from '../components/InfoBoard'
import SkillBoard from '../components/SkillBoard'
import pic from '../images/me.jpg'
import pic2 from '../images/skill.jpg'

export default function Home() {
    let articletitle=
    [
        "這是我練習React的作品，往後也會不斷更新這網頁，包含內容以及架構，期許自己能不斷進步不斷超越自己。"
    ];
    let article=
    [
        "畢業於國立高雄應用科技大學資訊管理系。個性隨和，也喜歡嘗試新的事物，創新是工作中最大的樂趣，並透過不斷學習新的事物進而累積經驗，在專案上找到更有效的執行方法。平時喜歡聽聽音樂，有時出走走旅遊，透過旅遊放下平時的壓力，並思考生活中的一些問題，去反省並改變。喜歡學習新的事物，並在做事時會希望能追求做到最好。"
    ];
    const skill=["one","two","three","four"]
    return (
        <div>
            <FeaturedBoard title="Hi~我是張揚" className="title">
                <Banner article={articletitle}/>
            </FeaturedBoard>
            <InfoBoard pic={pic} className="board">
                <Article article={article} title="About Me" className="subtitle"/>
            </InfoBoard>
            <SkillBoard pic={pic2} className="board">
                <Article article={skill} title="Skill" className="subtitle"/>
            </SkillBoard>
    </div>
  );
}
