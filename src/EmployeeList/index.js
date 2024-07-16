import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const EmployeeList =() =>{
const [error,setError] = useState('')
const [employeeList,setEmployeeList] = useState([])
const [search,setSearch] = useState('')
const [filter,setFilter] = useState([])
const navigate =useNavigate();


const fetchEmployeeList =async()=>{
try{
setError('')
let url = "https://dummy.restapiexample.com/api/v1/employees"
let options ={
method:'Get',
headers:{
Accept:"application/json",
"Content-Type":"application/json",
},

};
         
const response = await fetch(url,options)
if(!response.ok){
        setError("Network was not ok");
        return;
       }
       const temp = await response.json()
       setEmployeeList(temp.data);
       setFilter(temp.data);

}

catch(error){
 setError(error.message)
}
};

useEffect(()=>{
    fetchEmployeeList();
},[]);

const sea = (e) =>{
    setSearch(e.target.value);
    const fil = filter?.filter((item)=>
       item.employee_name.includes(e.target.value)
    );
    setFilter(fil);

}
return(
    <div>
        <input type="search"
          value={search}
          onChange={(e)=>sea(e)}
        />
     {error&& <label>{error}</label>}

     {filter&&  filter?.map((item)=>(

      <div onClick={()=>navigate(`/EmployeeDetail/${item.id}`)}>{item.employee_name}</div>
     )) }

    </div>
)
}
export default EmployeeList;