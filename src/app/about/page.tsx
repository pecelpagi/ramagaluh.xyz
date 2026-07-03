import Image from "next/image";

export default function About() {
  return (
    <div className="pt-24 flex gap-10 items-center">
      <div className="flex grow-2 flex-col gap-5">
        <h1 className="text-4xl font-bold">About</h1>
        <p>
          Hey there! I'm Galuh, a software engineer with over 7 years of
          experience building web applications across the frontend and backend.
        </p>
        <p>
          I enjoy turning ideas into products, solving challenging technical
          problems, and building software that is scalable, reliable, and easy
          to maintain. I care deeply about code quality, developer experience,
          and creating products that deliver real value to users.
        </p>
        <p>
          When I'm not coding, you'll usually find me exploring new
          technologies, learning better engineering practices, or reflecting on
          ways to grow both professionally and personally.
        </p>
        <p>
          I'm always happy to connect with fellow engineers, founders, and teams
          working on meaningful problems.
        </p>
        <p>
          If you'd like to get in touch, please feel free to reach out to me at{" "}
          <a
            href="mailto:galuhrmdh@gmail.com"
            className="font-bold underline underline-offset-[4px]"
          >
            galuhrmdh@gmail.com
          </a>
        </p>
      </div>
      <div className="grow-1">
        <Image
          src="/img/pp.jpeg"
          alt="Galuh Muhamad Ramadhan"
          width={400}
          height={300}
          className="rounded-xl min-w-[300px] h-auto rotate-3"
        />
      </div>
    </div>
  );
}
