import React from 'react'
import { NavLink} from 'react-router-dom'
export default function Menu() {
  return (
    <div className="navbar navbar-expand-md navbar-md navbar-dark bg-success">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">ReactCRUD</NavLink>
            <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="menu">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink to={'/'} className="nav-link">Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/create'} className="nav-link">Create User</NavLink>
                    </li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}
