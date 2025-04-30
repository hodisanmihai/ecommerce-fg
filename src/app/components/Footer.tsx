"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full bg-[#1f1f1f] flex justify-center items-center py-8">
      <footer className="footer footer-center bg-base-200 text-base-content rounded-lg w-full sm:w-[70%] md:w-[50%] px-6 py-10">
        {/* Social Media and Contact Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-12">
          {/* Social Media Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg text-white font-semibold mb-2">
              Social Media
            </h3>
            <div className="grid grid-flow-col gap-6 justify-center sm:justify-center">
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="text-white hover:text-blue-600"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="text-white hover:text-pink-500"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg text-white font-semibold mb-2">Contact</h3>
            <p className="text-sm text-white">
              Email:{" "}
              <a
                href="mailto:
exemplu@yahoo.com"
                className="hover:underline"
              >
                exemplu@yahoo.com
              </a>
            </p>
            <p className="text-sm text-white">
              Telefon:{" "}
              <a href="tel:0359-236641" className="hover:underline">
                0359-236641
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <aside className="mt-6 text-center text-sm">
          <p>
            Copyright © {new Date().getFullYear()} - Toate drepturile rezervate{" "}
            <span className="text-[#DFD1FF] text-nowrap">Companie </span>
          </p>
        </aside>

        {/* Created by Section */}
        <div className="mt-4 text-center text-sm">
          <p>
            Created by{" "}
            <a
              href="https://hm-design.ro"
              className="text-blue-500 hover:underline"
            >
              hm-design
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
