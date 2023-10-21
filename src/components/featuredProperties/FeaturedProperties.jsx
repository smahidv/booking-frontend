import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_BASE_URL
      : process.env.REACT_APP_PROD_API_BASE_URL;

  const { data, loading, error, reFetch } = useFetch(
    baseUrl,"hotels?featured=true&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {Array.isArray(data) &&
            data.map((item) => (
              <div className="fpItem" key={item._id}>
                <img src={item.photos[0]} alt="" className="fpImg" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Starting from {item.cheapestPrice} Dhs
                </span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
