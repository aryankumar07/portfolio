import React, { useEffect } from "react"
import Particle from "../libs/particles"

interface AnimatedNameProps {
  title: string
}


const AnimatedName: React.FC<AnimatedNameProps> = ({
  title
}) => {


  useEffect(() => {
    const canvas = document.getElementById("canva") as HTMLCanvasElement
    let ctx: CanvasRenderingContext2D
    let particleArray: Particle[] = []
    if (canvas instanceof HTMLCanvasElement) {
      ctx = canvas.getContext("2d")!;
      canvas.width = 150;
      canvas.height = 50;
    } else {
      return
    }
    ctx.font = "50px Arial";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white";
    const text = title;
    const textWidth = ctx.measureText(text).width;
    const x = (canvas.width - textWidth) / 2;
    const y = canvas.height / 2;
    ctx.fillText(text, x, y);
    const imageInfo = ctx.getImageData(0, 0, 150, 50)
    console.log(imageInfo)
    const mouse = {
      x: 0,
      y: 0,
      radius: 20
    }
    const updateMouse = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect(); // Get canvas position and size
      mouse.x = event.clientX - rect.left; // Adjust for canvas position
      mouse.y = event.clientY - rect.top; // Adjust for canvas position
    };
    document.addEventListener("mousemove", updateMouse)


    function init() {
      particleArray = [];
      const gap = 2;
      for (let y = 0; y < imageInfo.height; y += gap) {
        for (let x = 0; x < imageInfo.width; x += gap) {
          const index = (y * imageInfo.width + x) * 4;
          const alpha = imageInfo.data[index + 3];
          if (alpha > 0) {
            const particleX = x;
            const particleY = y;
            particleArray.push(new Particle(particleX, particleY, ctx, mouse));
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particleArray.forEach((particle) => {
        particle.update()
        particle.draw()
      })
      requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      document.removeEventListener("mousemove", updateMouse)
    }
  }, [title])



  return (
    <canvas id="canva"> No Support! </canvas>
  )
}

export default AnimatedName
