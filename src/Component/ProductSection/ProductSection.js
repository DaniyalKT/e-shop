import React, { useContext } from "react";
import "./ProductSection.css";
import productsContext from "../../Context/ProductContext";

export default function ProductSection() {
  const contextData = useContext(productsContext);

  const addToCart = (info) => {
    contextData.setIsShowToast(true);
    setTimeout(() => {
      contextData.setIsShowToast(false);
    }, 3000);

    let isInUserCart = contextData.userCart.some(
      (product) => product.title === info.title
    );

    if (!isInUserCart) {
      let newUserCartProduct = {
        id: contextData.userCart.length + 1,
        title: info.title,
        count: 1,
        img: info.img,
        price: info.price,
      };

      contextData.setUserCart((prevCart) => [...prevCart, newUserCartProduct]);
    } else {
      let userCart = [...contextData.userCart];

      let newUserCart = userCart.map((bagProduct) => {
        if (bagProduct.title === info.title) {
          bagProduct.count += 1;
        }
        return bagProduct;
      });
      contextData.setUserCart(newUserCart);
    }
  };

  return (
    <>
      {contextData.allProducts.map((product) => (
        <div className="row justify-content-center mt-5">
          <h3 className="text-center">{product.title}</h3>

          {product.infos.map((info) => (
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5">
              <div className="card py-3 px-3">
                <div className="col-12 text-center img-section">
                  <img
                    src={info.img}
                    alt={info.title}
                    className="card-img-top w-75"
                  />
                </div>

                <div className="card-body text-center">
                  <p className="card-text">{info.title}</p>
                  <div className="price">{info.price}$</div>
                  <br />
                  <a
                    href="javascript:void(0)"
                    className="btn btn-danger"
                    onClick={()=>addToCart(info)}
                  >
                    Add To Card
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark mt-3 text-capitalize"
                  >
                    More Information
                  </a>
                  <p className="number">Number: {info.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
