import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import electronics from "/public/electronic.json";
import ElectronicsComments from "@/app/ElectronicsComments/ElectronicsComments";

const DetailsOfElecticProducts = async ({ params }) => {
const { detailsOfElectricProducts } = await params;

const product = electronics.find(
(item) => String(item.id) === String(detailsOfElectricProducts)
);

if (!product) {
notFound();
}

const formattedPrice = new Intl.NumberFormat("en-US", {
style: "currency",
currency: product.currency || "USD",
}).format(product.price);

return ( <main className="min-h-screen bg-[#faf9f6] text-[#302F2F]">
{/* Main Product Section */} <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">


    {/* Back Button */}
    <div className="mb-7">
      <Link
        href="/electronics"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#302F2F] hover:text-[#EB4124] transition-colors"
      >
        <span className="text-lg">←</span>
        Back to Electronics
      </Link>
    </div>

    {/* Product Card */}
    <div className="bg-white rounded-3xl shadow-[0_10px_45px_rgba(48,47,47,0.07)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 p-6 md:p-10 lg:p-14">

        {/* Product Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[560px] aspect-square bg-[#f7f5ef] rounded-3xl overflow-hidden flex items-center justify-center">

            {/* Badges */}
            <div className="absolute top-5 left-5 z-10 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#302F2F] text-white text-xs font-bold capitalize">
                {product.category}
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white text-[#302F2F] text-xs font-bold capitalize shadow-sm">
                {product.subcategory}
              </span>

              {product.featured && (
                <span className="px-3 py-1.5 rounded-full bg-[#EB4124] text-white text-xs font-bold">
                  Featured
                </span>
              )}
            </div>

            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-8 md:p-12"
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          {/* Brand */}
          <p className="text-sm font-bold uppercase tracking-wider text-[#EB4124] mb-3">
            {product.brand}
          </p>

          {/* Product Name */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#302F2F]">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="text-yellow-400 text-xl"
                >
                  ★
                </span>
              ))}
            </div>

            <span className="font-bold text-[#302F2F]">
              {product.rating}
            </span>

            <span className="text-gray-500">
              ({product.reviews.toLocaleString()} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-7">
            <span className="text-4xl md:text-5xl font-extrabold text-[#302F2F]">
              {formattedPrice}
            </span>
          </div>

          {/* Availability */}
          <div className="mt-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-bold">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {product.availability}
            </span>
          </div>

          {/* About */}
          <div className="mt-7">
            <h2 className="text-xl font-bold mb-3">
              About this product
            </h2>

            <p className="text-gray-600 leading-7">
              {product.shortDescription}
            </p>
          </div>

          {/* Amazon Button */}
          <div className="mt-8">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-[#EB4124] hover:bg-[#d93b20] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#EB4124]/20 active:scale-[0.98]"
            >
              <span>View on Amazon</span>
              <span className="text-lg">↗</span>
            </a>

            <p className="text-xs text-gray-400 mt-3">
              Check the latest price and availability on Amazon
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Product Details */}
    <section className="mt-10 md:mt-14 bg-white rounded-3xl shadow-[0_10px_45px_rgba(48,47,47,0.06)] p-6 md:p-10 lg:p-14">

      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-wider text-[#EB4124]">
          Complete Information
        </p>

        <h2 className="text-2xl md:text-3xl font-extrabold text-[#302F2F] mt-1">
          Product Details
        </h2>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">

        <div className="flex justify-between gap-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-gray-500">
            Product ID
          </span>
          <span className="font-bold text-[#302F2F]">
            {product.id}
          </span>
        </div>

        <div className="flex justify-between gap-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-gray-500">
            Product Name
          </span>
          <span className="font-bold text-[#302F2F] text-right">
            {product.name}
          </span>
        </div>

        <div className="flex justify-between gap-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-gray-500">
            Brand
          </span>
          <span className="font-bold text-[#302F2F]">
            {product.brand}
          </span>
        </div>

        <div className="flex justify-between gap-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-gray-500">
            Category
          </span>
          <span className="font-bold text-[#302F2F] capitalize">
            {product.category}
          </span>
        </div>

        <div className="flex justify-between gap-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-gray-500">
            Subcategory
          </span>
          <span className="font-bold text-[#302F2F] capitalize">
            {product.subcategory}
          </span>
        </div>

        <div className="flex justify-between gap-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-gray-500">
            Slug
          </span>
          <span className="font-bold text-[#302F2F] text-right break-all">
            {product.slug}
          </span>
        </div>

        <div className="flex justify-between gap-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-gray-500">
            Price
          </span>
          <span className="font-bold text-[#302F2F]">
            {formattedPrice}
          </span>
        </div>

        <div className="flex justify-between gap-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-gray-500">
            Rating
          </span>
          <span className="font-bold text-[#302F2F]">
            {product.rating} / 5
          </span>
        </div>

        <div className="flex justify-between gap-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-gray-500">
            Total Reviews
          </span>
          <span className="font-bold text-[#302F2F]">
            {product.reviews.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between gap-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-gray-500">
            Availability
          </span>
          <span className="font-bold text-green-600">
            {product.availability}
          </span>
        </div>

        <div className="flex justify-between gap-5 py-4 border-b border-gray-100">
          <span className="font-semibold text-gray-500">
            Featured Product
          </span>

          <span
            className={`font-bold ${
              product.featured
                ? "text-[#EB4124]"
                : "text-gray-500"
            }`}
          >
            {product.featured ? "Yes" : "No"}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="mt-12">
        <h3 className="text-xl md:text-2xl font-bold text-[#302F2F] mb-5">
          Key Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#faf9f6] rounded-xl px-5 py-4"
            >
              <span className="w-7 h-7 flex-shrink-0 rounded-full bg-[#EB4124] text-white flex items-center justify-center text-sm font-bold">
                ✓
              </span>

              <span className="text-gray-700 font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <h3 className="text-xl md:text-2xl font-bold text-[#302F2F] mb-4">
          Product Description
        </h3>

        <p className="text-gray-600 leading-8 max-w-4xl">
          {product.shortDescription}
        </p>
      </div>
    </section>

    {/* Comments */}
    <ElectronicsComments />
  </section>
</main>

);
};

export default DetailsOfElecticProducts;