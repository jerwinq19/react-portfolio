import { useRef, useEffect } from "react";
import interact from "interactjs";

export function useDrag() {
  const dragRef = useRef(null);

  useEffect(() => {
    if (dragRef.current) {
      interact(dragRef.current).draggable({
        listeners: {
          move(event) {
            const target = event.target;
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            target.style.transform = `translate(${x}px, ${y}px)`;
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          },
        },
      });
      console.log("dasdsa")
    }
  }, []);

  return dragRef
}

