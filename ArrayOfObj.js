

function ArrayOfObj() {

    var empsArray =
        [
            { "empno": 6589, "ename": "SRIRAM", "job": "MANAGER", "sal": 3200, "deptno": 30 },
            { "empno": 7369, "ename": "SMITH", "job": "CLERK", "sal": 800, "deptno": 20 },
            { "empno": 7499, "ename": "ALLEN", "job": "SALESMAN", "sal": 1600, "deptno": 30 },
            { "empno": 6589, "ename": "SRIRAM", "job": "MANAGER", "sal": 3200, "deptno": 30 },
            { "empno": 7369, "ename": "SMITH", "job": "CLERK", "sal": 800, "deptno": 20 },
            { "empno": 7499, "ename": "ALLEN", "job": "SALESMAN", "sal": 1600, "deptno": 30 },
            { "empno": 6589, "ename": "SRIRAM", "job": "MANAGER", "sal": 3200, "deptno": 30 },
            { "empno": 7369, "ename": "SMITH", "job": "CLERK", "sal": 800, "deptno": 20 },
            { "empno": 7499, "ename": "ALLEN", "job": "SALESMAN", "sal": 1600, "deptno": 30 }
        ];


    let resultsArray = empsArray.map(item =>
        <tr>
            <td>{item.empno}</td>
            <td>{item.ename}</td>
            <td>{item.job}</td>
            <td>{item.sal}</td>
            <td>{item.deptno}</td>
        </tr>);


    return (
        <>
            <hr></hr>
            <table border="2" width="500">

                <tr>
                    <th>Empno</th>
                    <th>Ename</th>
                    <th>Job</th>
                    <th>Salary</th>
                    <th>Deptno </th>
                </tr>

                {resultsArray}

            </table>
        </>
    );
}

export default ArrayOfObj;