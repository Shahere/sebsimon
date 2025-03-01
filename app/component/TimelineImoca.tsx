import React from "react";
import Checkmark from "./svg/checkmark";
import Trophee from "./svg/trophee";

const Timeline = ({ events }: any) => {
  return (
    <>
      <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent">
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center bg-yellow-300 w-10 h-10 rounded-full border border-white bg-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <div className="w-[80%] h-[80%]">
              <Trophee></Trophee>
            </div>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Bermude 1000 Race - Douarnenez-Brest
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                2019
              </time>
            </div>
            <div className="text-slate-500">
              <strong>Résultat : 1er</strong> en 7 j 17 h 34 min.
            </div>
          </div>
        </div>
        {/*
        <div className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Checkmark></Checkmark>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Transat Jacques Vabre
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                2019
              </time>
            </div>
            <div className="text-slate-500">
              Première Transat Jacques Vabre pour Sébastien Simon en équipage
              avec Vincent Riou ! <strong>Résultat : 8e</strong>
              <img src="/Arkea-Paprec_TJV_2019.jpg"></img>
            </div>
          </div>
        </div>
*/}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Checkmark></Checkmark>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                UN REVE DE VENDEE GLOBE
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                2020/2021
              </time>
            </div>
            <div className="text-slate-500">
              Premier Vendée Globe ! <strong>Résultat abandon</strong>
              <p>
                Cette édition a été marquée par un abandon le 4 décembre 2020,
                suite à la rencontre avec un ofni sur Paprec-Arkea 2 jours plus
                tôt qui endommage le foil tribort.
              </p>
              <img src="/VDG2020.jpeg"></img>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Checkmark></Checkmark>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Jacque Vabre</div>
              <time className="font-caveat font-medium text-indigo-500">
                Novembre 2021
              </time>
            </div>
            <div className="text-slate-500">
              Dernière aventure avec le sponsor Paprec-Arkea.{" "}
              <strong>Résultat: 4e</strong>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Checkmark></Checkmark>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">The Ocean Race</div>
              <time className="font-caveat font-medium text-indigo-500">
                Octobre 2023
              </time>
            </div>
            <div className="text-slate-500">
              Participation avec Europe GUYOT environnement - Team Europe
              <img
                src="/theoceanrace.jpg"
                alt="Europe GUYOT environnement - Team Europe"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
