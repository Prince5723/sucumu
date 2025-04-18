'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Users, Globe, Award, Leaf, ArrowRight, Clock, Target, Sparkles } from 'lucide-react';
import Image from 'next/image';

const AboutUs = () => {
const milestones = [
{ year: '2023', title: 'Kitchen to Company', description: 'Started as a home kitchen initiative by Sudha Devi' },
{ year: '2023', title: 'Family Business', description: 'Sons Mukesh and Rakesh joined to establish formal company' },
{ year: '2023', title: 'Market Expansion', description: 'Available in local shops and multi-brand stores' },
{ year: '2024', title: 'Growing Impact', description: 'Reaching households across the nation' }
];

const values = [
{ icon: <Heart className="w-6 h-6" />, title: 'Natural Wellness', description: 'Pure and wholesome ingredients' },
{ icon: <Star className="w-6 h-6" />, title: 'Quality First', description: 'Premium health products' },
{ icon: <Users className="w-6 h-6" />, title: 'Family Legacy', description: 'Three generations of care' },
{ icon: <Globe className="w-6 h-6" />, title: 'Global Vision', description: 'Wellness for everyone' }
];

return (
<section className="py-24 relative overflow-hidden" id="about">
{/* Background Pattern */}
<div className="absolute " />


  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-2 bg-amber-100/50 px-4 py-2 rounded-full mb-4">
        <Award className="w-5 h-5 text-amber-600" />
        <span className="text-amber-700 font-medium">Our Story</span>
        <Award className="w-5 h-5 text-amber-600" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mt-4 mb-6">
        About Sucumu
      </h2>
      <p className="text-lg text-amber-700/90 max-w-2xl mx-auto">
        Bringing nature's goodness to your doorstep with premium quality flaxseed products
      </p>
    </motion.div>

    {/* Journey Timeline */}
    <div className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-amber-200/20 rounded-[2rem] blur-3xl transform rotate-6" />
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop"
            alt="Healthy Lifestyle"
            className="rounded-[2rem] shadow-2xl w-full aspect-[4/3] object-cover relative transform -rotate-3 hover:rotate-0 transition-transform duration-500"
          />
          <div className="absolute -bottom-6 right-6 bg-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3">
            <Clock className="w-5 h-5 text-amber-600" />
            <span className="font-medium text-amber-900">Est. 2023</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-gradient-to-br from-amber-50/80 to-amber-100/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-amber-700/90 leading-relaxed">
              Sucumu is a natural health product crafted to enhance the body's natural functions, such as improving digestion and reducing the risk of heart disease, type 2 diabetes, and certain types of cancer.
            </p>
          </div>

          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-amber-100 rounded-full p-2 mt-1">
                  <Target className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-600 font-medium">{milestone.year}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                    <span className="font-medium text-amber-900">{milestone.title}</span>
                  </div>
                  <p className="text-amber-700/90 text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    {/* Founder's Story */}
    <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-[2.5rem] p-12 mb-24 relative overflow-hidden">
      <div className="absolute " />
      
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100/80 px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-medium">Meet Our Team</span>
          </div>
          <h3 className="text-3xl font-bold text-amber-900 mb-4">The Family Behind Sucumu</h3>
          <p className="text-lg text-amber-700/90 max-w-3xl mx-auto">
            Recognizing the adverse effects of modern lifestyles on health, Sudha Devi, the visionary behind Sucumu, created a roasted snack made from ALSI (flaxseed) — a convenient, easy-to-consume, store, and enjoy health supplement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Founder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-100/0 to-amber-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src="/sudha-devi.jpeg"
                    alt="Sudha Devi"
                    className="w-full aspect-square object-fit transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Sudha Devi</h4>
                <p className="text-amber-700 font-medium mb-1">Founder</p>
                <p className="text-amber-600/90 text-sm">
                  Started Sucumu from her home kitchen with the goal of making wellness accessible to all.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Co-founders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-100/0 to-amber-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src="/mukesh.jpeg"
                    alt="Mukesh Kumar"
                    className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Mukesh Kumar</h4>
                <p className="text-amber-700 font-medium mb-1">CEO & Co-founder</p>
                <p className="text-amber-600/90 text-sm">
                  A mechanical engineer who left his corporate job to establish SUCUMU as a formal company.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-100/0 to-amber-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src="/rakesh.jpeg"
                    alt="Rakesh Kumar"
                    className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Rakesh Kumar</h4>
                <p className="text-amber-700 font-medium mb-1">Co-founder</p>
                <p className="text-amber-600/90 text-sm">
                  Joined his brother to help build their mother's vision into a recognized brand.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Manish Sharma - New Addition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-100/0 to-amber-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src="manish-sharma.jpeg"
                    alt="Manish Sharma"
                    className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Manish Sharma</h4>
                <p className="text-amber-700 font-medium mb-1">Production Head</p>
                <p className="text-amber-600/90 text-sm">
                  A family friend who oversees the production and packaging, ensuring quality at every step.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    {/* Vision & Values */}
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-amber-100/80 px-4 py-2 rounded-full mb-6">
          <Target className="w-5 h-5 text-amber-600" />
          <span className="text-amber-700 font-medium">Our Vision & Values</span>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100/30 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500" />
              <div className="relative">
                <div className="bg-amber-100 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-amber-700">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-amber-900 mb-3">{value.title}</h4>
                <p className="text-amber-700">{value.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Mission Statement */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-amber-700 to-amber-600 rounded-[2rem] p-12 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589634749000-1e72ec00a13f?q=80&w=2000&auto=format&fit=crop')] opacity-10" />
      <div className="relative">
        <Sparkles className="w-8 h-8 text-amber-200 mx-auto mb-6" />
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
        <p className="text-amber-100 text-lg max-w-3xl mx-auto">
          To promote a healthy lifestyle and reach every household across the nation — and eventually, the globe. As a natural and wholesome product, Sucumu supports overall well-being and empowers people to lead healthier, disease-free lives.
        </p>
      </div>
    </motion.div>
  </div>
</section>
);
};

export default AboutUs;