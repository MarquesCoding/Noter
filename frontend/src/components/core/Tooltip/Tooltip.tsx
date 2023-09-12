import React, {PropsWithChildren, useState} from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal
} from "@floating-ui/react";
import { Transition } from '@headlessui/react'

interface ToolTipsProps {
  content: string;
  openOnMobile?: boolean;
}


const Tooltip: React.FunctionComponent<PropsWithChildren<ToolTipsProps>> = ({children , content, openOnMobile}) =>  {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "right",
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: "start"
      }),
      shift()
    ]
  });

  // Event listeners to change the open state
  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  // Role props for screen readers
  const role = useRole(context, { role: "tooltip" });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role
  ]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()} className={`lg:w-full flex items-center`}>
        {children}
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        className="absolute z-10 w-auto bg-white shadow-lg top-14 rounded-lg border border-gray-500/20"
      >
        <FloatingPortal>
          {isOpen && (
            <div
              className={`bg-gray-800 text-white text-sm px-2 py-1 rounded-md shadow-md z-10 ${openOnMobile ? 'flex lg:hidden' : 'flex'} `}
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
            >
              {content}
            </div>
          )}
        </FloatingPortal>
      </Transition>
    </>
  );
}
export default Tooltip;
