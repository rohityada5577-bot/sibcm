import "./PPCHero.css";


const campaignFeatures = [
  {
    title: "Precise Audience Targeting",
    description:
      "Target professionals by job title, company size, industry, seniority, and skills on LinkedIn. Use Google intent signals and audience layering to reach users interested in your conference topic.",
    icon: "🎯"
  },
  {
    title: "Conversion-Optimized Ad Creative",
    description:
      "Create high-performing ad creatives highlighting speakers, sessions, networking opportunities, and strong value propositions. Continuously A/B test campaigns to reduce registration costs.",
    icon: "⚡"
  },
  {
    title: "Landing Page Alignment",
    description:
      "Ensure your landing pages match your ad messaging, maintain user intent, and remove friction from the registration journey.",
    icon: "🚀"
  }
];


export default function PaidCampaigns(){

return(

<section className="paid-section">


<div className="paid-glow paid-glow-one"></div>
<div className="paid-glow paid-glow-two"></div>



<div className="paid-container">


<div className="paid-heading">


<span>
CONFERENCE PPC STRATEGY
</span>


<h2>
Paid Campaigns That
<br/>
Bring Real Attendees
</h2>


<p>
Not all ad clicks are equal. Our conference PPC campaigns focus on
qualified professionals who are genuinely interested in attending —
not meaningless traffic.
</p>


</div>




<div className="paid-grid">


{
campaignFeatures.map((item,index)=>(

<div className="paid-card" key={index}>


<div className="paid-icon">
{item.icon}
</div>


<h3>
{item.title}
</h3>


<p>
{item.description}
</p>


<div className="card-line"></div>


</div>

))
}



</div>



</div>



</section>

)

}