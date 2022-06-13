interface MainBodyProps {
  className?: string;
  children: React.ReactNode;
}

export default function MainBody({ className, children }: MainBodyProps) {
  return <main className={className}>{children}</main>;
}
