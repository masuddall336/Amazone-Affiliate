"use client";

import React, { useState } from "react";

const ElectronicsComments = () => {
const [rating, setRating] = useState(5);
const [name, setName] = useState("");
const [comment, setComment] = useState("");

const [comments, setComments] = useState([
{
id: 1,
name: "John Smith",
rating: 5,
comment:
"Excellent product. The quality is really good and it works exactly as expected.",
date: "Oct 08, 2026",
},
{
id: 2,
name: "Sarah Williams",
rating: 4,
comment:
"Very good product for the price. Delivery was also fast and the product looks premium.",
date: "Oct 06, 2026",
},
]);

const handleSubmit = (e) => {
e.preventDefault();


if (!name.trim() || !comment.trim()) return;

const newComment = {
  id: Date.now(),
  name: name.trim(),
  rating,
  comment: comment.trim(),
  date: new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }),
};

setComments((prev) => [newComment, ...prev]);

setName("");
setComment("");
setRating(5);

};

return ( <section className="mt-12 md:mt-16"> <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(48,47,47,0.07)] overflow-hidden">

    {/* Header */}
    <div className="px-6 py-7 md:px-10 md:py-9 border-b border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#EB4124] uppercase tracking-wider">
            Customer Feedback
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#302F2F] mt-1">
            Reviews & Comments
          </h2>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            See what other customers are saying about this product.
          </p>
        </div>

        <div className="flex items-center gap-3">
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

          <span className="text-sm font-semibold text-[#302F2F]">
            {comments.length} Reviews
          </span>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-6 md:p-10">

      {/* Comment Form */}
      <div className="lg:col-span-2">
        <div className="bg-[#f8f6f1] rounded-2xl p-5 md:p-7">

          <h3 className="text-xl font-bold text-[#302F2F]">
            Write a Review
          </h3>

          <p className="text-sm text-gray-500 mt-1 mb-6">
            Share your experience with this product.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[#302F2F] mb-2">
                Your Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full bg-white rounded-xl px-4 py-3.5 text-sm text-[#302F2F] placeholder:text-gray-400 outline-none border border-transparent focus:border-[#EB4124] focus:ring-4 focus:ring-[#EB4124]/10 transition"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-[#302F2F] mb-2">
                Your Rating
              </label>

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="text-3xl leading-none transition-transform hover:scale-110"
                    aria-label={`Rate ${star} stars`}
                  >
                    <span
                      className={
                        star <= rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  </button>
                ))}

                <span className="ml-2 text-sm font-medium text-gray-500">
                  {rating}/5
                </span>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-semibold text-[#302F2F] mb-2">
                Your Comment
              </label>

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell us about your experience..."
                rows={5}
                required
                className="w-full bg-white rounded-xl px-4 py-3.5 text-sm text-[#302F2F] placeholder:text-gray-400 outline-none border border-transparent focus:border-[#EB4124] focus:ring-4 focus:ring-[#EB4124]/10 transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#EB4124] hover:bg-[#d93b20] text-white font-bold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#EB4124]/20 active:scale-[0.98]"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>

      {/* Reviews */}
      <div className="lg:col-span-3">

        {comments.length === 0 ? (
          <div className="h-full min-h-[300px] flex items-center justify-center bg-[#f8f6f1] rounded-2xl">
            <div className="text-center px-6">
              <div className="text-5xl mb-4">💬</div>

              <h3 className="text-lg font-bold text-[#302F2F]">
                No Reviews Yet
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Be the first person to share your experience.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">

            {comments.map((item) => (
              <div
                key={item.id}
                className="bg-[#f8f6f1] rounded-2xl p-5 md:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-[#302F2F] text-white flex items-center justify-center font-bold">
                      {item.name.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <h4 className="font-bold text-[#302F2F]">
                        {item.name}
                      </h4>

                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.date}
                      </p>
                    </div>

                  </div>

                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= item.rating
                            ? "text-yellow-400 text-sm"
                            : "text-gray-300 text-sm"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-sm md:text-base leading-7 mt-4">
                  {item.comment}
                </p>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  </div>
</section>
);
};

export default ElectronicsComments;
