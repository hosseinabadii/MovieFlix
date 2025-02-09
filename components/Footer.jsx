import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark-100 text-light-200 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About</h3>
            <p className="text-sm">
              This is a MovieFlix application built with Next.js and Tailwind
              CSS. It provides detailed information about movies, including
              ratings, genres, and production details.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-light-100 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#all-movies"
                  className="text-sm hover:text-light-100 transition-colors"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-light-100 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-light-100 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-200 hover:text-light-100 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-200 hover:text-light-100 transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-200 hover:text-light-100 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:example@example.com"
                className="text-light-200 hover:text-light-100 transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-light-100/10 mt-8 pt-8 text-center">
          <p className="text-sm text-light-200">
            &copy; {new Date().getFullYear()} Movies World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
