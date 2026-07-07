import "./PPCHero.css";


const audienceData = [
  {
    title: "Job Title & Professional Role",
    description:
      "Target exact professional profiles your conference serves by role, designation, and expertise.",
    icon: "👤"
  },
  {
    title: "Industry & Company Type",
    description:
      "Filter organizations and companies that regularly invest in professional conferences.",
    icon: "🏢"
  },
  {
    title: "Behavioral Intent Signals",
    description:
      "Reach people actively searching, reading, and engaging with content related to your topic.",
    icon: "📊"
  },
  {
    title: "Lookalike Audiences",
    description:
      "Create high-quality audience groups using your existing registrant and attendee data.",
    icon: "🔎"
  },
  {
    title: "Retargeting Audiences",
    description:
      "Reconnect with website visitors, email subscribers, and previous event attendees.",
    icon: "🎯"
  }
];


export default function AudienceTargeting(){

return(

<section className="audience-section">


<div className="audience-container">


<div className="audience-heading">

<span>
AUDIENCE TARGETING STRATEGY
</span>


<h2>
Targeting The Right
<br/>
Audience For Events
</h2>


<p>
Audience targeting is the most important factor behind successful
conference PPC campaigns. We build precise audience segments to
reach professionals who are most likely to register.
</p>

</div>



<div className="audience-grid">


{
audienceData.map((item,index)=>(

<div className="audience-card" key={index}>


<div className="audience-icon">
{item.icon}
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

)

}