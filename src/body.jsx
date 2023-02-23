import { Finder } from "./finder"
import { Vehicle } from "./vehicles"
import "./body.css"
import { Link } from "react-router-dom"
export function Body() {
    return (
        <>
            <section className="body">
                <div className="popup">

                    <h2>Find the Perfect</h2>
                    <h1>Battery within Seconds</h1>
                    <p>KNOW MORE ABOUT YOUR BATTERY</p>
                    <Link to="/products"><button>SHOP NOW</button></Link>
                </div>
            </section>
            <Vehicle />
            <Finder />
        </>
    )

}

