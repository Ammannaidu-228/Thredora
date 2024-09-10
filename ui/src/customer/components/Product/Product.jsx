
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FilterAltTwoToneIcon from '@mui/icons-material/FilterAltTwoTone';
import Navbar from '../Navbar/Navbar';
import {
    Dialog,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { menPants } from '../../../Data/pants/menPants';
import ProductCard from './ProductCard/ProductCard';

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
];

const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
    {
        id: 'Price',
        name: 'Price',
        options: [
            { value: '2l', label: '₹100 - ₹300', checked: false },
            { value: '6l', label: '₹300 - ₹500', checked: false },
            { value: '12l', label: '₹500 - ₹800', checked: false },
            { value: '18l', label: '₹800 - ₹1000', checked: false },
            { value: '20l', label: '₹1000 - ₹1500', checked: false },
            { value: '40l', label: '₹1500 Above', checked: true },
        ],
    },
    {
        id: 'Discount',
        name: 'Discount',
        options: [
            { value: '10', label: '0 - 10%', checked: false },
            { value: '20', label: '10 - 20%', checked: false },
            { value: '30', label: '20 - 30%', checked: false },
            { value: '50', label: '30 - 50%', checked: false },
            { value: '75', label: '50 - 75%', checked: false },
            { value: '90', label: '75 - 90%', checked: true },
        ],
    },
    {
        id: 'Stock',
        name: 'Availability',
        options: [
            { value: 'in_stock', label: 'In Stock', checked: false },
            { value: 'out_of_stock', label: 'Out Of Stock', checked: false },
        ],
    },
]


// eslint-disable-next-line no-unused-vars
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Product() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(menPants);
    const navigate = useNavigate();
    const location = useLocation();

    // Get active filters from URL
    const getActiveFiltersFromURL = () => {
        const searchParams = new URLSearchParams(location.search);
        const activeFilters = {};
        filters.forEach((filter) => {
            const filterValues = searchParams.get(filter.id);
            if (filterValues) {
                activeFilters[filter.id] = filterValues.split(',');
            }
        });
        return activeFilters;
    };

    // Apply filters to the product list
    const applyFilters = () => {
        const activeFilters = getActiveFiltersFromURL();
        let filtered = menPants;

        Object.keys(activeFilters).forEach((filterId) => {
            const filterValues = activeFilters[filterId];
            filtered = filtered.filter((product) =>
                filterValues.some((value) => product[filterId] === value)
            );
        });

        setFilteredProducts(filtered);
    };

    useEffect(() => {
        applyFilters();
    }, );

    // Handle filter toggle
    const handleFilter = (sectionId, value) => {
        const searchParams = new URLSearchParams(location.search);
        let filterValues = searchParams.get(sectionId) ? searchParams.get(sectionId).split(",") : [];

        if (filterValues.includes(value)) {
            filterValues = filterValues.filter(item => item !== value);
        } else {
            filterValues.push(value);
        }

        if (filterValues.length > 0) {
            searchParams.set(sectionId, filterValues.join(","));
        } else {
            searchParams.delete(sectionId);
        }

        navigate({ search: `?${searchParams.toString()}` });
    };

    return (
        <div className="bg-white">
            <Navbar/>
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} className="relative z-40 lg:hidden">
                    <div className="fixed inset-0 z-40 flex">
                        <Dialog.Panel className="relative ml-auto h-full w-full max-w-xs bg-white py-4 pb-12 shadow-xl">
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button onClick={() => setMobileFiltersOpen(false)} className="p-2">
                                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                {filters.map((section) => (
                                    <Disclosure key={section.id} className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="flow-root">
                                            <DisclosureButton className="flex w-full justify-between py-3 text-gray-400">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6">
                                                    <PlusIcon className="h-5 w-5 group-data-[open]:hidden" />
                                                    <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            onChange={() => handleFilter(section.id, option.value)}
                                                            defaultChecked={option.checked}
                                                            checked={getActiveFiltersFromURL()[section.id]?.includes(option.value) || false}
                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                            name={`${section.id}[]`}
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded text-indigo-600"
                                                        />
                                                        <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="ml-3 text-gray-500">
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </Dialog.Panel>
                    </div>
                </Dialog>

                <main className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between pb-6 pt-24 border-b border-gray-200">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
                        <div className="flex items-center">
                            <Menu as="div" className="relative">
                                <MenuButton className="inline-flex text-sm text-gray-700 hover:text-gray-900">
                                    Sort <ChevronDownIcon className="h-5 w-5" />
                                </MenuButton>
                                <MenuItems className="absolute right-0 mt-2 w-40 bg-white shadow-2xl">
                                    {sortOptions.map((option) => (
                                        <MenuItem key={option.name}>
                                            <a href={option.href} className="block px-4 py-2 text-sm">
                                                {option.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                            <button className="ml-4 p-2 text-gray-400 lg:hidden" onClick={() => setMobileFiltersOpen(true)}>
                                <FunnelIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <section className="pb-24 pt-6">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-8">
                            <form className="hidden lg:block">
                                <div className="py-7 flex justify-between items-center opacity-80">
                                    <h1 className="text-lg font-semibold">Filters</h1>
                                    <FilterAltTwoToneIcon />
                                </div>
                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                                        <h3 className="flow-root">
                                            <DisclosureButton className="group flex w-full justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6">
                                                    <PlusIcon className="h-5 w-5 group-data-[open]:hidden" />
                                                    <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            onChange={() => handleFilter(section.id, option.value)}
                                                            defaultChecked={option.checked}
                                                            checked={getActiveFiltersFromURL()[section.id]?.includes(option.value) || false}
                                                            id={`filter-${section.id}-${optionIdx}`}
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded text-indigo-600"
                                                        />
                                                        <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm">
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>

                            <div className="lg:col-span-7 w-full">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {filteredProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
