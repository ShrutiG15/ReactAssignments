import { useState } from "react";

function Employees() {

    const [empArray, setEmpArray] = useState([]); //Employees Array

    //State variables for properties of each Employee object
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState(""); //"" -> Displays Placeholder value only instead of default value "" mentioned here.

    function getEmpButton_click() {

        let tempArray = [
            { empno:1, ename:"Shruti", job:"Developer", sal:250000, deptno: 10},
            { empno:2, ename:"Shrey", job:"Developer", sal:200000, deptno: 20},
            { empno:3, ename:"Aditi", job:"Performance Engineer", sal:120000, deptno: 30},
            { empno:4, ename:"Sneh", job:"Automation Engineer", sal:100000 ,deptno: 40},
        ];

        setEmpArray(tempArray);
    }


    function addEmpButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;


        let tempArray = [...empArray];
        tempArray.push(empObj);
        setEmpArray(tempArray);

        clearFields();
    }

    function clearFields()
    {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }


    function  deleteEmp_click(eno)
    {
        
        if(window.confirm("Are you sure you want to delete?")){
            let tempArray = [...empArray];
       
            let index = tempArray.findIndex(item => item.empno === eno);
            tempArray.splice(index, 1);
    
            setEmpArray(tempArray);
        }
    }

    function  selectEmp_click(eno)
    {
        let empObj = empArray.find(item => item.empno === eno);

        setEmpno(empObj.empno);
        setEname(empObj.ename);
        setJob(empObj.job);
        setSal(empObj.sal);
        setDeptno(empObj.deptno);
        
    }

    function updateEmpButton_click() {
        let tempArray = [...empArray];
        
        let index = tempArray.findIndex(item => item.empno == empno);
        tempArray[index].ename = ename ;
        tempArray[index].job = job ;
        tempArray[index].sal = sal ;
        tempArray[index].deptno = deptno ;

        setEmpArray(tempArray);
        clearFields();
    }

    let resultArray = empArray.map((item, index) => {
        return <tr key={index}>
                        <td>   {item.empno}  </td>
                        <td>   {item.ename}  </td>
                        <td>   {item.job}  </td>
                        <td>   {item.sal}  </td>
                        <td>   {item.deptno}  </td>
                        <td>
                            <a  onClick={() => selectEmp_click(item.empno)} href="javascript:void(0);"><img height="50" width="50" src="./select.jpg"></img></a> |
                            <a  onClick={() => deleteEmp_click(item.empno)} href="javascript:void(0);"><img height="45" width="45" src="./delete.jpg"></img></a>
                        </td>
                </tr>
    });

    return (
        <>
            <h3>CRUD Operations on Employees data</h3>
            <hr />
            <fieldset>
                
                <input type="number" placeholder="Employee ID" value={empno} onChange={(e) => setEmpno(e.target.value)} />
                <input type="text" placeholder="Name" value={ename} onChange={(e) => setEname(e.target.value)} />
                <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
                <input type="number" placeholder="Salary" value={sal} onChange={(e) => setSal(e.target.value)} />
                <input type="number" placeholder="Dept ID" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
                <hr />

                <input type="button" onClick={getEmpButton_click} value="Get Employees" />
                <input type="button" onClick={addEmpButton_click} value="Add Employee" />
                <input type="button" onClick={updateEmpButton_click} value="Update Employee" />
                <hr />

                <table border="2" width="700" cellspacing="0" cellpadding="5">
                    <tr>
                        <th>Emp ID</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Salary</th>
                        <th>Dept ID</th>
                        <th></th>
                    </tr>
                    {resultArray}
                </table>

            </fieldset>

        </>

    );
}

export default Employees;