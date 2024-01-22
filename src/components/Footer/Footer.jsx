import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <section className="relative overflow-hidden py-4 bg-gray-800 border border-t-2 -z-10">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-4 md:w-1/2 lg:w-5/12">
                        <div className="flex flex-col justify-between h-full footer-logo-wrapper">
                            <div className="footerlogo-image-wrapper mb-2 inline-flex items-center ml-2">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-white text-left mt-6 footer-copyright">
                                    &copy; Copyright {currentYear}. All Rights Reserved.
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
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-4 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3 mt-3 text-base font-semibold uppercase text-white">
                                Support
                            </h3>
                            <ul>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;