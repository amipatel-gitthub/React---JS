import React, { useState } from "react";
import "./TourCards.css";

const TourCards = () => {
  const [tours, setTours] = useState([
    {
      sno: "AA001",
      name: "Paris",
      imageUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/74/aa/fc.jpg",

      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolor excepturi, nobis quas recusandae repellendus veritatis.Alias amet, aut excepturi explicabo facilis reiciendis sed veniam vero! Dolorem fuga natus quis sit?",
    },
    {
      sno: "AA002",
      name: "Singapore",
      imageUrl:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3d/9f/2d.jpg",

      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolor excepturi, nobis quas recusandae repellendus veritatis.Alias amet, aut excepturi explicabo facilis reiciendis sed veniam vero! Dolorem fuga natus quis sit?",
    },
    {
      sno: "AA003",
      name: "Malaysia",
      imageUrl:
        "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/9lvjd1p7nnn7ty0r1qya3qkxpmp2_1559499011_shutterstock_421599904.jpg",

      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolor excepturi, nobis quas recusandae repellendus veritatis.Alias amet, aut excepturi explicabo facilis reiciendis sed veniam vero! Dolorem fuga natus quis sit?",
    },
    {
      sno: "AA004",
      name: "Bharat",
      imageUrl:
        "https://www.bespokeindiaholidays.com/wp-content/uploads/2013/05/North-India-Tours.gif",

      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolor excepturi, nobis quas recusandae repellendus veritatis.Alias amet, aut excepturi explicabo facilis reiciendis sed veniam vero! Dolorem fuga natus quis sit?",
    },
  ]);

  return (
    <>
      <div className="container mt-3">
        <div className="row abc">
          {tours.map((value, index) => {
            return(
            <div className="col-sm-3" key={index}>
              <div className="card shadow-lg">
                <img src={value.imageUrl} alt="" className="" height={200} />
                <div className="card-body">
                  <p className="h3">{value.name}</p>
                  <p className="text">{value.text}</p>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </>
  );
};
export default TourCards;
