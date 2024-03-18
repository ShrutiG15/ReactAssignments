import axios from 'axios';

export let empServiceObj = 
{
    getAllEmployees,
    getEmpById,
    addEmp,
    updateEmp,
    deleteEmp
};



let url = "http://localhost:3500/emps/";      // One / at end for POST etc methods where ID is being appended to URL

function getAllEmployees()
{
    return axios.get(url);
}


function addEmp(empObj)
{
    return axios.post(url, empObj);
}

function deleteEmp(eno)
{
    return axios.delete(url + eno);
}


function getEmpById(eno)
{
    return axios.get(url + eno);
}

function updateEmp(empObj)
{
    return axios.put(url + empObj.empno, empObj);
}