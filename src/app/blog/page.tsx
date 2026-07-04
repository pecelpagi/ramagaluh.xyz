"use client";

const posts = [
  {
    title: "Blog Post 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/blog/lorem-ipsum",
    date: "2026-01-01",
  },
  {
    title: "Blog Post 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/blog/lorem-ipsum",
    date: "2026-01-02",
  },
];

export default function Blog() {
  return (
    <div className="py-24 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Blog.</h1>
        <p>Read my latest blog posts.</p>
        {/* <p>A collection of thoughts on software, products, life, and learning.</p> */}
      </div>
      <div className="flex flex-col gap-6 space-y-6">
        {posts.map((item) => (
          <div key={item.title} className="flex gap-20">
            <div className="mt-7">
              <p className="text-sm font-normal">{item.date}</p>
            </div>
            <a
              href={item.link}
              className="flex flex-col grow hover:bg-[#f5f5f5] transition-colors duration-300 rounded-md p-6"
            >
              <h2 className="text-[18px] font-bold">{item.title}</h2>
              <p className="text-sm mt-2 font-normal text-zinc-500">
                {item.description}
              </p>
              <p className="text-[12px] group-hover:text-[#007bff] mt-4 text-[#007bff]">
                Read More&nbsp;
                <span className="text-[12px] group-hover:text-[#007bff]">
                  &rarr;
                </span>
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
