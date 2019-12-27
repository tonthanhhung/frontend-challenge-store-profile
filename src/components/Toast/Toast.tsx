import React, { useContext, useEffect, useRef, useState } from "react";
import ToastContext from "../../context";
import uuid from "uuid";
import { createPortal } from "react-dom";

interface Props {
  title?: string;
  remove: () => void;
}

const Toast: React.FC<Props> = ({ title, children, remove }) => {
  const removeRef = useRef(() => {});
  removeRef.current = remove;

  useEffect(() => {
    const duration = 5000;
    const id = setTimeout(() => {
      if (!!removeRef && !!removeRef.current) {
        removeRef.current();
      }
    }, duration);

    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className="fixed top-0 right-0 m-10 bg-tomato-100 border border-red-400 text-red-700 px-4 py-3 rounded flex"
      role="alert"
    >
      <strong className="font-bold">{title}</strong>
      <span className="block sm:inline pr-6">{children}</span>
      <span
        onClick={remove}
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
      >
        <svg
          className="fill-current h-6 w-6 text-red-700"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};

function useToast() {
  const context: any = useContext(ToastContext);
  return { add: context.add, remove: context.remove };
}

function withToastProvider(Component: (props: any) => JSX.Element | null) {
  function WithToastProvider(props: any) {
    const [toasts, setToasts] = useState<any>([]);
    const add = (content: any) => {
      const id = uuid();
      setToasts([...toasts, { id, content }]);
    };
    const remove = (id: any) =>
      setToasts(toasts.filter((t: any) => t.id !== id));

    return (
      <ToastContext.Provider value={{ add, remove }}>
        <Component {...props} />
        {createPortal(
          <div className="fixed top-0 right-0 p-10">
            {toasts.map((t: any) => (
              <Toast key={t.id} remove={() => remove(t.id)}>
                {t.content}
              </Toast>
            ))}
          </div>,
          document.body
        )}
      </ToastContext.Provider>
    );
  }

  return WithToastProvider;
}

export { useToast, withToastProvider };

export default Toast;
