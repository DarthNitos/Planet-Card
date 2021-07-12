import './App.css';

// 1: Create a 'Planet' component that renders a planet card
const Planet = (props) => {
  return (
    <div className="card">
      <div>
      	<img src={props.url} alt={`${props.name}`} />
      </div>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <h3>Planet Profile</h3>
      <ul>
		<li><strong>Diameter:</strong> {props.diameter}</li>
		<li><strong>Moons:</strong> {props.moons}</li>
      </ul>
    </div>
  );
}

// 2: Create a container component that iterates over the planets array 
//    and renders a 'Planet' component for each object in the array 
const Container = (props) => {
	return (
		<div className="container">
			{props.planets.map(planet => 
				<Planet 
				key = {planet.id.toString()}
				url = {planet.url}
				name = {planet.name}
				desc = {planet.desc}
				diameter = {planet.diameter}
				moons = {planet.moons}
				/>
			)}
		</div>
	);
}

export default Container;
