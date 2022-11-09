import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: any;
};

const Icon = ({ icon }: Props) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default Icon;
