import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../../ApiServices/ApiServices'

function User() {
  const navigate = useNavigate
  const {register,handleSubmit} = useForm()

  async function saveData(data){
    const resp = await addUser(data)
    if(resp.status===201){
      navigate('#')

    }
  }

  return (
    <>
 
    <div className='container-fluid col-6 bg-light'>
      <br/>
      <center><h2>Let's Get Start</h2></center><br/>
      <form onSubmit={handleSubmit(saveData)}>
        <div>
          <label htmlFor='fn'>First Name</label>
          <input type='text' id='fn' className='form-control' placeholder='e.g. Sixuka Yahoon' {...register('first_name')} ></input>
        </div>
        <br/>
        <div>
          <label htmlFor='ln'>Last Name</label>
          <input type='text' id='ln' className='form-control' {...register('last_name')} />
        </div><br/>
        <div>
          <label htmlFor='dob'>Date Of Birth</label>
          <input type='date' id='dob' className='form-control' {...register('dob')} />
        </div><br/>
        <div>
          <label htmlFor='dob'>Gender</label>
          <select className='form-control' {...register('gender')}>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
          </select>
        </div><br/>
        <div>
          <label htmlFor='mobile'>Mobile</label>
          <input type='text' id='mobile' className='form-control' {...register('mobile')} />
        </div><br/>
        <div>
          <label htmlFor='email'>Email Id</label>
          <input type='email' id='email' className='form-control' {...register('email')} />
          
        </div><br/>
        <div>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' className='form-control' {...register('address')} />
        </div><br/>
        <div>
          <label htmlFor='city'>City Name</label>
          <input type='text' id='city' className='form-control' {...register('city')} />
        </div><br/>
        <div>
          <label htmlFor='state'>State Name</label>
          <input type='text' id='state' className='form-control' {...register('state')} />
        </div><br/>
        <div>
          <label htmlFor='ln'>Country Name</label>
          <input type='text' id='ln' className='form-control' {...register('country')} />
        </div><br/>
        <div>
          <label htmlFor='pin_code'>Pin Code</label>
          <input type='text' id='pin_code' className='form-control' {...register('pin_code')} />
        </div><br/>
        <div>
          <label htmlFor='photo'>Photo</label>
          <input type='file' id='photo' className='form-control' {...register('photo')} />
        </div><br/>
        <div>
          <label htmlFor='signature'>Signature</label>
          <input type='file' id='signature' className='form-control' {...register('signature')} />
        </div>
        <div>
          <label htmlFor='role'></label>
          <input type='hidden' id='role' className='form-control' {...register('role')} />
        </div>
        <div>
          {/* <label htmlFor='ud'>Username</label> */}
          <input type='hidden' id='ud' className='form-control' {...register('username')} />
        </div><br/>
 
        <div>
          <label htmlFor='pw'>Password</label>
          <input type='text' id='pw' className='form-control' {...register('password')} />
        </div><br/>
        <br/>
        <input type='submit' value='ADD'className='btn btn-success col-6'/>
        <input type='reset' value='RESET' className='btn btn-warning col-6'/>
        
        </form>
    </div> 
    
    
    </>
  )
}

export default User