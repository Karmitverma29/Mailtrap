import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    
  } from '@chakra-ui/react';
  import React from "react";
  // import {Link} from "react-router-dom";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
   function WithSubnavigation() {



    const { isOpen, onToggle } = useDisclosure();
    let data1=localStorage.getItem("login_toggle");
    let data2=JSON.parse(localStorage.getItem("Data"));
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('f9f9f7')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
        <Link href="/"><img style={{height:"60px",width:"100px",borderRadius:"8px"}} src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/></Link>

            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={300}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
          style={{marginRight:"150px"}}
            flex={{ base: 1, md: 0, }}
            justify={'center'}
            direction={'row'}
            spacing={6}>


{
  data1? <> <img style={{height:"30px",width:"30px",borderRadius:"50%",cursor:"pointer"}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAY1BMVEX///8AAAD8/PygoKAEBAQrKyvi4uLe3t68vLyoqKibm5v19fXY2NjBwcHLy8tjY2O0tLQ0NDQdHR13d3dtbW2Pj49QUFBVVVUWFhbr6+t+fn6EhIQNDQ1BQUFGRkZLS0skJCQSLTsuAAAEbUlEQVR4nO2aaZOjIBCGFe8jXlET42Qn//9XLg0TEznUZMBs1fbzYbdKnPDaQB+A4yAIgiAIgiAIgiAIgiAIgiD/B4T/l+WHxEtTLznk2WcF3QmLrndn9F0RflAQWKo61qDEnwtz62P1OVnR8UmJ3wRB8yzvGJFPqArb891MZRoXeR5FeV7Eaen+2O/c7j+WYcttcmu9QWwbvLbhra3UZpeETSn3K4nU7VHyxV4Ikh1FRSe+5Iqllwq+QE8a4aYhTh6wDuMVF5XF3GD5Pro81ltHnNWVRjr2qreHqgR6auJtL8ds7ifrX/BbLmxWid2Eh668XsvuIPoE0oOzuNjVRLitjsKsGsZ68u+j4BOy4w728sBPjs6sE+LNI483a3ScEexldX7l0O0ofPhJCIjuad5ORnhocT1G4BmOc1tlf0RVrvtHGGQYx8Ce/wK79EKXrayKBp35O1kv29AUMN19txFGMFapoq5W+NuG/qmlODTUcn/Zt1rWt2BTUB/Yidst/eJOeFapVbmumAZ29I+FoTVDCL2J3qfXyeqFFwk8NJ9/EdLKQ8g7U+FLHxDLK8EE+RlWodBZLmXxkyzRT8FqPJt3XuB7pPxKsw5dhWGdwmU+zzD0R7+kh9oZL895x4F81bSqSul4XrEWc3uV4ZBNx7CRw0ehlyUn1FFjfBTDWrmOtCtRdiUOi1O1WR8BZlHlJjedqkbxsqc04m+ApFwVOzydLNU3DPS5GCZ+R69ZRVGgVqVOY1zZ+/8O+oOlsiFROVRdtlBqPu5dMvp7qbpJaa5A/W5Km0zuf0GyrCnBhqus6qpJYcDNmYw/h4U1FMqydF4A1vPBoCxahvnaz8wuc1EX7Tjlvms0R6V+oFmwflw/RNUL9XbemK3808XKhTr0vCtP1+up7BbdJbgTzcoxLGuKMSQbhikd08Rj07IWBnEoRAvRB5rZZXoQ9VM+Af/fPpIrUkFy3asntukpr3EQ2SMNDEavqtLx4VwrhcVMOwi1Ox00RSLnW/appt2pMvgkS6IAabxMBx9VqNbmNA/E6W06VCsSm1Y+UhHwpYTWNZ3YSGlgt24rYDby5tPAedJMtqpiO4cT5pNmocQoVkdwGscnHeZLjHlBFmpSZRXBJMR8QUbm5Wu5zVacaQXbKF+fi/3Ddk3A3a/bKPaftkYyaWt5xVzcQHa2RmAj6cRc9MLGgxoWtixtJDnTtpt2B1DH6f4xLTF/lnHfpFSUFGuE1jYpHW6ujsfbF0l5VLCypfuzAU7K12WVBIawtnRwDY7nFtarKiTq8GbvuIAfrpxf8KR3fLqKbR2uOKxyeUMUE2bzKIof3L2H1YN07z1z+UbLQwmynsCr8Wwfol9et5f1I/Q37bXLjZYNJc+cXa5nTJdZNrLXZZbp6s8m9rr6w0g2GmzXi1KUQXmiL7L3tTIyu4Sn4H4Jb//7gSQ/6kQBH7qyyPi54Mms5k//uHX7uQuenH/uOiygvTz8uQFEEARBEARBEARBEARBEARB9uUvqDUosx1Z9dQAAAAASUVORK5CYII=' alt='profile'/>        <h1 style={{cursor:"pointer"}}>{data2.email}</h1>    </>  :<>
  
  <Button
            style={{border:"1px solid #1a2e44",width:"77px",color:"#1a2e44"}}
              as={'a'}
              fontSize={'sm'}
              fontWeight={600}
              variant={'link'}
              href={'/login'}>
              Log In
            </Button>

            <Link href="/signup">
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}

              color={'#ffffff'}
              bg={"#22d172"}
              // href={'/signup'}
              >
              Sign Up
            </Button>
            </Link>
  
  </>
}
             
            
            
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={700}
                  color={"#243f5c"}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel,logo_img }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{}}>

        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
            <img style={{height:"35px",width:"37px"}} src={logo_img} alt='logo'/>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={""} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
    logo_img?:string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Email Testing',
      children: [
        {
          label: 'QA Automation',
          subLabel: 'Automation for Email Testing',
          href: '/auto',
          logo_img:'https://mailtrap.io/wp-content/uploads/2021/06/qa_automation_icon_menu.svg'
        },
        {
          label: 'HTML Check',
          subLabel: 'Find HTML/CSS Issues',
          href: '#',
          logo_img:'https://mailtrap.io/wp-content/uploads/2021/06/check_html_icon_menu.svg'
        },
        {
            label: 'Fake SMTP Server',
            subLabel: 'Your own SMTP Server',
            href: '#',
            logo_img:'https://mailtrap.io/wp-content/uploads/2021/06/fake_smtp_server_icon_menu.svg'
          },
          {
            label: 'Sandbox API',
            subLabel: 'Integerate with your application.',
            href: '#',
            logo_img:'https://mailtrap.io/wp-content/uploads/2021/06/api_icon_menu.svg'
          },
      ],
    },
    {
      label: 'Email API',
      href:'/email',
      logo_img:'#'
    },
    {
      label: 'Pricing',
      href: '/pricing',
      logo_img:'#'
    },
    {
      label: 'Resources',
      children: [
        {
          label: 'API',
          subLabel: 'Integerate with existing resources.',
          href: '#',
          logo_img:'https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-09.svg'
        },
        {
          label: 'Case Studies',
          subLabel: 'Success stories of our customers',
          href: '/tabs',
          logo_img:'https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-08.svg'
        },
        {
            label: 'Blogs',
            subLabel: 'The best content about emails.',
            href: '/blogs',
            logo_img:'https://mailtrap.io/wp-content/uploads/2022/06/Transactional-Email-Sending_icon-07.svg'
          },
          {
            label: 'Help',
            subLabel: "How-to's and knowledge base",
            href: '#',
            logo_img:'https://mailtrap.io/wp-content/uploads/2022/03/Transactional-Email-Sending_icon-06.svg'
          },
      ],
    },
  ];

  export default WithSubnavigation;