const part=React.createElement("h1",{id:"abc"},"jay sri rama !");

const siblings = React.createElement("div", {id:"parent"},[React.createElement("h1", {id:"child"},"i am h1"),React.createElement("p", {id:"ptag"},"i am p")])
console.log(siblings)
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(siblings)