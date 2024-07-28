import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewMyPost = () => {

    const [data, setData] = useState([

    ])

    const [token, setToken] = useState(sessionStorage.getItem("token"))
    const [userId, setserId] = useState(
        { "userId": sessionStorage.getItem("userId") }
    )

    const fetchData = () => {
        axios.post("http://localhost:8000/viewmypost", userId, {
            headers: { "token": token, "Content-Type": "application/json" }
        }).then(
            (response) => {
                console.log(response.data)
                setData(response.data)

            }).catch(
                (error) => {
                    console.log(error)

                })
    }

    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {data.map((value, index) => {
                                return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <div class="card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src="https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/13691038-5aa8-4672-9b95-348c0733cabc/2021/08/11/fe920f8c-3100-4d10-b0bb-b34ae578be07/abf56dbd-8282-4858-a786-fa9e15503e9d.png" class="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.post}</h5>

                                                    <p class="card-text"><small class="text-body-secondary">Posted on {value.postedDate}</small></p>
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

export default ViewMyPost