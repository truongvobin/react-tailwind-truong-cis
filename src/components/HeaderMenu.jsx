import { useState, useEffect } from "react";
import { logo,englang,vielang } from "../assets";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import { Link as LinkScroll } from "react-scroll";
import BottomMenuMoblie from "./BottomMenuMoblie";
import ProgressBar from "./ProgressBar";
import React from "react";
const HeaderMenu = () => {
  const completion = ProgressBar();
 
  const [scrollActive, setScrollActive] = useState(false);

  const [activeLink, setActiveLink] = useState(null);
  //====================================================
  //Tự động add shadow khi scroll down
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  //=================================================================================
  return (
    <header
      className={
        "fixed top-0 w-full  z-30 bg-white-500 transition-all bg-white" +
        (scrollActive ? " shadow-md pt-0" : " pt-0  ")
      }
    >
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-gradient-to-r from-green-400 to-green-500 h-1 w-full bottom-0"
      />
      {/* ============================================================================ */}
      {/* DAS DESKTOP MENU */}
      {/* ============================================================================ */}
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-2 sm:py-4 bg-white">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-56 block m-auto" />
        </div>
        <ul className="font-dasfont hidden lg:flex justify-end text-black-500 col-start-8 col-end-10  items-center">
          <LinkScroll
            activeClass="active"
            to="trangchu"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("trangchu");
            }}
            className={
              "py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] animation-hover hover:rounded-full hover:bg-green-100 mr-1.5" +
              (activeLink === "trangchu"
                ? " text-active-click bg-green-100 rounded-full animation-active "
                : " text-black-500 hover:text-green-500 a")
            }
          >
            Trang chủ
          </LinkScroll>
          {/* ============================================================================ */}
          <LinkScroll
            activeClass="active"
            to="gioithieu"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("gioithieu");
            }}
            className={
              "py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] animation-hover hover:rounded-full hover:bg-green-100 mr-1.5" +
              (activeLink === "gioithieu"
                ? " text-active-click bg-green-100 rounded-full animation-active "
                : " text-black-500 hover:text-green-500 a ")
            }
          >
            Giới thiệu
          </LinkScroll>
          {/* ============================================================================ */}
          <LinkScroll
            activeClass="active"
            to="tinhnang"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("tinhnang");
            }}
            className={
              "py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] animation-hover hover:rounded-full hover:bg-green-100 mr-1.5" +
              (activeLink === "tinhnang"
                ? " text-active-click bg-green-100 rounded-full animation-active "
                : " text-black-500 hover:text-green-500 a ")
            }
          >
            Tính năng
          </LinkScroll>
          {/* ============================================================================ */}
          <LinkScroll
            activeClass="active"
            to="banggia"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("banggia");
            }}
            className={
              "py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] animation-hover hover:rounded-full hover:bg-green-100 mr-1.5" +
              (activeLink === "banggia"
                ? " text-active-click bg-green-100 rounded-full animation-active "
                : " text-black-500 hover:text-green-500 a ")
            }
          >
            Bảng phí
          </LinkScroll>
          {/* ============================================================================ */}
          <LinkScroll
            activeClass="active"
            to="ungdung"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("ungdung");
            }}
            className={
              "py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] animation-hover hover:rounded-full hover:bg-green-100 mr-1.5" +
              (activeLink === "ungdung"
                ? " text-active-click bg-green-100 rounded-full animation-active "
                : " text-black-500 hover:text-green-500 a ")
            }
          >
            Ứng dụng
          </LinkScroll>
          <LinkScroll className="py-1.5 pl-7 pr-2">
            <ModalRegister>Đăng ký</ModalRegister>
          </LinkScroll>
          <LinkScroll className="py-1.5 px-0">
            <ModalLogin />
          </LinkScroll>
          <LinkScroll className="flex">
             <img src={englang} alt="Logo" className="w-[35px] h-[35px] rounded-lg ml-8 mr-3" />
             <img src={vielang} alt="Logo" className="w-[35px] h-[35px] rounded-lg" />
          </LinkScroll>
        </ul>
      </nav>
      {/* ============================================================================ */}
      {/* END DAS DESKTOP MENU */}
      {/* ============================================================================ */}

      <BottomMenuMoblie />
    </header>
  );
};

export default HeaderMenu;
