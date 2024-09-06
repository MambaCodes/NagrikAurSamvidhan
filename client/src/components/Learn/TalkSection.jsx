"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { MessageSquare } from 'lucide-react'

export default function TalkSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Talk with ConstitutionAI</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Engage in enlightening conversations about the constitution with our AI-powered assistant.
          </p>
        </motion.div>
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Button 
            className="w-full py-6 text-xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-md transition-all duration-300"
            onClick={() => {
              // Add your route navigation logic here
              console.log("Navigating to ConstitutionAI chat...")
            }}
          >
            Start a Conversation
            <MessageSquare className="ml-2 h-6 w-6" />
          </Button>
          <motion.div
            className="absolute inset-0 -z-10 bg-primary/20 rounded-md blur-sm"
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 0.8 : 0.5, 
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.p 
          className="text-center mt-6 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Discover the depths of constitutional knowledge through interactive dialogue.
        </motion.p>
      </div>
    </section>
  )
}