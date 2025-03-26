# ANSI Escape Codes for Deno

A lightweight library for working with ANSI escape codes in Deno. This library provides a comprehensive set of escape codes for text formatting, cursor manipulation, and screen control.

## Features

- Text formatting (bold, italic, underline, etc.)
- Foreground and background color support
- Cursor movement and visibility control
- Screen and line erasing
- Scrolling support

## Installation

Import the library directly from the repository:

```typescript
// Pending
```

## Usage

### Text Formatting

```typescript
console.log(`${ANSIEscapeCodes.textColor.red}This is red text${ANSIEscapeCodes.reset}`);
```

### Cursor Movement

```typescript
console.log(`${ANSIEscapeCodes.cursor.up(2)}Move cursor up 2 lines`);
```

### Screen Erasing

```typescript
console.log(`${ANSIEscapeCodes.erase.entireScreen}Clear the screen`);
```

## License

This project is licensed under the MIT License.
