import "./PPCHero.css";
import { budgetStrategyData } from "./data";
export default function BudgetStrategy({
data = budgetStrategyData,
}) {
return (
<section className="budget-section">
   <div className="budget-glow glow-left"></div>
   <div className="budget-glow glow-right"></div>
   <div className="budget-container">
      <div className="budget-heading">
         <span>
         {data.badge}
         </span>
         <h2>
            {data.title}
            <br />
            {data.titleHighlight}
         </h2>
         <p>
            {data.description}
         </p>
      </div>
      <div className="budget-timeline">
         {data.stages.map((item, index) => (
         <div
            className="budget-card"
            key={index}
            >
            <div className="budget-number">
               {item.phase}
            </div>
            <div className="budget-content">
               <div className="budget-time">
                  {item.time}
               </div>
               <h3>
                  {item.title}
               </h3>
               <p>
                  {item.description}
               </p>
               <span>
               {item.goal}
               </span>
            </div>
         </div>
         ))}
      </div>
      <div className="budget-report">
         <h3>
            {data.report.title}
         </h3>
         <p>
            {data.report.description}
         </p>
      </div>
   </div>
</section>
);
}