import React from 'react'
import Banner from '../components/Banner';
import WhyGradstoc from '../components/WhyGradstoc';
import StudyMaterials from '../components/StudyMaterials';
import BePrepared from '../components/BePrepared';
import PopularSubjects from '../components/PopularSubjects';
import GetStarted from '../components/GetStarted';

export default function Home() {
  return (
    <div className='middle-section'>
      <Banner />
      <WhyGradstoc />
      <StudyMaterials />
      <BePrepared />
      <PopularSubjects />
      <GetStarted />
    </div>
  )
}
