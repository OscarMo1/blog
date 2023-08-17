import React from 'react';
import MainLayout from '../../component/MainLayout';
import Hero from './container/Hero';
import Article from './container/Article';

const Homepage = () => {
  return (
    <MainLayout>
      <Hero/>
      <Article/>
    </MainLayout>

  )
}

export default Homepage
