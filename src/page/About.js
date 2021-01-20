import React from 'react'
import Banner from '../components/Banner'
import FeaturedBoard from '../components/FeaturedBoard'
import InfoBoard from '../components/InfoBoard'
import Experience from '../components/Experience'

export default function About() {
    let article=
        ["關於我經歷的部分，從大學開始至畢業後，其間的所有經歷都成為我成長的養分，回顧過往檢討過錯不斷精進自己。"];
    let experience=
    [
        {
            year:"2016 Sep",
            title:"國立高雄應用科技大學 資訊管理系",
            subtitle:"開始就讀",
            post:"於2016年09月就讀國立高雄應用科技大學 資訊管理系。"
        },
        {
            year:"2017 Dec - 2018 Nov",
            title:"資訊管理系學會",
            subtitle:"文書長",
            post:"任職期間主辦協辦各種大小型活動的經驗，包括企劃書撰寫、場地布置、經費估算、流程規劃、團隊合作。審核系學會的文件資料，培養自己耐心及細心。"
        },
        {
            year:"2019 Jan - 2019 Dec",
            title:"專題競賽",
            subtitle:"多人連線AR遊戲",
            post:"使用Unity配合Photon開發多人遊戲，並以c#做為開發語言，培養團隊分工及溝通的能力。"
        },
        {
            year:"2020 Jun",
            title:"國立高雄應用科技大學 資訊管理系",
            subtitle:"畢業",
            post:"於2020年06月畢業國立高雄應用科技大學 資訊管理系。"
        },
        {
            year:"2020 Jul - 2020 Aug",
            title:"郡偉企業有限公司",
            subtitle:"技術員",
            post:"畢業後等待兵役的期間，於家人公司幫忙，負責電子零件焊接工作。"
        }
    ]
    return (
        <div>
            <FeaturedBoard title="About Me" className="title">
                <Banner article={article}/>
            </FeaturedBoard>
            <InfoBoard>
                <Experience experience={experience} title="Experience" className="subtitle"/>
            </InfoBoard>
        </div>
    )
}
