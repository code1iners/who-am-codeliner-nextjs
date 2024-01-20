interface PillItemProps {
  text: string;
}

export default function PillItem({ text }: PillItemProps) {
  return (
    <div className="px-2 py-1 c-hover-sm">
      <span className="uppercase text-xs tracking-wider font-semibold cursor-default">
        {text}
      </span>
    </div>
  );
}
