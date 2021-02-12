import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faAddressBook, faChartArea, faChartLine, faCar, faDatabase, faBook, faPenSquare, faUsers, } from "@fortawesome/free-solid-svg-icons";

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title} target="_blank">
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
      var certifications = this.props.data.certifications.map((certification) => {
        var certificationImage = 'images/portfolio/' + certification.image
        return <div key={certification.title} className="columns portfolio-item">
        <div className="item-wrap">
         <a href={certification.url} title={certification.title} target="_blank">
            <img alt={certification.title} src={certificationImage} />
            <div className="overlay">
               <div className="portfolio-item-meta">
              <h5>{certification.title}</h5>
                  <p>{certification.category}</p>
               </div>
             </div>
           <div className="link-icon"><i className="fa fa-link"></i></div>
         </a>
       </div>
     </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

         <h1>Certifications</h1>

         <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {certifications}
          </div>

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>

      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="September 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingLeft: 9 }}
    icon={<FontAwesomeIcon icon={faChartArea} />}
  >
    <h3 className="vertical-timeline-element-title">Message Broker Application to java conversion</h3>
    <h6 className="vertical-timeline-element-subtitle">Designed a business solution to submit UCC filings data using java application.Migrated existing MB application into java. Created reports to analyze business requirements.</h6>
    <ol style={style.descriptionText}>
      <li>Technology used: Java, JMS, SpringBoot</li>
      <li>Tools used: Spring tool Suite, Postman, RfhUtil</li>
    </ol>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="May 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', paddingLeft: 9 }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Overhead Crane Monitoring System</h3>
    <h6 className="vertical-timeline-element-subtitle">Designed and prototyped a Product to reduce motor maintenance cost and improve its performance.Used microcontroller and sensors to transform business issues and objectives to concrete solutions that meet business needs.</h6>
  </VerticalTimelineElement>

      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="January 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingLeft: 9 }}
    icon={<FontAwesomeIcon icon={faUsers} />}
  >
    <h3 className="vertical-timeline-element-title">Energy Management System</h3>
    <h6 className="vertical-timeline-element-subtitle">I have created software and hardware design for energy management using microcontroller.</h6>
    <ol style={style.descriptionText}>
      <li>Managing and reducing energy consumption and saves money.</li>
      <li>Counter display to show number of people inside hall.</li>
      <li>Electrical loads are switched ON as the first person enters and switches OFF when the last person leaves.</li>
    </ol>
    <a href='https://github.com/Harshali77/Energy-Management-System' target='_blank' className="button"><i className="fa fa-github" style={{paddingRight: 6}}></i>View on GitHub</a>
  </VerticalTimelineElement>

      </VerticalTimeline>
   </section>
    );
  }
}

const style = {
  descriptionText: {
    color: 'black',
    fontWeight: 'bold',
  }
};

export default Portfolio;
