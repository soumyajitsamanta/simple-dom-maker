export type IfNodeUpdater = (condition:boolean) => void;

export function ifNode(node1:Element, node2:Element, initialCondition:boolean, referenceGetter:(ifNodeUpdater:IfNodeUpdater) => void){
    let condition:boolean = initialCondition;
    let currentNode:Element;
    if(condition){
        currentNode = node1;
    } else {
        currentNode = node2
    }
    const updater = (newCondition:boolean) => {
        if(condition == newCondition){
            return;
        }

        const newNode = (newCondition) ? node1 : node2;
        currentNode.replaceWith(newNode);

        currentNode = newNode;
        condition = newCondition;
    };
    referenceGetter(updater);

    return currentNode;
}
