const Card = () => {
  return (
    <div className="h-full overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src="image-url"
          alt="Flag of Brazil"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-sm text-gray-600">
        <h2 className="text-xl font-semibold mb-4">Brazil</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <span className="font-semibold">Capital:</span>
            <span>Brazil</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold">Region:</span>
            <span>South America</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold">Population:</span>
            <span>212600000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
