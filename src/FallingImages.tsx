import { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';

const FallingImages = ({ imagePath }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newItem = {
        id: Date.now(),
        imagePath,
        duration: 5 + Math.random() * 10, // Random duration for the animation, 5 to 15 seconds
        delay: Math.random() * 2, // Random delay to start the animation, up to 2 seconds
        right: Math.random() * 100 // Random horizontal start position, 0 to 100%
      };

      setItems(currentItems => [...currentItems, newItem]);

      // Cleanup and limit the number of items to prevent performance issues
      if (items.length >= 20) { // Adjust the limit as needed
        clearInterval(intervalId);
      }
    }, 2000); // Adjust this interval to control how frequently new items are added

    return () => clearInterval(intervalId);
  }, [items.length, imagePath]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 1000 }}>
      {items.map(item => (
        <animated.div
          key={item.id}
          style={{
            position: 'absolute',
            willChange: 'transform',
            ...useSpring({
              from: { transform: `translate3d(${item.right}vw, -100%, 0)` },
              to: { transform: `translate3d(${item.right}vw, 100vh, 0)` },
              config: { duration: item.duration * 1000 },
              delay: item.delay * 1000,
            })
          }}
        >
          <img src={item.imagePath} alt="Falling item" style={{ maxWidth: '50px', height: 'auto' }} />
        </animated.div>
      ))}
    </div>
  );
};

export default FallingImages;
