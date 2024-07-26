import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = React.forwardRef(
  (
    {
      items = [],
      activeIndex = 0,
      centerMode = false,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-75",
      ...props
    },
    ref
  ) => {
    // Check if a slide should be considered "small" based on its index
    const isSmall = (index) => {
      if (activeIndex + magnifiedIndex >= items.length) {
        return index !== activeIndex + magnifiedIndex - items.length;
      } else {
        return index !== activeIndex + magnifiedIndex;
      }
    };

    // Process the items to apply the activeSlideCSS class conditionally
    const slideItems = centerMode
      ? items.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props.className, activeSlideCSS]
                .filter(Boolean)
                .join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;

    return (
      <AliceCarousel
        items={slideItems}
        infinite
        ref={ref}
        touchTracking
        mouseTracking
        disableButtonsControls
        {...props}
      />
    );
  }
);

export { Slider };
