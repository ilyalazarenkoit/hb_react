import { useEffect, useRef } from "react";

export const FallingSymbols = () => {
  const canvasRef = useRef(null);
  let width = window.innerWidth;
  let height = window.innerHeight;
  let font = 11;
  let yPositions = Array(300).join(0).split("");

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    const intervalId = setInterval(() => {
      matrix(context, width, height, font, yPositions);
    }, 60);

    return () => clearInterval(intervalId);
  }, [width, height, font, yPositions]);
  function matrix(context, width, height, font, yPositions) {
    context.fillStyle = "rgba(0,0,0,.08)";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "#37cc05";
    context.font = font + "px system-ui";
    yPositions.map((y, index) => {
      const text = String.fromCharCode(1e2 + Math.random() * 1500);
      const x = index * 12;
      context.fillText(text, x, y);
      if (y > 100 + Math.random() * 1e5) {
        yPositions[index] = 0;
      } else {
        yPositions[index] = y + 15;
      }
    });
  }
  return (
    <div className="entry-page">
      <canvas
        id="canvas"
        className="is-hidden"
        style={{
          margin: 0,
          padding: 0,
          position: "fixed",
          top: 0,
          left: 0,
          border: "none",
          display: "block",
        }}
        ref={canvasRef}
      />
      <div className="container"></div>
    </div>
  );
};
