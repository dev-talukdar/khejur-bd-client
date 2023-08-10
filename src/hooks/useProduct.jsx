import { useEffect, useState } from "react";



const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [])
    return[products, loading]
}

    export default useProduct;