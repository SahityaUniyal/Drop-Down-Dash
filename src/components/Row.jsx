function Row({ rowGap }) {
  if (rowGap == 1) {
    return (
      <div className="grid h-3 grid-cols-12">
        <div className="min-w-0 bg-black"></div>
        <div className="min-w-0 bg-[#E84381] dark:bg-[#FF4655] col-span-11"></div>
      </div>
    );
  }
  if (rowGap === 12) {
    return (
      <div className="grid h-3 grid-cols-12">
        <div className="min-w-0 bg-[#E84381] dark:bg-[#FF4655] col-span-11"></div>
        <div className="min-w-0 bg-black"></div>
      </div>
    );
  }
  return (
    <div className="grid h-3 grid-cols-12">
      <div
        style={{ gridColumn: `span ${rowGap - 1} / span ${rowGap - 1}` }}
        className="min-w-0 bg-[#E84381] dark:bg-[#FF4655]"
      ></div>
      <div className="min-w-0 bg-black"></div>
      <div
        style={{ gridColumn: `span ${12 - rowGap} / span ${12 - rowGap}` }}
        className="min-w-0 col-span-7 bg-[#E84381] dark:bg-[#FF4655]"
      ></div>
    </div>
  );
}

export default Row;
