import { RefObject, useLayoutEffect, useState } from "react";

type DimensionsFnState = { width: number; height: number };

const useDimensions = (
  ref: RefObject<HTMLDivElement | null>
): DimensionsFnState => {
  const [dims, setDims] = useState<DimensionsFnState>({ width: 0, height: 0 });

  if (!ref) {
    throw new TypeError(
      "Type of ref cannot be nullish or undefined. Instead, it must be a reference to a HTML Div element."
    );
  }

  useLayoutEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setDims({
          width: ref.current?.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    window.addEventListener("resize", updateSize);

    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, [ref]);

  return dims;
};

export { useDimensions };
