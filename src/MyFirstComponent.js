import "./styles.css";

let person = {
  name: "Ahmed",
  age: "24",
};

const products = [
  { title: "milk", id: 1 },
  { title: "tea", id: 2 },
];

function renderProduct(product) {
  return <li key={product.id}>{product.title}</li>;
}

const listItems = products.map(renderProduct);

function MyFirstComponent() {
  return (
    <div>
      <h1 className={person.name === "Ahmed" ? "user" : "staff"}>
        Hello I'm {person.name}, {person.age} years old
      </h1>
      <button onClick={sayHello}>Say Hello to Ahmed</button>
      <ul>{listItems}</ul>
    </div>
  );
}

function sayHello() {
  alert("Hello Ahmed");
}

export default MyFirstComponent;
