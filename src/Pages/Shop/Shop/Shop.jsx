import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover'; 
import { useState } from 'react';
import useProduct from '../../../hooks/useProduct'; 
import ShopTab from '../ShopTab/ShopTab';
import { useParams } from 'react-router-dom';

const Shop = () => {
    const categories = ['dates', 'peanuts', 'seeds', 'dates', 'dates', 'dates', 'dates']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [products] = useProduct();  


    const dates = products.filter(item => item.category === 'dates')
    const peanuts = products.filter(item => item.category === 'peanuts')
    const seeds = products.filter(item => item.category === 'seeds')


    return (
        <div>
            <Helmet>
                <title>Shop | Khejur BD</title>
            </Helmet>
            
            <Cover
            img={'https://www.khejurbd.net/images/cover-img/datesNwalnut.webp'}
            title='Our Shop'
            ></Cover>

<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className='container mx-auto mt-6'>
                <div className="flex rounded-md shadow-md">
                    <Tab className="flex-grow p-2 text-gray-700 bg-white transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white ">Dates</Tab>
                    <Tab className="flex-grow p-2 text-gray-700 bg-white  border-l-2  transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white ">Peanuts</Tab>
                    <Tab className="flex-grow p-2 text-gray-700 bg-white  border-l-2  transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white ">Seeds</Tab>
                    <Tab className="flex-grow p-2 text-gray-700 bg-white  border-l-2  transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white ">Organic Goods</Tab>
                    <Tab className="flex-grow p-2 text-gray-700 bg-white  border-l-2  transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white ">Oils</Tab>
                    <Tab className="flex-grow p-2 text-gray-700 bg-white  border-l-2  transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white ">Spices & Herbs</Tab>
                </div>
            </TabList>
            <TabPanel><ShopTab items={dates}></ShopTab></TabPanel>
            <TabPanel><ShopTab items={peanuts}></ShopTab></TabPanel>
            <TabPanel><ShopTab items={seeds}></ShopTab></TabPanel>
            <TabPanel><ShopTab items={dates}></ShopTab></TabPanel>
            <TabPanel><ShopTab items={dates}></ShopTab></TabPanel>
            <TabPanel><ShopTab items={dates}></ShopTab></TabPanel>
        </Tabs>

        </div>
    );
};

export default Shop;