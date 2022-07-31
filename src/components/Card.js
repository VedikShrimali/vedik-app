// import React from 'react';
// import './card.css';

// export default function Card() {


//     return (
//       <div className='maincard'>
//         <div className="card">
//           <div className="card-child1">
//             <img className="card-img" src="bgimg.jpg" alt="newImg" />
//           </div>
//           <div className="card-child2">
//             <p className="card-title">title</p>
//             <p className="card-description">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
//               tenetur expedita, illum, hic nihil impedit eaque obcaecati vitae
//               laboriosam ducimus odit minima distinctio eius esse earum ut
//               voluptates rerum. Nostrum!
//             </p>
//             <a className="card-link" href="">
//               ReadMore
//             </a>
//           </div>
//         </div>
        
        
        
//       </div>
//     );

// }

import React from 'react'
import'./card.css';


export default function Card(props) {
  return (
    <div>
    <div className='card'>
      <div className='card-child-1'>
        <img className= 'card-img'src={props.image} alt="new"/>
      </div>
      <div className='card-child-2'>
          <p className='card-title'>{props.title}</p>
          <p className='card-description'>{props.description}</p>
          <a className='card-link'href={props.url}>Read More</a>

      </div>
    </div>
    </div>
  )
  }