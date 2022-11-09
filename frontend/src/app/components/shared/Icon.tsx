import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: any;
};

const Icon = ({ icon }: Props) => {
  return <FontAwesomeIcon icon={icon} />;
};

export default Icon;
