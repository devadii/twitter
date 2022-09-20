import {
  FaceSmileIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Input = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();

  const tweetPost = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      text: input,
    });

    const imageRef = ref(storage, `posts/${docRef.id}/images`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          postImg: downloadURL,
        });
      });
    }

    setInput("");
    setSelectedFile(null);
    setLoading(false);
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
        <div className="relative">
          {loading && (
            <div className="flex items-center justify-center absolute top-[50%] left-[50%] w-5 h-5 z-10">
              <span class="flex h-5 w-5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
              </span>
            </div>
          )}
          <div className={`p-1 xl:p-2 flex ${loading && "blur-sm"}`}>
            <img
              className="w-[50px] h-[50px] rounded-full cursor-pointer hover:brightness-90 "
              src={session.user.image}
              alt=""
            />
            <div className="w-full ml-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                cols="30"
                rows="5"
                className="w-full p-1  border-0 border-b placeholder:text-gray-700 placeholder:tracking-wide focus:ring-0 "
                placeholder="What's Happening!"
              ></textarea>
              {selectedFile && (
                <div className="relative">
                  <XMarkIcon
                    onClick={() => setSelectedFile(null)}
                    className="h-7 absolute bg-blue-500 rounded-full p-1 top-5px left-5px cursor-pointer hover:brightness-90 hover:scale-95"
                  />
                  <img src={selectedFile} alt="" />
                </div>
              )}
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
                    onChange={addimageToPost}
                  />
                  <FaceSmileIcon className="h-7 text-sky-500 cursor-pointer hover:brightness-90 hover:scale-95" />
                </div>
                <button
                  onClick={tweetPost}
                  disabled={!input.trim()}
                  className="bg-blue-500 text-white font-bold rounded-full px-4 py-1.5 hover:brightness-90 disabled:opacity-50"
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
