import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// eslint-disable-next-line no-unused-vars
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numPizzas > 0 ? (
                <>
                    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from out stone oven, all organi, all delicious.</p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzasObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : null}
        </main>
    );
}

function Pizza({ pizzasObj }) {
    return (
        <li className={`pizza ${pizzasObj.soldOut ? "sold-out" : ""}`} >
            <img src={pizzasObj.photoName} alt="Pizza Spinaci"/>
            <div>
                <h3>{pizzasObj.name}</h3>
                <p>{pizzasObj.ingredients}</p>
                <span>{pizzasObj.soldOut ? "SOLD OUT" : pizzasObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHours = 12;
    const closeHour = 22;
    const isOpen = hour >= openHours || hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />
            ) : <p>We're happy to welcome you between {openHours}.00 and {closeHour}.00.</p>
            }
        </footer>
    );
}

function Order({ openHours, closeHour }) {
    return (
        <div className="order">
            <p>
                We're currently open from {openHours} to {closeHour}:00. Come visit us or order
                online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
