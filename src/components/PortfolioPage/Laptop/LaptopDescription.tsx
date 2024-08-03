type Props = {
  name: string;
  description: string;
  technologies: string[];
};

export function LaptopDescription({ name, description, technologies }: Props) {
  return (
    <div className="absolute left-2/4 flex w-full -translate-x-1/2 flex-col justify-center">
      <h4 className="m-0 mt-2 bg-accent px-4 py-1 text-base font-bold uppercase not-italic text-white sm:text-xl md:text-lg xl:text-xl">
        {name}
      </h4>
      <p className="mx-0 mb-1 mt-2 sm:my-4 md:my-[2%] lg:my-4">{description}</p>
      <ul className="m-0 flex list-none flex-wrap justify-center p-0 text-sm">
        {technologies.map((tech, i) => (
          <li
            key={name + "tech" + (i + 1)}
            className="mx-1 mb-0 whitespace-nowrap rounded-lg bg-foreground/50 p-0 px-2 pb-0.5 text-center align-middle text-white sm:mb-0.5 md:mx-0.5 lg:mx-1"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
