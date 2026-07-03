export default function Home() {
  return (
    <div className="pt-24 intro flex flex-col gap-8">
      <h1 className="intro__hello">
        Hello! <span className="emoji wave-hand animated"></span>
      </h1>
      <p>
        I'm <b className="font-semibold">Galuh</b>, a software developer focused
        on building elegant web products with equal attention to user experience
        and code quality
        <span className="emoji technologist ml-[10px]"></span>
      </p>
      <p className="text-[20px] font-normal">
        <a href="#" className="highlight-link">
          Download resume .pdf
        </a>
      </p>
    </div>
  );
}
