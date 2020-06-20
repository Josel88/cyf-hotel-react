import React from "react";

const TouristInfoCards = () => {
  const touristWebsites = [
    {
      name: "Glasgow",
      url: "https://peoplemakeglasgow.com",
      imageSrc:
        "https://viajarporescocia.com/contenido/uploads/tierras-altas-de-escocia-375x211.jpg"
    },

    {
      name: "Manchester",
      url: "https://visitmanchester.com",
      imageSrc:
        "https://www.aboutmanchester.co.uk/wp-content/uploads/2020/03/manchester-cityscape01.jpg"
    },

    {
      name: "London",
      url: "https://visitlondon.com",
      imageSrc:
        "https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg"
    }
  ];
  return (
    <div>
      {touristWebsites.map(city => {
        return (
          <div className="card">
            <img
              src={city.imageSrc}
              className="card-img-top"
              alt={"image of " + city.name}
            />
            <div className="card-body">
              <a href={city.url} target="_" className="btn btn-primary">
                Go to {city.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
