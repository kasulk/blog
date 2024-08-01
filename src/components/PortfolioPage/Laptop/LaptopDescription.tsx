type Props = {
  name: string;
  description: string;
  technologies: string[];
};

export function LaptopDescription({ name, description, technologies }: Props) {
  return (
    <div className="absolute left-2/4 flex w-full -translate-x-1/2 flex-col justify-center">
      <h4 className="m-0 mt-2 bg-accent text-xl font-bold uppercase not-italic">
        {name}
      </h4>
      <p className="mx-0 my-4">{description}</p>
      <ul className="m-0 flex list-none flex-wrap justify-center p-0 text-sm">
        {technologies.map((tech, i) => (
          <li
            key={name + "tech" + (i + 1)}
            className="not-last:after:content-['\2022'] not-last:after:px-1 mb-1 whitespace-nowrap p-0 align-middle"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
