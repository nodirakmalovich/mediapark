import { Button, Spin } from "antd";
import useProducts from "../hooks/useProducts"
import { useState } from "react";
import ProductsRow from "../components/productsRow/productsRow";

export default function ProductPage() {

    const { singleData, singleloading, singleCategory } = useProducts();
    const [imageCount, setImageCount] = useState(0)

    const anotherImage = (imageIndex) => {
        setImageCount(imageIndex)
    }

    const formatNumber = (number) => {
        return number.toLocaleString('uz-UZ'); // Format number with thousand separators
    };

    const price = singleData?.price || 0;
    const formattedPrice = formatNumber(price * 12650);

    return (
        <div className="container">
            <div className="product_page mt-6">
                {singleloading ? (
                    <Spin spinning={singleloading} className="w-full flex justify-center h-[80vh] items-center" />
                ) : (

                    <div >

                        <h1 className="capitalize  w-[75%] tablet:w-[50%] laptop:w-[100%] text-[24px] text-black font-semibold my-[50px]">
                            {singleCategory} {singleData?.title} - Toshkent shahar
                        </h1>
                        <div className="flex gap-[30px] justify-stretch">

                            <div className="product_images flex flex-wrap w-[100px] ">
                                {singleData?.images?.map((image, index) => {
                                    return (
                                        <img onClick={() => anotherImage(index)} key={index} src={image} alt={singleData.title} className="h-[90px] w-[90px] object-contain  rounded-[10px] p-3  " style={{
                                            border: imageCount === index ? '2px solid red' : '2px solid transparent'
                                        }} />
                                    )
                                })}
                            </div>

                            <img src={singleData?.images[imageCount]} alt="product image" className="w-[490px] h-[490px]" style={{ objectFit: "contain" }} />

                            <div className="product_page_info w-[30%]">
                                <p className="tablet:text-[16px] font-[700] text-black mobileS:text-[14px]">Mahsulot haqida qisqacha</p>
                                <p className="tablet:text-[14px] mt-[10px] text-gray-500 font-[400] mobileS:text-[12px] flex gap-[8px]">
                                    Ishlab chiqaruvchi: ............... {singleData?.brand}
                                </p>

                                <p className="tablet:text-[14px] mt-[10px] text-gray-500 font-[400] mobileS:text-[12px] flex gap-[8px]">
                                    Maxsulot nomi: ............... {singleData?.title}
                                </p>
                                <p className="tablet:text-[14px] mt-[10px] text-gray-500 font-[400] mobileS:text-[12px] flex gap-[8px]">
                                    Ekran kengligi: ............... {singleData?.dimensions.width}
                                </p>
                                <p className="tablet:text-[14px] mt-[10px] text-gray-500 font-[400] mobileS:text-[12px] flex gap-[8px]">
                                    Ekran balandligi: ............... {singleData?.dimensions.height}
                                </p>


                                <br /><br /><br />
                                <p className="tablet:text-[14px] mt-[10px] text-gray-500 font-[400] mobileS:text-[12px] flex gap-[8px]">
                                    Mahsulot haqida: {singleData?.description}
                                </p>

                            </div>

                            <div className="price_card p-[16px] w-[350px] border-[1px] border-gray-500 h-[250px] rounded-[20px]">
                                <p className="product_price text-[14px] font-[700] text-dark">Mahsulot narxi:</p>
                                <p className="text-[22px] font-[700] text-dark my-[30px]">
                                    {formattedPrice} so'm
                                </p>
                                <Button type="primary" className="bg-red-700 hover:!bg-red-600 !w-full">Savatchaga</Button>
                                <Button type="primary" className="bg-gray-300 hover:!bg-gray-200 mt-[30px] !w-full">Bir klikda sotib olish</Button>
                            </div>
                        </div>


                    </div>

                )}


            </div>

            <ProductsRow />
        </div>
    )
}