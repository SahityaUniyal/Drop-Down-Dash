function Arrow({ children, className, ...props }) {
  return (
    <button
      className={`bg-[#ff458c] dark:bg-[#E9213D] inline-block rounded-lg text-5xl sm:text-6xl dark:text-[#dcdcdc] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Arrow;
