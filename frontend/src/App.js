
/////////////////////////////////////////////////////// -code_of_semester_7- /////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
  //   const [selectedFile, setSelectedFile] = useState(null);
  //   const [namesAndAll, setNamesAndAll] = useState([]);
  
  //   const handleFileChange = (event) => {
    //     setSelectedFile(event.target.files[0]);
    //   };
    
    //   const handleUpload = async () => {
      //     if (!selectedFile) {
        //       console.error('No file selected');
        //       return;
        //     }

        //     const formData = new FormData();
//     formData.append('image', selectedFile);

//     try {
  //       const response = await fetch('http://192.168.120.26:5000/predict', {
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
            
            
            //       <div className="container">
            //         <div className="card-wrapper">
            //           <div className="card">
            //             {/* <h2>Card Title 1</h2>
            //             <p>This is some example text for the first card.</p>
            //             <button>Button 1</button> */}
            
            
            //             {/* old code actual wala of photo uplloading geeting its details   ||||| start  */}
            //             {/* <h1>Face Recognition App</h1> */}
            //             <h2>Mark Attendance </h2>
            //             <p>This is some example text for the first card.</p>
            
            //             <input type="file" onChange={handleFileChange} />
            //             <button onClick={handleUpload}>Upload</button>
            
            //             {namesAndAll.length > 0 && (
              //               <div className="result-container">
              //                 {namesAndAll.map((item, index) => (
                //                   <div key={index} className="result-item">
                //                     <div className="result-name">{item.name}</div>
                //                     <div className="result-confidence">
                //                       Confidence: {item.Confidence_Score}
                //                     </div>
                //                     <img
                //                       src={`data:image/jpeg;base64,${item.Cropped_image_encoded}`}
                //                       alt={`Preview ${item.name}`}
                //                       className="result-preview"
                //                       />
                //                   </div>
//                 ))}
//               </div>
//             )}

//             {/* old code actual wala of photo uplloading geeting its details   ||||| end   */}

//           </div>
//           <div className="card">
//             <h2>Check Attendance</h2>
//             <p>This is some example text for the second card.</p>
//             <button>Button 2</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

/////////////////////////////////////////////////////// -code_of_semester_7- /////////////////////////////////////////////////////////////////////////////////
////////////////////////////////navigate_ke_sath/////new_wala////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
import React, { useState } from 'react';

// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import './LoginCard.css';

const LoginCard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Dummy login logic for demonstration
    if (username === 'user' && password === 'password') {
      navigate('/home');
    } else {
      alert('Incorrect username or password');
    }
  };
  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch('http://your-api-endpoint/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       navigate('/home');
  //     } else {
  //       alert('Incorrect username or password');
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     alert('An error occurred during login. Please try again later.');
  //   }
  // };

  // const handleLogin = async () => {
  //   try {
  //     // Create a FormData object and append the username and password fields
  //     const formData = new FormData();
  //     formData.append('username', username);
  //     formData.append('password', password);

  //     // Send the formData using fetch
  //     const response = await fetch('http://192.168.204.26:5000/login_sign_in', {
  //       method: 'POST',
  //       body: formData, // Pass the formData object directly
  //     });

  //     const data = await response.json();

  //     // Log the response to see what's being returned
  //     console.log('Response from server:', data);

  //     if (data.success) {
  //       console.log('Before navigate');
  //       console.log('after navigate');
  //     } else {
  //       alert(data.message || 'Incorrect username or password');
  //       navigate('/home'); // Redirect to the home page after successful login                       //lafda hai isme
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     alert('An error occurred during login. Please try again later.');
  //   }
  // };


  return (

    // <div className='main-div'>
    //   <header className="header">
    //     <h1 className="title">Class Attendance Management System</h1>
    //   </header>

    //   <div className="login-card">
    //     <h2>Login</h2>
    //     <input
    //       type="text"
    //       placeholder="Username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button onClick={handleLogin}>Login</button>
    //   </div>
    // </div>
    <div className='main-div'>
      <header className="header">
        <h1 className="title">Class Attendance Management System</h1>
      </header>

      <div className="login-card">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p style={{marginTop:'40px', color: '#e1f3de',fontSize: '16px', fontWeight: 'bold'  }}>Don't have an account? <span onClick={() => navigate('/signup')}style={{ color: '#6ae71b', fontSize: '16px',cursor:'pointer' , fontWeight: 'bold' ,    textdecoration : 'underline' }}>Sign up here</span></p>
        <p style={{marginTop:'16px', color: '#e1f3de',fontSize: '14px', fontWeight: 'light'  }}>forgot password ? </p>
      </div>
    </div>
  );
};

const SignupCard = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSignup = async () => {
    // Validate input fields (optional but recommended)
    if (!firstName || !lastName || !email || !mobile || !username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Create a FormData object and append all fields
      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('email', email);
      formData.append('mobile', mobile);
      formData.append('username', username);
      formData.append('password', password);

      // Send the formData using fetch
      const response = await fetch('http://192.168.204.26:5000/login_registration', {
        method: 'POST',
        body: formData, // Pass the formData object directly
      });

      const data = await response.json();

      if (data.success) {
      } else {
        // alert(data.message || 'Signup failed. Please try again.');
        alert('Signup successful!');
        navigate('/'); // Redirect to login after successful signup                             //yha pe bhi lafda
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup. Please try again later.');
    }
  };


  return (
    <div className='login-card'>

      <div className="signup-card">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
        {/* <p>Already have an account? <span onClick={() => navigate('/')}>Login here</span></p> */}
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div>

      <header className="header">
        <h1 className="title">Class Attendance Management System</h1>
      </header>
      <div className="container">
        <div className="card-wrapper">
          <div className="card">
            <h2>Mark Attendance</h2>
            <p>Tap below to upload pic to mark attendance.</p>
            <button onClick={() => handleButtonClick('/page1')}>click here</button>
          </div>
          <div className="card">
            <h2>Check Attendance</h2>
            <p>Tap below to check the attendance .</p>
            <button onClick={() => handleButtonClick('/page2')}>click here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page1 = () => {
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
      const response = await fetch('http://192.168.204.26:5000/predict', {
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


      <div className="container">
        <div className="card-wrapper">
          <div className="card">
         
            <h2>Mark Attendance </h2>
            {/* <p>This is some example text for the first card.</p> */}

            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>

            {namesAndAll.length > 0 && (
              <div class="parent-container">

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
              </div>
            )}

          </div>
         
        </div>
      </div>


    </div>
  );

};


//page2#######################################################################################################################################################################################
const Page2 = () => {

  // const [selectedDate, setSelectedDate] = useState('');
  // const [responseData, setResponseData] = useState(null);


  const [selectedDate, setSelectedDate] = useState('');
  const [college, setCollegeName] = useState('');
  const [course, setCourse] = useState('');
  const [batch, setBatch] = useState('');
  const [responseData, setResponseData] = useState(null);
  
  
  
  const [selectedReg, setSelectedReg] = useState('');      //second tab of sec page
  const [responseData2, setResponseData2] = useState(null);
  
  const [responseData3, setResponseData3] = useState(null);//third
  

  //first tab of second page
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCollegeNameChange = (event) => {
    setCollegeName(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleBatchChange = (event) => {
    setBatch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    const formData = new FormData();
    formData.append('date', selectedDate);
    formData.append('college', college);
    formData.append('course', course);
    formData.append('batch', batch);

    try {
      const response = await fetch('http://192.168.204.26:5000/retrieve_image_uploaded_date', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResponseData(data); // Set the response data to state
      } else {
        console.error('Failed to retrieve images');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };




  //second tab of second page
  // const handleDateChange = (event) => {
  //   setSelectedDate(event.target.value);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append('date', selectedDate);

  //   try {
  //     const response = await fetch('http://192.168.119.26:5000/retrieve_image_uploaded_date', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setResponseData(data); // Set the response data to state
  //     } else {
  //       console.error('Failed to retrieve images');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };


  //second tab of sec page
  const handleRegChange = (event) => {
    setSelectedReg(event.target.value);
  };
  const handleSubmit2 = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('reg_no', selectedReg);

    try {
      const response = await fetch('http://192.168.204.26:5000/retrieve_image_uploaded_reg', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setResponseData2(data); // Set the response data to state
      } else {
        console.error('Failed to retrieve images');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //third tab of second page
  const handleSubmit3 = async (event) => {
    event.preventDefault();


    const formData = new FormData();
    // formData.append('date', selectedDate);
    formData.append('college', college);
    formData.append('course', course);
    formData.append('batch', batch);

    try {
      const response = await fetch('http://192.168.204.26:5000/retrieve_whole_class_attendance', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResponseData3(data); // Set the response data to state
      } else {
        console.error('Failed to retrieve images');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  //print functionality
  const printPDF = () => {


    const doc = new jsPDF();

    // Define the columns for the table
    const columns = [
      { header: 'Name', dataKey: 'name' },
      { header: 'Registration No', dataKey: 'reg_no' },
      // { header: 'Confidence Score', dataKey: 'Confidence_Score' },
      { header: 'Total days', dataKey: 'total_no_of_days' },
      { header: 'present days', dataKey: 'No_of_Pres_dates' },
      { header: 'present %', dataKey: 'Present_percentage' },
    ];

    // Map the data
    const rows = responseData[0].map(student => ({
      name: student.name,
      reg_no: student.reg_no,
      // Confidence_Score: student.Confidence_Score,
      total_no_of_days: student.total_no_of_days,
      No_of_Pres_dates: student.No_of_Pres_dates,
      Present_percentage: student.Present_percentage,
    }));

    // Generate the PDF table
    doc.autoTable({
      head: [columns.map(col => col.header)],
      body: rows.map(row => Object.values(row)),
      theme: 'grid', // Optional: choose a table theme ('grid', 'striped', 'plain')
      headStyles: { fillColor: [41, 128, 185] }, // Optional: set the header background color
      startY: 20 // Optional: specify where the table should start in the PDF
    });

    // Save the PDF
    doc.save('table-data.pdf');
  };

  return (
    <div>

<header className="header">
        <h1 className="title">Check Attendance :</h1>
      </header>

 {/* first tab of sec page &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
      <div className="app-container">
        {/* <form onSubmit={handleSubmit} id="dateForm">
          <label htmlFor="date">Check by Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
          <button type="submit">Submit</button>
        </form> */}

        <form onSubmit={handleSubmit} id="dataForm">
          <label htmlFor="date">Select Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />

          <label htmlFor="collegeName">College Name :</label>
          {/* changed here code################################################################################################################################# */}
          {/* <input
            type="text"
            id="college"
            name="college"
            value={college}
            onChange={handleCollegeNameChange}
            required
          /> */}
          <select
            type="text"
            id="college"
            name="college"
            value={college}
            onChange={handleCollegeNameChange}
            required
          >
            <option value="">select College name</option>
            <option value="MIT_Muzaffarpur">MIT_Muzaffarpur</option>
            <option value="GEC">GEC</option>
            <option value="GEC_C">GEC_C</option>
            {/* Add more college options here if needed */}
          </select>


          <label htmlFor="course">Branch :</label>
          {/* <input
            type="text"
            id="course"
            name="course"
            value={course}
            onChange={handleCourseChange}
            required
          /> */}
            <select
            type="text"
            id="course"
            name="course"
            value={course}
            onChange={handleCourseChange}
            required
          >
            <option value="">select Branch name</option>
            <option value="IT">IT</option>
            <option value="EE">EE</option>
            <option value="ME">ME</option>
            <option value="CIVIL">CIVIL</option>
          </select>

          <label htmlFor="batch">Batch:</label>
          {/* <input
            type="text"
            id="batch"
            name="batch"
            value={batch}
            onChange={handleBatchChange}
            required
          /> */}
               <select
            type="text"
            id="batch"
            name="batch"
            value={batch}
            onChange={handleBatchChange}
            required
          >
            <option value="">select Batch year</option>
            <option value="2K20">2K20</option>
            <option value="2K21">2K21</option>
          </select>


          <button type="submit">Submit</button>
        </form>

        {responseData && (
          <div className="response-container">
            <h2>Response Data</h2>
            <table className="response-table">

              <button onClick={printPDF}>Print this data</button>

              <table id="data-table">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Reg_no</th>
                    {/* <th>confidence score</th> */}
                    <th>Image</th>
                    <th>Total days</th>
                    <th>present days</th>
                    <th>present %</th>
                  </tr>
                </thead>
                <tbody>
                  {responseData[0].map((student, index) => (
                    <tr key={index}>
                      <td>{student.name}</td>
                      <td>{student.reg_no}</td>
                      {/* <td>{student.Confidence_Score}</td> */}
                      <td>
                        <img
                          src={`data:image/jpeg;base64,${student.Cropped_image_encoded}`}
                          alt={`Preview ${student.name}`}
                          className="result-preview"
                        />
                      </td>
                      <td>{student.total_no_of_days}</td>
                      <td>{student.No_of_Pres_dates}</td>
                      <td>{student.Present_percentage}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </table>
          </div>
        )}
      </div>


 {/* second tab of sec page &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

      <div className="app-container">
        <form onSubmit={handleSubmit2} id="regForm">
          <label htmlFor="reg_no">Check by Reg.No. :</label>
          <input
            type="text"
            id="reg_no"
            name="reg_no"
            // value={setSelectedReg}
            placeholder="input reg. no. here"
            onChange={handleRegChange}
            required
          />
          <button type="submit">Submit</button>
        </form>

        {responseData2 && (
          <div className="response-container">
            <h2>Response Data</h2>
            <table className="response-table" id="data-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Reg_no</th>
                  {/* <th>Confidence Score</th> */}
                  <th>Image</th>
                  <th>No of presentdays</th>
                  <th>total Days</th>
                  <th>Present %</th>

                </tr>
              </thead>
              <tbody>
                {responseData2.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.reg_no}</td>
                    {/* <td>{student.Confidence_Score}</td> */}
                    <td>
                      <img
                        src={`data:image/jpeg;base64,${student.Cropped_image_encoded}`}
                        alt={`Preview ${student.name}`}
                        className="result-preview"
                      />
                    </td>
                    <td>{student.No_of_Pres_dates}</td>
                    <td>{student.total_no_of_days}</td>
                    <td>{student.Present_percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
 

 {/* third tab of sec page &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

      <div className="app-container">
        {/* <form onSubmit={handleSubmit} id="dateForm">
          <label htmlFor="date">Check by Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
          <button type="submit">Submit</button>
        </form> */}

        <form onSubmit={handleSubmit3} id="dataForm">
          {/* <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={selectedDate}
          onChange={handleDateChange}
          required
        /> */}

          <label htmlFor="collegeName">Select College Name:</label>
            <input
              type="text"
              id="college"
              name="college"
              value={college}
              onChange={handleCollegeNameChange}
              required
            />
       
          <label htmlFor="course">Select Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={course}
            onChange={handleCourseChange}
            required
          />
        

          <label htmlFor="batch">Select Batch:</label>
          <input
            type="text"
            id="batch"
            name="batch"
            value={batch}
            onChange={handleBatchChange}
            required
          />
        


          <button type="submit">Submit</button>
        </form>

        {responseData3 && (
          <div className="response-container">
            <h2>Response Data</h2>
            <table className="response-table">

              <table id="data-table">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Reg_no</th>
                    {/* <th>confidence score</th> */}
                    <th>Image</th>
                    <th>Total days</th>
                    <th>present days</th>
                    <th>present %</th>
                  </tr>
                </thead>
                <tbody>
                  {responseData3.map((student, index) => (
                    <tr key={index}>
                      <td>{student.name}</td>
                      <td>{student.reg_no}</td>
                      {/* <td>{student.Confidence_Score}</td> */}
                      <td>
                        <img
                          src={`data:image/jpeg;base64,${student.Cropped_image_encoded}`}
                          alt={`Preview ${student.name}`}
                          className="result-preview"
                        />
                      </td>
                      <td>{student.total_no_of_days}</td>
                      <td>{student.No_of_Pres_dates}</td>
                      <td>{student.Present_percentage}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </table>
          </div>
        )}
      </div>

    </div>
  );


}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/signup" element={<SignupCard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default App;
