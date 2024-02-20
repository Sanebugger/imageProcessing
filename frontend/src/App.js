// import React, { useState } from 'react';

// const Home = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [batchName, setBatchName] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');

//   const handleImageSelection = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//   };

//   const handleCameraCapture = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       const video = document.createElement('video');
//       document.body.appendChild(video);
//       video.srcObject = stream;

//       video.onloadedmetadata = () => {
//         video.play();

//         // Create a canvas element to capture a frame from the video stream
//         const canvas = document.createElement('canvas');
//         canvas.width = video.videoWidth;
//         canvas.height = video.videoHeight;
//         const context = canvas.getContext('2d');
//         context.drawImage(video, 0, 0, canvas.width, canvas.height);

//         // Convert the canvas content to a Blob (image file)
//         canvas.toBlob((blob) => {
//           setSelectedImage(blob);
//           // Stop the video stream and remove the video element
//           stream.getTracks().forEach((track) => track.stop());
//           document.body.removeChild(video);
//         }, 'image/png');
//       };
//     } catch (error) {
//       console.error('Error accessing camera:', error);
//     }
//   };
//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('image', selectedImage);
//       formData.append('batchName', batchName);
//       formData.append('selectedDate', selectedDate);
  
//       const response = await fetch('http://localhost:3000/upload', {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (response.ok) {
//         const result = await response.json();
  
//         if (result.success) {
//           console.log('Image successfully uploaded to the server!');
//           console.log('Image URL:', result.imageUrl);
//           console.log('Batch:', result.batch);
//           console.log('Date:', result.date);
          
//           // You can update your UI or perform additional actions with the response data
//         } else {
//           console.error('Server response indicates failure.');
//         }
//       } else {
//         console.error('Failed to upload image to the server.');
//       }
//     } catch (error) {
//       console.error('Error sending POST request:', error);
//     }
//   };
  
//   return (
//     <div>
//       <h2>Home Page</h2>
//       <button onClick={handleCameraCapture}>Capture Image from Camera</button>
//       <br />
//       <input type="file" onChange={handleImageSelection} accept="image/*" />
//       <br />
//       <label>
//         Batch Name:
//         {/* <input type="text" value={batchName} onChange={(e) => setBatchName(e.target.value)} /> */}
//         <input type="text" value={batchName} onChange={(e) => setBatchName(e.target.value)} />

//       </label>
//       <br />
//       <label>
//         Date:
// {/* <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} /> */}
//         <input type="Date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
//       </label>
//       <br />
//       <button type="button" onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [batch, setBatch] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('batch', batch);
      formData.append('date', date);

      const response = await axios.post('http://localhost:3000/upload', formData);

      if (response.data.success) {
        setImageUrl(response.data.imageUrl);
        // Handle success, e.g., show a success message to the user
      } else {
        // Handle failure, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <br />
      <label>Batch: </label>
      <input type="text" value={batch} onChange={(e) => setBatch(e.target.value)} />
      <br />
      <label>Date: </label>
      <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      <br />
      <button onClick={handleUpload}>Upload Image</button>
      {imageUrl && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
