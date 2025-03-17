"use client"

import { FlickeringGrid } from "../components/magicui/flickering-grid";
import { SparklesText } from "../components/magicui/sparkles-text";
import { ShineBorder } from "../components/magicui/shine-border";
import { AnimatedGradientText } from "../components/magicui/animated-gradient-text";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";



const page = () => {
  return (
    <main className="">
      <div className="">
        <div className="fixed left-1/2 transform -translate-x-1/2 -z-10">
          <FlickeringGrid
            className="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
            squareSize={4}
            gridGap={6}
            color="#60A5FA"
            maxOpacity={0.5}
            flickerChance={0.5}
            height={1000}
            width={1000}
          />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 z-100">
          <div className="text-center">
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Establish a multi-service business in the comfort of your home with
              <br />
              <span className='text-indigo-600 text-5xl'>
                <SparklesText text="SOBIT" />

              </span>
            </h1>
            <p className="mt-8 text-pretty text-md font-medium text-gray-500 sm:text-xl/8">
              We are solving INDIA'S biggest problem
              <br />
              Unemployement
              <br />
              Through our multiple services store frenchise network
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/#contact" className="text-sm/6 font-semibold">
                <Button>
                  Get Started
                </Button>
              </Link>
              <Link href="/about" className="text-sm/6 font-semibold">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you need to start your business at home</h2>

        <div className="text-lg font-bold text-center p-4">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <AnimatedGradientText >
            We have solution
          </AnimatedGradientText>
        </div>
        <div className="features">
          <Features />
        </div>

        <div className="services flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl m-4 text-indigo-800 font-bold text-center">
            Services
          </h1>
          <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]">
            <Services />
          </div>
          <Link href="/services" className="text-lg font-semibold p-4">
            View all services <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div id="contact" className="flex flex-col items-center justify-center w-full p-4">
          <Contact />
        </div>

      </div>

    </main>
  )
}

export default page