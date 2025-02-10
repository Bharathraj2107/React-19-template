import React, { useState } from 'react'

function Create(props) {
  const[user,setUser]=useState({
    name:"",
    email:"",
    mobile:"",
    dob:"",
    
    address:""

  })
  const [gender ,setGender]=useState('')
  //read handler
  const readInput=(e)=>{
    const { name,value }=e.target //from targetted input read name and value 
    setUser({...user,[name]:value})
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="display-3 text-center">
            create User
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form >
                  <div className="form-group mt-2">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" className="form-control" value={user.name} onChange={readInput} required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" name="email" id="email"className="form-control"  value={user.email} onChange={readInput}required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="mobile">Your mobile</label>
                    <input type="number" name="mobile" id="mobile" className="form-control" value={user.mobile} onChange={readInput} required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" name="dob" id="dob" className="form-control" value={user.dob} onChange={readInput}  required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="gender">Your Gender</label>
                    <div className="form-check">
                         <input type="radio" name="gender" id="gender" value={"male"} className='form-check-input' />
                         <label className="form-check-label">Male</label>
                      </div>
                    <div className="form-check">
                         <input type="radio" name="gender" id="gender" value={"female"} className='form-check-input' />
                         <label className="form-check-label">Female</label>
                      </div>
                    <div className="form-check">
                         <input type="radio" name="gender" id="gender" value={"transgender"} className='form-check-input' />
                         <label className="form-check-label">Transgender</label>
                      </div>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="address">Your Address</label>
                    <textarea name="address" id="address" className='form-control' value={user.address} onChange={readInput} required></textarea>
                  </div>
                  <div className="form-group mt-2">
                    <input type="submit" value="create user" className='btn btn-success' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
