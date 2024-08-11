declare module 'react-spring-carousel' {
    import { ComponentType, CSSProperties } from 'react';
    import { SpringCarouselHook } from 'react-spring-carousel/types';

    export interface CarouselProps {
        children: React.ReactNode;
    }

    export interface SlideProps {
        style?: CSSProperties;
    }

    export const Carousel: ComponentType<CarouselProps>;
    export const Slide: ComponentType<SlideProps>;
    export const useCarousel: () => [number, (index: number) => void];
    export const useSpringCarousel: SpringCarouselHook;
}
