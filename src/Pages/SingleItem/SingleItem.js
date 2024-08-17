import "./SingleItem.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BgImg from "../../Assets/Images/single-item-hero.png";
import Pancake from "../../Assets/Images/pancake.png"
import styled from 'styled-components';
import mealsData from "../../Assets/Data/Data";
import MealImg from "../../Assets/Images/meal_img2.jpg"

const BackgroundDiv = styled.div`
  background-image: url(${BgImg});
  background-size: cover;
  background-position: center;
  height: 200px;
  padding-bottom: 40px;
  margin-bottom: 20px;
`;

const SingleItem = () => {
    return (
        <div className="single-item">
            <Header />
            <BackgroundDiv>
                <div className="single-item__content">
                    <h1 className="single-item__title">Single Item</h1>
                </div>
            </BackgroundDiv>
            <section className="single-item__container">
                <div className="single-item__description">
                    <div className="single-item__description__left">
                        <img
                            src={Pancake}
                            alt="Classic Pancakes"
                            className="single-item__image"
                        />
                    </div>

                    <div className="single-item__description__right">
                        <ul className="single-item__ingredients">
                            <h2 className="single-item__type">Breakfast</h2>
                            <li>1 cup all-purpose flour</li>
                            <li>2 tablespoons sugar</li>
                            <li>1 teaspoon baking powder</li>
                            <li>1/2 teaspoon baking soda</li>
                            <li>1/4 teaspoon salt</li>
                            <li>1 cup buttermilk</li>
                            <li>1 egg</li>
                            <li>2 tablespoons melted butter</li>
                            <li>Maple syrup for serving</li>
                        </ul>
                        <button>ORDER NOW</button>
                    </div>
                </div>
            </section>
            <section className="more-items">
                <h1 className="more-items__title">See more items</h1>
                <div className="more-items__catalogue">
                    {mealsData.map(item => (
                        <div key={item.id} className="item">
                            <div className="item__description">
                                <h2 className="item__name">{item.name}</h2>
                                <p>{item.description}</p>
                                <span className="item__price">$120</span>
                            </div>
                            <img src={MealImg} alt={'MealImage'} className="item__image" />
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default SingleItem;
