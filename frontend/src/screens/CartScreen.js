import { useParams, useSearchParams } from "react-router-dom";


const CartScreen = () => {
    const { id } = useParams();

    const [searchParams] = useSearchParams();
    let qty = searchParams.get('qty');

    return <div>CartScreen</div>;
};

export default CartScreen;