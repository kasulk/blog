import Image from "next/image";
import { Children, ReactNode } from "react";

type Props = {
  imageSrc: string;
  imageAlt: string;
};

const laptopColor1 = "bg-zinc-700";
const laptopColor2 = "bg-zinc-800/70";
const shadowColor = "shadow-zinc-800";
const borders = `border-outset border border-gray-900/60 border-b-gray-800 border-r-gray-800`;

export function Laptop({ imageSrc, imageAlt }: Props) {
  return (
    <div className="absolute left-0 top-0 flex h-[90%] w-full flex-col items-center">
      <LaptopTop>
        <LaptopCam />
        <LaptopScreen>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="m-0 h-full w-full rounded-[2%]"
          />
          <LaptopScreenEffects />
        </LaptopScreen>
      </LaptopTop>

      <LaptopBottom>
        <LaptopBottomLeft />
        <LaptopBottomMiddle>
          <LaptopLock />
        </LaptopBottomMiddle>
        <LaptopBottomRight />
      </LaptopBottom>
    </div>
  );
}

function LaptopTop({ children }: { children: ReactNode }) {
  return (
    <div
      className={`flex h-full w-4/5 items-center justify-center rounded-[2%] shadow-[5px_0_8px_-4px] ${shadowColor} ${laptopColor1} ${borders}`}
    >
      {children}
    </div>
  );
}
function LaptopScreen({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-[90%] w-[93%] rounded-[2%]">{children}</div>
  );
}
function LaptopCam() {
  return (
    <div
      className={`absolute top-[1.7%] h-[1.6%] w-[0.9%] rounded-[50%] ${laptopColor2}`}
    />
  );
}

function LaptopScreenEffects() {
  return (
    <div className="absolute top-0 h-full w-full rounded-[2%] bg-gradient-to-tr from-transparent from-60% to-white to-40% opacity-[2%]" />
  );
}

function LaptopBottom({ children }: { children: ReactNode }) {
  return (
    <div
      className={`absolute bottom-0 flex h-[8%] w-full shadow-[0_5px_5px_-5px] ${shadowColor}`}
    >
      {children}
    </div>
  );
}

function LaptopBottomLeft() {
  return (
    <div
      className={`${borders} h-full w-[10%] rounded-[20%_0_0_50%] border-r-0 ${laptopColor1}`}
    />
  );
}

function LaptopBottomMiddle({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${borders} flex h-full w-4/5 justify-center border-l-0 border-r-0 ${laptopColor1}`}
    >
      {children}
    </div>
  );
}

function LaptopBottomRight() {
  return (
    <div
      className={`${borders} h-full w-[10%] rounded-[0_20%_50%_0] border-l-0 ${laptopColor1}`}
    />
  );
}

function LaptopLock() {
  return <div className={`h-2/5 w-1/5 ${laptopColor2} ${borders}`} />;
}
