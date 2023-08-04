import { Link } from "react-router-dom";

export default function EmptyPage(){
    return(
        <>
        <h2>Page not found</h2>
        <Link to="/">Go back</Link>
        </>
    )
}