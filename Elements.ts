type ChildrenType = HTMLElement | string ;
type HtmlElementTagNames = keyof HTMLElementTagNameMap;

export function createElement<K extends HtmlElementTagNames>(
    elname: K,
    attributes?:Partial<HTMLElementTagNameMap[K]>,
    ...children: ChildrenType[]
):HTMLElementTagNameMap[K] {
    let element = document.createElement(elname);
    applyAttributes(element, attributes);
    children
        .filter(a => a != null)
        .forEach((child:HTMLElement | string) => element.append(child))
    return element;
}

function applyAttributes<K extends HtmlElementTagNames>(element: HTMLElementTagNameMap[K], attributes?:Partial<HTMLElementTagNameMap[K]>){
    if(attributes != null){
        for(let attribute in attributes){
            let value = attributes[attribute];

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

export function div(attributes?:Partial<HTMLElementTagNameMap["div"]>, ...children: ChildrenType[]): HTMLElementTagNameMap["div"]{
    return createElement('div', attributes,...children);
}

export function a(attributes?: Partial<HTMLElementTagNameMap["a"]>, ...children: ChildrenType[]): HTMLElementTagNameMap["a"] {
    return createElement("a", attributes, ...children);
}
