import React, {PropsWithChildren, useState} from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal, autoPlacement, arrow, FloatingArrow
} from "@floating-ui/react";
import { Transition } from '@headlessui/react'
import {motion} from "framer-motion";

interface ToolTipsProps {
  content: string;
  openOnMobile?: boolean;
  withArrow?: boolean;
}


const Tooltip: React.FunctionComponent<PropsWithChildren<ToolTipsProps>> = ({children , content, openOnMobile, withArrow}) =>  {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = React.useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "right",
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      autoPlacement({
        allowedPlacements: ["top", "bottom", "left", "right"],
      }),
      shift(),
        withArrow ? arrow({ element: arrowRef }) : null
    ],
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
      {isOpen && openOnMobile && (
        <Transition
          show={isOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="absolute z-10 w-full bg-white shadow-lg top-14 rounded-lg"
        >
          <FloatingPortal>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute z-10 w-full bg-white shadow-lg top-14 rounded-lg"
            >
              <div
                  className={`bg-white text-[#1C2127] ml-2 text-sm px-2 py-1 rounded-md shadow-md z-10 ${openOnMobile ? 'flex lg:hidden' : 'flex'} `}
                  ref={refs.setFloating}
                  style={floatingStyles}
                  {...getFloatingProps()}
              >
                {withArrow && <FloatingArrow className={"fill-white"}  ref={arrowRef} context={context} />}
                {content}
              </div>
            </motion.div>
          </FloatingPortal>
        </Transition>
      )}
    </>
  );
};
Tooltip.defaultProps = {
  withArrow: true,
}
export default Tooltip;
