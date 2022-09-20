import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Input = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const fileRef = useRef();
  const tweetPost = async () => {
    // const docRef = await addDoc(collection(db, "posts"), {
    //   text: input,
    // });
    console.log(selectedFile);
  };

  const addimageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (event) => {
      setSelectedFile(event.target.result);
    };
  };
  return (
    <>
      {session && (
        <div className="p-1 xl:p-2 flex">
          <img
            className="w-[50px] h-[50px] rounded-full cursor-pointer hover:brightness-90 "
            src={session.user.image}
            alt=""
          />
          <div className="w-full ml-1">
            <textarea
              onChange={(e) => setInput(e.target.value)}
              cols="30"
              rows="5"
              className="w-full p-1  border-0 border-b placeholder:text-gray-700 placeholder:tracking-wide focus:ring-0 "
              placeholder="What's Happening!"
            ></textarea>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center justify-start">
                <PhotoIcon
                  onClick={() => fileRef.current.click()}
                  className="h-7 text-sky-500 cursor-pointer hover:brightness-90 pr-1 hover:scale-95"
                />
                <input
                  type="file"
                  hidden
                  ref={fileRef}
                  onClick={addimageToPost}
                />
                <FaceSmileIcon className="h-7 text-sky-500 cursor-pointer hover:brightness-90 hover:scale-95" />
              </div>
              <button
                onClick={tweetPost}
                disabled={!input.trim()}
                className="bg-blue-500 text-white font-bold rounded-full px-4 py-1.5 hover:brightness-90 disabled:opacity-50"
              >
                Tweent
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
