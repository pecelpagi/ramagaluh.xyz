"use client";

const contact_data = [
  {
    title: "Email",
    value: "galuhrmdh@gmail.com",
    link: "mailto:galuhrmdh@gmail.com",
  },
  {
    title: "Phone",
    value: "+62 85 731 762 554",
    link: "https://wa.me/6285731762554",
  },
  {
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/galuhrmdh",
    link: "https://www.linkedin.com/in/galuhrmdh",
  },
  {
    title: "Telegram",
    value: "https://t.me/galuhrmdh",
    link: "https://t.me/galuhrmdh",
  },
];

export default function Contact() {
  return (
    <div className="py-24 flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Contact.</h1>
        <p>Get in touch with me for any questions or collaborations.</p>
      </div>
      <div className="grid grid-cols-2 gap-[32px]">
        {contact_data.map((item) => (
          <div key={item.title} className="flex flex-col gap-2">
            <p className="text-[14px] font-normal">{item.title}</p>
            <a
              href={item.link || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px] font-normal underline-offset-8 hover:underline transition-colors duration-300 hover:text-[#007bff]"
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
