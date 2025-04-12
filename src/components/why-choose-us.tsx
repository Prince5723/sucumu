'use client';

import { Leaf, Heart, Wheat, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import {RevealImageListDemo} from "./reveal-image";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Heart className="w-12 h-12 text-amber-700" />,
      title: "High in Protein",
      description: "Packed with plant-based protein to fuel your day and support your active lifestyle",
      value: "20g",
      unit: "per serving",
      bgAccent: "bg-amber-100/50"
    },
    {
      icon: <Leaf className="w-12 h-12 text-amber-700" />,
      title: "Rich in Omega-3",
      description: "Essential fatty acids for heart and brain health from natural flaxseed",
      value: "2.5g",
      unit: "per serving",
      bgAccent: "bg-amber-50/80"
    },
    {
      icon: <Wheat className="w-12 h-12 text-amber-700" />,
      title: "High Fiber Content",
      description: "Natural fiber for digestive health and sustained energy",
      value: "8g",
      unit: "per serving",
      bgAccent: "bg-amber-100/50"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden" id='benifits'>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-600" />
            <span className="text-amber-700 font-medium">Nature's Finest Selection</span>
            <Sparkles className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-5xl font-bold text-amber-900 mb-6 leading-tight">
            Why Choose <span className="text-amber-700">Sucumu</span>?
          </h2>
          <p className="text-lg text-amber-700/90 max-w-2xl mx-auto">
            Nature's goodness in every bite, carefully crafted for your wellbeing with the finest ingredients (Vegetable Oil, Turmeric, Chilli Powder, Zeera Powder, Salt)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`${feature.bgAccent} rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-200 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-full p-4 shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    {feature.title}
                  </h3>
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 my-6">
                    {feature.value}
                    <span className="text-sm block text-amber-600 mt-1">{feature.unit}</span>
                  </div>
                  <p className="text-amber-700/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="absolute inset-0 border-4 border-amber-200/30 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-[1.02]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    <RevealImageListDemo/>

    </section>

  );
};
