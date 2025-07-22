'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/ui/navbar";
import { CheckCircle2Icon, CircleUserIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
const Profile = () => {
const [user, setUser] = useState({  
  firstName: 'Litha',
  lastName: '',
  email: ''
});
const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
        <Navbar />
        {isSuccess && (
        <Alert className="fixed top-4 right-4 w-96">
        <CheckCircle2Icon color="#2fd1c8"/>
        <AlertTitle className=" text-primary text-md">Success! Your changes have been saved</AlertTitle>
        <AlertDescription className="text-gray-400 font-bold text-sm">
          Success updated profile
        </AlertDescription>
      </Alert>)
      }

    <div className="flex flex-col items-center md-px-4 px-5 py-4 ">
      <h1 className="text-center md:text-3xl font-bold text-primary md:mt-4 mt-2">Detail Profile</h1>
      <p className=" md:text-md text-sm text-gray-400 text-center">Welcome to your profile!</p>
        <CircleUserIcon className="w-16 h-16 text-primary" />

        <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
      <div>
        <div className="md:text-md text-sm text-gray-400">First Name</div>
        <div><Input type="text" placeholder="First Name" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} /></div>
      </div>
      <div>
        <div className="md:text-md text-sm text-gray-400">Last Name</div>
        <div><Input type="text" placeholder="Last Name" /></div>
      </div>
      <div className="col-span-2">
        <div className="md:text-md text-sm text-gray-400">Email</div>
        <div><Input type="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} /></div>
      </div>
      <div className="col-span-2">
        <Button 
        className="bg-primary text-md text-white text-center md:px-4 px-2 rounded-2xl w-full border-none hover:bg-primary/80"
        disabled={user.firstName=='' && user.email=='' && user.lastName==''}
        onClick={() => {
          setIsSuccess(true);
          setTimeout(() => setIsSuccess(false), 3000); // Hide alert after 3 seconds
        }}
        >Save</Button>
      </div>
        </div>
    </div>
    </>
  );
}       
export default Profile; 