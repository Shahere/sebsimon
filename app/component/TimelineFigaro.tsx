import React from "react";
import Checkmark from "./svg/checkmark";
import Trophee from "./svg/trophee";

const Timeline = ({ events }: any) => {
  return (
    <>
      <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black before:to-transparent">
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Checkmark></Checkmark>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Première transat</div>
              <time className="font-caveat font-medium text-indigo-500">
                Avril/Mars 2016
              </time>
            </div>
            <div className="text-slate-500">
              Première transatlantique. <strong>Résultat : 4e</strong>
            </div>
          </div>
        </div>

        <div className="relative flex items-center md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Checkmark></Checkmark>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Première solitaire du Figaro
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                Juin/Juillet 2016
              </time>
            </div>
            <div className="text-slate-500">
              Première solitaire du Figaro pour Sébastien Simon.{" "}
              <strong>Résultat : 11e</strong>
              <a
                href="https://www.youtube.com/watch?v=L0yyTrWt3EA"
                className="aspect-video"
                target="_blank"
              >
                <img src="https://img.youtube.com/vi/L0yyTrWt3EA/0.jpg"></img>
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Checkmark></Checkmark>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">In Transit</div>
              <time className="font-caveat font-medium text-indigo-500">
                Mai/Juin 2017
              </time>
            </div>
            <div className="text-slate-500">
              Deuxième solitaire du Figaro. <strong>Résultat 4e</strong>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center bg-yellow-300 w-10 h-10 rounded-full border border-white bg-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <div className="w-[80%] h-[80%]">
              <Trophee></Trophee>
            </div>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Raise of a champion
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                Août/Septembre 2018
              </time>
            </div>
            <div className="text-slate-500">
              Vainqueur de la solitaire du Figaro
              <img src="/figaro2018.png"></img>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center bg-yellow-300 w-10 h-10 rounded-full border border-white bg-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <div className="w-[80%] h-[80%]">
              <Trophee></Trophee>
            </div>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Championnat élite course au large
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                2018
              </time>
            </div>
            <div className="text-slate-500">
              <strong>Résultat : 1er</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
