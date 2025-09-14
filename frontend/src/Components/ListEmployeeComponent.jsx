
import React, { useEffect, useState }from 'react'
import { deleteEmployee, listEmployee } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employee, setEmployee] = useState([])
    const navigator = useNavigate();

    useEffect( () =>  {
        getAllEmployee();
    }, [])


    function getAllEmployee() {
        listEmployee().then((response) => {
            setEmployee(response.data);
        }).catch(error => {
            console.error(error);
        });    
    }


    function addNewEmployee(){
        navigator('/add-employee') 
    }
   

    function updateEmployee(id){
        navigator(`/update-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then(() => {
            getAllEmployee();
        }).catch(error => {
            console.error(error);
            
        })
        
    }

  return (
    <div className='container'>
        <br />
        <h2>List of Employees</h2>
        <button className='btn btn-primary mb-3' onClick={ addNewEmployee }>Add Employee</button>
       
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee firstName</th>
                    <th>Employee lastName</th>
                    <th>Employee Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() =>
                                     updateEmployee(employee.id)}>Update</button>
                                

                                <button className='btn btn-danger' onClick={() =>
                                     removeEmployee(employee.id)} 
                                     style={{marginLeft: '10px'}}>Delete</button>

                            
                            </td>
                        </tr> )
                }    
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent