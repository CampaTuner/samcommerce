import React from 'react'
import wishlist from '../data/wishlist'

function Wishlist() {
  return (
    <div className="flex justify-center mb-28 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="font-bold text-3xl mb-10 text-center text-gray-800">
          My Wishlist
        </h1>

        <div className="flex flex-col gap-6">
          {wishlist.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 border rounded-2xl shadow-md p-5 bg-white hover:shadow-xl hover:scale-[1.01] transition duration-200"
            >
              {/* Thumbnail */}
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-24 object-cover rounded-xl shadow-sm"
                loading="eager"
              />

              {/* Info */}
              <div className="flex-1">
                <p className="text-xl font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                  {item.description}
                </p>
                <p className="text-xs text-gray-400 mt-1 italic">
                  By {item.seller}
                </p>
              </div>

              {/* Price + Buttons */}
              <div className="flex flex-col items-end gap-3">
                <span className="px-3 py-1 bg-green-100 text-green-700 font-bold text-md rounded-full shadow-sm">
                  ₹{item.price}
                </span>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition">
                    Buy Now
                  </button>
                  <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg text-sm font-medium hover:bg-red-600 hover:text-white transition">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wishlist
