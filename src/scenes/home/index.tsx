import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png"
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import useMediaQuery from "@/hooks/useMediaQuery";
import {motion }from "framer-motion"
type Props = {
    setSelectedPage : (value : SelectedPage) =>void
};

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width : 1060px )")
    
  return <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
    {/* image and main header */}
    <motion.div 
    className="mx-auto w-5/6 items-center justify-center md:flex md:h-4/6 "
    onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>
        {/* main header */}
        <div className="z-10 mt-24 md:basis-3/5">
            {/* headings */}
            <motion.div className="md:mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
                
                    <div>
                        <img src={HomePageText} alt="home-page-text" />
                    </div>
               
                <p className="mt-8 text-sm"> Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.</p>
            </motion.div>
            {/* actions */}
            <motion.div className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`} ><p>Learn More</p> </AnchorLink>
            </motion.div>
        </div>
        {/* image */}
        <div className="flex basis-2/5 justify-center md:z-10 md:ml-40 md:mt-24 md:justify-items-end">
            <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
    </motion.div>
    {/* Sponsors */}
    {isAboveMediumScreens && (
        <div className="h-[120px] w-full bg-primary-100 py-6 mt-20">
            <div className="mx-auto w-5/6">
                <div className="flex w-3/5 items-center justify-between gap-8">
                    <img src={SponsorForbes} alt="sponsor-forbes" />
                    <img src={SponsorFortune} alt="sponsor-fortune" />
                    <img src={SponsorRedBull} alt="sponsor-redBull" />
                </div>
            </div>
        </div>
    )}
  </section>;
};

export default Home;
