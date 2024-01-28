'use client'

import * as React from "react"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const carouselHeroes = [
	{
		id:1 ,
		img_url :'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
		text1: 'HEADLINE',
		text2: 'More detal, lorem sum'
	},
	{
		id:2 ,
		img_url :'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
		text1: 'HEADLINE',
		text2: 'More detal, lorem sum'
	},


]
//over layer: https://blog.logrocket.com/guide-image-overlays-css/
const HeroCarousel = () => {
	const plugin = React.useRef(
		Autoplay({ delay: 10000, stopOnInteraction: true })
	  )

	return (
		<div className="relative h-[80vh] w-full bg-cover bg-center
			flex justify-start items-center"
			// bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)]"	
			>
			{/* Background Image Carousel (You'll need to implement this logic separately) */}
			{/* Example: <div id="carousel" className="carousel"> ... </div> */}
			{/* Text Overlaid on Top */}
			<div className="text-white text-center padding md:pl-200 md:ml-[200pxmmit] z-20 lg:pl-[500px]">
				<h1 className="text-4xl font-bold "> Title</h1>
				<p className="mt-2">
					Some descriptive text{" "}
					<span className="text-yellow-500">with an accent</span>
				</p>
			</div>
			{/* Rectangle Ladder Shape Overlay */}
			<div className="overlay absolute top-0 left-0 w-full opacity-60 h-full z-10"
			//  bg-gradient-to-r from-green-300 to-slate-100
			//  flex flex-col justify-center items-center"
			 ></div>

			{/* CAROUSEL */}

			<Carousel
				plugins={[
					plugin.current
				]} 
				className="absolute top-0 left-0 w-screen h-full"
				>
				<CarouselContent className=" w-full h-full" >
					{carouselHeroes.map(({id, img_url})=> (
						<CarouselItem key={id} className={'w-screen h-[80vh] bg-[url('+img_url +')] bg-cover bg-center' }></CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute top-1/2 right-1/2 -translate-x-[-100px] z-20 "/>
				<CarouselNext className="absolute top-1/2 right-1/2 -translate-x-[-50px] z-20"/>
			</Carousel>
		</div >

		// CHOICE 2
		// <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden w-full h-screen">
		// 	<div className="absolute inset-0">
		// 		<img
		// 			src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
		// 			alt="Background Image"
		// 			className="object-cover object-center w-full h-full"
		// 		/>
		// 		<div className="absolute inset-0 bg-black opacity-50"></div>
		// 	</div>

		// 	<div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
		// 		<h1 className="text-5xl font-bold leading-tight mb-4">
		// 			Welcome to Our Awesome Website
		// 		</h1>
		// 		<p className="text-lg text-gray-300 mb-8">
		// 			Discover amazing features and services that await you.
		// 		</p>
		// 		<a
		// 			href="#"
		// 			className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
		// 		>
		// 			Get Started
		// 		</a>
		// 	</div>
		// </div>

		// <section classNameName="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat w-full h-screen">
		// 	<div classNameName="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">

		//     </div>

		// 	<div classNameName="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
		// 		<div classNameName="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
		// 			<h1 classNameName="text-3xl font-extrabold sm:text-5xl">
		// 				Let us find your
		// 				<strong classNameName="block font-extrabold text-rose-700">
		// 					{" "}
		// 					Forever Home.{" "}
		// 				</strong>
		// 			</h1>

		// 			<p classNameName="mt-4 max-w-lg sm:text-xl/relaxed">
		// 				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
		// 				illo tenetur fuga ducimus numquam ea!
		// 			</p>

		// 			<div classNameName="mt-8 flex flex-wrap gap-4 text-center">
		// 				<a
		// 					href="#"
		// 					classNameName="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
		// 				>
		// 					Get Started
		// 				</a>

		// 				<a
		// 					href="#"
		// 					classNameName="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
		// 				>
		// 					Learn More
		// 				</a>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	);
};

export default HeroCarousel;
