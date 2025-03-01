import Scene from "~/component/FBXModel";
import Rotate3d from "~/component/svg/rotate3d";

export function Boat() {
  return (
    <section className="flex h-[80vh] bg-blue-900">
      <div className="absolute w-full h-[80vh]">
        <Rotate3d className="w-[5%] absolute bottom-[3%] left-[3%]"></Rotate3d>
      </div>
      <div className="w-full bg-[url(/3dboat/bg-3dboat.png)] bg-contain">
        <Scene />
      </div>
      <div className="w-full flex flex-col justify-center align-center bg-[url(/3dboat/bg-info.png)] bg-cover">
        <div className="text-light my-[15%] mx-[8%]">
          <h2 className="text-center text-6xl">Groupe Dubreuil</h2>
        </div>

        <div className="">
          <ul className="list-disc text-xl flex flex-col gap-3 px-[10%]">
            <li>
              <strong>Anciens noms du bateau :</strong> 11th Hour Racing Team
            </li>
            <li>
              <strong>Architecte :</strong> Guillaume Verdier
            </li>
            <li>
              <strong>Chantier :</strong> CDK Technologies
            </li>
            <li>
              <strong>Date de lancement :</strong> 24 Août 2021
            </li>
            <li>
              <strong>Longueur :</strong> 18,28 m
            </li>
            <li>
              <strong>Largeur :</strong> 5,85 m
            </li>
            <li>
              <strong>Tirant d&#039;eau :</strong> 4,5 m
            </li>
            <li>
              <strong>Poids :</strong> 9 t
            </li>
            <li>
              <strong>Hauteur mât :</strong> 29 m
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
