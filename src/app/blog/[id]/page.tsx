"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import BlogData from "../../../../Blogs Data";

type Blog = {
  id: number;
  username: string;
  profilePic: string;
  postPic: string;
  date: string;
  title: string;
  description: string;
};

function Page() {
  const param = useParams();
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const publishBtnHandler = () => {
    setComments((prev: string[]) => [...prev, commentValue]);
    setCommentValue("");
  };
  const data = BlogData.filter((blog: Blog) => blog.id === Number(param.id));

  return (
    <section className="px-5 sm:px-32 md:px-52 py-10 space-y-20 ">
      <div className="lg:flex lg:space-x-10 space-x-0 lg:space-y-0 space-y-16">
        {/* LEFT */}
        <div className="lg:w-[70%] w-full">
          {data.map((blog: Blog) => (
            <div key={blog.id} className=" text-black space-y-8">
              <div className="flex items-center space-x-3">
                <Image
                  src={blog.profilePic}
                  alt="Profile image"
                  width={100}
                  height={100}
                  className="w-10 rounded-full"
                />
                <div className="md:flex space-x-2">
                  <p>{blog.username}</p>
                  <p>{new Date(blog.date).toLocaleString()}</p>
                </div>
              </div>
              <div className="font-bold font-serif md:text-3xl text-xl sm:pr-40 text-[#3A414E]">
                {blog.title}
              </div>
              <div className=" text-[#797979]">{blog.description}</div>
              <div>
                <Image
                  src={blog.postPic}
                  alt="Cover Image"
                  width={1000}
                  height={100}
                />
              </div>
              <div className="bg-[#F2F3F7] p-5 sm:p-8">
                <div className="bg-white text-[#797979] p-5 sm:p-8 italic border-l-2 border-[#415094]">
                  In the ever-evolving landscape of digital content, blogs have
                  emerged as a powerful medium for sharing knowledge,
                  experiences, and insights. A well-crafted blog not only serves
                  as a platform for personal expression but also as a valuable
                  resource for readers seeking information and inspiration.
                </div>
              </div>
              <div className="md:px-8 py-4 space-y-8">
                <div className="border-b text-[#3A414E] font-serif font-semibold">
                  Comments {comments.length}
                </div>
                <div className="space-y-2">
                  {comments.map((comment: string, index: number) => (
                    <p
                      key={index}
                      className="bg-gray-600 text-white w-fit p-2 rounded"
                    >
                      {comment}
                    </p>
                  ))}
                </div>
                <div className="border h-12">
                  <input
                    type="text"
                    onChange={(e) => setCommentValue(e.target.value)}
                    value={commentValue}
                    placeholder="Write a comment..."
                    className="w-full h-full pl-2 bg-transparent"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    className="bg-[#222222] flex items-center w-fit px-6 py-2 text-[#F58515] hover:bg-[#F58515] hover:text-[#222222] transition-all duration-500"
                    onClick={publishBtnHandler}
                  >
                    Publish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGTH */}
        <aside className="lg:w-[30%] w-full space-y-10">
          {/* NEWS LATER */}
          <div className="bg-[#F9F9FF] px-6 py-8 space-y-6">
            <h1 className="text-[#3A414E] font-bold text-xl">Newsletter</h1>
            <div className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="Email"
                className="h-12 pl-2 border"
              />
              <button className="bg-[#222222] text-[#F8900A] p-4">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* CATEGORY */}
          <div className="bg-[#F9F9FF] px-6 py-8 space-y-6">
            <h1 className="text-[#3A414E] font-bold text-xl">Category</h1>
            <div className="flex justify-between text-[#777777] text-[15px] hover:shadow-lg hover:text-[#FF9907] transition-all duration-500 bg-white px-4 py-4 cursor-pointer">
              <p>Technology</p>
              <p>(03)</p>
            </div>
            <div className="flex justify-between text-[#777777] text-[15px] hover:shadow-lg hover:text-[#FF9907] transition-all duration-500 bg-white px-4 py-4 cursor-pointer">
              <p>Software</p>
              <p>(09)</p>
            </div>
            <div className="flex justify-between text-[#777777] text-[15px] hover:shadow-lg hover:text-[#FF9907] transition-all duration-500 bg-white px-4 py-4 cursor-pointer">
              <p>Lifestyle</p>
              <p>(12)</p>
            </div>
            <div className="flex justify-between text-[#777777] text-[15px] hover:shadow-lg hover:text-[#FF9907] transition-all duration-500 bg-white px-4 py-4 cursor-pointer">
              <p>Shopping</p>
              <p>(02)</p>
            </div>
            <div className="flex justify-between text-[#777777] text-[15px] hover:shadow-lg hover:text-[#FF9907] transition-all duration-500 bg-white px-4 py-4 cursor-pointer">
              <p>Tour</p>
              <p>(05)</p>
            </div>
          </div>

          {/* POPULAR POST */}
          <div className="bg-[#F9F9FF] px-6 py-8 space-y-6">
            <h1 className="text-[#3A414E] font-bold text-xl">Popular Post</h1>
            <div className="grid grid-cols-3  gap-2">
              <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
                project
              </p>
              <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
                love
              </p>
              <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
                technology
              </p>
              <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
                travel
              </p>
              <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
                software
              </p>
              <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
                life
              </p>
              <p className="bg-white w-fit text-[#777777] hover:bg-[#222222] hover:text-[#F8900A] px-2 py-1 cursor-pointer transition-all duration-500">
                design
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Page;
