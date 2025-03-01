import React from "react";
import Checkmark from "./svg/checkmark";
import Trophee from "./svg/trophee";

const TimelineGroupeDubreuil = ({ events }: any) => {
  return (
    <>
      <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent">
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Checkmark></Checkmark>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Première course avec Groupe Dubreuil
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                2023
              </time>
            </div>
            <div className="text-slate-500">
              <strong>Résultat : 18e</strong>
              <img src="/transatjv-2023.png" alt="" />
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Checkmark></Checkmark>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Un accident sur un bateau volant - Retour à la base
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                2023
              </time>
            </div>
            <div className="text-slate-500">
              <strong>
                Résultat : Une commotion cérébrale, une vertebre cassée et un
                dématage
              </strong>
              {"  "}
              « J'ai encore prouvé qu'il n'y avait pas grand-chose qui pouvait
              m'arrêter »
              <img src="/dematage.jpeg" alt="" />
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Checkmark></Checkmark>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Revanche sur le vendée globe
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                2024-2025
              </time>
            </div>
            <div className="text-slate-500">
              <strong>Résultat : 3e</strong> en 67j 12h 25m 35s, malgré le foil
              tribort cassé à mi-parcours
              <img src="/vendeeglobe.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineGroupeDubreuil;
