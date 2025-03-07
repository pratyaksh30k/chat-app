import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "../../assets/login.png";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async() => {};
  const handleSignup = async() => {};

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-auto w-[80vw] bg-white text-opacity-90 border-2 border-white shadow-2xl md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid md:grid-cols-2 p-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-2">
              <h1 className="text-5xl font-bold md:text-6xl text-center">
                SyncChat Welcomes You!
              </h1>
            </div>
            <p className="font-medium text-center">
              Fill in the details to get started.
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs className="w-3/4">
              <TabsList className="w-full bg-transparent rounded-none flex">
                <TabsTrigger
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-purple-700 p-3 transition-all duration-300 cursor-pointer"
                  value="login"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-purple-700 p-3 transition-all duration-300 cursor-pointer"
                  value="signup"
                >
                  Signup
                </TabsTrigger>
              </TabsList>
              <TabsContent className="flex flex-col mt-5 gap-5 w-full px-5" value="login">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-lg p-5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-lg p-5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleLogin} className="rounded-lg p-5 cursor-pointer">Login</Button>
              </TabsContent>
              <TabsContent className="flex flex-col mt-5 gap-5 w-full px-5" value="signup">
              <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-lg p-5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-lg p-5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="rounded-lg p-5"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button onClick={handleSignup} className="rounded-lg p-5 cursor-pointer">Signup</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <img src={Login} alt="login" className="h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
