import Link from "next/link"

const links = [

  { url: "/", title: "Inicio" },
  { url: "/about", title: "Nosotros" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contacto" },
  
];

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/*logo */}
    <div className="">
        <Link 
        href="/"
        className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
        <span className="text-white mr-1">Test</span>
        <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Hola</span>
        </Link>
    </div>
    {/* MENU */}
    <div className="">
      {/* BOTON MENU */}
      <button className="w-10 h-8 flex flex-col justify-between"> 
        <div className="w-10 h-1 bg-black rounded"></div>
        <div className="w-10 h-1 bg-black rounded"></div>
        <div className="w-10 h-1 bg-black rounded"></div>
      </button>
      {/* LISTA MENU */}
        <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4x1">
          {links.map((link => (
            <link href={link.url} key={link.title}>
            {link.title}
            </link>
       )))}
      </div>
    </div>
    </div>
    ) 
};

export default Navbar