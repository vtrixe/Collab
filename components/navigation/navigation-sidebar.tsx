import { currentProfile } from "@/lib/current-profile";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { NavigationAction } from "@/components/navigation/navigation-action"
export const NavigationSidebar = async () => {
    const profile = await currentProfile();

    if(!profile){
        return redirect("/");
    };

    const servers=await db.server.findMany({
        where:{
            members:{
                some:{
                    profileId:profile.id
                }
            }
        }
    });

    return (
        <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-red py-3">


            <NavigationAction />


        </div>
    )


}