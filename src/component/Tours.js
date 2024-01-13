import React from 'react'
import Title from './Title'
import { tours } from '../data'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              image={tour.image}
              date={tour.date}
              title={tour.title}
              info={tour.title}
              location={tour.location}
              duration={tour.duration}
              cost={tour.cost}
            ></Tour>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
