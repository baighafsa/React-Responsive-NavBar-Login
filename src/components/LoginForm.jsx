import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './loginStyles.css'
function LoginForm(){
    
  return(
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <div className='login rounded'>
<h1 className='mb-3 head'>login</h1>
<form className='needs-validation'>
<div className='form-group was-validated mb-2'>
    
    <input type="email" className='form-control' required placeholder='Email Address'/>
    <div className="invalid-feedback">
        Please Enter Your Email
    </div>
</div>
<div className='form-group was-validated mb-2'>
    
    <input type="password" className='form-control' required placeholder='Password'/>
    <div className="invalid-feedback">
        Please Enter Your Password
    </div>
</div>
<div className='form-group form-check mb-2 d-flex justify-content-start align-items-center'>
  <input type="checkbox" className='form-check-input'/>
  <label htmlFor="checkbox" className='form-check-label ml-2' id='remeberme'>Remember me</label>
</div>

<button type='submit' className='btn btn-primary  mt-2'>LOG IN</button>
</form>
    </div>
    </div>
  )
}

export default LoginForm