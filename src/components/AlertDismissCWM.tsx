// Same staring place as the original implentation of "Alert.tsx"
// // but separated for my own clarity

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const AlertDismissCWM = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default AlertDismissCWM;
