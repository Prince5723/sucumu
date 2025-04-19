'use client';

import { motion } from 'framer-motion';
import { Truck, Store, Package, MapPin, Building2, Phone, Clock, Shield, Sparkles } from 'lucide-react';

const DeliveryCoverage = () => {
  const locations = [
    { name: "Delhi"},
    { name: "Noida"},
    { name: "Gurgaon"},
    { name: "Faridabad"},
    { name: "Ghaziabad"},
    { name: "Greater Noida"}
  ];

  const features = [
    {
      icon: <Store className="w-8 h-8" />,
      title: "Retail & Direct Sales",
      description: "Premium quality products available at partner stores and through direct orders",
      highlight: "20+ Partner Stores"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Wholesale Solutions",
      description: "Bulk orders for businesses with competitive pricing and dedicated support",
      highlight: "Min. Order 10kg"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Express Delivery",
      description: "Fast and reliable delivery service across India",
      highlight: "Free on Wholesale"
    }
  ];

  const additionalFeatures = [
    { icon: <Clock className="w-5 h-5" />, text: "Delivery in 48 hours" },
    { icon: <Shield className="w-5 h-5" />, text: "Quality Guaranteed" },
    { icon: <Package className="w-5 h-5" />, text: "Secure Packaging" }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id='wholesale'>
      <div className="absolute " />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100/50 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-medium">Serving Accross India</span>
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-4 mb-6 leading-tight">
            Bringing Nature's Goodness to<br />Your Doorstep
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center gap-2 text-amber-700 bg-amber-50 px-6 py-3 rounded-full w-full sm:w-auto"
              >
                {feature.icon}
                <span className="font-medium whitespace-nowrap">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-white to-amber-50/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-amber-100 px-4 py-1 rounded-bl-2xl text-sm font-medium text-amber-700">
                {feature.highlight}
              </div>
              <div className="bg-amber-100 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-amber-700">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-amber-700/90">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Coverage Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-[2.5rem] p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute " />
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-100/80 px-4 py-2 rounded-full mb-6">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="font-medium text-amber-700">Delivery Network</span>
                </div>
                <h3 className="text-3xl font-bold text-amber-900 mb-8">
                  Fast Delivery Across NCR - 48 Hours
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {locations.map((location, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                    >
                      <div className="flex items-center gap-3 text-amber-900 font-medium mb-2">
                        <MapPin className="w-4 h-4 text-amber-500" />
                        {location.name}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <h4 className="font-bold text-amber-900 text-lg mb-4">Contact for Wholesale</h4>
                    <div className="flex items-center gap-3 text-amber-700">
                      <Phone className="w-5 h-5 text-amber-500" />
                      <span className="font-medium">+91 8539053555</span>
                    </div>
                    <a
                      href="https://wa.me/8539053555?text=Hi%2C%20I%20am%20interested%20in%20your%20wholesale%20products.%20Please%20share%20more%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-full bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-amber-700/20 hover:scale-[1.02] cursor-pointer"
                    >
                      <Package className="w-5 h-5" />
                      Request Wholesale Quote
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-amber-200/20 rounded-[2rem] blur-3xl" />
                <img
                  src="https://res.cloudinary.com/dyg1rahpk/image/upload/v1744196253/hfblvmlxrgajwhsem1ki.jpg"
                  alt="Delivery Service"
                  className="rounded-[2rem] shadow-2xl w-full aspect-[4/5] object-cover relative"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryCoverage;
