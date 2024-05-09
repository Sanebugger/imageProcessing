
  
  // ###############################################################################################################
  
  //   import React, { useState } from 'react';
  //   import './App.css';
  
  // const App = () => {
    //   const [selectedFile, setSelectedFile] = useState(null);
    //   const [namesAndAll, setNamesAndAll] = useState([]);
    
    //   const handleFileChange = (event) => {
      //     setSelectedFile(event.target.files[0]);
      //   };
      
      //   const handleUpload = async () => {
        //     const formData = new FormData();
//     formData.append('image', selectedFile);

//     try {
  //       const response = await fetch('http://192.168.115.26:5000/predict', {
    //         method: 'POST',
    //         body: formData,
    //       });
    
    //       if (response.ok) {
      //         const data = await response.json();
      //         setNamesAndAll(data);
      //       } else {
        //         console.error('Failed to upload image');
        //       }
        //     } catch (error) {
          //       console.error('Error:', error);
          //     }
          //   };
          
          //   return (
            //     <div>
            //       <h1>Face Recognition App</h1>
            //       <input type="file" onChange={handleFileChange} />
            //       <button onClick={handleUpload}>Upload</button>
            
            //       {namesAndAll.length > 0 && (
              //         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Confidence Score</th>
//               <th>image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {namesAndAll.map((item, index) => (
  //               <tr key={index}>
  //                 <td>{item.name}</td>
  //                 <td>{item.Confidence_Score}</td>
  //                 <td>{item.name}</td>
  //               </tr>
  //             ))}
  //           </tbody>} from "react-router-dom";

  //         </table>
  //       )}
  //     </div>
  //   );
  // };
  
  // export default App;
  
  // ###############################################################################################################

//   import React, { useState } from 'react';
// import './App.css'; // Import your CSS file for styling
// const App = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [namesAndAll, setNamesAndAll] = useState([]);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append('image', selectedFile);

//     try {
//       const response = await fetch('http://192.168.201.26:5000/predict', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setNamesAndAll(data);
//       } else {
//         console.error('Failed to upload image');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1>Face Recognition App</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>

//       {namesAndAll.length > 0 && (
//         <table className="result-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Confidence Score</th>
//               <th>Preview</th>
//             </tr>
//           </thead>
//           <tbody>
//             {namesAndAll.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.Confidence_Score}</td>
//                 <td>
//                   <img
//                     src={`data:image/jpeg;base64,${item.Cropped_image_encoded}`}
//                     alt={`Preview ${item.name}`}
//                     style={{ maxWidth: '100px', maxHeight: '100px' }}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default App;
















import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [namesAndAll, setNamesAndAll] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://192.168.120.26:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setNamesAndAll(data);
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Face Recognition App</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {namesAndAll.length > 0 && (
        <div className="result-container">
          {namesAndAll.map((item, index) => (
            <div key={index} className="result-item">
              <div className="result-name">{item.name}</div>
              <div className="result-confidence">
                Confidence: {item.Confidence_Score}
              </div>
              <img
                src={`data:image/jpeg;base64,${item.Cropped_image_encoded}`}
                alt={`Preview ${item.name}`}
                className="result-preview"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
