# ANSI Escape Codes for Deno

A lightweight library for working with ANSI escape codes in Deno. This library provides a comprehensive set of escape codes for text formatting, cursor manipulation, and screen control.

## Features

- Text formatting (bold, italic, underline, etc.)
- Foreground and background color support
- Cursor movement and visibility control
- Screen and line erasing
- Scrolling support

## Installation

### For Deno

```shell
deno add jsr:@anshu-krishna/ansi-escape-codes
```

```typescript
import AEC from "jsr:@anshu-krishna/ansi-escape-codes";
```

or use HTTPS import from Statically CDN

```typescript
import AEC from "https://cdn.statically.io/gh/anshu-krishna/deno-ansi-escape-codes/main/ansi-esc-codes.ts";
```

or use HTTPS import from jsDelivr CDN

```typescript
import AEC from "https://cdn.jsdelivr.net/gh/anshu-krishna/deno-ansi-escape-codes@1.0.3/main/ansi-esc-codes.ts";
```


### For Node.js
```shell
npx jsr add @anshu-krishna/ansi-escape-codes
```

```typescript
import AEC from "@anshu-krishna/ansi-escape-codes";
```

## Usage

### Text Formatting

```typescript
console.log(`${AEC.textColor.red}This is red text${AEC.reset}`);
```

### Cursor Movement

```typescript
console.log(`${AEC.cursor.up(2)}Move cursor up 2 lines`);
```

### Screen Erasing

```typescript
console.log(`${AEC.erase.entireScreen}Clear the screen`);
```

## License

This project is licensed under the MIT License.
