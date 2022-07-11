import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SIgn_img from "./SIgn_img";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Home = () => {
    let history  = useNavigate();
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

const [data, setData] = useState([]);






  useEffect(() => {
    localStorage.setItem("useryoutube", JSON.stringify(data));
  }, [data]);

  const getdataChange = (e) => {
    const { value, name } = e.target;
    setInpval({ ...inpval, [name]: value });
  };

  const addData = (e) => {
    e.preventDefault();

    let { name, email, date, password } = inpval;

    if (name === "") {
      toast.error(" name field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("date field is requred", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 3) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else if (data) {
      console.log("data added succesfully");
       setData([...data, inpval]);
      
     history("/login")
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Control
                  type="text"
                  name="name"
                  value={inpval.name}
                  onChange={getdataChange}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Control
                  type="email"
                  name="email"
                  value={inpval.email}
                  onChange={getdataChange}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6">
                <Form.Control
                  onChange={getdataChange}
                  name="date"
                  value={inpval.date}
                  type="date"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  value={inpval.password}
                  onChange={getdataChange}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form> 
            <p className="mt-3">
              Already Have an Account{" "}
              <span>
                <NavLink to="/login">SignIn</NavLink>
              </span>{" "}
            </p>
          </div>
          <SIgn_img />
        </section>
        <ToastContainer />
      </div>


     
    </>
  );
};

export default Home;
