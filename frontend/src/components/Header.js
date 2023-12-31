import { Box, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { useState } from "react";
import {HiOutlineMenuAlt3, HiShoppingBag, HiUser} from 'react-icons/hi';
import {Link as RouterLink} from 'react-router-dom';
import HeaderMenuItem from './HeaderMenuItem';

const Header = () =>{
      const [show, setShow] = useState(false);
    return(
        <Flex 
            as='header'
            align='center' 
            justifyContent='space-between'
            wrap='wrap'
            py='6'
            px='6'
            bgColor='gray.800'
            w='100%'
            pos='fixed'
            top='0'
            left='0'
            zIndex='9999'>
            <Link as={RouterLink} to='/'>
                <Heading
                    as='h1'
                    color='whiteAlpha.800'
                    fontWeight='bold'
                    size='md'
                    letterSpacing='wide'>
                    RSG Store
                </Heading>
            </Link>
            <Box 
                display={{base:'block', md:'none'}}
                onClick={()=>setShow(!show)}>
                <Icon as ={HiOutlineMenuAlt3} color='white' w='6' h='6'/>
            </Box>
            <Box
                display={{base:show ? 'block':'none', md:'flex'}}
                width={{base:'full', md:'auto'}}
                mt={{base:'3', md:'0'}}>
                <HeaderMenuItem
                    url='/cart'
                    label='Cart'
                    icon={<Icon as ={HiShoppingBag} mr='1' w='4' h='4'/>}
                />  
                <HeaderMenuItem
                    url='/login'
                    label='Login'
                    icon={<Icon as ={HiUser} mr='1' w='4' h='4'/>}
                />  
            </Box>
        </Flex>
    );
};

export default Header;