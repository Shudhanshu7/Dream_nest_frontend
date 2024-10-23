import { categories } from "../data";
import "../styles/Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Explore Top Categories</h1>
      <p>
      Explore our diverse selection of home rentals that cater to every lifestyle and need. Experience the warmth and comfort of a true home, settle into the local community, and create lasting memories in the neighborhood you’ve always dreamed of.
      </p>

      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`}>
            <div className="category" key={index}>
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon"><p>{category.label}</p>
                <div className="details"> 
                  <h5>{category.extraText} </h5></div>
                </div>
                
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
