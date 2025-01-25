import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {







  return (
    
    <Router>
      <div className="navbar-container">
        {/* Left Section */}
        <div className="navbar-logo">
          <img className="navbar-icon" src="/assets/reach-logo.svg" alt="Logo" />
        </div>

        {/* Center Section */}
        <div className="navbar-links">
          <ul>
            <li className="active" >
              <Link to="/" className='navbar-item'>
                <img className="icon-home" src="/assets/home nav icon.svg" alt="Home" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/audience" className='navbar-item'>
                <img className="icon-users" src="/assets/audience nav icon.svg" alt="Audience" /> Audience
              </Link>
            </li>
            <li>
              <Link to="/campaign" className='navbar-item'> 
                <img className="icon-campaign" src="/assets/campaign nav icon.svg" alt="Campaign" /> Campaign
                <img className="arrow-icon" src="/assets/arrow-icon.svg" alt="Arrow" />
              </Link>
            </li>
            <li>
              <Link to="/analytics" className='navbar-item'>
                <img className="icon-analytics" src="/assets/analytics nav icon.svg" alt="Analytics" /> Analytics
              </Link>
            </li>
            <li>
              <Link to="/preference" className='navbar-item'>
                <img className="icon-settings" src="/assets/preference.svg" alt="Preference" /> Preference
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-actions">
          <img className="search-icon" src="/assets/search icon.svg" alt="Search" />
          <img className="notification-icon" src="/assets/notification icon.svg" alt="Notifications" />
          <div className="navbar-profile">
            <img
              src="/assets/profile pic.svg"
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/audience" element={<Audience />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/preference" element={<Preference />} />
      </Routes>
    </Router>
  );
}

function Dashboard() {

  return  <div className='background-image'>
   <div className="top-container">
  <div className="campaign-container">
     <div className="campaign-content">
       <h1 className="campaign-content">
         Hi, <br></br> <div className="username">XXXXXXX <img className="wave" src="/assets/hi-icon.svg"/></div> 
       </h1>
       <p className="campaign-content1">
         Create a campaign to promote your business more wide <br></br> and reach
         potential markets throughout the world!
       </p>
       <button className="start-campaign-btn">
         <div className="campaign-text">Start Campaign <img className="arrow" src="/assets/sidearrow-icon.svg"></img></div> 
       </button>
     </div>
   </div>
  
   <div className="right-container">
   <div className="leads-badge">
     
     
    
     <span className="leads-text"> <img className="leads-icon" src="/assets/leads-icon.svg"></img>Leads</span>
   </div>
   
   <div className="senders-badge">
   
     <span className="senders-text">   <img className="senders-icon" src="/assets/senders-icon.svg"></img>Senders</span>
   </div>
   <div className="user-card1">

   </div>
   <div className="user-card">  
     <div className="avatar">DA</div>  
     <div className="user-info">  
       <span className="user-name">David</span>  
       <span className="campaign-name">Campaign</span>  
       <span className="status">Success</span>  
     </div>  

     <div className="user-card3">
   <span className="user-number">12 </span> <span className="userx">X</span> <br></br> 
   <span className="user-description">More effective</span>  
   </div>
     <div>
     <img className="campaign-icon" src="./assets/campaign-icon.svg"/>
     </div>
     </div>
     <div className="user-card2">  
     <div className="avatar2">AL</div>  
     <div className="user-info2">  
       <span className="user-name2">Alex</span>  
       <span className="campaign-name2">Campaign</span>  
       <span className="status2">Scheduled</span>  
     </div> 
   </div>
   </div>  
  </div>;
  </div>
}

function Audience() {
  return <h1>Audience Page</h1>;
}

function Campaign() {
  return <h1>Campaign Page</h1>;
}

function Analytics() {
  return <h1>Analytics Page</h1>;
}

function Preference() {
  return <h1>Preference Page</h1>;
}

export default App;
