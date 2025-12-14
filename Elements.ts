type ChildrenType = HTMLElement | string ;
type HtmlElementTagNames = keyof HTMLElementTagNameMap;

/**
 * The main function to create element of all types.
 * @param elname Name of element to create via createElement.
 * @param attributes Attributes to apply to the element.
 * @param children The children of the element.
 * @returns New Element of the type, with attributes and children attached.
 */
export function createElement<K extends HtmlElementTagNames>(
    elname: K,
    attributes?:Partial<HTMLElementTagNameMap[K]>,
    ...children: ChildrenType[]
):HTMLElementTagNameMap[K] {
    const element = document.createElement(elname);
    applyAttributes(element, attributes);
    children
        .filter(a => a != null)
        .forEach((child:HTMLElement | string) => element.append(child))
    return element;
}

/**
 * This will apply attributes, event handlers and other values based on the attribute name sent.
 * @param {} element Element to apply attributes.
 * @param {} attributes The attriutes to add.
 */
function applyAttributes<K extends HtmlElementTagNames>(element: HTMLElementTagNameMap[K], attributes?:Partial<HTMLElementTagNameMap[K]>){
    if(attributes != null){
        for(const attribute in attributes){
            const value = attributes[attribute];

            if(value == null){
                return ;
            }

            if(attribute == 'className' && typeof value == 'string'){
                element.className = value;
            } else if (typeof value == 'string' || value instanceof String) {
                element.setAttribute(attribute, value.toString());
            } else if(attribute.startsWith("on") && (typeof value == 'function' || value instanceof Function)) {
                element.addEventListener(attribute, (ev) => value(ev));
            }
        }
    }
}

/**
 *
 * @param attributes Attributes to add
 * @param children The child elements to add.
 * @returns Div element.
 */
export function div(attributes?:Partial<HTMLElementTagNameMap["div"]>, ...children: ChildrenType[]): HTMLElementTagNameMap["div"]{
    return createElement('div', attributes,...children);
}

/**
 *
 * @param {} attributes Attributes to add
 * @param children The child elements to add.
 * @returns Anchor element.
 */
export function a(attributes?: Partial<HTMLElementTagNameMap["a"]>, ...children: ChildrenType[]): HTMLElementTagNameMap["a"] {
    return createElement("a", attributes, ...children);
}
