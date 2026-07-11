import { motion } from "framer-motion";
import { seoPoints } from "./data";
import "./cso.css";

export default function SEOImportance() {

  return (
    <section className="seo-section">

      <div className="seo-container">

        <div className="seo-heading">

          <span>SEARCH ENGINE OPTIMIZATION</span>

          <h2>
            Why SEO Is Important
            <br />
            For Conferences
          </h2>

          {/* <p>
            A powerful SEO strategy ensures your conference reaches the right
            audience and generates registrations organically.
          </p> */}

        </div>


        <div className="seo-grid">

          {
            seoPoints.map((item)=>(
              <div className="seo-card" key={item.id}>

                <div className="seo-number">
                  {item.number}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>
            ))
          }

        </div>

      </div>

    </section>
  );
}