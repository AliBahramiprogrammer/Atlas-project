import React from "react";

const Footer = () => {
    return (
        <footer className="border-t-2 border-gray-300 pt-4 px-16 mt-48 w-[95%] mx-auto flex justify-between text-gray-400 text-xs mb-20 ">
            <div className="flex flex-col gap-2">
                <h6 className="text-sm text-gray-500">GET IN TOUCH</h6>
                <p>
                    Sat - Thu 9:30 am to 9:00 pm <br />
                    Fri - 10:30 am to 9:00 pm
                </p>
                <div className="flex gap-1 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                    </svg>
                    <p className="">(021) 88908817</p>
                </div>
                <div className="flex gap-1 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                    </svg>

                    <p>assistant@atlaspood.com</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 ">
                <h6 className="text-sm text-gray-500">CUSTOMER CARE</h6>
                <p>Measure & install</p>
                <p>Track Your Order</p>
                <p>Return Policy</p>
                <p>Shipping Information</p>
            </div>
            <div className="flex flex-col gap-2">
                <h6 className="text-sm text-gray-500">OUR COMPANY</h6>
                <p>About Us</p>
                <p>Store Locations</p>
                <p>Careers</p>
            </div>
            <div className="flex flex-col gap-2">
                <h6 className="text-sm text-gray-500">B2B PROGRAMS</h6>
                <p>Wholesale</p>
                <p>Hospitality</p>
                <p>Trade</p>
            </div>
            <div >
                <h6 className="text-sm text-gray-500">
                    JOIN OUR LIST AND GET 10% OFF YOUR FIRST <br /> PURCHASE!
                </h6>
                <div className="flex gap-2 mt-2 ">
                        <input
                            type="email"
                            id="emailAddress"
                            className="border-2 border-gray-400 p-2 text-gray-300 rounded-sm w-48"
                            placeholder="EMAIL ADDRESS"
                        />
              

                    <button className="p-2 bg-gray-300 border-2 border-gray-500 rounded-sm">SUBMIT</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
