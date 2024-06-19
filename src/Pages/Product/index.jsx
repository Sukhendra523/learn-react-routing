import { useSearchParams } from "react-router-dom";

const Product = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const updateSearchParams = (newParams) => {

        setSearchParams((prevParams) => ({
            ...Object.fromEntries(prevParams),
            ...newParams
        }))
    }

    const color = searchParams.get('color') || '';
    const size = searchParams.get('size') || '';
    return (
        <div style={{color,fontSize:size+"px"}}>
            <h1>Product Page</h1>
            <h4>Colors</h4>
            <button onClick={() => updateSearchParams({ color: "red" })}>red</button>
            <button onClick={() => updateSearchParams({ color: "green" })}>
                Green
            </button>

            <h4>Size</h4>
            <button onClick={() => updateSearchParams({ size: 10 })}>10</button>
            <button onClick={() => updateSearchParams({ size: 20 })}>20</button>

            <p>Color : {color}</p>
            <p>Size : {size}</p>
            
        </div>
    );
};

export default Product;
