const moveBall = (key, setBallPos) => {
  if (key === "ArrowRight") {
    setBallPos((prev) => (prev === 12 ? 12 : prev + 1));
  }
  if (key === "ArrowLeft") {
    setBallPos((prev) => (prev === 1 ? 1 : prev - 1));
  }
};

export { moveBall };