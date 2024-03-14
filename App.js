//import logo from './logo.svg'; //local image within the same folder as the js file
import './App.css';

import React from 'react';
import ArrayOfObj from './ArrayOfObj';
import ImgTesting from './ImgTesting';

function App() {

  // let empno = 101;
  // let empname  = "Scott";
  // let salary  = 250000;
  // let job = " Software Developer";
  // let deptno = 15;


  // let  coursesArray  = [ "HTML5", "CSS3", "JAVA SCRIPT", "REACT JS", "ANGULAR", "HTML5", "CSS3", "JAVA SCRIPT", "REACT JS", "ANGULAR" ];
  // let resultArray =   coursesArray.map(item =>  <li>{item}</li>);


  let empObj = { empno : 10256, ename :  "Scott", job : "Manager" , deptno : 10 };


  return (
      <>
        {/* <h3>Displaying the employee details in tabular format</h3>
        <hr/>

        <table title='Employee Details' align='center'>
                <tr>
                  <td>Employee No.</td>
                  <td>{empno}</td>
                </tr>
                <tr>
                  <td>Employee Name</td>
                  <td>{empname}</td>
                </tr>
                <tr>
                  <td>Salary</td>
                  <td>{salary}</td>
                </tr>
                <tr>
                  <td>Job</td>
                  <td>job</td>
                </tr>
                <tr>
                  <td>Dept No.</td>
                  <td>{deptno}</td>
                </tr>
        </table>
        <img src={logo}></img> */}


        {/* <h3>Developing Web Applications using React JS</h3>
        <hr/>

        <ul>
        {resultArray}
        </ul>  */}

        <ArrayOfObj/>
        <h3>Developing Web Applications using React JS</h3>
        <hr/>

        <div>  
          Employee Id :  {empObj.empno}  <br/>
          Employee Name :  {empObj.ename}  <br/>
          Employee Job  :  {empObj.job}  <br/>
          Employee Deptno  :  {empObj.deptno}  <br/>
        </div>
        <ImgTesting/>
      </>     
  );
}

export default App;
