
import React from "react";
import "./login.css";
import { useState } from "react";

function Login() {
  const color = {
    color: "black",
    fontSize:"18px"
  }
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  let name, value;

  const getData = (event) => {
    event.preventDefault();
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const dataStore = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, message } = user;
    if (name && email && phone && address && message) {
      await fetch(
        "https://react-vj-default-rtdb.firebaseio.com/mydatabase.json",
        {
          method: "POST",
          header: "Content-Type: application/json",
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );
      if (dataStore) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        alert("Successfully submited");
      }
    }
    else {
    alert("Please fill the complete form");
  }

  }
  return (
    <div className="form">
       <img className="loggg" src="img32.png" alt="fuck"/> 
      <form className="formclass" method="POST">
        <div className="mform">
          <h1 style={{ color: "brown", alignItems: "center" }}>
                        Register Yourself
          </h1>
         
            <br />

            <div className="frm">
            
                <label style={color} htmlFor="Name">
                  Name
                
                  
                </label>
              <div style={color} className="item">
                <input
                  type="text"
                  name="name"
                  id="Name"
                  placeholder="Enter your name"
                  value={user.name}
                  onChange={getData}
                  autoComplete="off"
                />
              </div>
              <br />
              <label style={color} htmlFor="email">
                Email 
                <i className="fa fa-at"/>
              </label>
              <div className="item">
                <input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={getData}
                  autoComplete="off"
                />
              </div>
              <br />
              <label style={color} htmlFor="Phone">
                Contact 
                <i class="fa fa-phone"/>
              </label>
              <div className="item">
                <input
                  type="phone"
                  name="phone"
                  id="Phone"
                  placeholder="Enter your contact number"
                  value={user.phone}
                  onChange={getData}
                  autoComplete="off"
                />
              </div>
              <br />
              <label style={color} htmlFor="Address">
                Address 
                <i class="fa fa-commenting"/>
              </label>
              <div className="item">
                
                <input
                  type="text"
                  name="address"
                  id="Address"
                  placeholder="Address"
                  value={user.address}
                  onChange={getData}
                  autoComplete="off"
                />
              </div>
              <br />
              <label style={color} htmlFor="About">
                Message 
                
              </label>
              <div className="item">
                <textarea
                  className="text"
                  name="message"
                  id="About"
                  placeholder="Your feedback"
                  value={user.message}
                  onChange={getData}
                  autoComplete="off"
                ></textarea>
              </div>
              <button className="btn" onClick={dataStore}>
                Register
              </button>
            </div>
         
        </div>
      </form>
    </div>
  );
}
export { Login }