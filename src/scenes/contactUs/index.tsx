import Htext from "@/shared/Htext";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"

type Props = {
setSelectedPage: (value:SelectedPage)=>void
};

const ContactUs= ({setSelectedPage}: Props) => {
const{
    register,
    trigger,
    formState:{errors}
    }=useForm()

    const onSubmit = async(e:any)=>{
        const isValid = await trigger()
        if(!isValid){
            e.preventDefault()
        }
    }
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 
    px-5 py-3 placeholder-white`
  return <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32 ">
    <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
            {/* Header */}
            <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
                <Htext>
                    <span className="text-primary-500">JOIN NOW </span>TO GET IN SHAPE
                </Htext>
                <p className="my-5">
                Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                </p>
            </motion.div>
            {/* Form and Image */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}>
                    <form action=""
                    target="_blank"
                    onSubmit={onSubmit}
                    method="POST">
                        <input type="text"
                        className={inputStyles}
                        placeholder="NAME"
                        {...register("name",{
                            required:true,
                            maxLength:100
                        })} />
                        {errors.name && (
                            <p>{errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max LEngth is 100 char."} </p>
                        )}
                        <input type="text"
                        className={inputStyles}
                        placeholder="EMAIL"
                        {...register("email",{
                            required:true,
                            maxLength:100
                        })} />
                        {errors.email && (
                            <p>{errors.email.type === "required" && "Invalid email address."} </p>
                        )}
                        <textarea
                        className={inputStyles}
                        placeholder="MESSAGE"
                        {...register("message",{
                            required:true,
                            maxLength:2000
                        })} />
                        {errors.textarea && (
                            <p>{errors.textarea.type === "required" && "This field is required."}
                            {errors.textarea.type === "maxLength" && "Max LEngth is 2000 char."} </p>
                        )}
                        <button 
                        type="submit"
                        className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                            SUBMIT</button>
                            </form>
                            </motion.div>
                            <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                              hidden: { opacity: 0, y: 50 },
                              visible: { opacity: 1, y: 0 },
                            }}>
                                <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] before:content-evolvetext">
                                    <img className="w-full" src={ContactUsPageGraphic} alt="constact-us-page-graphic" />
                                </div>
                            </motion.div>
            </div>
    </motion.div>

  </section>;
};

export default ContactUs
;
