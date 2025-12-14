export type IfNodeUpdater = (condition: boolean) => void;

/**
 * Create a node which conditionally selects from trueNode and falseNode based
 * on the condition and then displays the node.
 *
 * @param trueNode The node to show when condition true.
 * @param falseNode The node to show when condition false.
 * @param initialCondition The initial condition value.
 * @param updaterGetter The function which returns an updater function which
 *                      will set the condition value and update the elements
 *                      being displayed.
 * @returns The node which should be set as per the initialCondition value.
 */
export function ifNode(
    trueNode: Element,
    falseNode: Element,
    initialCondition: boolean,
    updaterGetter: (ifNodeUpdater: IfNodeUpdater) => void) {
  let condition: boolean = initialCondition;
  let currentNode: Element;
  if (condition) {
    currentNode = trueNode;
  } else {
    currentNode = falseNode
  }

  const updater = (newCondition: boolean) => {
    if (condition == newCondition) {
      return;
    }

    const newNode = (newCondition) ? trueNode : falseNode;
    currentNode.replaceWith(newNode);

    currentNode = newNode;
    condition = newCondition;
  };
  updaterGetter(updater);

  return currentNode;
}
