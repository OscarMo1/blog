import React from 'react';
import ArticleCard from '../../../component/ArticleCard';
import {FaArrowRight} from 'react-icons/fa'


const Article = () => {
  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
        <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
            <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)] "/>
            <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-22px)]"/>
        </div>
        <button>
            <span> More Articles</span>
            <FaArrowRight/>
        </button>
    </section>
  )
}

export default Article
