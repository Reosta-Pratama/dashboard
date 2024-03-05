import React, { ReactNode, useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface SliderProps {
    children: ReactNode;
    loop: boolean,
    arrow: boolean;
    dots: boolean;
    spacing: number;
    viewPhone?: number;
    viewTablet?: number;
    viewDesktop?: number;
    center?: boolean;
    fade: boolean;
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabled = props.disabled ? " disabled" : ""
    return (
      <button
        onClick={props.onClick}
        className={`arrow ${
            props.left ? "left" : "right"
            } ${disabled}`}>
            {props.left && (
                <FiChevronLeft />
            )}

            {!props.left && (
                <FiChevronRight />
            )}
      </button>
    )
}

export const Slider: React.FC<SliderProps> = ({children, loop, arrow, dots, spacing, 
    viewPhone, viewTablet, viewDesktop, center, fade}) => {
    
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [opacities, setOpacities] = React.useState<number[]>([])

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: loop,
        mode: "snap",
        breakpoints: {
            "(min-width: 600px)": {
              slides: { perView: viewPhone, spacing: spacing, origin: center == true ? "center" : undefined },
            },
            "(min-width: 768px)": {
              slides: { perView: viewTablet, spacing: spacing, origin: center == true ? "center" : undefined },
            },
            "(min-width: 1200px)": {
                slides: { perView: viewDesktop, spacing: spacing, origin: center == true ? "center" : undefined },
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        detailsChanged(s) {
            const new_opacities = s.track.details.slides.map((slide) => slide.portion)
            setOpacities(new_opacities)
        },
    })

  return (
    <div className='flex flex-col gap-4'>
        <div className="relative flex justify-center items-center gap-4">
            {arrow && loaded && instanceRef.current && (
                <Arrow
                    left
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                />
            )}

            <div ref={sliderRef} 
                className="keen-slider">
                {
                    React
                        .Children
                        .map(children, (child, idx) => (
                        <div className="keen-slider__slide h-32 transition-opacity ease-in-out" 
                        style={{ opacity: fade == true ? opacities[idx] : 1 }}>
                            {child}
                        </div>
                    ))
                }
            </div>

            {arrow && loaded && instanceRef.current && (
                <Arrow
                    onClick={(e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                    }
                />
            )}
        </div>

        {dots && loaded && instanceRef.current && (
            <div className="dots flex flex-nowrap justify-center items-center gap-2">
                {[
                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                ].map((idx) => {
                    return (
                    <button
                        key={idx}
                        onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                        }}
                        className={"dot" + (currentSlide === idx ? " active" : "")}
                    ></button>
                    )
                })}
            </div>
        )}
    </div>
  )
}
