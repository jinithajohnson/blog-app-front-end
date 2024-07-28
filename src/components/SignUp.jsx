import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [data,changeData] =useState
    (
        {
            "name":"",
            "email":"",
            "password":""
        }

    )

    const inputHandler = (event) => {
        changeData({...data, [event.target.name]:event.target.value})
    }
        
    const readValue = () => {

       let newInput={"name":data.name, "email":data.email,"password":data.password}


        axios.post("http://localhost:8000/signup",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("success")
                    changeData({"name":"","email":"","password":""})

                }
                else {
                    alert("failed")
                    changeData({"name":"","email":"","password":""})
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }

        ).finally()
    }


    return (
    <div>
            <div className="container">
                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>

                            
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">email Id</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="password"  className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>SignUp</button>
                        </div>
                        <div>
                            <a href="/signin" className='btn btn-primary'>Back to sign in</a>
                        </div>
                    </div>

                </div>
            </div>

    </div>
  )
}

export default SignUp