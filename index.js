const heading = React.createElement("h1", {}, "Hello World!");
console.log(heading);
      
const div2 = React.createElement("div", { id: "child" }, heading);
const div = React.createElement("div", { id: "parent" }, div2);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
