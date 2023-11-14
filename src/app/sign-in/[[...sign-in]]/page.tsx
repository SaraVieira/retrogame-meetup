import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="bg absolute w-screen z-0 h-[250px] top-1/2 -translate-y-1/2">
        <div className="bg-[#F32C43] h-[50px] w-full" />
        <div className="bg-[#EF7022] h-[50px] w-full" />
        <div className="bg-[#EBC630] h-[50px] w-full" />
        <div className="bg-[#9FAE69] h-[50px] w-full" />
        <div className="bg-[#2385AA] h-[50px] w-full" />
      </div>
      <div className="w-screen h-screen flex items-center justify-center gap-4 relative z-10 ">
        <div className="nes-container is-dark shadow-lg">
          <h1 className="text-4xl bold my-8 nes-text is-primary">
            RetroGames Meetup #3
          </h1>
          <span className="text-sm block text-center nes-text is-disabled">
            27 Nov, 2023
          </span>
          <span className="text-sm block text-center nes-text is-disabled">
            45 Fake Str, London
          </span>

          <div className="flex flex-col items-center gap-4 my-8 justify-center">
            <p className="nes-text flex items-center gap-2">
              Login to join!<i className="nes-icon coin"></i>
            </p>
            <div>
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
