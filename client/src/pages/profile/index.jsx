import { useAppStore } from "@/store";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FaTrash, FaPlus } from "react-icons/fa";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { colors, getColor } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import apiClient from "@/lib/api-client";
import { UPDATE_PROFILE } from "@/utils/constants";

const Profile = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAppStore();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState(null);
  const [hover, setHover] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(()=>{
    if(userInfo.profileSetup){
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
      setSelectedColor(userInfo.color);
    }
  },[userInfo])

  const validateProfile = () => {
    if (!firstName) {
      toast.error("First Name is required!");
      return false;
    }
    if (!lastName) {
      toast.error("Last Name is required!");
      return false;
    }
    return true;
  };

  const saveChanges = async () => {
    if (validateProfile()) {
      try {
        const response = await apiClient.post(
          UPDATE_PROFILE,
          { firstName, lastName, color: selectedColor },
          { withCredentials: true }
        );
        if (response.status === 200 && response.data) {
          setUserInfo({ ...response.data });
          toast.success("Profile updated successfully!");
          navigate("/chat");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  
  const handleBackButton = () => {
    if(userInfo.profileSetup){
      navigate("/chat");
    }else{
      toast.error("Please setup your profile first!")
    }
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col gap-10 w-[90vw] md:w-max bg-white border-2 border-white shadow-2xl rounded-3xl p-10">
        <div className="flex items-center">
          <IoArrowBack onClick={handleBackButton} className="text-xl text-black/90 cursor-pointer" />
          <p className="text-xl font-semibold mx-2">Profile Update</p>
        </div>
        <div className="grid grid-cols-2 ">
          <div
            className="h-full w-32 md:w-48 md:h-48 relative flex items-center justify-center"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Avatar className="h-32 w-32 md:w-48 md:h-48 rounded-full overflow-hidden">
              {image ? (
                <AvatarImage
                  src={image}
                  alt="profile"
                  className="object-cover w-full h-full bg-black"
                />
              ) : (
                <div
                  className={`uppercase h-32 w-32 md:w-48 md:h-48 text-5xl border-[1px] flex items-center justify-center rounded-full ${getColor(
                    selectedColor
                  )}`}
                >
                  {firstName
                    ? firstName.split("").shift()
                    : userInfo.email.split("").shift()}
                </div>
              )}
            </Avatar>
            {hover && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 ring-fuchsia-50 rounded-full">
                {image ? (
                  <FaTrash className="text-3xl text-white cursor-pointer" />
                ) : (
                  <FaPlus className="text-3xl text-white cursor-pointer" />
                )}
              </div>
            )}
            {/* <input type="text" /> */}
          </div>
          <div className="flex min-w-32 md:min-w-64 flex-col gap-5 text-black items-center justify-center">
            <div className="w-full">
              <Input
                placeholder="Email"
                type="email"
                disabled
                value={userInfo.email}
                className="rounded-lg p-5 md:p-6 border-2 hover:outline-none"
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="First Name"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="rounded-lg p-5 md:p-6 border-2 hover:outline-none"
              />
            </div>
            <div className="w-full">
              <Input
                placeholder="Last Name"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="rounded-lg p-5 md:p-6 border-2 hover:outline-none"
              />
            </div>
            <div className="w-full flex gap-5">
              {colors.map((color, index) => (
                <div
                  className={`${color} h-6 w-6 md:h-8 md:w-8 rounded-full cursor-pointer transition-all duration-50 ${
                    selectedColor === index ? "outline-2 outline-black/25" : ""
                  }`}
                  key={index}
                  onClick={() => setSelectedColor(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <Button
            className="h-12 md:h-16 w-full bg-black transition-all duration-300 cursor-pointer"
            onClick={saveChanges}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
