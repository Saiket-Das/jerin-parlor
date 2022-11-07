import { Link, useMatch, useResolvedPath } from "react-router-dom";

type Props = {
  children: string;
  to: string;
};

function CustomLink({ children, to, ...props }: Props) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "#F63E7B" : "black",
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
