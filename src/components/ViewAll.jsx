import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {

    const [token, setToken] = useState(sessionStorage.getItem("token"))

    const [data, setData] = useState([])



    const fetchData = () => {
        console.log(token)
        axios.post("http://localhost:8000/viewall", {},{
            headers: { "token": token, "Content-Type": "application/json" }
        }).then(
            (response) => {
                console.log(response.data)
                setData(response.data)

            }).catch(
                (error) => {
                    console.log(error)

                }
            )
    }

    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">


                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                        <div class="card mb-3" >
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="https://i.pinimg.com/736x/bd/c0/86/bdc086caa3a6b3e5dcd41d95b02f4cd4.jpg" class="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.Message}</h5>
                                                        <p class="card-text">posted on {value.postedDate}</p>
                                                        
                                                    </div>



                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }

                            )}








                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default ViewAll