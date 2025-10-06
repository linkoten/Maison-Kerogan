import dynamic from "next/dynamic";

const Map = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[250px] border border-black bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-xl">
      <div className="flex flex-col items-center gap-3 text-gray-600">
        <div className="w-8 h-8 border-2 border-vert border-t-transparent rounded-full animate-spin"></div>
        <span className="text-sm font-medium">Chargement de la carte...</span>
      </div>
    </div>
  ),
});

export default Map;
