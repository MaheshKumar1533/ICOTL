import { Link } from "react-router-dom"
import "./home.css"

const Home = () => {
    return (
		<div className="hero">
			<h1>ICOTL - 2k26</h1>
			<h2>
				International Conference on Optimization Techniques for Learning
			</h2>
			<Link to={"/2k23"} target="_blank">Go to ICOTL - 2k23</Link>
		</div>
	);
}

export { Home };