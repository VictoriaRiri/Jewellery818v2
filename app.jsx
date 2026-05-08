import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Jewellery818 = () => {
  const [loading, setLoading] = useState(true);

  // Luxury timing: heavy, deliberate, and smooth
  const luxuryEase = [0.22, 1, 0.36, 1];

  useEffect(() => {
    // 4 seconds to allow the "sensory" loading to breathe
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#09060a] text-[#ede4d4] selection:bg-[#461420] selection:text-[#d8c8ae] min-h-screen overflow-x-hidden font-serif">
      
      {/* 1. THE SENSORY LOADING PAGE (The Entrance) */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 2, ease: luxuryEase } 
            }}
            className="fixed inset-0 z-[100] bg-[#09060a] flex flex-col items-center justify-center"
          >
            {/* Background Texture for Loader */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] pointer-events-none" />
            
            <div className="relative flex flex-col items-center">
              {/* Falling Object Shadow Physics */}
              <motion.div 
                initial={{ y: -60, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#bc9c6a] to-transparent mb-12 shadow-[0_0_15px_rgba(188,156,106,0.3)]"
              />
              
              {/* Logo Reveal */}
              <motion.h1 
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 3, delay: 0.8 }}
                className="text-4xl md:text-5xl font-light tracking-[1em] text-[#bc9c6a] pl-[1em]"
              >
                818
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 2, delay: 2 }}
                className="mt-6 text-[10px] uppercase tracking-[0.5em] italic"
              >
                Sensory Atelier
              </motion.p>
            </div>

            {/* Subtle light pulse during load */}
            <motion.div 
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-[-20%] w-full h-[50%] bg-[#461420] blur-[150px] rounded-full opacity-10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. ATMOSPHERIC UI OVERLAYS */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* The Directional "Room Light" from Top Right */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[140%] bg-gradient-to-bl from-[#ede4d4]/15 via-transparent to-transparent blur-[140px] rotate-12" />
        
        {/* Subtle Bottom Vignette to ground the content */}
        <div className="absolute inset-0 shadow-[inset_0_-20vh_30vh_rgba(9,6,10,0.9)]" />
      </div>

      {/* 3. MAIN NAVIGATION */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-[60] mix-blend-difference">
        <span className="text-[10px] tracking-[0.8em] uppercase text-[#bc9c6a]">Menu</span>
        <h1 className="text-xl tracking-[0.5em] font-light">JEWELLERY 818</h1>
        <span className="text-[10px] tracking-[0.8em] uppercase text-[#bc9c6a]">Cart (0)</span>
      </nav>

      {/* 4. HERO SECTION */}
      <main className="relative pt-32">
        <section className="h-screen flex flex-col justify-center px-12 lg:px-32">
          <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: luxuryEase }}
              >
                <h2 className="text-7xl md:text-[10rem] leading-[0.8] font-light mb-12 flex flex-col">
                  <span>Eighty</span>
                  <span className="pl-16 md:pl-32 italic text-[#bc9c6a]">Eight</span>
                </h2>
                <div className="w-24 h-[1px] bg-[#bc9c6a] mb-8" />
                <p className="max-w-sm text-[#766050] text-sm uppercase tracking-widest leading-loose">
                  Architectural Adornment. <br /> 
                  Materialized in the shadow of light.
                </p>
              </motion.div>
            </div>
            
            {/* HERO IMAGE PLACEHOLDER: The "Expensive" Shadow Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, ease: luxuryEase }}
              className="col-span-12 lg:col-span-5 aspect-[4/5] bg-[#1a0e13] mt-12 lg:mt-0 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#461420]/10 mix-blend-multiply" />
              <div className="w-full h-full flex items-center justify-center text-[#2b0f17] italic text-sm">
                [ Insert Macro: Gold Ring in Heavy Shadow ]
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. STAGGERED EDITORIAL GALLERY */}
        <section className="py-64 space-y-[40vh] px-6 lg:px-32">
          
          {/* Card 01 - Left Aligned */}
          <div className="flex justify-start">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: luxuryEase }}
              className="w-full lg:w-1/3 group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-[#110b0e] mb-8 relative transition-transform duration-[2s] group-hover:scale-[1.02]">
                 <div className="w-full h-full flex items-center justify-center text-[#2b0f17]">[ Portrait Shot ]</div>
              </div>
              <h3 className="text-[#bc9c6a] tracking-[0.4em] uppercase text-[10px] mb-2">01 — The Conduit</h3>
              <p className="italic text-xl">Floating Links Necklace</p>
            </motion.div>
          </div>

          {/* Card 02 - Right Aligned / Wide */}
          <div className="flex justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: luxuryEase }}
              className="w-full lg:w-1/2 group cursor-pointer"
            >
              <div className="aspect-video bg-[#1a0e13] mb-8 relative transition-transform duration-[2s] group-hover:scale-[0.98]">
                 <div className="w-full h-full flex items-center justify-center text-[#2b0f17]">[ Wide Ambient Shot ]</div>
              </div>
              <div className="text-right">
                <h3 className="text-[#bc9c6a] tracking-[0.4em] uppercase text-[10px] mb-2">02 — The Vessel</h3>
                <p className="italic text-xl">Hammered Gold Band</p>
              </div>
            </motion.div>
          </div>

        </section>
      </main>

      {/* 6. THE SUSPENDED FOOTER */}
      <footer className="py-32 flex flex-col items-center border-t border-[#bc9c6a]/10">
        <div className="mb-24 flex flex-col items-center">
          <div className="w-px h-32 bg-gradient-to-b from-[#bc9c6a] to-transparent mb-12" />
          <h2 className="text-4xl tracking-[1em] text-[#bc9c6a] pl-[1em]">818</h2>
        </div>
        
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] text-[#766050] mb-12">
          <a href="#" className="hover:text-[#bc9c6a] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#bc9c6a] transition-colors">Inquiries</a>
          <a href="#" className="hover:text-[#bc9c6a] transition-colors">Journal</a>
        </div>
        
        <p className="opacity-20 text-[8px] tracking-[0.6em] uppercase italic">
          Designed for the skin. Made for the spirit.
        </p>
      </footer>
    </div>
  );
};

export default Jewellery818;
                animate={{ opacity: 0.4 }}
                transition={{ duration: 2, delay: 2 }}
                className="mt-6 text-[10px] uppercase tracking-[0.5em] italic"
              >
                Sensory Atelier
              </motion.p>
            </div>

            {/* Subtle light pulse during load */}
            <motion.div 
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-[-20%] w-full h-[50%] bg-[#461420] blur-[150px] rounded-full opacity-10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. ATMOSPHERIC UI OVERLAYS */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* The Directional "Room Light" from Top Right */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[140%] bg-gradient-to-bl from-[#ede4d4]/15 via-transparent to-transparent blur-[140px] rotate-12" />
        
        {/* Subtle Bottom Vignette to ground the content */}
        <div className="absolute inset-0 shadow-[inset_0_-20vh_30vh_rgba(9,6,10,0.9)]" />
      </div>

      {/* 3. MAIN NAVIGATION */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-[60] mix-blend-difference">
        <span className="text-[10px] tracking-[0.8em] uppercase text-[#bc9c6a]">Menu</span>
        <h1 className="text-xl tracking-[0.5em] font-light">JEWELLERY 818</h1>
        <span className="text-[10px] tracking-[0.8em] uppercase text-[#bc9c6a]">Cart (0)</span>
      </nav>

      {/* 4. HERO SECTION */}
      <main className="relative pt-32">
        <section className="h-screen flex flex-col justify-center px-12 lg:px-32">
          <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: luxuryEase }}
              >
                <h2 className="text-7xl md:text-[10rem] leading-[0.8] font-light mb-12 flex flex-col">
                  <span>Eighty</span>
                  <span className="pl-16 md:pl-32 italic text-[#bc9c6a]">Eight</span>
                </h2>
                <div className="w-24 h-[1px] bg-[#bc9c6a] mb-8" />
                <p className="max-w-sm text-[#766050] text-sm uppercase tracking-widest leading-loose">
                  Architectural Adornment. <br /> 
                  Materialized in the shadow of light.
                </p>
              </motion.div>
            </div>
            
            {/* HERO IMAGE PLACEHOLDER: The "Expensive" Shadow Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3, ease: luxuryEase }}
              className="col-span-12 lg:col-span-5 aspect-[4/5] bg-[#1a0e13] mt-12 lg:mt-0 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#461420]/10 mix-blend-multiply" />
              <div className="w-full h-full flex items-center justify-center text-[#2b0f17] italic text-sm">
                [ Insert Macro: Gold Ring in Heavy Shadow ]
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. STAGGERED EDITORIAL GALLERY */}
        <section className="py-64 space-y-[40vh] px-6 lg:px-32">
          
          {/* Card 01 - Left Aligned */}
          <div className="flex justify-start">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: luxuryEase }}
              className="w-full lg:w-1/3 group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-[#110b0e] mb-8 relative transition-transform duration-[2s] group-hover:scale-[1.02]">
                 <div className="w-full h-full flex items-center justify-center text-[#2b0f17]">[ Portrait Shot ]</div>
              </div>
              <h3 className="text-[#bc9c6a] tracking-[0.4em] uppercase text-[10px] mb-2">01 — The Conduit</h3>
              <p className="italic text-xl">Floating Links Necklace</p>
            </motion.div>
          </div>

          {/* Card 02 - Right Aligned / Wide */}
          <div className="flex justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: luxuryEase }}
              className="w-full lg:w-1/2 group cursor-pointer"
            >
              <div className="aspect-video bg-[#1a0e13] mb-8 relative transition-transform duration-[2s] group-hover:scale-[0.98]">
                 <div className="w-full h-full flex items-center justify-center text-[#2b0f17]">[ Wide Ambient Shot ]</div>
              </div>
              <div className="text-right">
                <h3 className="text-[#bc9c6a] tracking-[0.4em] uppercase text-[10px] mb-2">02 — The Vessel</h3>
                <p className="italic text-xl">Hammered Gold Band</p>
              </div>
            </motion.div>
          </div>

        </section>
      </main>

      {/* 6. THE SUSPENDED FOOTER */}
      <footer className="py-32 flex flex-col items-center border-t border-[#bc9c6a]/10">
        <div className="mb-24 flex flex-col items-center">
          <div className="w-px h-32 bg-gradient-to-b from-[#bc9c6a] to-transparent mb-12" />
          <h2 className="text-4xl tracking-[1em] text-[#bc9c6a] pl-[1em]">818</h2>
        </div>
        
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] text-[#766050] mb-12">
          <a href="#" className="hover:text-[#bc9c6a] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#bc9c6a] transition-colors">Inquiries</a>
          <a href="#" className="hover:text-[#bc9c6a] transition-colors">Journal</a>
        </div>
        
        <p className="opacity-20 text-[8px] tracking-[0.6em] uppercase italic">
          Designed for the skin. Made for the spirit.
        </p>
      </footer>
    </div>
  );
};

export default Jewellery818;
                  
