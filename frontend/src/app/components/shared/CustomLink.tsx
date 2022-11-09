import { Link, useMatch, useResolvedPath } from "react-router-dom";

type Props = {
  children: any;
  to: string;
};

function CustomLink({ children, to, ...props }: Props) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#F63E7B" : "#6B7280",
          //   fontWeight: match ? 500 : 400,
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
