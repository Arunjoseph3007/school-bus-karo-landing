import { Logo } from "/public/assets/Logo";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between px-[6rem] py-8">
      <div className="text-xl font-bold flex gap-3">
        <Logo /> <h1>Schoolbus karo</h1>
      </div>
      <ul className="flex gap-8 ">
        <li>Home</li>
        <li>How it works</li>
        <li>Pricing</li>
      </ul>
    </nav>
  );
};

export default Navbar;
