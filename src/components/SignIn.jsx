import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
        const navigate=useNavigate()

    const [data,changeData]=useState(
        { "email":"","password":"" }
    )
        const inputHandler=(event)=>{
            changeData({...data,[event.target.name]:event.target.value})
        }

        const readValue=()=>{
            console.log(data)

            axios.post("http://localhost:8000/signin",data).then(
                (response)=>{
                    console.log(response.data)

                    if(response.data.status=="incorrect password")  {
                        alert("incorrect password")
                    } else if(response.data.status=="invalid emailid") {
                        alert("invalid emailid")
                    } else {

                        let token=response.data.token
                        let userId=response.data.userId
                        
                        console.log(token)
                        console.log(userId)

                        sessionStorage.setItem("userId",userId)
                        sessionStorage.setItem("token",token)

                            navigate("/create")
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

                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">email</label>
                                <input type="text" className="form-control" onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="" id="" className="form-control" onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button  className="btn btn-success" onClick={readValue}>Signin</button>
                                
                            </div>

                            <div >
                                <Link to ="/" className="btn btn-primary">click here for new user</Link>
                            </div>
                            
                       </div>
                </div>

            </div>

    </div>
  )
}

export default SignIn