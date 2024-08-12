import './categoryList.css'
import useProducts from "../../hooks/useProducts";

export default function CategoryList() {
    const { category, setSingleCategory } = useProducts();

    const changeCategory = (selectedCategory) => {
        setSingleCategory(selectedCategory);
        console.log("Category changed to:", selectedCategory);
    };

    return (
        <div>
            <div className="category flex items-center gap-[24px]">
                {
                    category?.map((item, index) => {
                        return (
                            <p onClick={() => changeCategory(item)} className='text-gray-500 text-[14px] font-[400] hover:text-blue-900 capitalize cursor-pointer' key={index}>
                                {item}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    );
}
