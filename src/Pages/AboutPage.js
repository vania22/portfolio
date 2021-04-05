import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className='AboutPage'>
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className='skillsContainer'>
                <SkillsSection skill={'Javascript'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Typescript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React Js'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Express Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'GraphQL & Apollo'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Databases & ORMs'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'HTML'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'CSS'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'SCSS'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'Webpack'} progress={'90%'} width={'90%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className='servives-container'>
                <ServicesSection
                    image={design}
                    title={'Web development'}
                    text={'I can help your company to build stunning functional websites!'}
                />
                <ServicesSection
                    image={intelligence}
                    title={'Architecture/Planning'}
                    text={'I am used to plan my projects on my own, thus I can help you to plan yours!'}
                />
                <ServicesSection
                    image={gamedev}
                    title={'Testing'}
                    text={'As a software tester with 4 years of experience - quality is at the first place for me!'}
                />
            </div>
        </div>
    );
}

export default AboutPage;
