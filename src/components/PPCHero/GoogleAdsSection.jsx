import "./PPCHero.css";

const googleAdsFeatures = [
  {
    title: "Search Campaigns",
    description:
      "Target high-intent event keywords and reach professionals actively searching for conferences.",
    icon: "🔍"
  },
  {
    title: "Display Remarketing",
    description:
      "Re-engage website visitors who showed interest but haven't completed registration.",
    icon: "🎯"
  },
  {
    title: "YouTube Pre-Roll Ads",
    description:
      "Promote event teasers, speaker highlights, and sessions through engaging video ads.",
    icon: "▶"
  },
  {
    title: "Competitor Conquesting",
    description:
      "Capture audiences searching for competing conferences and industry events.",
    icon: "🚀"
  }
];


export default function GoogleAdsSection(){

return(

<section className="google-section">


<div className="google-container">


<div className="google-heading">

<span>
GOOGLE ADS FOR CONFERENCES
</span>


<h2>
How Google Ads Help
<br/>
Conferences Grow
</h2>


<p>
Google Search Ads place your conference in front of professionals
actively searching for events in your industry. Reach your ideal
attendees at the exact moment they are ready to engage.
</p>


</div>



<div className="google-content">


<div className="google-left">


<div className="search-box">

<div className="search-top">
Google Search
</div>


<div className="search-result">

<span>
Sponsored
</span>

<h3>
Fintech Summit Tickets 2026
</h3>

<p>
Register for the world's leading fintech conference.
</p>

</div>

</div>



<div className="highlight-box">

<h3>
The Most Valuable Position In Digital Marketing
</h3>

<p>
Your event appears at the top of search results when users
are actively looking for exactly what you offer.
</p>

</div>


</div>





<div className="google-right">


{
googleAdsFeatures.map((item,index)=>(

<div className="google-card" key={index}>

<div className="google-icon">
{item.icon}
</div>


<div>

<h3>
{item.title}
</h3>

<p>
{item.description}
</p>

</div>


</div>

))
}


</div>



</div>



</div>


</section>

)

}