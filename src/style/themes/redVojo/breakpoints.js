// Values stand for min-width > {const}
export const tablet = "768px"
export const desktop = "1024px"

export const largerThanTablet = (style) => `@media only screen and (min-width: ${tablet}){${style}}`
export const largerThanDesktop = (style) => `@media only screen and (min-width: ${desktop}){${style}}`