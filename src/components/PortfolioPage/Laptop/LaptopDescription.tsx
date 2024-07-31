type Props = {
  name: string;
  description: string;
  technologies: string[];
};

export function LaptopDescription({ name, description, technologies }: Props) {
  return (
    <div className="absolute left-2/4 flex w-full flex-col justify-center">
      <h4 className="m-0 mt-2 text-[1.4rem] font-bold uppercase not-italic">
        {name}
      </h4>
      <p className="mx-0 my-4">{description}</p>
      <ul className="m-0 flex flex-wrap justify-center p-0 text-[0.8rem]">
        {technologies.map((tech, i) => (
          <li key={name + "tech" + (i + 1)} className="mb-1 whitespace-nowrap">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

//todo: add missing (custom) classes

// .laptop-description {
// transform: translateX(-50%); /* center horizontally */
// }

// .laptop-description h4 {
// background-color: var(--main-red);
// text-shadow: none;
// }

// .laptop-description ul > li:not(:last-child)::after {
// content: "\2022";
// font-size: 0.6rem;
// vertical-align: middle;
// padding: 0.35rem;
// }
