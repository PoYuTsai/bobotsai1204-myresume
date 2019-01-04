import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+ projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h1>{projects.title}</h1>
                    <p>{projects.category}</p>
                </div>
              </div>

            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
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
            <h1>作品們</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
