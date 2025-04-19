'use client';

import { motion } from 'framer-motion';
import { Star, ShoppingCart, Leaf, Heart } from 'lucide-react';

const ProductSection = () => {
  const product = {
    name: "Roasted Flaxseed Snacks",
    subtitle: "ALSI - Power of Nature",
    price: 40,
    rating: 4.8,
    reviews: 1000,
    description:
      "Experience the perfect blend of nutrition and taste with our premium roasted flaxseed snacks. Each bite is packed with natural goodness, making it the ideal choice for health-conscious snackers.",
    benefits: [
      "100% Natural Ingredients",
      "No Added Preservatives",
      "Gluten-Free",
      "Vegan Friendly",
    ],
    sizes: [{ weight: "50 Grams", price: 60 },
      { weight: "100 Grams", price: 100 },
    ],
  };

  return (
    <section className="py-24 relative overflow-hidden" id='products'>
      {/* Decorative background elements */}
      <div className="absolute" />
      <div className="absolute top-0 left-0 w-full h-64  " />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 font-medium inline-flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            Our Premium Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-4">
            Discover Natural Goodness
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-amber-200/20 rounded-[3rem] blur-3xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dyg1rahpk/image/upload/v1744195312/pcbspgh335jkbnprfyju.png"
                alt="Roasted Flaxseed Snacks"
                className="rounded-[2rem] shadow-2xl w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-full px-6 py-2 shadow-lg flex items-center gap-2"
                >
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-semibold text-amber-900">{product.rating}</span>
                  <span className="text-amber-600">
                    ({product.reviews}+ reviews)
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-medium text-amber-600 mb-2">
                {product.subtitle}
              </h3>
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                {product.name}
              </h2>
              <p className="text-amber-700/90 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-amber-900">Product Benefits:</h4>
              <div className="grid grid-cols-2 gap-3">
                {product.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-amber-700"
                  >
                    <Heart className="w-4 h-4 text-amber-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-amber-900">Available Sizes:</h4>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 rounded-full border-2 border-amber-200 bg-amber-50 text-amber-900 font-medium"
                  >
                    {size.weight} – Rs {size.price}
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Add to Cart */}
            <div className="pt-6">
              <a
                href={`https://wa.me/8539053555?text=Hi,%20I'm%20interested%20in%20buying%20${encodeURIComponent(
                  product.name
                )}%20(${product.sizes[0].weight})%20for%20Rs%20${product.sizes[0].price}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg shadow-amber-700/20"
              >
                <ShoppingCart className="w-5 h-5" />
                Place Order
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { ProductSection };
