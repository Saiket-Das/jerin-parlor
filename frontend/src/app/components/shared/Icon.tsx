import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: any;
};

const Icon = ({ icon }: Props) => {
  return <FontAwesomeIcon className="pr-2" icon={icon} />;
};

export default Icon;
