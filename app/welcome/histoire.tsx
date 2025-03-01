import Timeline from "~/component/TimelineFigaro";
import TimelineGroupeDubreuil from "~/component/TimeLineGroupeDubreuil";
import TimelineImoca from "~/component/TimelineImoca";

export function Histoire() {
  return (
    <>
      <div className="h-full w-full bg-[url(/bg-history.jpg)] p-20 pb-5 bg-cover">
        <div id="presentation" className="text-black flex justify-center mb-10">
          <h2 className="font-bold text-4xl">HISTOIRE</h2>
        </div>
        <div className="flex justify-center flex-col justify-center">
          <div className="bg-blue-500 p-2 text-center mx-[40%] mb-3 rounded-md">
            Débuts en Figaro
          </div>
          <Timeline />
        </div>
      </div>
      <div className="h-full w-full bg-[url(/bg-history2.png)] p-20 bg-cover">
        <div className="flex justify-center flex-col justify-center">
          <div className="bg-blue-500 p-2 text-center mx-[40%] mb-3 rounded-md">
            Classe IMOCA
          </div>
          <TimelineImoca />
        </div>
      </div>

      <div className="h-full w-full bg-[url(/bg-history2.png)] px-20 bg-cover">
        <div className="flex justify-center flex-col justify-center">
          <div className="bg-blue-500 p-2 text-center mx-[40%] mb-3 rounded-md">
            L'aventure Groupe Dubreuil
          </div>
          <TimelineGroupeDubreuil />
        </div>
      </div>
    </>
  );
}
