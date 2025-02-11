import React, { useContext } from 'react'
import { UserContext } from '../Context/UserProvider'
import { NavLink } from 'react-router-dom'
function Home() {
  //context ref to make home as context consumer
  const context=useContext(UserContext)

  return (
   <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h3 className='display-3 text-success'>Users</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="table table-responsive">
          <table className='table table-bordered table-hover table-striped text-center'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                context?.users.map((item)=>{
                  return(
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.mobile}</td>
                      <td>{item.dob}</td>
                      <td>{item.gender}</td>
                      <td>{item.address ? item.address: "--no address--"}</td>
                      <td>{item.role}</td>
                      <td className='btn-group'>
                        <NavLink to={`/edit/${item._id}`} className={'btn btn-sm btn-info'}>
                            <i className='bi bi-pencil'></i>
                        </NavLink>
                        <button className='btn btn-sm btn-danger'>
                          <i className='bi bi-trash'></i>
                          </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Home
