import React from "react";
import { useState, useEffect } from "react";

const Userdetails = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      setUsers(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <div className="main-cont">
        {users.map((item, i) => {
          return (
            <>
              <div key={i} item={item}>
                <div className="sub-cont">
                  <div className="category">{item.company.name}</div>
                  <div className="contact">
                    <span id="bold">CONTACT</span>
                    <div>{item.name}</div>
                  </div>
                  <div className="city">
                    <span id="bold">CITY</span>
                    <div>{item.address.city}</div>
                  </div>
                  <div className="State">
                    <span id="bold">STREET</span>
                    <div>{item.address.street}</div>
                  </div>
                  <div>
                    <button className="btn" onClick={() => toggle(i)}>
                      {selected === i ? "Hide Details" : "View Details"}
                    </button>
                  </div>
                </div>
                <div className={selected === i ? "more-details show" : "more-details"}>
                  <div>
                    <h4>Website</h4>
                    <p href="#">{item.website}</p>
                  </div>
                  <div className="columns">
                    <div>
                      <h5>Contact Person</h5>
                      <p>{item.name}</p>
                      <h5>Username</h5>
                      <p>{item.username}</p>
                      <h5>Email</h5>
                      <p>{item.email}</p>
                      <h5>Phone</h5>
                      <p>{item.phone}</p>
                    </div>
                    <div>
                      <h5>Address</h5>
                      <p>
                        {item.address.street}, {item.address.suite},{" "}
                        {item.address.city}, {item.address.zipcode}
                      </p>
                      <h5>City</h5>
                      <p>{item.address.city}</p>
                      <h5>Zip Code</h5>
                      <p>{item.address.zipcode}</p>
                      <h5>Company</h5>
                      <p>{item.company.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Userdetails;
