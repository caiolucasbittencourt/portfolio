"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import SocialCards from "../components/SocialCards";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import BlogPosts from "../components/BlogPosts";
import Footer from "../components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen w-full flex-col px-4">
      <div className="grid-bg pointer-events-none fixed inset-0" />
      <Header />

      <div className="mx-auto w-full max-w-4xl grow pt-24 pb-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          <motion.section variants={itemVariants}>
            <SocialCards />
          </motion.section>

          <motion.section variants={itemVariants}>
            <Hero />
          </motion.section>

          <motion.section variants={itemVariants}>
            <Link href="/technologies" aria-label="Ir para página de tecnologias">
              <TechStack />
            </Link>
          </motion.section>

          <motion.section variants={itemVariants}>
            <BlogPosts />
          </motion.section>
        </motion.div>

        <Footer />
      </div>
    </main>
  );
}
