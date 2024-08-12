import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useProducts() {
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [singleCategory, setSingleCategory] = useState('smartphones');
    const [singleData, setSingleData] = useState(null);
    const [singleloading, setSingleLoading] = useState(false);
    const params = useParams();

    const getProductCategory = () => {
        axios.get('https://dummyjson.com/products/category-list')
            .then(res => {
                setCategory(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching product categories:", error);
                setLoading(false);
            });
    };

    const getProducts = () => {
        setLoading(true);
        axios.get(`https://dummyjson.com/products/category/${singleCategory}`)
            .then(res => {
                setProducts(res.data.products);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    };

    const getSingleProduct = () => {
        if (!params.productId) {
            console.warn("Product ID is missing");
            return;
        }

        setSingleLoading(true);
        axios.get(`https://dummyjson.com/products/${params.productId}`)
            .then(res => {
                setSingleData(res.data);
                setSingleLoading(false);
            })
            .catch(error => {
                console.error("Error fetching single product:", error);
                setSingleLoading(false);
            });
    };

    useEffect(() => {
        getProductCategory();
    }, []);

    useEffect(() => {
        getProducts();

        console.log('product:' + products);
        console.log('single category: ' + singleCategory);
    }, [singleCategory]);

    useEffect(() => {
        getSingleProduct();
    }, [params.productId]);

    return { category, products, loading, singleloading, singleData, singleCategory, setSingleCategory };
}
