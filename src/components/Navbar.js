import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="bg-red-500 text-white p-4">
                <div className="container mx-5 flex gap-10 ">
                    <Link to="/" className="text-lg font-semibold hover:text-gray-300">Products</Link>
                    <Link to="/Cart" className="text-lg font-semibold hover:text-gray-300">Cart</Link>
                </div>
            </nav>
        </>

    )
}

export default Navbar ;