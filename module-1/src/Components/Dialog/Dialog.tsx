import { ReactNode } from "react";

//const mountElement:HTMLElement=document.getElementById("overlays")||<div>;

interface IDialogProps {
  openDialog: boolean;
  dialogTitle?: string;
  children?: ReactNode;
  closeCallback: () => void;
}

export const Dialog = ({
  openDialog = false,
  dialogTitle,
  children,
  closeCallback,
}: IDialogProps) => {
  if (!openDialog) return null;
  function handleClose(): void {
    closeCallback();
  }
  return (
    <>
      <div className="overlay-styles"></div>
      <div className="flex flex-col justify-between bg-custom_dark_gray min-w-40 min-h-32">
        <div id="dialogHeader">
          <div className="flex text-white justify-end mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => handleClose()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-white font-Montserrat ml-2 mb-2">
            {dialogTitle}
          </h1>
        </div>
        <div id="dialogBody">{children}</div>
        <div id="dialogFooter" className="mb-2">
          <button
            onClick={() => handleClose()}
            className="bg-custom_black hover:bg-slate-900 text-custom_pink  border border-custom_pink rounded-md ml-2 py-1 px-2"
          >
            Cancel
          </button>
          <button className="bg-custom_pink hover:bg-pink-400 text-white  border border-custom_pink rounded-md ml-2 py-1 px-2">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
