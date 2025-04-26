'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SunIcon, ShieldCheckIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export const Benefits = () => {
  const benefits = [
    {
      icon: SunIcon,
      title: "Solar Powered",
      description: "Sustainable, maintenance-free operation with solar-powered sensors"
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure Data",
      description: "Enterprise-grade security for your farm's sensitive data"
    },
    {
      icon: CurrencyDollarIcon,
      title: "No Upfront Cost",
      description: "Hardware-as-a-Service model with predictable monthly fees"
    },
    {
      icon: UserGroupIcon,
      title: "Expert Support",
      description: "Dedicated team of agronomists and tech experts"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Key Benefits
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-lg border border-gray-100 transition-shadow duration-200 hover:shadow-md group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:bg-primary/20">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
