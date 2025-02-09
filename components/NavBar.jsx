"use client";

import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="bg-dark-100 text-light-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-base sm:text-xl font-bold text-white"
            >
              Movies World
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <SignedIn>
              <Link
                href="/favorites"
                className="text-sm hover:text-light-100 transition-colors"
              >
                Favorites
              </Link>
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <button className="text-sm hover:text-light-100 transition-colors">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton>
                <button className="text-sm hover:text-light-100 transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center space-x-4">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
