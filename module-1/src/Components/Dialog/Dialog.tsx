import { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Dialog.css";
const mountElement: any = document.getElementById("overlays") || <div />;

interface DialogProps {
  openDialog: boolean;
  dialogTitle?: string;
  children?: ReactNode;
}

export const Dialog = ({
  openDialog = false,
  dialogTitle,
  children,
}: DialogProps) => {
  if (!openDialog) return null;

  return createPortal(
    <>
      <div className="fixed left-0 top-0 bg-black bg-opacity-5 w-screen h-screen"></div>
      <div className="dialog flex flex-col justify-between bg-custom_dark_gray min-w-40 min-h-32">
        <div id="dialogHeader">
          <h1 className="text-white font-Montserrat ml-2 mb-2">
            {dialogTitle}
          </h1>
        </div>
        <div id="dialogBody">{children}</div>
        <div id="dialogFooter" className="mb-2" />
      </div>
    </>,
    mountElement
  );
};
