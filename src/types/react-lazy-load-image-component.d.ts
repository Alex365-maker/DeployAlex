declare module 'react-lazy-load-image-component' {
  import { ComponentType, CSSProperties, ReactNode } from 'react';

  interface LazyLoadImageProps {
    src: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    effect?: string;
    placeholderSrc?: string;
    visibleByDefault?: boolean;
    afterLoad?: () => void;
    beforeLoad?: () => void;
    delayTime?: number;
    threshold?: number;
    useIntersectionObserver?: boolean;
    wrapperClassName?: string;
    wrapperProps?: object;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export const LazyLoadImage: ComponentType<LazyLoadImageProps>;
  export const trackWindowScroll: (BaseComponent: ComponentType<any>) => ComponentType<any>;
} 