import Image from "next/image"

type Props = {
  imageSrc: string;
  show: any;
}
export default function GalleryCard({ imageSrc, show } : Props) {
  return (
    <div
      className={`relative transition ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
          Hello World
        </div>
      </div>
      <Image
        src={"http://" + "localhost" + ":1337" + imageSrc}
        alt={"Obrázek"}
        objectFit='cover'
        layout='responsive'
        width={150}
        height={150}
      />
    </div>
  );
}