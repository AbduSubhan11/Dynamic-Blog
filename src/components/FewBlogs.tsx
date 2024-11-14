import Image from "next/image";
import Link from "next/link";
import BlogData from "../../Blogs Data";

type Blog = {
  id: number;
  username: string;
  profilePic: string;
  postPic: string;
  date: string;
  title: string;
  description: string;
};

function FewBlogs() {
  const data = BlogData.slice(0,3)
  return (
    <section className="px-5 sm:px-32 md:px-52 py-52 space-y-20 ">
      <div className="flex justify-center font-thin text-[#3A414E]">
        <h1>FEATURED POSTS</h1>
      </div>

      <div className="lg:flex lg:space-x-10 space-x-0 lg:space-y-0 space-y-16">
        {/* LEFT */}
        <div className="lg:w-[70%] w-full space-y-20">
          {data.map((blog: Blog) => (
            <div key={blog.id} className="space-y-5 ">
              <Image
                src={blog.postPic}
                alt="Cover Image"
                width={1000}
                height={100}
              />
              <div className="flex items-center space-x-4 ">
                <Image
                  src={blog.profilePic}
                  alt="Profile Image"
                  width={100}
                  height={100}
                  className="w-16 rounded-full"
                />
                <div className="text-[#555555]">
                  <p>{blog.username}</p>
                  <p>{new Date(blog.date).toLocaleString()}</p>
                </div>
              </div>
              <div className="sm:space-y-2 space-y-4">
                <h1 className="text-[#3A414E] text-xl font-bold">
                  {blog.title}
                </h1>
                <p className="text-[#777777] text-1xl">{blog.description}</p>
              </div>
              <Link
                href={`blog/${blog.id}`}
                className="bg-[#222222] flex items-center w-fit px-6 py-2 text-[#F58515] hover:bg-[#F58515] hover:text-[#222222] transition-all duration-500"
              >
                <h1>Read More</h1>
                <svg
                  className="h-8 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <line x1="5" y1="12" x2="19" y2="12" />{" "}
                  <line x1="15" y1="16" x2="19" y2="12" />{" "}
                  <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* RIGTH */}
        <aside className="lg:w-[30%] w-full space-y-10 ">
          {/* NEWS LATER */}
          <div className="bg-[#F9F9FF] px-6 py-8 space-y-6 ">
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

export default FewBlogs;
