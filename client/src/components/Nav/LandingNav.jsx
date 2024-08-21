import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ScaleIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import { ModeToggle } from "../mode-toggle";
import { NavLink, useNavigate } from "react-router-dom";

const LandingNav = () => {
  const navigate = useNavigate();

  return (
    <Card className="container w-auto bg-card py-3 px-4 border-0 dark:border-2 flex items-center justify-between gap-6 rounded-2xl mt-5 mx-5">
      <ScaleIcon className="text-primary cursor-pointer" />

      <ul className="hidden md:flex items-center gap-10 text-card-foreground">
        <li className="text-primary font-medium">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/how"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            How It Works
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faqs"
            className={({ isActive }) => (isActive ? 'underline' : '')}
          >
            FAQs
          </NavLink>
        </li>

        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="cursor-pointer">Games</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {landings.map((page) => (
                <DropdownMenuItem key={page.id}>
                  <NavLink to={page.route}>
                    {page.title}
                  </NavLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>

      <div className="flex items-center">
        <Button variant="secondary" className="hidden md:block px-2" onClick={() => navigate("/signin")}>
          Login
        </Button>
        <Button className="hidden md:block ml-2 mr-2" onClick={() => navigate("/signup")}>Get Started</Button>

        <div className="flex md:hidden mr-2 items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="py-2 px-2 bg-background rounded-md">Others</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {landings.map((page) => (
                <DropdownMenuItem key={page.id}>
                  <NavLink to={page.route}>
                    {page.title}
                  </NavLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 rotate-0 scale-100" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <NavLink to="/home">Home</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/features">Features</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/pricing">Pricing</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/faqs">FAQs</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="secondary" className="w-full text-sm" onClick={()=>navigate("/signin")}>
                  Login
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="w-full text-sm" onClick={() => navigate("/signup")}>Get Started</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ModeToggle />
      </div>
    </Card>
  );
};

const landings = [
  {
    id: nanoid(),
    title: "Ludo",
    route: "/games/ludo",
  },
  {
    id: nanoid(),
    title: "TickTacToe",
    route: "/games/tiktactoe",
  },
  {
    id: nanoid(),
    title: "Snake & Ladders",
    route: "/games/snake-and-ladders",
  },
];

export default LandingNav;
