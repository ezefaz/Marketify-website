import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Technical Search Engine Optimization',
    text: "Before we start tinkering, we carefully audit your current website for any underlying technical SEO issues. This includes your sites architecture, content, configuration, UX, and internal links. You get a detailed document outlining our findings and recommendations, prioritising anything that will have a real impact on your target keyword positions. Whether you need instant implementation from our devs, or simply need us to plug into your existing dev team, we can provide automated checks, manual reviews, and ongoing practical advice on improving your technical SEO.",
  },
  {
    title: 'Web development for scaling startups',
    text: "If you’re spending your marketing budget to send leads to a site that doesn’t convert, then you’re literally wasting your money. Bad UI and UX, technical SEO issues; these are things you need to fix before you bring in leads. Get expert assistance at every key stage of your website design and creation. You can depend on a proven step-by-step process that has been designed to ensure the project runs smoothly at every point, producing an end result that exceeds expectations on design and performance. ",
  },
  {
    title: 'Social Media',
    text: "Social Media is now an important factor in helping your website to rank well in search and is increasingly how people research services (so positive comments can boosts new clients). We work closely with our clients to achieve a wide range of marketing goals including increasing sales and leads, driving web traffic and building brand awareness.",
  },
  {
    title: 'Email Marketing',
    text: "Strategic use of email marketing has the power to engage your audience like nothing else.",
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features' >
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>Market-leading digital expertise at your fingertips</h1>
        <p>Unlock your next opportunity with our range of digital marketing services.</p>
      </div>
      <div className='gpt3__features-container'>
        {
          featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))
        }
      </div>
    </div>
  )
}

export default Features;