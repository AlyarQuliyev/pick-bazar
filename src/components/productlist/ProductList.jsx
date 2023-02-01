import React from "react";
import "./ProductList.scss";
import Skeleton from "react-loading-skeleton";

const ProductList = ({ loading, data }) => {
  return (
    <>
      <section id="ProductList">
        <div className="products">
          <div className="row m-0">
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/Apples.webp"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <div className="prices">
                      <del className="text-sm md:text-base text-heading font-semibold m-0 p-0">
                        $200
                      </del>
                      <p className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                        $150
                      </p>
                    </div>
                  </div>
                  <h3 className="title">Apple</h3>

                  <button className="btns">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/BabySpinach.webp"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <div className="prices">
                      <del className="text-sm md:text-base text-heading font-semibold m-0 p-0">
                        $90
                      </del>
                      <p className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                        $80
                      </p>
                    </div>
                  </div>
                  <h3 className="title">Spinach</h3>

                  <button className="btns">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/blueberries.webp"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <div className="prices">
                      <del className="text-sm md:text-base text-heading font-semibold m-0 p-0">
                        $118
                      </del>
                      <p className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                        $90
                      </p>
                    </div>
                  </div>
                  <h3 className="title">Bluberry</h3>

                  <button className="btns">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/BrusselsSprouts.webp"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <div className="prices">
                      <del className="text-sm md:text-base text-heading font-semibold m-0 p-0">
                        $80
                      </del>
                      <p className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                        $60
                      </p>
                    </div>
                  </div>
                  <h3 className="title">Brussel Sprouts</h3>
                  <button className="btns">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/Apples.webp"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <div className="prices">
                      <del className="text-sm md:text-base text-heading font-semibold m-0 p-0">
                        $200
                      </del>
                      <p className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                        $150
                      </p>
                    </div>
                  </div>
                  <h3 className="title">Apple</h3>

                  <button className="btns">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/BabySpinach.webp"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <div className="prices">
                      <del className="text-sm md:text-base text-heading font-semibold m-0 p-0">
                        $90
                      </del>
                      <p className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                        $80
                      </p>
                    </div>
                  </div>
                  <h3 className="title">Spinach</h3>

                  <button className="btns">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/blueberries.webp"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <div className="prices">
                      <del className="text-sm md:text-base text-heading font-semibold m-0 p-0">
                        $118
                      </del>
                      <p className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                        $90
                      </p>
                    </div>
                  </div>
                  <h3 className="title">Bluberry</h3>

                  <button className="btns">Add To Cart</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/BrusselsSprouts.webp"
                  alt=""
                  style={{ height: "100%" }}
                />
                <div className="card-body">
                  <div className="text d-flex align-items-center mb-2">
                    <div className="prices">
                      <del className="text-sm md:text-base text-heading font-semibold m-0 p-0">
                        $80
                      </del>
                      <p className="text-xs md:text-sm text-muted ltr:ml-2 rtl:mr-2">
                        $60
                      </p>
                    </div>
                  </div>
                  <h3 className="title">Brussel Sprouts</h3>
                  <button className="btns">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
