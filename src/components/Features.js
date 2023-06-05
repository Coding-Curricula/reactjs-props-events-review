import React from 'react'

import './Features.css'

export default function Features() {

  // LOGIC GOES HERE
  const images = [
    'https://cdn.shopify.com/s/files/1/0090/8636/9873/files/000_9943_540x.jpg?v=1613721450',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOX2A9PishKybgn8eK6QARTKuP_Q8fgm7tX4Xnopr5&s',
    'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000'
  ]

  const data = [{
    title: 'Coding',
    description: 'Learning HTML, CSS, JavaScript, ReactJS, Node.js, Express.js, and SQL.',
    image: 'https://cdn.shopify.com/s/files/1/0090/8636/9873/files/000_9943_540x.jpg?v=1613721450'
  }, {
    title: 'Design',
    description: 'Learning how to design websites and web apps.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOX2A9PishKybgn8eK6QARTKuP_Q8fgm7tX4Xnopr5&s'
  }, {
    title: 'Marketing',
    description: 'Learning how to market websites and web apps.',
    image: 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000'
  }]
  
  let badData = null;

  return (
    <div>
      <section className='features'>
        <div className='feature-container'>
          {data ? data.map((feature, index) => (
            <div className='feature-box' key={index}>
              <div className='feature-img'>
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className='feature-text'>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          )) : <h1>THERE IS NO DATA HERE</h1>}
        </div>
      </section>
    </div>
  )
}

