import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ChevronRight, Menu, MapPin, Phone, ArrowUpRight, MousePointer2 } from "lucide-react";
import Showcase from "./components/Showcase";
import Inventory from "./components/Inventory";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Collection", type: "page" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Investors", href: "#" },
];

const faqItems = [
  { q: "What are the requirements to book?", a: "You must be at least 21 years old (25 for certain elite models), have a valid driver's license, and provide proof of full coverage insurance." },
  { q: "What if I don't have full coverage insurance?", a: "We offer various rental car damage protection options. Please contact our team for details on opting in." },
  { q: "Do I still need personal car insurance if I opt in for protection?", a: "Rental damage protection is not a substitute for personal liability insurance. Requirements vary, so please confirm with your agent." },
  { q: "Can I add an additional driver to my rental?", a: "Yes, additional drivers can be added for a fee, provided they meet all age and insurance requirements." },
  { q: "What if my insurance deductible is over $2,500?", a: "We may require an additional security deposit or supplemental coverage in certain high-deductible cases." },
  { q: "Do you have any extra hidden fees?", a: "Transparency is key. We detail all costs upfront, including delivery, fuel, and security deposits." },
  { q: "Insurance requirements for business rentals?", a: "Business rentals require commercial insurance coverage or a verified corporate policy. Contact us for specifics." },
  { q: "Do you offer delivery service?", a: "Yes! We offer delivery to New York (NY) and New Jersey (NJ) and custom locations across the area." },
  { q: "How many miles are included with my rental?", a: "Standard rentals typically include 100-150 miles per day. Excess mileage fees apply thereafter." },
  { q: "What is your security deposit policy?", a: "A refundable security deposit is required for all rentals. The amount varies based on the vehicle selected." },
  { q: "What is your cancellation policy?", a: "Cancellations made 72+ hours in advance are eligible for a credit. Late cancellations may incur fees." },
  { q: "Do you offer pick-up or drop-off outside of business hours?", a: "Yes, we offer flexible pick-up and drop-off options. Please coordinate with our team in advance for after-hours service." },
  { q: "Do you offer roadside assistance?", a: "Every rental includes 24/7 roadside assistance for your peace of mind while exploring the NY/NJ area." },
  { q: "Less than 72 hour reservation?", a: "While we prefer advance booking, we can often accommodate last-minute requests. Check availability directly for same-day requests." },
  { q: "Do you offer military discount?", a: "We are proud to support our service members. Please inquire about our military discount program when booking." },
];

const specs = [
  { val: "$715", label: "Starting / Day" },
  { val: "Elite", label: "Collection" },
  { val: "MIAMI", label: "Coverage" },
  { val: "24/7", label: "Support" },
];

export default function App() {
  const [showInventory, setShowInventory] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <div className="relative bg-black font-sans selection:bg-red-500 selection:text-white overflow-x-hidden" id="home">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 bg-grain pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-red-950/5 to-transparent" />

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-100 flex items-center gap-2 px-2 py-2 bg-black/60 backdrop-blur-2xl border border-white/5 rounded-full pointer-events-auto shadow-2xl">
        <div className="flex items-center gap-3 px-6 py-2 border-r border-white/10">
          <img 
            src="https://scontent-lga3-1.cdninstagram.com/v/t51.82787-19/526703414_17852401122503048_6359411001709861290_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=kzFGTBJd2ngQ7kNvwHCeAIb&_nc_oc=AdpBzAtLfUSf58lbGQ7H-x-kXyePdzMi4vfXPdgwHHFGjOOPIYtCVb2zgh7yBX41CoZlv9p69phK-YkZZRsILwJk&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_gid=4iA01epEyhECIB4zBDKZ8A&_nc_ss=7a22e&oh=00_Af2_J-F0jYbIWBXWh0X-wVGqeAccL7Km0tfr6WbpYSbB-g&oe=69F29EA0" 
            alt="Sins Exotic Car Rental" 
            className="h-10 w-10 object-cover rounded-full"
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white hidden md:block">Sins Exotic Car Rental</span>
        </div>
        <div className="flex items-center gap-1 md:gap-4 px-2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.type === "page") {
                  e.preventDefault();
                  setShowInventory(true);
                }
              }}
              className="px-4 py-2 text-[9px] uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        <button 
          onClick={() => setShowInventory(true)}
          className="ml-2 bg-red-600 text-white px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-red-500 transition-colors shadow-[0_0_20px_rgba(227,27,35,0.3)]"
        >
          Book Now
        </button>
      </nav>

      {/* HERO SECTION */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-10 md:px-24 pt-32"
      >
        <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-20">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-red-600" />
                <span className="text-[10px] font-medium uppercase tracking-[0.6em] text-red-500">Elite Collection</span>
              </div>
              <h1 className="text-7xl md:text-9xl lg:text-[120px] font-serif leading-[0.9] uppercase tracking-tight mb-12">
                Experience <br/> 
                <span className="text-outline italic">Perfection.</span>
              </h1>
              <div className="grid grid-cols-2 gap-12 max-w-md border-t border-white/5 pt-12">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2 font-sans">Our Fleet</p>
                  <p className="text-sm font-light leading-relaxed text-white/70">Exotic Cars / Luxury Cars / Elite service</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2 font-sans">Our Locations</p>
                  <p className="text-sm font-light leading-relaxed text-white/70">NY / NJ</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="relative group">
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.5 }}
              className="relative aspect-3/4 w-full bg-luxury-grey rounded-sm overflow-hidden"
            >
              <img 
                src="https://static.wixstatic.com/media/dfb3c4_0fd7d8ad30e046cd8149d8b77cd62c79~mv2.jpeg/v1/fill/w_590,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Roller%20Pics_JPEG.jpeg" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-editorial"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-4xl font-serif mb-1 tracking-normal italic">Sins Exotic</p>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-medium">Refined Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global Specs - Refined */}
        <div className="w-full max-w-[1600px] mt-24 border-y border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/5">
          {specs.map((spec, i) => (
            <div key={i} className="px-10 py-12 flex flex-col gap-2 group hover:bg-white/[0.02] transition-colors">
              <span className="text-[9px] font-sans text-white/20 tracking-widest uppercase">{spec.label}</span>
              <span className="text-4xl font-serif tracking-tight group-hover:text-red-500 transition-colors uppercase">{spec.val}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SHOWCASE SECTION */}
      <div id="fleet" className="relative z-10">
        <Showcase />
      </div>

      {/* SERVICES */}
      <section id="services" className="relative z-20 py-40 bg-black px-10 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-2xl">
              <span className="text-[10px] font-medium uppercase tracking-[0.8em] text-red-500 mb-6 block">Concierge Support</span>
              <h2 className="text-6xl md:text-8xl leading-[0.85] font-serif uppercase">Premium <br/> <span className="text-outline italic">Experience.</span></h2>
            </div>
            <div className="flex flex-col items-end text-right">
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8 uppercase tracking-widest font-sans">
                Bespoke chauffeur / Seamless logistics / 24-hour concierge
              </p>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-red-600/40" />)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {/* Featured Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-8 group relative bg-luxury-grey rounded-sm overflow-hidden border border-white/5"
            >
              <img src="https://static.wixstatic.com/media/dfb3c4_c0a36ab317df453aa2e9e293710567a1~mv2.jpg" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-luxury" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent h-full" />
              <div className="absolute bottom-12 left-12">
                <h3 className="text-4xl font-serif mb-4 uppercase tracking-tight">Luxury Concierge</h3>
                <p className="text-white/60 text-sm max-w-sm font-light leading-relaxed">Dedicated service tailored to your absolute requirements.</p>
              </div>
              <div className="absolute top-12 right-12 text-3xl font-serif font-light text-white/5 italic">01</div>
            </motion.div>

            {/* Square Bento Item */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-4 group bg-red-600 p-12 rounded-sm flex flex-col justify-between hover:bg-neutral-900 transition-luxury cursor-pointer"
            >
              <div className="text-white">
                <h3 className="text-4xl font-serif mb-6 uppercase italic">Bespoke Experience</h3>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-white/80 text-sm font-light leading-relaxed">Elevate your presence with our curated automotive collection and personal delivery.</p>
                <ArrowUpRight size={40} className="text-white/40 group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.div>

            {/* Small Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-4 bg-luxury-grey p-10 border border-white/5 hover:border-red-500/20 transition-luxury"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="w-12 h-12 bg-white/[0.03] flex items-center justify-center rounded-full">
                  <Phone size={18} className="text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-2 uppercase tracking-wide">Refined Support</h4>
                  <p className="text-white/40 text-[11px] font-light leading-relaxed">24-hour dedicated assistance for every journey.</p>
                </div>
              </div>
            </motion.div>

            {/* Horizontal Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-8 group relative bg-luxury-grey rounded-sm overflow-hidden border border-white/5 flex items-center p-12"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center w-full">
                <div className="w-20 h-20 border border-red-500/20 flex items-center justify-center rounded-full shrink-0">
                  <div className="w-14 h-14 border border-white/5 rounded-full" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-serif mb-3 uppercase italic">VIP Delivery Services</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Seamless delivery across our multiple state locations.</p>
                </div>
                <button className="px-10 py-4 bg-white/[0.03] border border-white/10 text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-red-600 transition-luxury shrink-0">Inquire</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-20 py-48 bg-black">
        <div className="max-w-[1400px] mx-auto px-10 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-12">
                <div className="w-12 h-px bg-red-600" />
                <span className="text-[10px] font-medium uppercase tracking-[0.8em] text-red-500">Our Legacy</span>
              </div>
              <h2 className="text-7xl md:text-9xl font-serif uppercase leading-[0.85] mb-12 italic text-outline">Sophisticated <br/> <span className="not-italic text-white">Refinement.</span></h2>
              <div className="space-y-8 text-white/60 text-xl leading-relaxed font-light">
                <p>
                  Sins Exotic is the premier curator of high-performance automotive experiences, serving New York and New Jersey with absolute distinction.
                </p>
                <p className="text-base text-white/30 uppercase tracking-[0.2em] font-sans leading-loose">
                  Our fleet is a meticulously selected assembly of the world's most elite vehicles, maintained to exacting standards and presented with professional grace.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/5 pt-16">
                <div>
                  <p className="text-5xl font-serif mb-2">02</p>
                  <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-red-500">Key Hubs</p>
                </div>
                <div>
                  <p className="text-5xl font-serif mb-2 italic text-red-500">Total</p>
                  <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-red-500">Commitment</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative aspect-3/4 bg-white/[0.01] border border-white/5 flex items-center justify-center p-8 overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-red-600/10 blur-3xl group-hover:scale-150 transition-luxury duration-1000" />
              <img 
                src="https://static.wixstatic.com/media/dfb3c4_b6f26321e375441caaf70f3e26f8cef5~mv2.jpg" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-luxury"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative z-20 bg-luxury-black border-t border-white/5 px-10 pt-40 pb-20 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-12">
              <img 
                src="https://scontent-lga3-1.cdninstagram.com/v/t51.82787-19/526703414_17852401122503048_6359411001709861290_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=kzFGTBJd2ngQ7kNvwHCeAIb&_nc_oc=AdpBzAtLfUSf58lbGQ7H-x-kXyePdzMi4vfXPdgwHHFGjOOPIYtCVb2zgh7yBX41CoZlv9p69phK-YkZZRsILwJk&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_gid=4iA01epEyhECIB4zBDKZ8A&_nc_ss=7a22e&oh=00_Af2_J-F0jYbIWBXWh0X-wVGqeAccL7Km0tfr6WbpYSbB-g&oe=69F29EA0" 
                alt="Sins Exotic" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <span className="text-xl font-serif tracking-tight text-white uppercase leading-none block italic">Sins Exotic</span>
                <span className="text-[10px] tracking-[0.4em] text-red-500 font-medium uppercase mt-1">Car Rental</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30 italic">
              <p>NY / NJ Territories</p>
              <p>Professional Concierge</p>
              <p>Established Elegance</p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.6em] mb-12 text-red-500">Fleet Interface</h4>
            <div className="flex flex-col gap-8 text-[11px] font-medium uppercase tracking-[0.3em] text-white/40">
              {["Our Fleet", "Concierge Support", "Private Access", "Inquire"].map(label => (
                <a key={label} href="#" className="hover:text-red-500 transition-luxury w-fit">{label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-medium uppercase tracking-[0.6em] mb-12 text-red-500">Contact</h4>
            <div className="flex flex-col gap-8 text-[11px] font-medium uppercase tracking-[0.3em] text-white/30">
              <p>New York Operations</p>
              <p>New Jersey Logistics</p>
              <p>Private Bookings</p>
            </div>
          </div>

          <div className="relative p-12 bg-white/[0.02] border border-white/5 overflow-hidden group">
            <h4 className="relative text-[10px] font-medium uppercase tracking-[0.4em] mb-8 text-white">Join the Elite</h4>
            <button className="relative w-full py-5 bg-red-600 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-luxury">
              Book Today
            </button>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] tracking-[0.2em] text-white/10 uppercase">© 2025 Sins Exotic Car Rental // All Rights Reserved.</p>
          <div className="flex gap-10">
            {["Terms", "Privacy", "Concierge"].map(link => (
              <a key={link} href="#" className="text-[10px] tracking-[0.2em] text-white/10 hover:text-red-500 transition-luxury uppercase">{link}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Fleet Overlay Component */}
      <AnimatePresence>
        {showInventory && (
          <Inventory onClose={() => setShowInventory(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}



