import { Button, Spin } from "antd";
import useProducts from "../hooks/useProducts";
import { SlBasket } from "react-icons/sl";
import { PiScales } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const { products, loading } = useProducts()


    const router = useNavigate()

    const handleClick = (productId) => {
        router(`/products/${productId}`);
    };

    return (
        <div className="container">
            <div className="hero">
                <h1 className="hero_title tablet:text-[24px] font-[700] text-dark mobileL:text-[18px] text-[16px]">Smartfonlar</h1>
                <div className="hero_row grid grid-cols-6 gap-4 w-full">
                    {loading ? (
                        <Spin spinning={loading} className="w-full flex justify-center h-[80vh] items-center" />
                    ) : (
                        products?.map((product, index) => {
                            return (
                                <div key={index} onClick={() => handleClick(product.id)} className="hero_row_card border-[1px] border-transparent hover:border-gray-400 rounded-[20px] p-4 h-[430px] relative">
                                    <img className="text-center w-full h-[250px]" src={product.images[0]} alt={product.title} />
                                    <p className="text-center">
                                        Brand: {product.brand}, <br />  Model: {product.title}
                                    </p>
                                    <div className="buttons absolute bottom-6 flex gap-[20px] justify-between">
                                        <Button size="large" type="primary" className="bg-red-700 hover:!bg-red-600">
                                            <SlBasket />
                                        </Button>

                                        <Button size="large" type="primary" className="bg-gray-400 hover:!bg-gray-300">
                                            <PiScales />
                                        </Button>

                                        <Button size="large" type="primary" className="bg-gray-400 hover:!bg-gray-300">
                                            <CiHeart />
                                        </Button>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>

            </div>
        </div>
    )
}