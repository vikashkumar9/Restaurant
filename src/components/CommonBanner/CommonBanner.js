const CommonBanner = ({ heading, description }) => {
  return (
    <div>
      <section className="bg-blue-900 h-[50vh] md:h-[78vh] text-white py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{heading}</h1>
          <p className="text-lg mb-6">{description}</p>
        </div>
      </section>
    </div>
  );
};

export default CommonBanner;