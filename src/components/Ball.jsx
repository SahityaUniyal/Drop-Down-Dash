function Ball({ ballPos }) {
  if (ballPos === 1) {
    return (
      <div className="grid h-3 grid-cols-12">
        <div className="min-w-0 bg-black"></div>
        <div className="min-w-0  bg-white col-span-11"></div>
      </div>
    );
  }
  if (ballPos === 12) {
    return (
      <div className="grid h-3 grid-cols-12">
        <div className="min-w-0 bg-white col-span-11"></div>
        <div className="min-w-0 bg-black"></div>
      </div>
    );
  }
  return (
    <>
      <div className="grid h-3 grid-cols-12">
        <div
          style={{ gridColumn: `span ${ballPos - 1} / span ${ballPos - 1}` }}
          className="min-w-0 bg-white"
        ></div>
        <div className="min-w-0 bg-black"></div>
        <div
          style={{ gridColumn: `span ${12 - ballPos} / span ${12 - ballPos}` }}
          className="min-w-0 col-span-7 bg-white"
        ></div>
      </div>
    </>
  );
}

export default Ball;
