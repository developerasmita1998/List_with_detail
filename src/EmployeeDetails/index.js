     import React, { useEffect, useState } from 'react'
     import { useParams } from 'react-router-dom'

      const EmployeeDetail = () => {
      const { id } = useParams();
      const [employeeDetail, setEmployeeDetail] = useState([]);
      const [error, setError] = useState('');
      useEffect(() => {
      fetchEmployeeDetail();
      }, [id]); 
      const fetchEmployeeDetail = async () =>{
      try {
            setError('');
            const url = `https://dummyjson.com/products/${id}`;
            const options = {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            };
            const response = await fetch(url, options);
            if (!response.ok) {
                setError("Network response was not ok");
                return;
            }
            const temp = await response.json();
            setEmployeeDetail(temp);
        } catch (error) {
            setError(error.message);
        }
          };
          return (
        <div>
            {error && <label>{error}</label>}
            <div>{employeeDetail?.title}</div>
            <div>{employeeDetail?.description}</div>
            <div>{employeeDetail?.category}</div>
            <div>{employeeDetail?.price}</div>
            <div>{employeeDetail?.discountPercentage}</div>
            <div>{employeeDetail?.rating}</div>

        </div>
       );
     }
     export default EmployeeDetail;
