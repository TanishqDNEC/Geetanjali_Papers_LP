import { motion } from "framer-motion";

const cards = [
    {
      title: "PREMIUM QUALITY",
      caption: "World class",
      image: "src/images/PremiumQuality.png",
      bg: "bg-[#0f172a]",
    },
    {
      title: "LOWEST PRICE",
      caption: "Guaranteed",
      image: "src/images/Coin.png",
      bg: "bg-[#f97316]",
    },
    {
      title: "EXPRESS SERVICES",
      caption: "Always ontime",
      image: "src/images/fast.png",
      bg: "bg-[#393E46]", // updated lighter mint color
    },
  ];
  

export default function DedicatedSection() {
  return (
    <div className="min-h-screen py-16 bg-white text-center px-4">
      <h2 className="text-4xl font-extrabold text-black mb-4">WE ARE DEDICATED TO</h2>
      <div className="w-12 h-1 bg-black mx-auto mb-12"></div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div
              className={`w-[300px] h-[300px] ${card.bg} rounded-lg flex items-center justify-center shadow-xl`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-[180px] h-[180px] object-contain"
              />
            </div>
            <p className="text-xl font-extrabold text-black mt-4">{card.title}</p>
            <p className="text-teal-600 italic text-sm">{card.caption}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
