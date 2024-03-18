// Also making use of AJAX and Services
import { useState } from "react";
import { empServiceObj } from "../services/emp.service";
import './Styling.css'

function Crud2() {
    const [empsArray, setEmpsArray] = useState([]);

    // For reading data from user through textboxes
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");

    function get_EmpsBtnClick() {

        empServiceObj.getAllEmployees().then((resData) => {
            setEmpsArray(resData.data);
        });
    }


    function addEmpButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;

        empServiceObj.addEmp(empObj).then((resData) => {
            alert("New Employee added to Server");
            get_EmpsBtnClick();          // get the latest data from server
            clearFields();
        });
    }

    function clearFields() {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }


    function deleteEmp_click(eno) {
        empServiceObj.deleteEmp(eno).then((resData) => {
            alert("Employee details deleted from Server");
            get_EmpsBtnClick();     // get the latest data from server            
        });

    }

    function selectEmp_click(eno) {

        empServiceObj.getEmpById(eno).then((resData) => {
            let empObj = resData.data;
            setEmpno(empObj.empno);
            setEname(empObj.ename);
            setJob(empObj.job);
            setSal(empObj.sal);
            setDeptno(empObj.deptno);
        });
    }

    function updateEmpButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;

        empServiceObj.updateEmp(empObj).then((resData) => {
            alert("Employee details are updated in Server");
            get_EmpsBtnClick(); // get the latest data from server
            clearFields();
        });
    }

    let resultArray = empsArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.job}  </td>
            <td>   {item.sal}  </td>
            <td>   {item.deptno}  </td>
            <td>
                <a onClick={() => selectEmp_click(item.empno)} href="javascript:void(0);">Select</a> |
                <a onClick={() => deleteEmp_click(item.empno)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    });


    return (<>

        <h3>CRUD Operations using JSON-Server on Employee Data in React Application</h3>
        <hr />

        <input class="ip" type="text" placeholder="Emp Number" value={empno} onChange={(e) => setEmpno(e.target.value)} />
        <input class="ip" type="text" placeholder="Emp Name" value={ename} onChange={(e) => setEname(e.target.value)} />
        <input class="ip" type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
        <input class="ip" type="text" placeholder="Salary" value={sal} onChange={(e) => setSal(e.target.value)} />
        <input class="ip" type="text" placeholder="Dept Number" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
        
        <hr />

        <input class="btn" type="button" onClick={get_EmpsBtnClick} value="Get Employees" />
        <input class="btn" type="button" onClick={addEmpButton_click} value="Add Employee" />
        <input class="btn" type="button" onClick={updateEmpButton_click} value="Update Employee" />
        <hr />

        <table border="2" width="900" cellspacing="0" cellpadding="5">
            <tr>
                <th>Employee No</th>
                <th>Employee Name</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Department No</th>
                <th></th>
            </tr>
            {resultArray}
        </table>

    </>);
}

export default Crud2;