import { Button, Input, Space } from "antd";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrCube } from "react-icons/gr";
import { PiScales } from "react-icons/pi";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import CategoryList from "../categoryList/categoryList";



const { Search } = Input;

export default function Navbar() {

    const navbarMenu = ["Yuridik shaxslar uchun", "Yetkazib berish", "Doʻkonlar", "Biz bilan bogʻlaning!"]


    return (
        <div className="navbar pt-5">
            <div className="container">
                <div className="navbar_top flex justify-between">
                    <div className="flex items-center justify-start gap-[24px] relative">
                        <a className="flex gap-2 items-center  text-[12px] font-[400] text-gray-500  hover:text-black stroke-gray hover:stroke-dark" href="tel:+998712033333">
                            <FiPhone />
                            +998 71 203 33 33
                        </a>
                        <button aria-label="language-button" className="text-[12px] font-[400] text-gray-400  hover:text-black stroke-gray hover:stroke-dark flex items-center gap-[4px]">
                            <GrLocation />
                            Ташкент
                        </button>
                    </div>

                    <ul className="navbar_top_menu flex gap-5">
                        <li className="navbar_top_menu_item">
                            <a className="text-[12px] font-[400] text-gray-500  hover:text-black stroke-gray hover:stroke-dark" href="#">Biz haqimizda</a>
                        </li>
                        <Button type="primary" className="bg-red-700 hover:!bg-red-600">MediaClub</Button>
                        <Button type="primary" className="bg-blue-950 hover:!bg-blue-800">Mediablog <MdArrowOutward /></Button>
                        {
                            navbarMenu.map((menu, index) => {
                                return (
                                    <li key={index} className="navbar_top_menu_item">
                                        <a className="text-[12px] font-[400] text-gray-500  hover:text-black stroke-gray hover:stroke-dark" href="#">
                                            {menu}
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>

                </div>

                <div className="navbar_bottom flex gap-4 items-center justify-between mt-2">
                    <Link to={"/"}>
                        <img className="w-[155px] h-[65px]" src="https://mediapark.uz/svg/logo.svg" alt="mediapark" />
                    </Link>
                    <Button size="large" type="primary" className="bg-red-700 hover:!bg-red-600" >
                        <HiMenuAlt3 /> Katalog
                    </Button>
                    <Search

                        placeholder="Mahsulotlarni qidirish"
                        allowClear
                        style={{ width: "40%" }}
                        size="large"
                    />

                    <a className="flex flex-col items-center !text-[14px] !text-dark !font-[500] gap-[7px] svg-primary-blue relative" href="#">
                        <GrCube size={"25px"} />
                        <p>Buyurtma holati</p>
                    </a>

                    <a className="flex flex-col items-center !text-[14px] !text-dark !font-[500] gap-[7px] svg-primary-blue relative" href="#">
                        <PiScales size={"25px"} />
                        <p>Taqqoslash</p>
                    </a>

                    <a className="flex flex-col items-center !text-[14px] !text-dark !font-[500] gap-[7px] svg-primary-blue relative" href="#">
                        <SlBasket size={"25px"} />
                        <p>Savatcha</p>
                    </a>

                    <a className="flex flex-col items-center !text-[14px] !text-dark !font-[500] gap-[7px] svg-primary-blue relative" href="#">
                        <CiHeart size={"25px"} />
                        <p>Saralanganlar</p>
                    </a>

                    <a className="flex flex-col items-center !text-[14px] !text-dark !font-[500] gap-[7px] svg-primary-blue relative" href="#">
                        <RiUserLine size={"25px"} />
                        <p>Kirish</p>
                    </a>
                </div>

                <CategoryList />
            </div>
        </div>
    )
}

