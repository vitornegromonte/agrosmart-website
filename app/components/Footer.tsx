'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
          <Link href="/" className="flex items-center group">
            <div className="relative w-12 h-12 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors duration-200 flex items-center justify-center">
              <RocketLaunchIcon className="h-8 w-8 text-primary" />
            </div>
            <span className="ml-4 text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-200">
              AgroSmart
            </span>
          </Link>
            <p className="text-gray-600 leading-relaxed">
              Revolutionizing agriculture with AI-powered solutions for sustainable farming.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#problem" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  Problem
                </Link>
              </li>
              <li>
                <Link href="/#solution" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  Solution
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#benefits" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  Benefits
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <a href="mailto:info@agrosmart.com" className="hover:text-primary transition-colors duration-200">
                  info@agrosmart.com
                </a>
              </li>
              <li className="text-gray-600">
                <a href="tel:+1234567890" className="hover:text-primary transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-gray-600">
                123 Farm Street<br />
                Agricultural City, AC 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-600">
            © {currentYear} AgroSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 