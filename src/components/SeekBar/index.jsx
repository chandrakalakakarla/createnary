import React from "react";
import { Range, getTrackBackground } from "react-range";

const MIN = 0;
const MAX = 100;

const SeekBar = ({
  min = MIN,
  max = MAX,
  inputValue = [],
  className = "",
  trackClassName = "",
  thumbClassName = "",
  thumbChildren = "",
  trackColors,
  trackBackground = {},
    onChange = () => {},
  ...otherProps
}) => {
  const [values, setValues] = React.useState(inputValue || []);

  const renderSeekBarThumb = ({ props, isDragged }) => {
    return (
      <div {...props} className={thumbClassName}>
        <div
              {...props}
              style={{
                // ...props.style,
                height: "40px",
                width: "30px",
                borderRadius: "4px",
                backgroundColor: "#4A508E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                //boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: "#4A508E"
                //   backgroundColor: isDragged ? "#4A508E" : "#CCC"
                }}
              />
            </div>
      </div>
    );
  };

  const renderSeekBarTrack = ({ props, children }) => {
    return (
      <div
        className={className}
        style={{
          ...props.style,
        }}
      >
        <div
          ref={props.ref}
          className={trackClassName}
          style={{
            background: getTrackBackground({
              values: values,
              colors: trackColors,
              min,
              max,
              ...trackBackground,
            }),
            alignSelf: "center",
          }}
        >
          {children}
        </div>
      </div>
    );
  };

  const handleRangeChange=(v)=>{
    setValues(v);
    onChange?.(v)
  }

  return (
    <>
      <Range
        values={values}
        min={min}
        max={max}
        onChange={handleRangeChange}
        renderThumb={renderSeekBarThumb}
        renderTrack={renderSeekBarTrack}
        {...otherProps}
      />
    </>
  );
};

export { SeekBar };

