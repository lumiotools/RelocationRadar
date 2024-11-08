import React from "react";
// import { Link } from "react-router-dom";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
  RadarIcon,
} from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-[#77003b] text-white">
      <div className="container mx-auto px-4">
        <div
          className="flex justify-between items-center py-2"
        >
          <div className="flex space-x-2">
            <a
              href="#"
              className="text-white hover:text-gray-200"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200"
            >
              <TwitterIcon size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200"
            >
              <YoutubeIcon size={20} />
            </a>
          </div>
          <div className="text-sm">
            TOLL FREE 1.888.420.MOVE (6683)
          </div>
        </div>
      </div>

      <div
        className="border-t border-white/20 w-full"
      >
        <div className="w-full bg-white">
          <div
            className="container mx-auto px-4 flex justify-between items-center py-4"
          >
            <Link
              href={"/"}
              className="flex items-center space-x-2"
            >
              <RadarIcon
                className="h-8 w-8 text-[#77003b]"
                strokeWidth={1.5}
              />
              <span
                className="text-xl font-bold text-[#77003b]"
              >
                RelocationRadar
              </span>
            </Link>

            <nav
              className="hidden md:flex space-x-8"
            >
              <Link
                href={"/"}
                className="text-[#77003b] hover:text-[#550029]"
              >
                HOME
              </Link>
              <Link
                href={"/about"}
                className="text-[#77003b] hover:text-[#550029]"
              >
                ABOUT US
              </Link>
              <Link
                href={"/agents"}
                className="text-[#77003b] hover:text-[#550029]"
              >
                FIND AGENTS
              </Link>
              <Link
                href={"/relocation"}
                className="text-[#77003b] hover:text-[#550029]"
              >
                FREE RELOCATION KIT
              </Link>
              <Link
                href={"/resources"}
                className="text-[#77003b] hover:text-[#550029]"
              >
                RESOURCES
              </Link>
              <Link
                href={"/blog"}
                className="text-[#77003b] hover:text-[#550029]"
              >
                BLOG
              </Link>
              <Link
                href={"/for-agents"}
                className="text-[#77003b] hover:text-[#550029]"
              >
                FOR AGENTS
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
