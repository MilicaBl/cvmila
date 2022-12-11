import { Link } from "react-router-dom"
import "./notFound.css"

export function NotFound() {
    return(
        <div className="notFound">
            <p>Error 404</p>
            <p>Lost?</p>
            <p>There's no place like <Link to="/">home...</Link></p>
        </div>
    )
}