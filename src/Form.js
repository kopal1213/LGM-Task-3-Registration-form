import "./App.css";
import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [degreeProgram, setDegreeProgram] = useState("");
  const [agree, setAgree] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    if (!agree) {
      alert("Terms and Conditions not checked");
    } else {
      const data = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        degreeProgram: degreeProgram,
      };
      console.log(data);
      props.addData(data);
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setDegreeProgram("");
    }
  };
  return (
    <div className="form">
      <h1>Registration Form</h1>
      <form className="form-data" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />{" "}
        <br />
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          name="degreeProgram"
          id="degreeProgram"
          placeholder="Degree Program"
          value={degreeProgram}
          onChange={(event) => setDegreeProgram(event.target.value)}
        />{" "}
        <br />
        <div>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            onChange={() => {
              setAgree(!agree);
            }}
          />
          <label htmlFor="agree">
            {" "}
            Do you agree to our Terms and Conditions
          </label>
        </div>
        <br></br>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Form;
