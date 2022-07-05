import React, { useEffect } from "react";
import { Wrapper } from "./style";
import { Link } from "react-router-dom";
import Swiper from "swiper";

export default function Banners() {
  useEffect(() => {
    new Swiper(".btn-banners", {
      loop: true,
      // autoplay: true,
      autoplay: { disableOnInteraction: false },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);

  return (
    <Wrapper>
      <div className="btn-banners swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Link to="/lol">
              <img
                src="https://game.gtimg.cn/images/daojushop/uploads/ad/202206/20220624113503_254960.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="swiper-slide">
            <Link to="/lol">
              <img
                src="https://game.gtimg.cn/images/daojushop/uploads/ad/202206/20220610102334_849392.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="swiper-slide">
            <Link to="/lol">
              <img
                src="https://game.gtimg.cn/images/daojushop/uploads/ad/202206/20220610110952_781001.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="swiper-slide">
            <Link to="/lol">
              <img
                src="https://game.gtimg.cn/images/daojushop/uploads/ad/202206/20220622143800_528795.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="swiper-slide">
            <Link to="/lol">
              <img
                src="https://game.gtimg.cn/images/daojushop/uploads/ad/202206/20220627010127_701077.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Wrapper>
  );
}
