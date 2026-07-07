import "./PPCHero.css";


const budgetStages = [
  {
    phase: "01",
    time: "12–8 Weeks Out",
    title: "Early Awareness Phase",
    description:
      "Lower spend on awareness and list-building campaigns. Focus on building retargeting audiences and growing your email subscriber base.",
    goal: "Goal: Build Audience"
  },
  {
    phase: "02",
    time: "8–4 Weeks Out",
    title: "Conversion Growth Phase",
    description:
      "Increase investment into conversion campaigns. Use early-bird pricing, speaker announcements, and strong offers to drive registrations.",
    goal: "Goal: Generate Registrations"
  },
  {
    phase: "03",
    time: "4–0 Weeks Out",
    title: "Final Registration Push",
    description:
      "Maximum ad spend with urgency messaging, countdown creatives, and retargeting campaigns to create the final registration spike.",
    goal: "Goal: Maximize Attendance"
  }
];


export default function BudgetStrategy(){

return(

<section className="budget-section">


<div className="budget-glow glow-left"></div>
<div className="budget-glow glow-right"></div>



<div className="budget-container">


<div className="budget-heading">

<span>
PPC BUDGET MANAGEMENT
</span>


<h2>
Budget Strategy For
<br/>
Conference Ads
</h2>


<p>
Your advertising budget should evolve throughout the registration
journey. We continuously optimize spend based on performance,
audience behavior, and registration goals.
</p>


</div>



<div className="budget-timeline">


{
budgetStages.map((item,index)=>(

<div className="budget-card" key={index}>


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

))
}



</div>




<div className="budget-report">


<h3>
Real-Time Budget Optimization
</h3>


<p>
We provide weekly pacing reports and continuously reallocate
spend based on campaign performance — ensuring every dollar
works harder toward registrations.
</p>


</div>



</div>


</section>

)

}