import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Gods() {

    const [gods, setGods] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const getGods = async () => {
            try {
                const response = axios.get(`${process.env.REACT_APP_SERVER_URL}/god`)
            setGods(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getGods()
    }, [])


    const godLinks = gods.map(god => {
        return (
            <div key={god._id}>
                <Link to={`/god/${god._id}`}>{god.name}</Link>
            </div>
        )
    })

    return (
        <div>
            <h1>
                Welcome to the Gods Api featuring react!
            </h1>
            <p>{errorMessage}</p>

            {godLinks}
        </div>
    )

}