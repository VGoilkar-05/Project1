// import {useState} from 'react'
// import GitHub from './GitHub/GitHub'
// import './GitHub/GitHub.css'

// function App() {
//   const[data,setData]=useState(GitHub);
//   return (
//     <div className='App'>
      
//       <section>
//         <main>
//           <p>Today Birthday {data.length}🤩  </p>
//           {data.map((x)=>{
//           return(
//             <div className='cards' key={x.image}>
//               <img src={x.image} alt="" height={'50px'} width={'50px'} ></img>
//               <ruby><p>{x.age}</p><rt>{x.name}</rt></ruby>

//             </div>
//               )
//           })}
//           <button onClick={()=>setData([])}>clear</button>

//         </main>
//       </section>
//     </div>
//   )
// }

// export default App


import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
      const roomID = getUrlParams().get('roomID') || randomID(5);
      let myMeeting = async (element) => {
     // generate Kit Token
      const appID = 180948351;
      const serverSecret = "520cbbb1e15517ac8722d4fb5d8f5f43";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));


     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });


  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}

