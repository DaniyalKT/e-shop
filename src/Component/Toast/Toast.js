import React, { useContext } from "react";
import productsContext from "../../Context/ProductContext";

export default function Toast() {
  const contextData = useContext(productsContext);
  return (
    <div className="toast-container position-fixed bottom-0 me-4 end-0 mb-4">
      <div
        className={
          contextData.isShowToast
            ? "toast show align-items-center text-white bg-primary"
            : "toast align-items-center text-white bg-primary"
        }
      >
        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn-close btn-close-wsite ms-3"
            onClick={() => {
              contextData.setIsShowToast(false);
            }}
          ></button>
          <div className="toast-body">
            The product has been successfully added to the cart
          </div>
        </div>
      </div>
    </div>
  );
}