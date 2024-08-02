import Image from "next/image";

type Props = {
  imageSrc: string;
  imageAlt: string;
};

const laptopColor1 = "bg-[#3a3d40]";
const laptopColor2 = "bg-[#18171966]";

const laptopShadowColor = laptopColor2;
const borders = `border-outset border border-gray-900/60 border-b-gray-800 border-r-gray-800`;

export function Laptop({ imageSrc, imageAlt }: Props) {
  return (
    <div className="absolute left-0 top-0 flex h-[90%] w-full flex-col items-center">
      {/* laptop top */}
      <div
        className={`flex h-full w-4/5 items-center justify-center rounded-[2%] ${laptopColor1} ${borders}`}
      >
        {/* laptop-cam */}
        <div
          className={`absolute top-[1.7%] h-[1.6%] w-[0.9%] rounded-[50%] ${laptopColor2}`}
        ></div>
        {/* laptop-screen */}
        <div className="relative h-[90%] w-[93%] rounded-[2%]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="m-0 h-full w-full rounded-[2%]"
          />
          {/* screen-effects */}
          <div className="absolute top-0 h-full w-full rounded-[2%] opacity-[0.02]"></div>
        </div>
      </div>
      {/* laptop-bottom */}
      <div className={`absolute bottom-0 flex h-[8%] w-full`}>
        {/* laptop-bottom-left */}
        <div
          className={`${borders} h-full w-[10%] rounded-[20%_0_0_50%] border-r-0 ${laptopColor1}`}
        ></div>
        {/* laptop-bottom-middle */}
        <div
          className={`${borders} flex h-full w-4/5 justify-center border-l-0 border-r-0 ${laptopColor1}`}
        >
          {/* laptop-lock */}
          <div className={`h-2/5 w-1/5 ${laptopColor2} ${borders}`}></div>
        </div>
        {/* laptop-bottom-right */}
        <div
          className={`${borders} h-full w-[10%] rounded-[0_20%_50%_0] border-l-0 ${laptopColor1}`}
        ></div>
      </div>
    </div>
  );
}

//todo: add missing (custom) classes

/// .laptop-top {
///   box-shadow: 5px 0px 8px -4px var(--laptop-shadow-color);
/// }

/// .screen-effects {
///   background: linear-gradient(33deg, transparent 60%, var(--main-white) 40%);
/// }

/// .laptop-bottom {
///   box-shadow: 0 5px 5px -5px var(--laptop-shadow-color);
/// }
