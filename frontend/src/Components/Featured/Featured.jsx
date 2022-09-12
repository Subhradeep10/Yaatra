import React from "react";
import useFetch from "../../Hooks/useFetch";
import "./Featured.css";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://yaatra-backend.herokuapp.com/api/hotels/countbyCity?cities=Kolkata,New Delhi"
  );
  console.log(data);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://i.natgeofe.com/n/0f031e0a-61b8-4bdf-b832-13c703c616f4/79404.jpg?w=636&h=477"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kolkata</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://content.r9cdn.net/rimg/dimg/50/92/cd4e2dcb-city-31288-16561d77fbf.jpg?crop=true&width=1366&height=768&xhint=3359&yhint=1924"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>New Delhi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.tourmyindia.com/states/ladakh/imagess/ladakh-lake-tour1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ladakh</h1>
              <h2>532 properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
