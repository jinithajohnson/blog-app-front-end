import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const CreatePost = () => {

    const [token,setToken]=useState(sessionStorage.getItem("token"))

const [data,changeData]=useState(
    {"Message":"","userId":sessionStorage.getItem("userId")}
)

const inputHandler=(event)=>{
    changeData({...data,[event.target.name]:event.target.value})
}

const readValues=()=>{
    console.log(data);
    console.log(token);
    axios.post("http://localhost:8000/create",data, {
        headers: {"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
    }).then(
        (response)=>{
                console.log(response.data)


            if(response.data.status=="success") {
                alert("posted Successfully")
            }
            else{
                alert("Posting went wrong")
            }

        }
    ).catch(
        (error)=>{
            console.log(error.message)
            alert(error.message)
        }
    )

}



  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3 col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Post a message</label>
                    <textarea name="Message"  className="form-control" value={data.Message} onChange={inputHandler}></textarea>

                </div>

            
                    <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>Post</button>
                    </div>
                

                </div>
            </div>
        </div>




    </div>
  )
}

export default CreatePost