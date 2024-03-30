
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu.tsx"
import { FaTicket, FaRoute } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

export default function Nav() {
  const rectStyle = {
    height: '65px',
    flexShrink: 0,
    borderRadius: '100px',
    background: 'rgba(255, 255, 255, 0.10)',
    boxShadow: '0px 8px 6px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(255, 255, 255, 0.25) inset, 0px -1px 1px 0px rgba(255, 255, 255, 0.10) inset',
    backdropFilter: 'blur(50px)',
  };
  return (
    <div className="pt-2 ">
      <NavigationMenu >
        <div className="flex w-screen flex-row justify-center">
          <div style={rectStyle} className="flex w-[90vw] flex-row items-center justify-between">
            <NavigationMenuList>
              <NavigationMenuItem className="ml-8">
                <NavigationMenuLink className="NavigationMenuLink text-white text-2xl font-bold" href="/">
                  Bos
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className="gap-x-[16px]">

              <NavigationMenuItem>
                <NavigationMenuLink className="NavigationMenuLink" href="/">
                  <div className="flex flex-row items-center text-white gap-x-1"><FaTicket /><>My Tickets</></div>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="NavigationMenuLink" href="/">
                  <div className="flex flex-row items-center text-white gap-x-1"><FaRoute />
                    <> Bus Routes </></div>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="NavigationMenuLink" href="/">
                  <div className="flex flex-row items-center text-white gap-x-1"><IoSettings />
                    <>   Account </></div>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <div className="NavigationMenuLink p-3  bg-white bg-opacity-30 h-[51px] w-[51px] rounded-full mr-2" >
                  <MdOutlineAccountCircle className="w-full text-white bg-opacity-80 h-full" />

                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div></div>
      </NavigationMenu>
    </div>
  )
}