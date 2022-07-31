// import React,{useState} from "react";
// import './sidebar.css';
// import './media.css';

// // import {button} from "react-router-dom";
// import Card from "./Card";
// function Home(props) {
//   const[heading,setHeading]=useState('');
//   const[data,setData]=useState([]);
//   const getGeneralData=()=>{

//     axios.getGeneralData()

    
//   }
//     return (
//       <div className="mhome">
//       <div className="side">
        
        
//         <p className="catogory"> CATOGORY </p>
//         <div className="sidebar">
//           <br />
//           <button onClick={getGeneralData} className="sidebar-child" to="">
//             General
//           </button>
//           <br />
//           <button className="sidebar-child" to="">
//             Business
//           </button>
//           <br />
//           <button className="sidebar-child" to="">
//             Entertainment
//           </button>
//           <br />
//           <button className="sidebar-child" to="">
//             Health
//           </button>
//           <br />
//           <button className="sidebar-child" to="">
//             Sports
//           </button>
//           <br />
//           <button className="sidebar-child" to="">
//             Technology
//           </button>
//           <br />
        
//           <p className="country"> COUNTRY </p> <br />
//           <button className="sidebar-child" to="">
//             India
//           </button>
//           <br />
//           <button className="sidebar-child" to="">
//             US
//           </button>
//           <br />
//           <button className="sidebar-child" to="">
//             canada
//           </button>
          
//         </div> </div>
//         <div className="bodys">
//           <div className="header">
//             Header
//           </div>
//           <div className="mycard">
// {mapuse}
//           </div>
       
//       </div>
//       </div>
//     );
//   }
//   export {Home};


// import React,{useState,UseEffect} from 'react'
// import './sidebar.css'; 
// import Card from './Card';
// import axios from 'axios';
// import { useEffect } from 'react';

// export default function Home(props) {

//     const[heading,setHeading]=useState('');
//     const [data, setData]= useState([]);

// useEffect(()=>{
//     axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("General")
//             setData(res.data.articles);
// })
// },[])

//     const getGeneralData=()=>{
//         axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("General")
//             setData(res.data.articles);
//         })
//     }
//     const getSportsData=()=>{
//         axios.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("Sports")
//             setData(res.data.articles);
//         })
//     }
//     const getScienceData=()=>{
//         axios.get("https://newsapi.org/v2/top-headlines?country=in&category=Science&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("Science")
//             setData(res.data.articles);
//         })
//     }

//     const getEntertainmentData=()=>{
//         axios.get("https://newsapi.org/v2/top-headlines?country=in&category=Entertainment&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("Entertainment")
//             setData(res.data.articles);
//         })
//     }

//     const getTechnologyData=()=>{
//         axios.get("https://newsapi.org/v2/top-headlines?country=in&category=Technology&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("Technology")
//             setData(res.data.articles);
//         })
//     }

//     const getBusinessData=()=>{
//         axios.get("https://newsapi.org/v2/top-headlines?country=in&category=Business&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("Business")
//             setData(res.data.articles);
//         })
//     }

//     const getHealthData=()=>{
//         axios.get("https://newsapi.org/v2/top-headlines?country=in&category=Health&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("Health")
//             setData(res.data.articles);
//         })
//     }

//     const getIndiaData=()=>{
//         axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("India")
//             setData(res.data.articles);
//         })
//     }

//     const getUSAData=()=>{
//         axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("USA")
//             setData(res.data.articles);
//         })
//     }

//     const getCanadaData=()=>{
//         axios.get("https://newsapi.org/v2/top-headlines?country=ca&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("Canada")
//             setData(res.data.articles);
//         })
//     }

//     const getAustraliaData=()=>{
//         axios.get("https://newsapi.org/v2/top-headlines?country=au&apiKey=1f4ee549921a484b9e45310019382903")
//         .then((res)=>{
//               setHeading("Australia")
//             setData(res.data.articles);
//         })
//     }
//     let mapUse=data.map((value,index)=>{
//         return(<Card
//         key={index}
//         image={value.urlToImage}
//         title={value.title}
//         description={value.description}
//         url={value.url}
//         />

//         )
//     })

//     return(
//       <div className='home'>
//             <div className='home-child-1'>
//                 <p className='sidebar-heading'> Category</p>
//                 <button className='sidebar-btn' onClick={getGeneralData}> General</button>
//                 <button className="sidebar-btn" onClick={getSportsData}>  Sports</button>
//                 <button className="sidebar-btn" onClick={getScienceData}>  Science</button>
//                 <button className="sidebar-btn" onClick={getEntertainmentData}>Entertainment</button>
//                 <button className="sidebar-btn" onClick={getTechnologyData}>  Technology</button>
//                 <button className="sidebar-btn" onClick={getBusinessData}>Business</button>
//                 <button className="sidebar-btn" onClick={getHealthData}>Health</button>

//                 <div className='sidebar-border'>
//                     <p className='sidebar-heading'> Country</p>
//                 </div>
//                 <button className='sidebar-btn' onClick={getIndiaData}> India</button>
//                 <button className="sidebar-btn" onClick={getUSAData}>  USA</button>
//                 <button className="sidebar-btn" onClick={getCanadaData}>  Canada</button>
//                 <button className="sidebar-btn" onClick={getAustraliaData}>  Australia</button>
//                 </div>
//                 <div className='home-child-2'>
//                     <div className='home-heading'>
//                         {heading}
//                     </div>
//                     <div>
//                         {mapUse}
//                     </div>
//                 </div>
//                 </div>
//     )
//     }
// export {Home};
import axios from "axios";
import "./sidebar.css";
import "./sidebar.css";

// import "./media_side.css";
import React, { useState, useEffect } from "react";
import Card from "./Card";

function Home(props) {
  const [heading, setHeading] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=99895d106e6a415bba0c73d55ff3a20b"
      )
      .then((res) => {
        setHeading("General");
        setData(res.data.articles);
      });
  }, []);

  const getGenralData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=99895d106e6a415bba0c73d55ff3a20b"
      )
      .then((res) => {
        setHeading("General");
        setData(res.data.articles);
      });
  };
  const getBussnessData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=99895d106e6a415bba0c73d55ff3a20b"
      )
      .then((res) => {
       
        setHeading("Bussness");
        setData(res.data.articles);
      });
  };
  const getEntertainmentData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=99895d106e6a415bba0c73d55ff3a20b"
      )
      .then((res) => {
       
        setHeading("Enterteinment");
        setData(res.data.articles);
      });
  };
  const getHealthData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=99895d106e6a415bba0c73d55ff3a20b"
      )
      .then((res) => {
        setHeading("Health");
        setData(res.data.articles);
      });
  };
  const getSportsData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=99895d106e6a415bba0c73d55ff3a20b"
      )
      .then((res) => {
        setHeading("Sports");
        setData(res.data.articles);
      });
  };
  const getTechnologyData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=99895d106e6a415bba0c73d55ff3a20b"
      )
      .then((res) => {
        setHeading("Technology");
        setData(res.data.articles);
      });
  };
  const indiaData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=99895d106e6a415bba0c73d55ff3a20b"
      )
      .then((res) => {
        setHeading("India");
        setData(res.data.articles);
      });
  };
  const usData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=99895d106e6a415bba0c73d55ff3a20b"
      )
      .then((res) => {
        setHeading("US");
        setData(res.data.articles);
      });
  };

  let mapuse = data.map((value, index) => {
    return (
      <Card
        image={value.urlToImage}
        key={index}
        title={value.title}
        description={value.description}
        url={value.url}
      />
    );
  });
return (
  <div className="home">
    <div className="sidebar">
      <p className="cat"> CATOGORY </p> <br />
      <button onClick={getGenralData} className="sidebar-child" >
        General
      </button>
      <br />
      <button onClick={getBussnessData} className="sidebar-child" >
        Business
      </button>
      <br />
      <button onClick={getEntertainmentData} className="sidebar-child">
        Entertainment
      </button>
      <br />
      <button onClick={getHealthData} className="sidebar-child" >
        Health
      </button>
      <br />
      <button onClick={getSportsData} className="sidebar-child" >
        Sports
      </button>
      <br />
      <button onClick={getTechnologyData} className="sidebar-child" >
        Technology
      </button>
      <br />
      <p className="cat"> COUNTRY </p>
      <button onClick={indiaData} className="sidebar-child" >
        India
      </button>
      <button onClick={usData} className="sidebar-child" >
        US
      </button>
      <br />
    </div>
    <div className="mybody">
      <div className="home-child1">{heading}</div>
      <div className="home-child2">{mapuse}</div>{" "}
    </div>
  </div>
);
}
export { Home }