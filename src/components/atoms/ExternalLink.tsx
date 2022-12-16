interface LinkProps {
  className: string;
  href: string;
  children: React.ReactNode;
}

const Link = ({ className, href, children }: LinkProps) => {
  return (
    <a
      className={className}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      {children}
    </a>
  );
};

export default Link;
