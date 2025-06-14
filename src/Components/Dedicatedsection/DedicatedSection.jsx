import { motion } from "framer-motion";

const cards = [
    {
      title: "PREMIUM QUALITY",
      caption: "World class",
      image: "https://imgs.search.brave.com/fYTi-pt4iwkG7eXinLG54UE_R2WBrNCMqTgYnvduHI4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTMv/MjI2LzAzOC9zbWFs/bC9wcmVtaXVtLXF1/YWxpdHktZ29sZGVu/LW1lZGFsLXF1YWxp/dHktYmFkZ2VzLXN0/b2NrLWlsbHVzdHJh/dGlvbi1wbmcucG5n",
      bg: "bg-[#0f172a]",
    },
    {
      title: "LOWEST PRICE",
      caption: "Guaranteed",
      image: "https://png.pngtree.com/png-vector/20240917/ourmid/pngtree-stack-of-dollar-gold-coin-exchange-rate-with-falling-price-and-vector-png-image_13734014.png",
      bg: "bg-[#f97316]",
    },
    {
      title: "EXPRESS SERVICES",
      caption: "Always ontime",
      image: "https://imgs.search.brave.com/u8pqCYDr1x1iXoQQlUG6j6Av5AeVIByJ54yE0jYN4BE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/OTg2NzUwOC92ZWN0/b3IvdmVjdG9yLWJh/Y2tncm91bmQtdGVj/aG5vbG9neS1pbi10/aGUtY29uY2VwdC1v/Zi1zcGVlZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NURa/c3lkb18yMFAzWEU3/OURvd1VISHB2OXBY/T3dxenVDWF9JRml4/OFRMMD0",
      bg: "bg-[#0a0f2c ]",
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
