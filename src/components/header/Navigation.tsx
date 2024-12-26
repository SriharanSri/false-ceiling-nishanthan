const navItems = [
  { label: "Home", href: "#" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
