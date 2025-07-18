'use client';

import { styles } from "@/utils/style";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MAX_DESCRIPTION = 120;

const Page = () => {
  const { user } = useUser()
  const [shopName, setShopName] = useState("");
  const [description, setDescription] = useState("");
  const [shopData, setShopData] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ shopName: "", description: "", shopData: "" });

  const validate = () => {
    let valid = true;
    const newErrors = { shopName: "", description: "", shopData: "" };

    // Shop Name validation
    if (!shopName.trim()) {
      newErrors.shopName = "Shop name is required";
      valid = false;
    } else if (shopName.trim().length < 2) {
      newErrors.shopName = "At least 2 characters";
      valid = false;
    }

    // Description validation
    if (!description.trim()) {
      newErrors.description = "Description is required";
      valid = false;
    } else if (description.length > MAX_DESCRIPTION) {
      newErrors.description = "Maximum 120 characters";
      valid = false;
    }

    // Shop Data validation
    if (!shopData.trim()) {
      newErrors.shopData = "Shop data is required";
      valid = false;
    } else if (shopData.trim().length < 10) {
      newErrors.shopData = "Please provide at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    if (user) {
      const data = {
        name: shopName,
        description: description,
        shopProductsType: shopData,
        avatar: user?.imageUrl || '',
        userId: user?.id,
      }

      await axios.post("/api/create-shop", data)
        .then((res) => {
          toast.success("Shop created successfully!")
        })
        .catch((err) => {
          toast.error(err.response.data)
        })
        .finally(() => {
          setLoading(false)
          setShopName("");
          setDescription("");
          setShopData("");
          setErrors({ shopName: "", description: "", shopData: "" });
        })
    }

  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center
      bg-gradient-to-br from-blue-900 via-indigo-900 to-pink-500 py-8">
      <div>
        <h1 className={`${styles.heading} text-center font-Monserrat mb-8 text-white drop-shadow-lg`}>
          Start To Selling With Us
        </h1>

        <form
          className="backdrop-blur-md bg-white/30 shadow-2xl ring-2 ring-white/20
            2xl:w-[40%] xl:w-[50%] md:w-[70%] w-[95%] m-auto rounded-2xl py-8 px-4 sm:px-8 space-y-7"
          onSubmit={handleSubmit}
        >
          {/* Shop Name */}
          <div className="w-full">
            <label className={`${styles.label} mb-2 block text-white drop-shadow`}>
              Shop Name
            </label>
            <input
              type="text"
              placeholder="E.g. The Gibly Art"
              value={shopName}
              onChange={e => setShopName(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2
                bg-white/80 backdrop-blur text-indigo-900
                shadow ${errors.shopName ? "focus:ring-red-600" : "focus:ring-white/60"}`}
            />
            {errors.shopName && (
              <p className="text-red-600 text-sm mt-1">{errors.shopName}</p>
            )}
          </div>

          {/* Shop Description */}
          <div className="w-full">
            <label className={`${styles.label} mb-2 block text-white drop-shadow`}>
              Shop Description <span className="text-white/70 text-xs">(max 120 chars)</span>
            </label>
            <input
              type="text"
              maxLength={MAX_DESCRIPTION}
              placeholder="here..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2
                bg-white/80 backdrop-blur text-indigo-900
                shadow ${errors.description ? "focus:ring-red-600" : "focus:ring-white/60"}`}
            />
            <div className="flex justify-between mt-1">
              <span>
                {errors.description && (
                  <p className="text-red-600 text-xs">{errors.description}</p>
                )}
              </span>
              <span className={`text-xs ${description.length > 110 ? "text-pink-200" : "text-white/70"}`}>
                {description.length}/120
              </span>
            </div>
          </div>

          {/* Shop Data */}
          <div className="w-full">
            <label className={`${styles.label} mb-2 block text-white drop-shadow`}>
              What you wanna sale with us?
            </label>
            <textarea
              rows={5}
              placeholder="ChatGPT, Midjouraney prompt..."
              value={shopData}
              onChange={e => setShopData(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2
                bg-white/80 backdrop-blur text-indigo-900
                shadow resize-none ${errors.shopData ? "focus:ring-red-600" : "focus:ring-white/60"}`}
            />
            {errors.shopData && (
              <p className="text-red-600 text-sm mt-1">{errors.shopData}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-pink-500
              text-white rounded-2xl cursor-pointer hover:from-pink-500 hover:to-blue-600 transition font-semibold text-lg shadow-lg
              tracking-wider drop-shadow-xl  ${loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:from-pink-500 hover:to-blue-600"}`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12" cy="12" r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit"
            )
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
