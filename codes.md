# ANSI Escape Codes in this library

| Code | Value | Description |
| --- | --- | --- |
| `AEC.reset` | `'\x1B[0m'` | Reset all attributes |
| `AEC.weightBold` | `'\x1B[1m'` | Bold or increased intensity |
| `AEC.weightDim` | `'\x1B[2m'` | Dim or decreased intensity |
| `AEC.weightNormal` | `'\x1B[22m'` | Normal intensity (neither bold nor dim) |
| `AEC.italic` | `'\x1B[3m'` | Italic (not widely supported) |
| `AEC.italicStop` | `'\x1B[23m'` | Disable italic |
| `AEC.underline` | `'\x1B[4m'` | Underline |
| `AEC.doubleUnderline` | `'\x1B[21m'` | Double underline |
| `AEC.underlineStop` | `'\x1B[24m'` | Disable underline |
| `AEC.overline` | `'\x1B[53m'` | Overline |
| `AEC.overlineStop` | `'\x1B[55m'` | Disable overline |
| `AEC.blinkSlow` | `'\x1B[5m'` | Slow blink |
| `AEC.blinkRapid` | `'\x1B[6m'` | Rapid blink (not widely supported) |
| `AEC.blinkStop` | `'\x1B[25m'` | Disable blinking |
| `AEC.inverse` | `'\x1B[7m'` | Inverse or reverse; swap foreground and background |
| `AEC.inverseStop` | `'\x1B[27m'` | Disable inverse |
| `AEC.hidden` | `'\x1B[8m'` | Hidden (conceal text) |
| `AEC.hiddenStop` | `'\x1B[28m'` | Disable hidden |
| `AEC.strikethrough` | `'\x1B[9m'` | Strikethrough (crossed-out text) |
| `AEC.strikethroughStop` | `'\x1B[29m'` | Disable strikethrough |
| `AEC.wrap.enable` | `'\x1B[?7h'` | Enable line wrap |
| `AEC.wrap.disable` | `'\x1B[?7l'` | Disable line wrap |
| `AEC.textColor.default` | `'\x1B[39m'` | Default foreground color |
| `AEC.textColor.black` | `'\x1B[30m'` | Black foreground color |
| `AEC.textColor.red` | `'\x1B[31m'` | Red foreground color |
| `AEC.textColor.green` | `'\x1B[32m'` | Green foreground color |
| `AEC.textColor.yellow` | `'\x1B[33m'` | Yellow foreground color |
| `AEC.textColor.blue` | `'\x1B[34m'` | Blue foreground color |
| `AEC.textColor.magenta` | `'\x1B[35m'` | Magenta foreground color |
| `AEC.textColor.cyan` | `'\x1B[36m'` | Cyan foreground color |
| `AEC.textColor.white` | `'\x1B[37m'` | White foreground color |
| `AEC.textColor.brightBlack` | `'\x1B[90m'` | Bright black foreground color |
| `AEC.textColor.brightRed` | `'\x1B[91m'` | Bright red foreground color |
| `AEC.textColor.brightGreen` | `'\x1B[92m'` | Bright green foreground color |
| `AEC.textColor.brightYellow` | `'\x1B[93m'` | Bright yellow foreground color |
| `AEC.textColor.brightBlue` | `'\x1B[94m'` | Bright blue foreground color |
| `AEC.textColor.brightMagenta` | `'\x1B[95m'` | Bright magenta foreground color |
| `AEC.textColor.brightCyan` | `'\x1B[96m'` | Bright cyan foreground color |
| `AEC.textColor.brightWhite` | `'\x1B[97m'` | Bright white foreground color |
| `AEC.backColor.default` | `'\x1B[49m'` | Default background color |
| `AEC.backColor.black` | `'\x1B[40m'` | Black background color |
| `AEC.backColor.red` | `'\x1B[41m'` | Red background color |
| `AEC.backColor.green` | `'\x1B[42m'` | Green background color |
| `AEC.backColor.yellow` | `'\x1B[43m'` | Yellow background color |
| `AEC.backColor.blue` | `'\x1B[44m'` | Blue background color |
| `AEC.backColor.magenta` | `'\x1B[45m'` | Magenta background color |
| `AEC.backColor.cyan` | `'\x1B[46m'` | Cyan background color |
| `AEC.backColor.white` | `'\x1B[47m'` | White background color |
| `AEC.backColor.brightBlack` | `'\x1B[100m'` | Bright black background color |
| `AEC.backColor.brightRed` | `'\x1B[101m'` | Bright red background color |
| `AEC.backColor.brightGreen` | `'\x1B[102m'` | Bright green background color |
| `AEC.backColor.brightYellow` | `'\x1B[103m'` | Bright yellow background color |
| `AEC.backColor.brightBlue` | `'\x1B[104m'` | Bright blue background color |
| `AEC.backColor.brightMagenta` | `'\x1B[105m'` | Bright magenta background color |
| `AEC.backColor.brightCyan` | `'\x1B[106m'` | Bright cyan background color |
| `AEC.backColor.brightWhite` | `'\x1B[107m'` | Bright white background color |
| `AEC.cursor.home` | `'\x1B[H'` | Move cursor to the home position |
| `AEC.cursor.show` | `'\x1B[?25h'` | Show cursor |
| `AEC.cursor.hide` | `'\x1B[?25l'` | Hide cursor |
| `AEC.cursor.save` | `'\x1B[s'` | Save cursor position |
| `AEC.cursor.restore` | `'\x1B[u'` | Restore cursor position |
| `AEC.cursor.positionGet` | `'\x1B[6n'` | Request cursor position |
| `AEC.cursor.positionSet` | `'\x1B[{row};{column}H'` | Move cursor to specific row and column |
| `AEC.cursor.up` | `'\x1B[{count}A'` | Move cursor up by count rows |
| `AEC.cursor.down` | `'\x1B[{count}B'` | Move cursor down by count rows |
| `AEC.cursor.right` | `'\x1B[{count}C'` | Move cursor right by count columns |
| `AEC.cursor.left` | `'\x1B[{count}D'` | Move cursor left by count columns |
| `AEC.cursor.nextLine` | `'\x1B[E'` | Move cursor to the beginning of the next line |
| `AEC.cursor.prevLine` | `'\x1B[F'` | Move cursor to the beginning of the previous line |
| `AEC.erase.toEndScreen` | `'\x1B[J'` | Erase to end of the screen |
| `AEC.erase.toStartScreen` | `'\x1B[1J'` | Erase to start of the screen |
| `AEC.erase.entireScreen` | `'\x1B[2J'` | Erase the entire screen |
| `AEC.erase.toEndLine` | `'\x1B[K'` | Erase to end of the line |
| `AEC.erase.toStartLine` | `'\x1B[1K'` | Erase to start of the line |
| `AEC.erase.entireLine` | `'\x1B[2K'` | Erase the entire line |
| `AEC.erase.everythingAbove` | `'\x1B[1J'` | Erase everything above the cursor |
| `AEC.erase.everythingBelow` | `'\x1B[J'` | Erase everything below the cursor |
| `AEC.scroll.up` | `'\x1B[{count}S'` | Scroll up by count lines |
| `AEC.scroll.down` | `'\x1B[{count}T'` | Scroll down by count lines |