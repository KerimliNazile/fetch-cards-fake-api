import React, { useEffect, useState } from 'react'
import Cards from '../Cards';
import axios from 'axios'
function Products() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const getProducts = async () => {
        const res = await axios.get("http://localhost:3000/products");
        setData(res.data);
        setIsLoading(false);
    };
    useEffect(() => {


        getProducts();
    }, []);

    return (
        <div>
            <h1>Fake Api</h1>
            {isLoading ? (
                <h1>Loading...</h1>

            ) : (
                data.map((x) => (
                    <Cards {...x} />
                ))
            )}

        </div>
    );
}

export default Products;

