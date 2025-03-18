import "./App.css";
import PropTypes from "prop-types";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}&lsquo;s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Minestrone Soup",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li style={{ listStyleType: "none" }} key={dish.id}>
          {dish.title}
        </li>
      ))}
    </ul>
  );
}

Main.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function App() {
  return (
    <div>
      <Header name="Jenna" year={2025} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
