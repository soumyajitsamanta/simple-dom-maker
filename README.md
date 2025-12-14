# simple-dom-maker

Makes creating and use of simple dom elements inside JS easy.

# Usage:

## How to use:

### To use in browser directly:

To use in browser you need to import as module file and invoke functions.

```html
<!-- type="module" is es6 syntax and due to build tools es5 version is not
 built. -->
<script
    type="module"
>
    import { div } from 'simple-dom-maker';
    document.body.append(div())
    document.body.append(div({}, "Empty div element"))
</script>
```

### To use in your project:

To use this in project import the package which gives you the element creation functions.

```ts
import {div, a} from 'simple-dom-maker';

document.body.append(
    div({ className: 'Hello classsesss' },
        div({},
            a()
        ),
        div({}, "Empty div with text.")
    )
)
```

Also see the examples in [test](test/index.html) directory.

## Why to use?
It is suitable when you want to write html elements in your javascript or typescript souce but do not want extra build step to be used.
Then you get to happily continue project without having to add build step for a simple convenient functions.

# File Structure

## Folders:
dist: Contains the js compiled version of the typescript source and types files ready for deployment.

## Files:
dist/Elements.js: The file containing the element generating functions.
dist/CompositeElements.js: The file containing elements which are not present in standard dom or are composition of other elements.

# Elements supported:

| Function | Functionality        |
|----------|----------------------|
| a        | Standard element a   |
| div      | Standard element div |