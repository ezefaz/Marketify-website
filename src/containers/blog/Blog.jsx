import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css'
import { blogsAnimation, homeInfoAnimation } from '../../animations';
import { useScroll } from '../../components';
import { motion } from 'framer-motion';

const articleData = [
  {
    imageUrl: blog02,
    date: 'Jul 25, 2022',
    title: 'Why Is My Website Not Ranking in Google?'
  },
  {
    imageUrl: blog03,
    date: 'Jun 21, 2022',
    title: 'The Beginner’s Introduction to Advanced Remarketing'
  },
  {
    imageUrl: blog04,
    date: 'Dec 20, 2021',
    title: 'Making Search Query Reports Efficient and Effective'
  },
  {
    imageUrl: blog05,
    date: 'Nov 21, 2021',
    title: 'Startups And Scaleups: Speeding Up Innovation During Times of Crisis'
  },

]


const Blog = () => {
  const [element, controls] = useScroll();

  return (
    <div className='gpt3__blog section__padding' id='blog' ref={element} >
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening. We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>      
          <Article imageUrl={blog01} date='Aug 8, 2022.' title='How Startups Can Grow More Efficiently' />
        </div>
          <div className='gpt3__blog-container_groupB'>
        { articleData.map(( { imageUrl, date, title } ) => (
              <motion.div variants={blogsAnimation} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} >
              <Article imageUrl={imageUrl} date={date} title={title}  />
              </motion.div>
          ))}
          </div>
      </div>  

    </div>
  )
}

export default Blog;