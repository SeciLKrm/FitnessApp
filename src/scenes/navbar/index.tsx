import { Bars3Icon,XMarkIcon } from "@heroicons/react/16/solid";
import Link from "./Link";
import Logo from "@/assets/Logo.png"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import {useState} from "react"
import ActionButton from "@/shared/ActionButton";

type Props = {
    selectedPage : SelectedPage,
    setSelectedPage : (value : SelectedPage)=>void,
    isTopOfPage : boolean

};

const Navbar = ({selectedPage,setSelectedPage,isTopOfPage}: Props) => {
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    
  return <nav>
    <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`} >
        <div className={`${flexBetween} mx-auto w-5/6`} >
            <div className={`${flexBetween} w-full gap-16`}>
                {/* left side */}
                <img src={Logo} alt="logo" />
                {/* right side */}
                {isAboveMediumScreens ? (<div className={`${flexBetween} w-full `} >
                    <div className={`${flexBetween} gap-8 text-sm`} >
                        
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page=" Our Classes"selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact Us"selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className={`${flexBetween} gap-8`} >
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                </div>) : (
                    <button className="rounded-full bg-secondary-500 p-2"
                    onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                        <Bars3Icon className="h-6 w-6 text-white" /> 
                    </button>
                )}
            </div>
        </div>
    </div>
    {/* modal menu mobile */}
    {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            {/* close icon*/}
            <div className="flex justify-end p-12">
                <button  onClick={()=>setIsMenuToggled(!isMenuToggled)}>
              {<XMarkIcon className="w-6 h-6 text-gray-400"/>}
              </button>
            </div>
            {/* menü items */}
            <div className="flex flex-col ml-[33%] gap-10 text-2xl" >
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page=" Our Classes"selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Contact Us"selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
            </div>
    )}
  </nav>;
};

export default Navbar;
