'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';

interface CardData {
  title: string;
  icon: string;
}

// ----- Single TiltCard Component -----
interface TiltCardProps {
  title: string;
  icon: string;
}

function TiltCard({ title, icon }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Tilt transforms
  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="rounded-3xl shadow-2xl flex flex-col items-center justify-center cursor-pointer h-66 "
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',// gradient with opacity
        backdropFilter: 'blur(20px)',
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <Image src={icon} alt={title} width={100} height={100} />
      <p className="mt-8 text-xl font-bold text-white">{title}</p>
    </motion.div>
  );
}

// ----- Grid Component -----
export default function TiltCardGrid() {
  const cards: CardData[] = [
    { title: 'Flutter', icon: '/flutter.svg' },
    { title: 'React Native', icon: '/react.svg' },
    { title: 'Next JS', icon: '/nextLogo.svg' },
    { title: 'Nest JS', icon: '/nestjs.svg' },
    { title: 'Typescript', icon: '/typescript.svg' },
    { title: 'Dart', icon: '/dart.svg' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 justify-center p-16">
      {cards.map((card) => (
        <TiltCard key={card.title} title={card.title} icon={card.icon} />
      ))}
    </div>
  );
}
