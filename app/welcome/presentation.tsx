export function Presentation() {
  return (
    <div className="h-screen w-full bg-[#0c0d11] flex justify-between flex-row items-center text-white">
      <div>
        <img src="/picture.png"></img>
      </div>
      <div className="mr-[20%] max-w-[30%] flex-column">
        <div className="text-5xl font-bold">Profil</div>
        <div className="text-2xl font-medium mt-[5%] text-[#009ee5]">
          Petit lorem
        </div>
        <div className="mt-[5%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}
