"use client";
import React from "react";
import Button from "./button";
import { addFriendValidator } from "@/lib/validations/add-friend";
import axios from "axios";

const AddFriendButton = () => {
  const addFriend = async (email: string) => {
    try {
      const validatedEmail = addFriendValidator.parse({ email });
      await axios.post('/api/friend/add' ,{
        email : validatedEmail
      })
    } catch (err) {}
  };

  return (
    <form action="" className="max-w-sm">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900  "
      >
        Add friend by E-mail
      </label>
      <div className="mt-2 flex gap-4 ">
        <input
          type="text"
          placeholder="you@example.com"
          className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
        />
      </div>
      <Button variant={"default"}>Add</Button>
    </form>
  );
};

export default AddFriendButton;
