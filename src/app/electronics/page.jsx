import React from "react";

import products from "/public/electronic.json";
import ElectronicProductsCard from "./cardOfElectricProducts/page";

export const metadata = {
title: "Best Electronics & Gadgets | Amaali",
description:
"Discover useful electronics, smart gadgets, headphones, TVs, keyboards, speakers, chargers, cameras, and more with Amaali.",
};

const Electronics = () => {
return ( <main className="min-h-screen bg-[#FFFDF8] px-4 py-8 sm:px-6 lg:px-8"> <div className="mx-auto w-full max-w-[1580px]">


            {/* =====================================================
                HEADER
            ===================================================== */}
            <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#EB4124]">
                    Amaali Picks
                </p>

                <div className="mt-1 flex items-end justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black tracking-[-0.04em] text-[#302F2F] sm:text-3xl">
                            Electronics
                        </h1>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#302F2F]/50">
                            Discover useful electronics and smart gadgets
                            worth checking out.
                        </p>
                    </div>

                    <span className="shrink-0 text-xs text-[#302F2F]/40">
                        {products.length} products
                    </span>
                </div>
            </div>

            {/* =====================================================
                PRODUCTS
            ===================================================== */}
            {products.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {products.map((product) => (
                        <ElectronicProductsCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex min-h-[300px] items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-lg font-bold text-[#302F2F]">
                            No products found
                        </h2>

                        <p className="mt-2 text-sm text-[#302F2F]/50">
                            There are currently no electronics products
                            available.
                        </p>
                    </div>
                </div>
            )}
        </div>
    </main>
);


};

export default Electronics;
