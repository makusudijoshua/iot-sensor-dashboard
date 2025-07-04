import React from "react";
import Card from "@/app/components/ui/Card";
import { AudioLines, ThermometerSun, Waves } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20">
      <div className="flex flex-col gap-16 md:flex-row md:gap-6">
        <Card
          currentReading={10}
          icon={<ThermometerSun className="h-6 w-6" />}
          previousReading={20}
          title={"Temperature"}
          type={"temperature"}
        />
        <Card
          currentReading={50}
          icon={<Waves className="h-6 w-6" />}
          previousReading={30}
          title={"Humidity"}
          type={"humidity"}
        />
        <Card
          currentReading={40}
          icon={<AudioLines className="h-6 w-6" />}
          sensitivityLevel={10}
          title={"Sound"}
          type={"sound"}
        />
      </div>
    </section>
  );
};

export default Hero;
