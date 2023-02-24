import React from "react";
import avatar from "../img/avatar.png";
import Browsepage from "./Browsepage";
import swal from "sweetalert";


const Main = (props) => {
  const Redirect = () => {
    const insideData = document.querySelector(".bg-back3");
    const Browse = document.querySelector(".browse");

    if (window.innerWidth < 620) {
      swal({
        title: "Warning!",
        text: "It's highly recommended to use this website on larger screen (PC/Laptop) for better user experience.",
        icon: "warning",
        button: "Ok!",
      });
      insideData.style.display = "none";
      Browse.style.display = "block";
    } else {
      insideData.style.display = "none";
      Browse.style.display = "block";
    }
  };

  return (
    <>
      <div className="App app2">
        <div className="bg-back2 bg-back3">
          <div className="in-data">
            <p style={{ margin: 0 }} className="watching">
              Who's watching?
            </p>
            <img onClick={Redirect} src={avatar} alt="" className="avatar" />
            <p className="avatar-name">{props.name}</p>
          </div>
        </div>
        <div style={{ display: "none" }} className="browse">
          <Browsepage username={props.name} />
        </div>
      </div>
    </>
  );
};

export default Main;
