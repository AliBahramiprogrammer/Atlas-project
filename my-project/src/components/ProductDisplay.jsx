const ProductDisplay = () => {
    return (
        <div
            id="product-display"
            className="flex flex-col lg:flex-row gap-4 mx-28 border-t-[1px] px-10 border-gray-300 "
        >
            <div
                id="product-display-left"
                className="flex gap-6 flex-col-reverse lg:flex-row"
            >
                <div
                    id="product-display-img-list"
                    className="flex flex-row lg:flex-col max-w-24 gap-2 
                    "
                >
                    <img
                        src="./assets/european-flax-linen-curtain-xldarkflax7.jpg"
                        alt=""
                    />
                    <img src="./assets/img7x-darkflax3.jpg" alt="" />
                    <img src="./assets/img7x-darkflax3.jpg" alt="" />
                    <img src="./assets/img7x-darkflax4.jpg" alt="" />
                </div>
                <div id="product-display-img" className="max-w-5xl">
                    <img
                        src="./assets/european-flax-linen-curtain-xldarkflax7.jpg"
                        className="object-cover"
                        alt=""
                    />
                </div>
            </div>
            <div className="product-display-right">
                <p className="text-primary text-xl font-semibold mb-4">
                    LINEN SHEER GROMMET DRAPERY
                </p>
                <span className="text-gray-500 block w-9/10 pb-4 border-b-2">
                    115,000 Tomans
                </span>
                <p className="text-lg text-primary pt-4 pb-2">Color:White</p>
                <div id="image-list" className="flex gap-1 cursor-pointer pb-2">
                    <div
                        id="image"
                        className="w-14 p-1 border-2 border-black rounded-sm"
                    >
                        <img src="./assets/img7x-darkflax2.jpg" alt="" />
                    </div>
                    <div id="image" className="w-14 p-1">
                        <img src="./assets/img7x-darkflax2.jpg" alt="" />
                    </div>
                    <div id="image" className="w-14 p-1">
                        <img src="./assets/img7x-darkflax2.jpg" alt="" />
                    </div>
                    <div id="image" className="w-14 p-1">
                        <img src="./assets/img7x-darkflax2.jpg" alt="" />
                    </div>
                </div>

                <p className="text-base text-primary pb-2">Size:</p>
                <div id="size-list" className="flex gap-2 flex-wrap">
                    <div className="border-2 border-gray-300 whitespace-nowrap py-1 px-2 text-sm">
                        280CM X 300CM
                    </div>
                    <div
                        className="border-2 border-gray-300 whitespace-nowrap py-1 px-2 text-gray-300 text-sm"
                        id="strikethrough"
                    >
                        150CM X 220CM
                    </div>
                    <div
                        className="border-2 border-gray-300 whitespace-nowrap py-1 px-2 text-gray-300  text-sm"
                        id="strikethrough"
                    >
                        150CM X 300CM
                    </div>
                    <div
                        className="border-2 border-gray-300 whitespace-nowrap py-1 px-2 text-gray-300  text-sm"
                        id="strikethrough"
                    >
                        300CM X 300CM
                    </div>
                    <div className="flex w-full gap-2">
                        <img
                            src="./assets/ruler.png"
                            className="w-4 text-u"
                            alt=""
                        />
                        <p className="border-b-[1px] border-black">
                            Measuring Guide
                        </p>
                    </div>
                </div>

                <p className="text-base text-primary pt-2 pb-2">Lining:</p>
                <div id="lining-list" className="flex gap-2">
                    <span className="border-2 border-gray-300 whitespace-nowrap py-1 w-36 text-center text-sm rounded-sm">
                        Standard Lining
                    </span>
                    <span className="border-2 border-gray-300 whitespace-nowrap py-1 w-36 text-center text-sm rounded-sm">
                        Unlined
                    </span>
                </div>
                <p className="text-base text-primary pt-2 pb-2">QTY:</p>
                <div className="flex border-2 p-1 gap-2 font-sans w-24 justify-between font-bold">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14"
                            />
                        </svg>
                    </div>
                    1
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </div>
                </div>

                <button className="my-2 bg-primary w-full p-2 text-white text-sm tracking-normal">
                    ADD TO BAG
                </button>
                <button className="my-2  w-full p-2 border-2 text-gray-500 border-gray-300 text-sm tracking-normal">
                    SAVE TO WISHLIST
                </button>

                <div className="flex border-t-2 border-gray-300 justify-between py-2 text-sm items-center">
                    <div className="">Product Description</div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
                <div className="flex border-t-2 border-gray-300 justify-between py-2 text-sm items-center">
                    <div className="">Dimensions</div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
                <div className="flex border-t-2 border-gray-300 justify-between py-2 text-sm items-center">
                    <div className="">Materials & Care</div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
                <div className="flex border-t-2 border-gray-300 justify-between py-2 text-sm items-center">
                    <div className="">Shipping & Returns</div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
