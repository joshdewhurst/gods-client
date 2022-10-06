import { useParams, Link, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function God () {
    const [god, setGod] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getGod = async () => {
            try {
                const response = await axios.get(`{process.env.REACT_APP_SERVER_URL}/god/${id}`)
                setGod(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getGod()
    }, [])

    const deleteGod = async () => {
        try {
            axios.delete(`${process.env.REACT_APP_SERVER_URL}/god/${id}`)
            navigate('/gods')
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }

    return (
        <div>
            <h1>
            God Details
            </h1>
            <p>{errorMessage}</p>

            <div>
                <Link to={`/god/${id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button
            onClick={deleteGod}>
                Delete the God
            </button>
            </div>
            <div>
                <h2>{god.name}</h2>
                <img src={god.img_url} alt={god.name}/>
                <p>God of: {god.godOf}</p>
            </div>

        </div>
    )

}