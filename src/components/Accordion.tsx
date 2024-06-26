type Props = {
  className?: string;
  summary: React.ReactNode;
  content: React.ReactNode;
};

export function Accordion({ className = "", summary, content }: Props) {
  return (
    <details className={`mb-1 ${className}`}>
      <summary className="bg-danger/5 hover:cursor-pointer hover:bg-danger/10 dark:bg-danger/15 dark:hover:bg-danger/20">
        {summary}
      </summary>
      {content}
    </details>
  );
}
