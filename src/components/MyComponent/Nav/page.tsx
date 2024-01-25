"use client";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "about",
		},
		{
			id: 3,
			link: "portfolio",
		},
		{
			id: 4,
			link: "experience",
		},
		{
			id: 5,
			link: "contact",
		},
	];

	console.log(links);

	return (
		<nav className="padding flex justify-between text-orange">
			<div className=""> TACCOM </div>
			{/* https://dev.to/ryaddev/creating-a-responsive-navbar-using-nextjs-and-tailwind-css-48kk */}
			<NavigationMenu className="hidden md:flex">
				<NavigationMenuList>
					{links.map(({ id, link }) => (
						<Link key={id} href="/" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{link}
							</NavigationMenuLink>
						</Link>
					))}
				</NavigationMenuList>
			</NavigationMenu>

			{/* hambuger btn */}
			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-30 text-gray-500 md:hidden text-red-500"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{nav && (
				<ul
					className="flex flex-col justify-center items-center absolute top-0 left-0 
                    z-20
                    w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
				>
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-6 text-4xl"
						>
							<Link onClick={() => setNav(!nav)} href={"/" + link}>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</nav>
	);
};

export default Nav;
