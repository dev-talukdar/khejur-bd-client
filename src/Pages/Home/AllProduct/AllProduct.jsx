import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AllProduct = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
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
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
        </Tabs>

    );
};

export default AllProduct;





