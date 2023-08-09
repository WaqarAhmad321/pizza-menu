import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
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
};


function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
};


function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza pizzasObj= {pizza} key = {pizza.name} />
                ))}
            </ul>
        </main>
    );
};

function Pizza(props) {
    return (
        <li className="pizza">
            <img src={props.pizzasObj.photoName} alt="Pizza Spinaci" className="im" />
            <div>
                <h3>{props.pizzasObj.name}</h3>
                <p>{props.pizzasObj.ingredients}</p>
                <span>{props.pizzasObj.price}</span>
            </div>
        </li>
    );
};

function Footer() {
    // const hour = new Date().toLocaleString();
    // const openHours = 12;
    // const closeHours = 11;
    // const isOpen = (hour >= openHours && hour <= closeHours) ? alert("We're currently open.") : alert("We're currently closed.");
    return (
        <footer className="footer">We're currently open</footer>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);

