async function dataShow(){
    let myTable=`
    <table border="1px" width="900px" bgcolor="lightblue" align="center">
    <tr bgcolor="yellow">
    <th>Employee no</th>
    <th>Employee Name</th>
    <th>City</th>
    <th>Salary</th>
    </tr>
    `;
    let url="http://localhost:3000/employees";

    let myobj = await fetch(url);
    console.log(myobj);
    let myDate = await myobj.json();
    console.log(myDate);

    myDate.map((key)=>{
        myTable +=`
        <tr>
        <th>${key.employeeno}</th>
        <th>${key.name}</th>
        <th>${key.city}</th>
        <th>${key.salary}</th>
        </tr>
        `;
    });

    myTable +=`</table>`;
    document.getElementById("demo").innerHTML=myTable;
}
dataShow();



