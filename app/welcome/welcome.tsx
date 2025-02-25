import ArrowDown from "../component/svg/arrowDown";

export function Welcome() {
  return (
    <div className="h-screen w-full bg-[url(/main.jpeg)] bg-cover bg-center flex justify-center">
      <h1 className="text-center text-8xl font-bold absolute bottom-[20%]">
        Sébastien Simon
      </h1>
      <ArrowDown className="h-fit mx-[47%] absolute bottom-[5%]"></ArrowDown>
    </div>
  );
}
