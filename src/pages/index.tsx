import Avatar from '@/components/avatar';
import BasicInfo from '@/components/basic-info';
import PersonalAdvantage from '@/components/personal-advantage';
import Company from '@/components/company';
import Project from '@/components/project';
import Skills from '@/components/skills';
import Educational from '@/components/educational';
import downloadResume from '@/utils/html2Canvas';
import './index.scss';
import { Button } from 'antd';

export default function HomePage() {

  return (
    <div className="home">
      <main id='main'>
        <Avatar />
        <BasicInfo />
        <PersonalAdvantage />
        <Company />
        <Project />
        <Skills />
        <Educational />
      </main>

      <div className="template__background">
        <div className="template__background__container">
          <div className="noise noise__background"></div>
          <div className="color__overlay baseColor color__overlay__background"></div>
          <div className="background__elements">
            <div className="template__background__container__topElement">
              <img src="https://static.resumecoach.com/assets/templates/florence/topDecoration.png" />
            </div>
            <div className="template__background__container__bottomElement">
              <img src="https://static.resumecoach.com/assets/templates/florence/bottomDecoration.png" />
            </div>
          </div>
        </div>
      </div>
      <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2024044867号-1</a>
    </div>
  );
}
