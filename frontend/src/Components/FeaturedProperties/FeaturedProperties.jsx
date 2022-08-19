import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/48254908.jpg?k=ce6fb7f862332a9baf41424b06770027cdc104b3201dacf9fd20a7bbf6df295c&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Leela Place Bangalore</span>
        <span className="fpCity">Bangalore</span>
        <span className="fpPrice">Starting from ₹ 15,225</span>
        <div className="fpRating">
          <button>9.1</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/349254036.jpg?k=1c7585583be05415271c22321d53bec613a9c34e4f77bbe3440b07e42138c474&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Novotel New Delhi Aerocity</span>
        <span className="fpCity">New Delhi</span>
        <span className="fpPrice">Starting from ₹ 7,000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/245808341.jpg?k=57fef6b798961a8a3837577547a89f70c8555bcc7a1c3da049ac52be240dde6d&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Citadines OMR Chennai</span>
        <span className="fpCity">Chennai</span>
        <span className="fpPrice">Starting from ₹ 4,250</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/341916391.jpg?k=34622853ce79c8eccba10aaa65a70c09964c21da97c99a50ba3036f971a93a39&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hyatt Regency Kolkata</span>
        <span className="fpCity">Kolkata</span>
        <span className="fpPrice">Starting from ₹ 5,000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
