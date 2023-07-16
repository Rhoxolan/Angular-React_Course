import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="btn-group">
                <Link to="/about" className="btn btn-outline-success">About</Link>
                <Link to="/attraction" className="btn btn-outline-success">Most popular attraction</Link>
                <Link to="/attractions" className="btn btn-outline-danger">Other attractions</Link>
                <Link to="/photos" className="btn btn-outline-danger">Photos of the city</Link>
            </div>
            <div className="mt-3">
                <Outlet></Outlet>
            </div>
        </>
    );
}