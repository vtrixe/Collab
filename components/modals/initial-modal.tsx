"use client"

import { 
Dialog,
DialogContent,
DialogDescription,
DialogFooter,
DialogHeader,
DialogTitle,

 } from "@/components/ui/dialog"

 import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
  } from "@/components/ui/form";

  import { useState , useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//import { FileUpload } from "@/components/file-upload";
import { useRouter } from "next/navigation";

 import * as z from "zod";


 import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"

const formSchema = z.object({
  
    name: z.string().min(1, {
      message: "You need to add the Name."
    }),
    imageUrl: z.string().min(1, {
      message: "You need to add the image."
    })
  });
export const InitialModal = () =>{

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);



    const form = useForm({

        resolver: zodResolver(formSchema),

        defaultValues: {
          name: "",
          imageUrl: "",
        }
      });
    
    const isLoading=form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      console.log(values);
      }

      if (!isMounted) {
        return null;
      }
    

    return (
        <Dialog open>
            <DialogContent className="bg-black text-white p-0 overflow-hidden">

                <DialogHeader className="pt-8 px-6">

                    <DialogTitle className="text-2xl text-center font-bold">

                    Customize your Room

                    </DialogTitle>

                    <DialogDescription className="text-center text-white ">
                    make this space your own. Take control of appearance, access rules, and functionality of your Room,
                    you have the power to personalize every aspect to fit your unique needs and style.
                    </DialogDescription>

                  

                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    <div className="space-y-8 px-6">

                      <div className="flex items-center justify-center text-center">
                           
                           Your Room needs a Billboard!

                      </div>

                      <FormField control={form.control}
                      name="name"
                      render={({field})=>(
                        <FormItem>

                          <FormLabel className="uppercase text-xs font-thin text-black dark:text-white">


                            Name your Room:


                          </FormLabel>

                          <FormControl>

                            <Input 
                            disabled={isLoading}
                            className="bg-beige border-0 focus-visible:ring-0 text-white focus-visible:ring-offset-0"
                            placeholder="A name that defines your Room"
                            {...field} />


                          </FormControl>

                          <FormMessage />

                        </FormItem>
                      )}  />
                    </div>

                    <DialogFooter className="bg-black px-6 py-4">

                      <Button disabled={isLoading} >

                        Launch Your Room

                      </Button>


                    </DialogFooter>


                  </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}