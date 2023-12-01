import { Flex, Spinner } from "@chakra-ui/react";

const Loader = () =>{
    return (
        <Flex alignItems='center' justifyContent='center'>
            <Spinner
                thickness = '4px'
                speed = '0.65s'
                emptycolor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Flex>
    );
};

export default Loader;