import "./PPCHero.css";


const audienceData = [
  {
    title: "Job Title & Professional Role",
    description:
      "Job title and professional role — targeting the exact professional profiles your conference serves",
  
  },
  {
    title: "Industry & Company Type",
    description:
      "Industry and company type — filtering for organizations that send employees to professional conferences",
  
  },
  {
    title: "Behavioral Intent Signals",
    description:
      "Behavioral intent signals — people recently searching for or engaging with content related to your conference topic",
   
  },
  {
    title: "Lookalike Audiences",
    description:
      "Lookalike audiences — built from your existing registrant and attendee data",
    
  },
  {
    title: "Retargeting Audiences",
    description:
      "Retargeting audiences — website visitors, email list contacts, and past event attendees",
   
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
Targeting the Right 
<br/>
Audience for Events
</h2>


<p>
Audience targeting is the single most important variable in conference PPC performance. We build audience segments based on:
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