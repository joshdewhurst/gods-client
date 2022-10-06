import { Link } from "react-router-dom";

export default function Nav () {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/god'>See All Gods</Link>
            <Link to='/god/new'>Add a New God</Link>
        </nav>
    )
}