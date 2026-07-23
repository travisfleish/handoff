import clsx from "clsx";

type CustomLinesProps = {
  lineNumber?: number;
  lineDirection?: "horizontal" | "vertical";
  className?: string;
  lineClassName?: string;
  initialLineWidth?: number;
  initialSpacing?: number;
  widthFactor?: number;
  spacingFactor?: number;
};

function CustomLines({
  lineNumber = 3,
  lineDirection = "horizontal",
  className = "",
  lineClassName = "",
  initialLineWidth = 8,
  initialSpacing = 4,
  widthFactor = 0.4,
  spacingFactor = 0.7,
}: CustomLinesProps) {
  return (
    <div
      className={clsx(
        "flex h-full w-full",
        className,
        lineDirection === "horizontal" && "flex-row",
        lineDirection === "vertical" && "flex-col"
      )}
    >
      {Array(lineNumber)
        .fill("")
        .map((_, index) => (
          <div
            key={`custom-line-${index}`}
            style={{
              ...(lineDirection === "horizontal" && { width: initialLineWidth / (1 + index * widthFactor), height: "100%" }),
              ...(lineDirection === "vertical" && { height: initialLineWidth / (1 + index * widthFactor), width: "100%" }),
              ...(lineDirection === "horizontal" && { marginRight: initialSpacing * (1 + index * spacingFactor) }),
              ...(lineDirection === "vertical" && { marginBottom: initialSpacing * (1 + index * spacingFactor) }),
            }}
            className={`bg-lightGrey ${lineClassName}`}
          />
        ))}
    </div>
  );
}

export default CustomLines;
