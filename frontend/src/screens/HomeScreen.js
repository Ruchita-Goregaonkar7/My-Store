import { Grid, Heading } from "@chakra-ui/react";
import ProductCard from '../components/ProductCard';
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) =>state.productList);
    const {loading, error, products} = productList;

    useEffect(() => {
        dispatch(listProducts()); 
    }, [dispatch]);

    return (
        <>
            <Heading as='h2' mb='8' fontSize='xl'>
                Latest Products
            </Heading>
            {loading ?(
                <p>Loading...</p>
            ): error ? (
                <p>{error}</p>
            ): (
                <Grid templateColumns='1fr 1fr 1fr 1fr' gap='8'>
                    {products.map((prod)=>(
                        <ProductCard key= {prod._id} product={prod}/> 
                    ))}
                </Grid>
            )}
        </>
    );
};

export default HomeScreen;