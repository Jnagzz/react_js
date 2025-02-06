import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
ReactDOM.createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

// const profile ={
//     name : "Experience",
//     age : "30",
//     address : "123 Main St",
// }; 
// const student = {
// name : "Student",
// age : "30",
// grade : "A",
// };
// function displayinfo(student){
//     return (
//         <div>
//             <h1>student info</h1>
//             <p>name: {student.name}</p>
//             <p>age: {student.age+10}</p>
//             <p>grade: {student.grade}</p>
//         </div>
//     );
// const child = {
//     name: "Child",
//     age: 10,
// }
// function getChild(child){
//     console.log(child);
//     return `${child.name} ${child.age}`;
// };
// const element = <h1>hello, {getChild(child)}!</h1>;
// createRoot(document.getElementById("root")).render(element);
// function Sum(){
//     return <header>Sum</header>
// };
// function App() {
//     return <main>App</main>
// };
// function Footer(){
//     return <footer>Footer</footer>
// };
// ReactDOM.createRoot(document.getElementById("root")).render(
//     <div>
//         <Sum />
//         <App />
//         <Footer />
//     </div>
// )