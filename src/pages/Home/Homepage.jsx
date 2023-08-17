import React from 'react';
import MainLayout from '../../component/MainLayout';
import Hero from './container/Hero';
import Article from './container/Article';
import CTA from './container/CTA';

const Homepage = () => {
  return (
    <MainLayout>
      <Hero/>
      <Article/>
      <CTA/>
    </MainLayout>

  )
}

export default Homepage
