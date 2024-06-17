document.getElementById("btn1").addEventListener("click",myinsert);
function myinsert(){
    let myEmpn= document.getElementById("eno").value;
    let myName= document.getElementById("nm").value;
    let myCity= document.getElementById("city").value;
    let mySalary= document.getElementById("salary").value;

    let url= "http://localhost:3000/employees";
    
    fetch(url,{
        method: "post",

        body: JSON.stringify({
            employeeno: myEmpn,
            name: myName,
            city: myCity,
            salary: mySalary
        }),
        headers:{
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((data)=>{
        console.log(data);
        return data.json();
    })
    .then((json)=>{
        console.log(json);
        alert("DATA SAVED SUCCESSFULLY");
    })
}
//form htm me add karna hai