import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover'; 
import { useState } from 'react';
import useProduct from '../../../hooks/useProduct';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [products] = useProduct()

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
                    <Tab className="flex-grow p-2 text-gray-700 bg-white transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white hover:ease-in duration-500 ...">Dates</Tab>
                    <Tab className="flex-grow p-2 text-gray-700 bg-white  border-l-2  transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white hover:ease-in duration-500 ...">Peanuts</Tab>
                    <Tab className="flex-grow p-2 text-gray-700 bg-white  border-l-2  transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white hover:ease-in duration-500 ...">Seeds</Tab>
                    <Tab className="flex-grow p-2 text-gray-700 bg-white  border-l-2  transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white hover:ease-in duration-500 ...">Honey</Tab>
                    <Tab className="flex-grow p-2 text-gray-700 bg-white  border-l-2  transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white hover:ease-in duration-500 ...">Oils</Tab>
                    <Tab className="flex-grow p-2 text-gray-700 bg-white  border-l-2  transition  cursor-pointer uppercase font-medium flex justify-center hover:bg-yellow-600 focus:bg-yellow-600 focus:text-white focus:outline-none hover:text-white hover:ease-in duration-500 ...">Spice</Tab>
                </div>
            </TabList>
            <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 mt-10'>
                {
                    dates.map(item => <ProductCard
                    key={item._id}
                    item={item}
                    ></ProductCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 mt-10'>
                {
                    peanuts.map(item => <ProductCard
                    key={item._id}
                    item={item}
                    ></ProductCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 mt-10'>
                {
                    seeds.map(item => <ProductCard
                    key={item._id}
                    item={item}
                    ></ProductCard>)
                }
                </div>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
        </Tabs>

        </div>
    );
};

export default Shop;