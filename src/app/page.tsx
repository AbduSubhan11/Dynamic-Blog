import Image from "next/image";
import FewBlogs from "../components/FewBlogs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <div className="lg:flex lg:space-y-0 space-y-16">
          {/* LEFT */}
          <div className="lg:w-[50%]">
            <Image
              src={"/Image/hero 1.webp"}
              alt="Hero Image 1"
              width={800}
              height={100}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* RIGHT */}
          <div className="lg:w-[50%] w-full sm:p-0 p-5 gap-8 flex flex-col items-center justify-center">
            <div className="space-y-10">
              <h1 className="text-2xl font-serif text-center text-[#3A414E]">My Thoughts</h1>
              <Image
                src={"/Image/hero 2.webp"}
                alt="Hero Image 2"
                width={450}
                height={100}
                className="w-"
              />
            </div>
            <div className=" max-w-md sm:gap-20 gap-16 p-5 flex flex-col items-center justify-center">
              <p className="italic">
                Discover articles across technology, lifestyle, personal growth,
                and beyond, all crafted to inform, inspire, and spark curiosity.{" "}
              </p>

              <Link
                href={"/blogs"}
                className="bg-[#222222] flex items-center w-fit px-10 py-2 text-[#F58515] hover:bg-[#F58515] hover:text-[#222222] transition-all duration-500"
              >
                All Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FewBlogs />
    </>
  );
}
