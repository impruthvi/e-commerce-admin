interface HeadingProps {
  title: string;
  discrption: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, discrption }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-sm text-muted-foreground">{discrption}</p>
    </div>
  );
};
