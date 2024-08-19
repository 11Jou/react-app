import "./styles.css";
import { useState } from "react";

function MyFirstComponent() {
  return (
    <div>
      <MyInput></MyInput>
    </div>
  );
}

function MyInput() {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const bodyParm = {
            name: name,
            email: email
          }

          console.log(bodyParm)
        }}
      >
        <label>Enter Name : </label>
        <input
          value={name}
          onChange={(event) => setname(event.target.value)}
        ></input>
        <br></br>
        <label>Enter Email : </label>
        <input
          value={email}
          onChange={(event) => setemail(event.target.value)}
        ></input>
        <br></br>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default MyFirstComponent;
