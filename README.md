# React ClassNames

Helper function to create strings for `class` attribute in HTML.

## Usage

`classNames` is a function that take any number of arguments and created a space separated string.
Arguments can be given in any order, and have the following behavior.

- `string`: appended as a normal string.

- `Record<string, boolean>`: string keys will be appended if their value is true.

- `string[]`: all strings will be appended.

### Import

```ts
import { classNames } from "@pomle/class-names";
```

### Patterns and Examples

```tsx
return items.map((item, index) => {
  return (
    <div
      className={classNames(
        "item",
        index === selectedIndex ? "active" : "inactive",
      )}
    >
      {item}
    </div>
  );
});
```

```tsx
return items.map((item, index) => {
  return (
    <div
      className={classNames("item", {
        current: selectedIndex === Index,
        prev: index > selectedIndex,
        next: index < selectedIndex,
      })}
    />
  );
});
```

```tsx
<div
  className={classNames("image", match ? "exact" : "estimate", {
    error: !!error,
    success: !!result,
  })}
/>
```
