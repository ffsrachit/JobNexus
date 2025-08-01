import React from 'react';
import {
  Code,
  Server,
  ImageIcon,
  BarChart,
  MonitorSmartphone,
  Palette,
  Settings,
  Smartphone,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';
import { Button } from './ui/button';

const categories = [
  { title: 'Frontend Developer', icon: <Code size={18} /> },
  { title: 'Backend Developer', icon: <Server size={18} /> },
  { title: 'Graphic Designer', icon: <ImageIcon size={18} /> },
  { title: 'Data Science', icon: <BarChart size={18} /> },
  { title: 'Full Stack Developer', icon: <MonitorSmartphone size={18} /> },
  { title: 'UI/UX Designer', icon: <Palette size={18} /> },
  { title: 'DevOps Engineer', icon: <Settings size={18} /> },
  { title: 'Mobile Developer', icon: <Smartphone size={18} /> },
];

const CategoryCarousel = () => {
  return (
    <div className="bg-blue-50 rounded-3xl py-10 px-6 max-w-md mx-auto my-16 shadow-md relative">
      <h2 className="text-center text-2xl font-bold text-blue-900 mb-8">
        Explore Job Categories
      </h2>

      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {categories.map((cat, index) => (
            <CarouselItem
              key={index}
              className="basis-full flex justify-center"
            >
              <Button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6 py-3 text-base font-medium flex items-center gap-2 shadow-md">
                {cat.icon}
                {cat.title}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow hover:bg-gray-100" />
        <CarouselNext className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow hover:bg-gray-100" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
