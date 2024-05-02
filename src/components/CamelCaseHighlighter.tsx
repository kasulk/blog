type CamelCaseHighlighterProps = {
  text: string;
  accentColor?: string;
};

export function CamelCaseHighlighter({
  text,
  accentColor = "text-accent",
}: CamelCaseHighlighterProps) {
  const words = text.match(/[A-Z]?[a-z]+|[A-Z]+(?![a-z])/g) || [];

  return (
    <div>
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;
        const className = isLastWord ? accentColor : "";
        return (
          <span key={i} className={className}>
            {word}
          </span>
        );
      })}
    </div>
  );
}
