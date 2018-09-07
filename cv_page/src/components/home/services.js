import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
const ServicesOffered = [
  {
    title: 'Blockchain',
    description: 'Smart Contracts on Ethereum',
    icon: 'icon-globe'
  },
  {
    title: 'Frontend',
    description: 'Modern Web Applications',
    icon: 'icon-screen-smartphone'
  },
  {
    title: 'Backend',
    description: 'Servers, API, Databases',
    icon: 'icon-cloud-upload'
  },
  {
    title: 'Consult',
    description: (<span>
      Trainings, Workshops. Feel free to ask <i className='fas fa-heart' />
    </span>),
    icon: 'icon-mustache'
  }
]
const ServicesSections = () => (
  <ScrollableAnchor id='services'>
    <section className='content-section bg-primary text-white text-center'>
      <div className='container'>
        <div className='content-section-heading'>
          <h2 className='mb-5'>Services Offered </h2>
        </div>
        <div className='row'>
          {ServicesOffered.map((service, index) => (
            <div
              className='col-6 col-lg-3 col-md-6 mb-5 mb-lg-0'
              key={`service_${index}`}
            >
              <span className='service-icon rounded-circle mx-auto mb-3'>
                <i className={service.icon} />
              </span>
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className='text-faded mb-0'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
)
export default ServicesSections
