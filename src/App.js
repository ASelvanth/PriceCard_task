import './App.css';
import React from 'react';
import PriceCard from './components/PriceCard';

let data=[
  {
    plan:"FREE",
    price:"0",
    user:"single users",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subdomain:"Free Subdomain",
    subdomainEnabler:false,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:false,
  },

  {
    plan:"PLUS",
    price:"9",
    user:"5 users",
    userEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomain:"Free Subdomain",
    subdomainEnabler:true,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:false,
  },


  {
    plan:"PRO",
    price:"49",
    user:"Unlimited users",
    userEnabler:true,
    storage:"450GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomain:"Unlimited Free Subdomain",
    subdomainEnabler:true,
    hightlighter:true,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:true,
  },

  ]

function App() {
  return <>
    
    <section className="pricing py-5">
        <div className="container">
            <div className="row">
            <PriceCard data={data[0]}/>   
            <PriceCard data={data[1]}/> 
            <PriceCard data={data[2]}/>    
               
            </div>
        </div>
        </section>
        
  </>
  
}

export default App;
