"use client"

import { LayoutGroup, motion } from "motion/react"

import { TextRotate } from "@/components/ui/text-rotate"

function RotateText() {
  return (
    <div className="text-2xl sm:text-3xl md:text-5xl flex flex-row items-center font-overusedGrotesk text-stone-800 font-semibold overflow-hidden">
      <LayoutGroup>
        <motion.p className="flex whitespace-pre" layout>
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            Snack like you love{" "}
          </motion.span>
          <TextRotate
            texts={[
              "wellness",
              "taste",
              "clean food",
              "crunch",
              "youself"
            ]}
            mainClassName="text-white px-2 sm:px-2 md:px-3 bg-stone-500 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.p>
      </LayoutGroup>
    </div>
  )
}

export { RotateText }
