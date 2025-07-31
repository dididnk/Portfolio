import { useEffect, useState } from "react";

interface StarProps {
  id: number;
  size: number;
  x: number;
  Y: number;
  opacity: number;
  animationDuration: number;
}

interface MeteorProps {
  id: number;
  size: number;
  x: number;
  Y: number;
  delay: number;
  animationDuration: number;
}

export const StarBackground = () => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [meteros, setMeteors] = useState<MeteorProps[]>([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () =>{
        generateStars();
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Regenerate stars on window resize
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars: StarProps[] = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        Y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  // Regenerate Meteors on window resize
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors: MeteorProps[] = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        Y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            top: star.Y + "%",
            left: star.x + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        ></div>
      ))}

      {meteros.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            top: meteor.Y + "%",
            left: meteor.x + "%",
            animationDelay: meteor.delay + "",
            animationDuration: meteor.animationDuration + "s",
          }}
        ></div>
      ))}
    </div>
  );
};
