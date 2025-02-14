

import './App.css';
import ReactECharts from 'echarts-for-react';  

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {







  return (
    
    <Router>
      <div className="navbar-container">
        {/* Left Section */}
        <img className="menu-icon" src="/assets/hugeicons_menu-03.svg" alt="menu" />
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

  const getOption = () => ({  
    title: {  
        left: '7%',  
        top: '1%',  
        textStyle: {  
            fontSize: '20px',  
            fontWeight: 'bold'  
        }  
    },  
    tooltip: {  
        trigger: 'axis'  
    },  
    legend: {  
        data: ['Campaign 1', 'Inbox'],  
        top: 'top'  
    },  
    grid: {
        left: '2%',   // Adjust left margin
        right: '5%',  // Adjust right margin (increase this if needed)
        bottom: '20%', 
        top: '25%',
        containLabel: true // Ensures labels fit inside
    },
    xAxis: {  
        type: 'category',  
        boundaryGap: false,  
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],  
        axisLabel: {  
            color: '#000',
            margin: 10, // Adjust vertical spacing if needed
            padding: [5, -15, 15, -5] // [top, right, bottom, left] - Shift left/right  
        },  
        axisLine: {  
            show: false  
        },
        axisTick: {  
            show: false  
        },
        
    },  
    yAxis: {  
        type: 'value',  
        axisLabel: {  
            show: false  
        }, 
        splitNumber: 3, // Ensures only 4 split lines appear  
        splitLine: {
            show: true,
            lineStyle: {
                color: '#71767A', // Light gray grid lines
                width: 0.5, // Slightly increase thickness if needed
                border: '0.5px solid var(--Text-Colour-Caption-Text, #71767A)',
            }
        }
    },  
    series: [  
        {  
            type: 'line',  
            data: [1.2, 1.5, 1.3, 1.1, 1.4, 1.5, 1.7, 1.2, 1.3, 1.0, 1.1, 1.0],  
            smooth: true,  
            lineStyle: {  
                color: '#7270F7'  
            },  
            symbol: (value, index) => (index === 2 ? 'circle' : undefined),  
            symbolSize: 1,  
            itemStyle: {  
                normal: {  
                    borderColor: '#3B82F6',  
                    borderWidth: 2,  
                    shadowColor: 'rgba(59,130,246, .5)',  
                    shadowBlur: 10,  
                }  
            }  
        },  
        {  
            type: 'line',  
            data: [1.0, 1.1, 1.0, 1.2, 1.3, 1.5, 1.4, 1.6, 1.3, 1.2, 1.0, 1.1],  
            smooth: true,  
            lineStyle: {  
                color: '#D1D5DB'  
            },  
            symbol: (value, index) => (index === 2 ? 'circle' : undefined),  
            symbolSize: 1,  
            itemStyle: {  
                normal: {  
                    borderColor: '#D1D5DB',  
                    borderWidth: 2,  
                    shadowColor: '#A9AEB1',  
                    shadowBlur: 10,  
                }  
            }  
        }  
    ]  
});


  return  <div className='background-image'>
   <div className="top-container">
  <div className="campaign-container">
     <div className="campaign-content">
       <h1 className="campaign-content">
         Hi, <br></br> <div className="username">XXXXXXX <img className="wave" alt="wave" src="/assets/hi-icon.svg"/></div> 
       </h1>
       <p className="campaign-content1">
         Create a campaign to promote your business more wide <br></br> and reach
         potential markets throughout the world!
       </p>
       <button className="start-campaign-btn">
         <div className="campaign-text">Start Campaign <img className="arrow" alt="arrow" src="/assets/sidearrow-icon.svg"></img></div> 
       </button>
     </div>
   </div>
  
   <div className="right-container">
   <div className="leads-badge">
     
     
    
     <span className="leads-text"> <img className="leads-icon" alt='leads-icon' src="/assets/leads-icon.svg"></img>Leads</span>
   </div>
   
   <div className="senders-badge">
   
     <span className="senders-text">   <img className="senders-icon" alt="senders-icon" src="/assets/senders-icon.svg"></img>Senders</span>
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
     <img className="campaign-icon" src="./assets/campaign-icon.svg" alt="campaign-icon"/>
     </div>
     <div>
     <img className="dashboardarrow-icon" src="./assets/dashboard-arrow.svg" alt="dashboardarrow-icon"/>
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
  </div>
  <div className='middle-container'>
  <div className="container">  
    <div className="chart-container">  
        <ReactECharts option={getOption()} />  
    </div>  

    <div className="large-text">  
        1038  
    </div>  
    
    <div className="small-text">  
        Email Sent  
    </div>  

    <div className="footer-text">  
        inbox  
    </div>  

    <div className="filter-container">  
        <span className="filter">Filter:</span>  
        <div className="filter-button">  
            Campaign 1  
        </div>  
    </div>  
</div>
<div className="engagement-container">  
            <div className="header">  
                <h2 className='table-title'>Prospect Engagement</h2>  
                <select>  
                    <option>Last 7 Days</option>  
                    <option>Last 30 Days</option>  
                    <option>Last 3 Months</option>  
                </select>  
            </div>  
            <div className="grid">  
                <div className="card opened">  
                    <h3 className='opened'>Opened</h3>  
                    <p>1.837 <span>(60%)</span></p>  
                </div>  
                <div className="card replied">  
                    <h3>Replied</h3>  
                    <p>256 <span>(25%)</span></p>  
                </div>  
                <div className="card spam">  
                    <h3>Spam</h3>  
                    <p>89 <span>(12%)</span></p>  
                </div>  
                <div className="card interested">  
                    <h3>Interested</h3>  
                    <p>1.837 <span>(60%)</span></p>  
                </div>  
                <div className="card not-interested">  
                    <h3>Not Interested</h3>  
                    <p>1.837 <span>(60%)</span></p>  
                </div>  
                <div className="card started">  
                    <h3>Started</h3>  
                    <p>1.837 <span>(60%)</span></p>  
                </div>  

            </div>  
        </div>  
  </div>
  <div className='bottom-container'>
  <div className="reply-rates">  
      <h2>Reply rates</h2>  
      <div className='legend'>
       <div className="legend-item">
              <span className="legend-box lightpink"></span>  &gt;30%
            </div>
            <div className="legend-item">
              <span className="legend-box mediumpink"></span>  &lt;60%
            </div>
            <div className="legend-item">
              <span className="legend-box darkpink"></span>  &lt;60%
            </div>
            </div>
            <div className="settings">
          <select className="dropdown">
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
          <span className="view-settings">
            <img src="./assets/mdi-light_settings.svg" alt="settings" className="settings-icon"></img> View Settings <span className="small-line"></span><img src="./assets/oui_arrow-down.svg" className="uparrow-icon" alt="uparrow" ></img>
          </span>
        </div>
      <div className="options">  
        <span className='table-active'>Percentage</span>  
        <span>Absolute</span>  
        <span> + Add View</span>  
      </div>  
      <div className="table-container">
      <table>  
        <thead className='table-heading'>  
          <tr>  
            <th className='fixed-column'>Week</th>  
            <th className='tableheading scroll'>Email Sent</th>  
            <th className='tableheading scroll'>Avg. Rates</th>  
            <th className='tableheading scroll'>Monday</th>  
            <th className='tableheading scroll'>Tuesday</th>  
            <th className='tableheading scroll'>Wednesday</th>  
            <th className='tableheading scroll'>Thursday</th>  
            <th className='tableheading scroll'>Friday</th>  
            <th className='tableheading scroll'>Saturday</th>  
            <th className='tableheading scroll'>Sunday</th>  
          </tr>  
        </thead>  
        <tbody>  
          <tr>  
            <td className='greycolor' >Jan 1</td>  
            <td className='greycolor'>125</td>  
            <td className='greycolor'>87,6%</td>  
            <td className="lightpink">78.2%</td>  
            <td className="mediumpink">78.2%</td>  
            <td className="darkpink">78.2%</td>  
            <td className="mediumpink">78.2%</td>  
            <td className="darkpink">78.2%</td>  
            <td className="lightpink">78.2%</td>  
            <td className="darkpink">78.2%</td>  
          </tr>  
          <tr>  
            <td className='greycolor'>Jan 7</td>  
            <td className='greycolor'>625</td>  
            <td className='greycolor'>79.2%</td>  
            <td className="mediumpink">782%</td>  
            <td className="lightpink">782%</td>  
            <td className="mediumpink">782%</td>  
            <td className="darkpink">782%</td>  
            <td className="mediumpink">782%</td>  
            <td className="darkpink">782%</td>  
            <td className="lightpink">782%</td>  
          </tr>  
          <tr>  
            <td className='greycolor'>Jan 14</td>  
            <td className='greycolor'>124</td>  
            <td className='greycolor'>92,7%</td>  
            <td className="lightpink">175%</td>  
            <td className="darkpink">175%</td>  
            <td className="lightpink">175%</td>  
            <td className="lightpink">175%</td>  
            <td className="darkpink">175%</td>  
            <td className="mediumpink">175%</td>  
            <td className="mediumpink">175%</td>  
          </tr>  
          <tr>  
            <td className='greycolor'>Jan 28</td>  
            <td className='greycolor'>65</td>  
            <td className='greycolor'>89,6%</td>  
            <td className="darkpink">824%</td>  
            <td className="mediumpink">824%</td>  
            <td className="darkpink">824%</td>  
            <td className="darkpink">824%</td>  
            <td className="lightpink">824%</td>  
            <td className="lightpink">824%</td>  
            <td className="lightpink">824%</td>  
          </tr>  
          <tr>  
            <td className='greycolor'>Feb 1</td>  
            <td className='greycolor'>285</td>  
            <td className='greycolor'>79,6%</td>  
            <td className="mediumpink">369%</td>  
            <td className="lightpink">369%</td>  
            <td className="mediumpink">369%</td>  
            <td className="mediumpink">369%</td>  
            <td className="darkpink">369%</td>  
            <td className="mediumpink">369%</td>  
            <td className="darkpink">369%</td>  
          </tr>  
          <tr>  
            <td className='greycolor'>Feb 7</td>  
            <td className='greycolor'>168</td>  
            <td className='greycolor'>90,7%</td>  
            <td className="mediumpink">28%</td>  
            <td className="darkpink">28%</td>  
            <td className="lightpink">28%</td>  
            <td className="darkpink">28%</td>  
            <td className="mediumpink">28%</td>  
            <td className="darkpink">28%</td>  
            <td className="mediumpink">28%</td>  
          </tr>  
        </tbody>  
      </table>  
  
        </div>
        <div className='legend-mobile'>
       <div className="legend-item">
              <span className="legend-box lightpink"></span>  &gt;30%
            </div>
            <div className="legend-item">
              <span className="legend-box mediumpink"></span>  &lt;60%
            </div>
            <div className="legend-item">
              <span className="legend-box darkpink"></span>  &lt;60%
            </div>
            </div>
        </div>
       
    </div>  
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
