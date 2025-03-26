import Carousel from "./Carrusel";

const icelandCities = {
  cities: [
    {
      name: "Reykjavik",
      country: "Iceland",
      continent: "Europe",
      description:
        "The capital and largest city of Iceland, known for its vibrant arts scene, colorful buildings, and geothermal pools.",
      photoLink:
        "https://images.pexels.com/photos/6274066/pexels-photo-6274066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Akureyri",
      country: "Iceland",
      continent: "Europe",
      description:
        "A charming town in northern Iceland, often referred to as the 'Capital of North Iceland', surrounded by mountains and fjords.",
      photoLink:
        "https://images.pexels.com/photos/3576263/pexels-photo-3576263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Vík",
      country: "Iceland",
      continent: "Europe",
      description:
        "A small village in southern Iceland, famous for its black sand beaches and dramatic coastal cliffs.",
      photoLink:
        "https://images.pexels.com/photos/9897267/pexels-photo-9897267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Húsavík",
      country: "Iceland",
      continent: "Europe",
      description:
        "Known as the whale-watching capital of Iceland, this town offers stunning views of the Arctic Ocean.",
      photoLink:
        "https://images.pexels.com/photos/4338106/pexels-photo-4338106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Egilsstaðir",
      country: "Iceland",
      continent: "Europe",
      description:
        "A town in eastern Iceland, serving as a gateway to the region's vast wilderness and scenic landscapes.",
      photoLink:
        "https://images.pexels.com/photos/27063411/pexels-photo-27063411/free-photo-of-islandia-naturaleza-cascada-medio-ambiente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Seyðisfjörður",
      country: "Iceland",
      continent: "Europe",
      description:
        "A picturesque town nestled in a fjord, known for its colorful houses and artistic community.",
      photoLink:
        "https://images.pexels.com/photos/19742815/pexels-photo-19742815/free-photo-of-islandia-punto-de-referencia-calle-pueblo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Ísafjörður",
      country: "Iceland",
      continent: "Europe",
      description:
        "The largest town in the Westfjords, surrounded by dramatic mountains and fjords.",
      photoLink:
        "https://images.pexels.com/photos/5867401/pexels-photo-5867401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Höfn",
      country: "Iceland",
      continent: "Europe",
      description:
        "A coastal town in southeastern Iceland, famous for its lobster and stunning views of Vatnajökull glacier.",
      photoLink:
        "https://images.pexels.com/photos/15264698/pexels-photo-15264698/free-photo-of-resfriado-frio-mar-puesta-de-sol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Selfoss",
      country: "Iceland",
      continent: "Europe",
      description:
        "A town in southern Iceland, known for its proximity to the Golden Circle and fertile farmlands.",
      photoLink:
        "https://images.pexels.com/photos/16251294/pexels-photo-16251294/free-photo-of-casas-calle-casa-mesas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Keflavík",
      country: "Iceland",
      continent: "Europe",
      description:
        "A town near the international airport, known for its maritime history and proximity to the Blue Lagoon.",
      photoLink:
        "https://images.pexels.com/photos/15264753/pexels-photo-15264753/free-photo-of-puesta-de-sol-casas-casa-luz-del-sol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Hveragerði",
      country: "Iceland",
      continent: "Europe",
      description:
        "A small town known for its geothermal activity, hot springs, and greenhouses.",
      photoLink:
        "https://images.pexels.com/photos/15791217/pexels-photo-15791217/free-photo-of-montanas-casas-arboles-casa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Stykkishólmur",
      country: "Iceland",
      continent: "Europe",
      description:
        "A charming town on the Snæfellsnes Peninsula, known for its colorful houses and stunning coastal views.",
      photoLink:
        "https://images.pexels.com/photos/18529304/pexels-photo-18529304/free-photo-of-islandia-mar-ciudad-barcos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
};
const images = icelandCities.cities.map((city) => city.photoLink);

export default function Home() {
  return (
    <div className="h-[90vh] bg-[#e2e8f0] text-gray-900 flex flex-row gap-4 justify-center items-center">
      <div className="h-[75vh] w-[80%] mt-22 rounded flex justify-center items-center 
      bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 
      shadow-lg 
      backdrop-blur-md bg-opacity-80 relative overflow-hidden">
        
        {/* Textura de fondo */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/fresh-snow.png')] opacity-80"></div>

        {/* Carrusel */}
        <div className="w-[90%]">
          <Carousel images={images} />
        </div>

      </div>
    </div>
  );
}

  