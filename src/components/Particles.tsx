import { useCallback, useMemo, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface ParticlesBgProps {
  id?: string;
}

export const ParticlesBg: React.FC<ParticlesBgProps> = ({ id = "tsparticles" }) => {
  const [particleCount, setParticleCount] = useState(20); // Initial particle count

  // Adjust particle count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setParticleCount(5); // Less particles on small screens (mobile)
      } else if (window.innerWidth < 1024) {
        setParticleCount(10); // Medium particles on tablet screens
      } else {
        setParticleCount(20); // More particles on larger screens
      }
    };

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Call it once to set initial state
    handleResize();

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const options = useMemo(() => {
    return {
      background: {
        color: "#F5F5FA", // Background color
      },
      fullScreen: {
        enable: true, // Ensures the background is fullscreen
        zIndex: -1, // Keeps it behind other content
      },
      interactivity: {
        events: {
          onClick: {
            enable: false, // Disables click to add particles
          },
          onHover: {
            enable: false, // Disables hover interaction
          },
        },
      },
      particles: {
        number: {
          value: particleCount, // Dynamic particle count based on screen size
        },
        color: {
          value: "#9449CB80", // Particle color with opacity
        },
        move: {
          enable: true, // Enable movement
          speed: 1.5, // Speed of particle movement
        },
        size: {
          value: { min: 4, max: 6 }, // Size of particles (larger than before)
        },
        opacity: {
          value: 0.3, // Opacity of particles
        },
        shape: {
          type: ["circle", "triangle"] // Particle shape
        },
        links: {
          enable: true, // Enable particle connections
          distance: 100, // Distance at which particles will be connected
          color: "#9449CB80", // Color of the links
          opacity: 0.4, // Opacity of the links
          width: 0.5, // Width of the links
        },
      },
    };
  }, [particleCount]);

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine); // Loads the slim version of tsparticles
  }, []);

  return <Particles id={id} init={particlesInit} options={options} />;
};
