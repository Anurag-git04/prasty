import React,{useState}from 'react'

const SignupForm = () => {
  function changeHandler(){
    return 0;
  }
  const [formData, setformData] = useState({ firstName:"" , password : "" , lastName:"", email:""})
  return (
    <div>
      {/* Student Instructor tab  */}
      <div>
        <button>
          Student
        </button>
        <button>
          Instructor
        </button>
      </div>
      <form>
        <div>
        <label>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                  <input
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                  />
          </label>
          <label>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                  <input
                        required
                        type="text"
                        name="lastname"
                        onChange={changeHandler}
                        placeholder="Enter last Name"
                        value={formData.lastName}
                        className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                  />
          </label>
          <label>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                  <input
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                  />
          </label>
         <div>
          <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email <sup className='text-pink-200'>*</sup></p>
                    <input
                          required
                          type="email"
                          name="emial"
                          onChange={changeHandler}
                          placeholder=" Enter Your Email"
                          value={formData.email}
                          className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
            </label>
         </div>

         <div>
          <label>
                  <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email <sup className='text-pink-200'>*</sup></p>
                      <input
                            required
                            type="email"
                            name="emial"
                            onChange={changeHandler}
                            placeholder=" Enter Your Email"
                            value={formData.email}
                            className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                      />
              </label>
         </div>

        </div>
      </form>
    </div>
  )
}

export default SignupForm