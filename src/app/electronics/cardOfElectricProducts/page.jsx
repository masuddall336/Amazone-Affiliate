import React from "react";
import Link from "next/link";

const ElectronicProductsCard = ({ product }) => {
if (!product) return null;


const productSlug =
    product.slug ||
    product.name
        ?.toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_18px_rgba(48,47,47,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(48,47,47,0.13)]">
        {/* =====================================================
            CLICKABLE PRODUCT AREA
        ===================================================== */}
        <Link
            href=''
            className="flex flex-1 flex-col"
            aria-label={`View ${product.name}`}
        >
            {/* Product Image */}
            <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#F8F6F0] p-4">
                {product.featured && (
                    <span className="absolute left-2 top-2 z-10 rounded-full bg-[#EB4124] px-2 py-1 text-[8px] font-bold uppercase tracking-wide text-white">
                        Featured
                    </span>
                )}

                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </div>

            {/* Product Information */}
            <div className="flex flex-1 flex-col p-3">
                {/* Brand */}
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#EB4124]">
                    {product.brand}
                </p>

                {/* Product Name */}
                <h2 className="mt-1 line-clamp-2 min-h-[38px] text-xs font-bold leading-5 text-[#302F2F]">
                    {product.name}
                </h2>

                {/* =================================================
                    MINIMAL REVIEW
                ================================================= */}
                <div className="mt-2 flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[#302F2F]">
                        ★ {product.rating}
                    </span>

                    {product.reviews && (
                        <span className="text-[9px] text-[#302F2F]/35">
                            {Number(product.reviews).toLocaleString()} reviews
                        </span>
                    )}
                </div>

                {/* Short Description */}
                {product.shortDescription && (
                    <p className="mt-2 line-clamp-2 text-[9px] leading-4 text-[#302F2F]/45">
                        {product.shortDescription}
                    </p>
                )}

                {/* Price */}
                <div className="mt-auto pt-3">
                    <span className="text-base font-black text-[#302F2F]">
                        ${Number(product.price).toFixed(2)}
                    </span>

                    <span className="ml-2 text-[8px] font-semibold text-[#302F2F]/35">
                        {product.availability}
                    </span>
                </div>
            </div>
        </Link>

        {/* =====================================================
            AMAZON AFFILIATE BUTTON
            Separate from the product route
        ===================================================== */}
        <div className="px-3 pb-3">
            <a
                href={product.affiliateUrl}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="group/amazon flex h-9 w-full items-center justify-center gap-1.5 rounded-[6px] bg-[#302F2F] px-3 text-[10px] font-bold text-white transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#EB4124] hover:shadow-[3px_3px_8px_rgba(48,47,47,0.18)]"
            >
                <span>View on Amazon</span>

                <span
                    aria-hidden="true"
                    className="text-sm leading-none transition-transform duration-200 group-hover/amazon:translate-x-0.5"
                >
                    →
                </span>
            </a>
        </div>
    </article>
);

};

export default ElectronicProductsCard;
