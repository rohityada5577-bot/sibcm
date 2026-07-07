import "./PPCHero.css";

export default function PPCHero(){

  return (

    <section className="ppc-hero">

      <div className="ppc-glow glow-one"></div>
      <div className="ppc-glow glow-two"></div>


      <div className="ppc-container">


        <div className="ppc-content">


          <span className="ppc-tag">
            CONFERENCE PPC ADVERTISING
          </span>


          <h1>
            Drive Instant 
            <span> Conference Registrations </span>
            With High-Converting PPC Campaigns
          </h1>


          <p>
            When you need registrations now — not in 3 months — our
            data-driven PPC campaigns on Google Ads and LinkedIn Ads
            connect your conference with the right audience at the
            exact moment they are ready to register.
          </p>


          <div className="ppc-buttons">

            <button className="primary-btn">
              Start Your Campaign
            </button>


            <button className="secondary-btn">
              Explore PPC Strategy
            </button>

          </div>



          <div className="ppc-stats">


            <div>
              <h3>$2+</h3>
              <p>
                Revenue Generated
                <br/>
                Per $1 Ad Spend
              </p>
            </div>


            <div>
              <h3>3x</h3>
              <p>
                Faster Registration
                <br/>
                Growth
              </p>
            </div>


            <div>
              <h3>24/7</h3>
              <p>
                Campaign Optimization
                <br/>
                & Monitoring
              </p>
            </div>


          </div>


        </div>



        <div className="ppc-visual">


          <div className="dashboard-card">


            <div className="chart-top">

              <span>
                Campaign Performance
              </span>

              <strong>
                +184%
              </strong>

            </div>



            <div className="chart-bars">

              <div style={{height:"45%"}}></div>
              <div style={{height:"65%"}}></div>
              <div style={{height:"85%"}}></div>
              <div style={{height:"95%"}}></div>

            </div>



            <div className="conversion-box">

              <span>
                Registrations
              </span>

              <h2>
                2,480
              </h2>

              <small>
                This Campaign
              </small>

            </div>


          </div>


        </div>


      </div>


    </section>

  )

}