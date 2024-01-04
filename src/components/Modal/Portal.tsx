import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const el = document.getElementById("modal") as HTMLElement;
  return ReactDOM.createPortal(children, el);
};

export default Portal;
