import Link from "next/link";
import BlogsData from "../../../Blogs Data";
import Image from "next/image";

type Blog = {
  id: number;
  username: string;
  profilePic: string;
  postPic: string;
  date: string;
  title: string;
  description: string;
};

function page() {
  return (
    <section className="px-5 sm:px-32 md:px-24 lg:px-52 md:py-10 py-4 space-y-10 text-black">
      <div className="space-y-10">
        {BlogsData.map((blog: Blog) => (
          <div
            key={blog.id}
            className="grid md:grid-cols-2 grid-cols-1 md:h-96 h-fit overflow-hidden border"
          >
            {/* LEFT*/}
            <Link href={`/blog/${blog.id}`}>
              <div className="h-full bg-center flex justify-center items-center">
                <Image
                  src={blog.postPic}
                  alt="Cover Image"
                  width={1000}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </Link>

            {/* RIGHT  */}
            <div className="p-5 md:space-y-10 space-y-5 overflow-hidden">
              <div className="flex space-x-4">
                <Image
                  src={blog.profilePic}
                  alt="Profile Pic"
                  width={100}
                  height={100}
                  className="w-10 rounded-3xl"
                />
                <div className="text-black">
                  <p>{blog.username}</p>
                  <p>{new Date(blog.date).toLocaleString()}</p>
                </div>
              </div>
              <div className="text-black md:space-y-5 space-y-2 hover:text-[#006AB6]">
                <Link href={`/blog/${blog.id}`} className="space-y-8">
                  <h1 className="font-bold md:text-2xl text-1xl">
                    {blog.title}
                  </h1>
                  <p className="text-1xl">{blog.description}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default page;
