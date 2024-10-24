"use client"
import React from 'react';

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button';
const ProductGrid = ({ products }: any) => {

    const router = useRouter();

    const handleClick = (productId: number) => {
        router.push(`/Product/${productId}`);
    };

    return (
        <div className="text-center p-10">
            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-8 gap-x-14 mt-10 mb-5"
            >
                {products.map((product: any, index: any) => (
                    <div
                        key={index}
                        className="bg-white relative h-120 shadow-lg rounded-xl duration-500 hover:scale-105 hover:shadow-xl overflow-hidden mb-8"
                    >
                        {product.isComingSoon && (
                            <span className="absolute top-0 left-0 bg-red-500 text-white py-1 px-2 uppercase text-xs">
                                Coming Soon
                            </span>
                        )}
                        <div className="flex flex-col h-full">
                            <img
                                src={product.logo}
                                alt="Product Logo"
                                className="h-32 w-32 mx-auto mt-3 mb-3 object-cover max-w-20 max-h-20 rounded-full"
                            />
                            <div className="px-4 py-3 w-full flex-1">
                                <p className="text-lg font-bold text-blue-500 hover:text-blue-700 mb-4">
                                    {product.productName}
                                </p>
                                <p className="text-sm text-gray-700 mb-8">{product.description}</p>
                                <div className="flex items-center justify-center mb-8">
                                    {/* <button
                                        className={`${!product.isComingSoon ? "bg-blue-500" : "bg-gray-300"} text-white px-6 py-2 rounded-sm transition-all duration-300 transform hover:scale-105`}
                                        onClick={() => handleClick(product.id)}
                                        disabled={product.isComingSoon}
                                    >
                                        View More
                                    </button> */}
                                    <Button
                                        className="bg-blue-500 text-white px-6 py-2 rounded-sm transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white "
                                        variant="outline"
                                        disabled={product.isComingSoon}
                                        onClick={() => handleClick(product.id)}
                                    >
                                        View More
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default ProductGrid;
