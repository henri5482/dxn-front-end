import Image from "next/image";
import FondoAbout from "./components/fonto";
import Mienbros from "./components/mienbros";

export default function Page() {
  return (
    <>
    <head>  
        <title>Sobre Nosotros - DXN Ayacucho</title>
        <meta name="description" content="Conoce al equipo de DXN Ayacucho, con más de 2 años de experiencia en la venta de productos DXN. Ofrecemos asesoría y herramientas para ayudarte a transformar tu vida y alcanzar tus metas personales." />
        <meta name="keywords" content="DXN, Ayacucho, equipo, venta de productos, asesoría, bienestar, salud" />
        <meta property="og:title" content="Sobre Nosotros - DXN Ayacucho" />
        <meta property="og:description" content="Descubre el equipo de DXN Ayacucho, con una sólida experiencia en la venta de productos DXN y nuestro compromiso para ayudarte a alcanzar tus objetivos personales y profesionales." />
        <meta property="og:image" content="/homedxn.jpeg" />
        <meta property="og:url" content="https://dxnayacucho.vercel.app/sobre-nosotros" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre Nosotros - DXN Ayacucho" />
        <meta name="twitter:description" content="Conoce al equipo de DXN Ayacucho y cómo te ayudamos a transformar tu vida a través de nuestros productos y asesoría experta." />
        <meta name="twitter:image" content="/homedxn.jpeg" />
        <link rel="canonical" href="https://dxnayacucho.vercel.app/sobre-nosotros" /> {/* Enlace canónico apuntando a la página específica */}
      </head>
      <div className=" py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 lg:px-36">
          <div className="flex-1 max-w-lg mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              Sobre <span className="text-red-800">Nosotros</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed py-4 text-gray-600">
              Somos un equipo de Ayacucho  con más de 2 años de experiencia en DXN. Nos especializamos en guiar a nuevos integrantes en el ámbito de la venta de nuestros productos, resaltando sus beneficios para la salud y el bienestar. Trabajar con DXN ofrece una oportunidad única para transformar tu vida y alcanzar tus metas personales. Nos dedicamos a empoderar a cada miembro con las herramientas y conocimientos necesarios para prosperar en este negocio. Únete a nosotros y descubre cómo DXN puede ser el cambio que estás buscando.
            </p>
          </div>
          <div className="flex-1 max-w-md">
            <Image
              src="/homedxn.jpeg"
              alt="Imagen de DXN"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <FondoAbout />
      <Mienbros />
    </>
  );
}
