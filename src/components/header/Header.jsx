import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 450,
//   height: 600,
//   bgcolor: "background.paper",
//   border: "none",
//   borderRadius: "15px",
//   boxShadow: 24,
//   p: 4,
// };

const Header = () => {
  const [age, setAge] = useState("");
  const [bgColor, setBgColor] = useState("");
  // const [isVisible, setIsVisible] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setBgColor("active-header");
      // setIsVisible("active");
    } else {
      setBgColor("");
      // setIsVisible("");
    }
  });

  return (
    // <div className={`main ${isVisible}`}>
    <header className={`header ${bgColor}`}>
      <section className="head">
        <div className="header d-flex justify-content-between align-items-center ">
          <div className="logo d-flex align-items-center">
            <Link to="/">
              <img width={160} src="/images/PickBazar.webp" alt="" />
            </Link>
            <div className="select ms-4">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Age</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  style={{ backgroundColor: "#fff" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="search d-none">
              <input
                className="form-control"
                type="text"
                placeholder="Search your products from here"
              />
              <i className="fas fa-search"></i>
            </div>
          </div>
          <nav>
            <ul className="d-flex list-unstyled align-items-center m-0">
              <li>
                <Link to="/shops">Shops</Link>
              </li>
              <li>
                <Link to="/offers">Offers</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {/* <Link to="/">
                <Button className="btnsell">Become a Seller</Button>

              </Link> */}
                <>
                  <Link style={{ padding: "0 10px" }} to={"#"}>
                  </Link>
                  <li>
                    {" "}
                    <button
                      className="btn btn-warning"
                      style={{ color: "#fff" }}
                    >
                      Logout
                    </button>
                  </li>
                </>
            </ul>
          </nav>
        </div>
      </section>
    </header>
    // </div>
  );
};

export default Header;
