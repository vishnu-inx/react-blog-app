import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <section className="relative overflow-hidden py-4 bg-gray-800 border border-t-2">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-4 md:w-1/2 lg:w-5/12">
                        <div className="flex h-24 flex-col justify-between">
                            <div className="mb-2 inline-flex items-center ml-2">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-white text-left mt-6">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3 mt-3 text-base font-semibold uppercase text-white">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        className="text-sm font-medium text-white hover:text-white"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className="text-sm font-medium text-white hover:text-white"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                {/* <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-4 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3 mt-3 text-base font-semibold uppercase text-white">
                                Support
                            </h3>
                            <ul>
                                {/* <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li> */}
                                <li className="mb-2">
                                    <Link
                                        className=" text-sm font-medium text-white hover:text-white"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li className='mb-2'>
                                    <Link
                                        className=" text-sm font-medium text-white hover:text-white"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-4 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3 mt-3  text-base font-semibold uppercase text-white">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        className=" text-sm font-medium text-white hover:text-white"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" text-sm font-medium text-white hover:text-white"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;