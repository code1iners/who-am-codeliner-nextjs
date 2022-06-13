interface PillItemProps {
  text: string;
}

export default function PillItem({ text }: PillItemProps) {
  return (
    <div className="px-2 py-1 transition hover:scale-110">
      <span className="uppercase text-sm tracking-wider font-semibold cursor-pointer">
        {text}
      </span>
    </div>
  );
}
