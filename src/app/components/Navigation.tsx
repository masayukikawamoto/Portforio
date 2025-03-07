import "../../styles/globals.css";

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="text-2xl font-bold text-gray-900"></div>
        <div className="space-x-6">
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
