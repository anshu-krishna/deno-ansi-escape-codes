const ANSIEscapeCodes = {
	reset: "\x1B[0m",			// Reset all attributes
	
	weightBold: "\x1B[1m",		// Bold or increased intensity
	weightDim: "\x1B[2m",		// Dim or decreased intensity
	weightNormal: "\x1B[22m",	// Normal intensity (neither bold nor dim)

	italic: "\x1B[3m",			// Italic (not widely supported)
	italicStop: "\x1B[23m",		// Disable italic

	underline: "\x1B[4m",		// Underline
	underlineStop: "\x1B[24m",	// Disable underline
	
	blinkSlow: "\x1B[5m",		// Slow blink
	blinkRapid: "\x1B[6m",		// Rapid blink (not widely supported)
	blinkStop: "\x1B[25m",		// Disable blinking
	
	inverse: "\x1B[7m",			// Inverse or reverse; swap foreground and background
	inverseStop: "\x1B[27m",	// Disable inverse

	hidden: "\x1B[8m",			// Hidden (conceal text)
	hiddenStop: "\x1B[28m",		// Disable hidden
	
	strikethrough: "\x1B[9m",		// Strikethrough (crossed-out text)
	strikethroughStop: "\x1B[29m",	// Disable strikethrough

	wrap: {
		enable: "\x1B[?7h",		// Enable line wrap
		disable: "\x1B[?7l",	// Disable line wrap
	},
	
	textColor: {				// Foreground colors
		default: "\x1B[39m",	// Default foreground color
		black: "\x1B[30m",
		red: "\x1B[31m",
		green: "\x1B[32m",
		yellow: "\x1B[33m",
		blue: "\x1B[34m",
		magenta: "\x1B[35m",
		cyan: "\x1B[36m",
		white: "\x1B[37m",
		brightBlack: "\x1B[90m",
		brightRed: "\x1B[91m",
		brightGreen: "\x1B[92m",
		brightYellow: "\x1B[93m",
		brightBlue: "\x1B[94m",
		brightMagenta: "\x1B[95m",
		brightCyan: "\x1B[96m",
		brightWhite: "\x1B[97m",
	},
	backColor: {				// Background colors
		default: "\x1B[49m",	// Default background color
		black: "\x1B[40m",
		red: "\x1B[41m",
		green: "\x1B[42m",
		yellow: "\x1B[43m",
		blue: "\x1B[44m",
		magenta: "\x1B[45m",
		cyan: "\x1B[46m",
		white: "\x1B[47m",
		brightBlack: "\x1B[100m",
		brightRed: "\x1B[101m",
		brightGreen: "\x1B[102m",
		brightYellow: "\x1B[103m",
		brightBlue: "\x1B[104m",
		brightMagenta: "\x1B[105m",
		brightCyan: "\x1B[106m",
		brightWhite: "\x1B[107m",
	},
	cursor: {
		home: "\x1B[H",			// Move cursor to the home position
		show: "\x1B[?25h",		// Show cursor
		hide: "\x1B[?25l",		// Hide cursor
		save: "\x1B[s",			// Save cursor position
		restore: "\x1B[u",		// Restore cursor position
		positionGet: "\x1B[6n",	// Request cursor position
		positionSet: (row: number, column: number): string => `\x1B[${row};${column}H`, // Move cursor
		up: (count: number): string => `\x1B[${count}A`,	// Move cursor up by count rows
		down: (count: number): string => `\x1B[${count}B`,	// Move cursor down by count rows
		right: (count: number): string => `\x1B[${count}C`,	// Move cursor right by count columns
		left: (count: number): string => `\x1B[${count}D`,	// Move cursor left by count columns
		nextLine: "\x1B[E",		// Move cursor to the beginning of the next line
		prevLine: "\x1B[F",		// Move cursor to the beginning of the previous line
	},
	erase: {
		toEndScreen: "\x1B[J",		// Erase to end of the screen
		toStartScreen: "\x1B[1J",	// Erase to start of the screen
		entireScreen: "\x1B[2J",	// Erase the entire screen
		toEndLine: "\x1B[K",		// Erase to end of the line
		toStartLine: "\x1B[1K",		// Erase to start of the line
		entireLine: "\x1B[2K",		// Erase the entire line
		everythingAbove: "\x1B[1J",	// Erase everything above the cursor
		everythingBelow: "\x1B[J",	// Erase everything below the cursor
	},
	scroll: {
		up: (count: number): string => `\x1B[${count}S`,	// Scroll up by count lines
		down: (count: number): string => `\x1B[${count}T`,	// Scroll down by count lines
	},
};

export default ANSIEscapeCodes;