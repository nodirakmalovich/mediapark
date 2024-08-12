export default function Footer() {
    return (
        <div className="footer bg-blue-950 py-[30px]">
            <div className="container">
                <div className="footer_row flex justify-between  gap-[35px]">
                    <ul>
                        <li className="uppercase  text-white text-[24px] font-[500] leading-[150%]  mb-[10px] ">Mediapark</li>
                        <li className=" text-white laptop:text-[14px] font-[500] leading-[150%] uppercase mb-[10px]">Savollaringiz boʻlsa, javob berishga tayyormiz!</li>
                        <li className=" text-white laptop:text-[14px] font-[500] leading-[150%] uppercase mb-[10px]">+998 71 203 33 33</li>
                        <li className=" text-white laptop:text-[14px] font-[500] leading-[150%] uppercase mb-[10px]">Ish vaqti:</li>
                        <li className=" text-white laptop:text-[14px] font-[500] leading-[150%] uppercase mb-[10px]">Har kuni : 09:00 - 21:00</li>
                    </ul>

                    <div className="pay">
                        <p className="text-white text-[24px] font-[500] leading-[150%]  mb-[10px] w-full">
                            To'lov usullari
                        </p>

                        <div className="pay_buttons grid grid-cols-2 gap-5">
                            <div className="pay_btn cursor-pointer bg-blue-900 rounded-[12px] w-[144px] h-[53px] flex items-center justify-center overflow-hidden p-4">
                                <img style={{ widows: '80px', height: "40px", objectFit: "contain" }} src="https://mediapark.uz/images/humo.svg" alt="" />
                            </div>
                            <div className="pay_btn cursor-pointer bg-blue-900 rounded-[12px] w-[144px] h-[53px] flex items-center justify-center overflow-hidden p-4">
                                <img style={{ widows: '80px', height: "40px", objectFit: "contain" }} src="https://mediapark.uz/images/uzcard.svg" alt="" />
                            </div>
                            <div className="pay_btn cursor-pointer bg-blue-900 rounded-[12px] w-[144px] h-[53px] flex items-center justify-center overflow-hidden p-4">
                                <img src="https://mediapark.uz/svg/click.svg" alt="" />
                            </div>
                            <div className="pay_btn cursor-pointer bg-blue-900 rounded-[12px] w-[144px] h-[53px] flex items-center justify-center overflow-hidden p-4">
                                <img style={{ widows: '80px', height: "40px", objectFit: "contain" }} src="https://mediapark.uz/svg/payme.svg" alt="" />
                            </div>
                            <div className="pay_btn cursor-pointer bg-blue-900 rounded-[12px] w-[144px] h-[53px] flex items-center justify-center overflow-hidden p-4">
                                <img style={{ widows: '80px', height: "40px", objectFit: "contain" }} src="https://mediapark.uz/images/visa.svg" alt="" />
                            </div>
                            <div className="pay_btn cursor-pointer bg-blue-900 rounded-[12px] w-[144px] h-[53px] flex items-center justify-center overflow-hidden p-4">
                                <img style={{ widows: '80px', height: "40px", objectFit: "contain" }} src="https://mediapark.uz/images/mastercard.svg" alt="" />
                            </div>
                        </div>

                    </div>

                    <ul className="info">
                        <li className="text-white text-[24px] font-[500] leading-[150%]  mb-[10px]">Maʼlumot</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Biz haqimizda</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Kafolat</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Aksiya</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Bizning doʻkonlarimiz</li>
                    </ul>


                    <ul className="info">
                        <li className="text-white text-[24px] font-[500] leading-[150%]  mb-[10px]">Xizmatlar</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Xizmatlar</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">To'lov usullari</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Ommaviy to'lovlarda</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Hamkorlik</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Qaytarish tartibi</li>

                    </ul>


                    <ul className="info">
                        <li className="text-white text-[24px] font-[500] leading-[150%]  mb-[10px]">Mizojlar uchun</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Mizojlar uchun</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">
                            Yetkazib berish </li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Biz bilan bogʻlaning!</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Izoh qoldirish</li>
                        <li className="laptop:text-[14px] cursor-pointer font-[400] text-gray-500 hover:text-white stroke-gray hover:stroke-dark">Vakansiyalar</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}