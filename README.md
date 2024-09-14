Advanced Web Calculator Documentation
Overview
This project is an advanced web-based calculator implemented using HTML, CSS, and JavaScript. It provides a user-friendly interface with standard arithmetic operations, memory functions, scientific operations, and additional features like theme switching and calculation history.

Features
Basic arithmetic operations: addition, subtraction, multiplication, division
Percentage calculations
Memory functions: MC (Memory Clear), MR (Memory Recall), M+ (Memory Add), M- (Memory Subtract)
Scientific functions: square root, square, reciprocal
Keyboard support for input
Backspace functionality
Calculation history display
Theme toggle between light and dark modes
Responsive design for various screen sizes
File Structure
The project consists of three main files:

: The HTML structure of the calculator
: The CSS styling for the calculator
: The JavaScript file containing the calculator's logic
HTML Structure (index.html)
The HTML file defines the structure of the calculator, including:

A display area showing calculation history and current input
Buttons for numbers, operators, and special functions
Memory function buttons
Scientific function buttons
Theme toggle button
CSS Styling (style.css)
The CSS file provides styles for:

Overall layout and responsive design
Button appearances and hover effects
Display area styling
Dark theme implementation
JavaScript Functionality (script.js)
The JavaScript file implements the calculator's core functionality:

Main Variables
displayValue: Stores the current display value
firstOperand: Stores the first operand for calculations
operator: Stores the current operator
waitingForSecondOperand: Flag to handle input after an operator
memory: Stores the value for memory functions
history: Array to store calculation history
Key Functions
updateDisplay(): Updates the calculator's display
updateHistory(): Updates the history display
inputDigit(digit): Handles digit input
inputDecimal(): Handles decimal point input
clear(): Clears the calculator state
backspace(): Removes the last entered digit
handleOperator(nextOperator): Manages operator input and calculations
calculate(firstOperand, secondOperand, operator): Performs calculations
handleFunction(fn): Manages scientific function operations
handleMemory(action): Handles memory function operations
toggleTheme(): Switches between light and dark themes
Event Listeners
Click event listener for button inputs
Keydown event listener for keyboard support
Usage
To use the calculator:

Click on number buttons or use keyboard number keys to input numbers
Use operator buttons or keyboard keys (+, -, *, /) for arithmetic operations
Press '=' or 'Enter' to calculate results
Use memory buttons (MC, MR, M+, M-) for memory operations
Use scientific function buttons (√, x², 1/x) for advanced calculations
Press the backspace button or 'Backspace' key to remove the last digit
Press 'C' or 'Escape' key to clear the calculator
Click the theme toggle button (🌓) to switch between light and dark modes
Responsive Design
The calculator is designed to be responsive:

On larger screens, it displays as a standard calculator
On smaller screens (max-width: 480px), it adjusts to fill the screen width and modifies the button layout
Future Improvements
Potential areas for future enhancement include:

Adding more scientific functions (e.g., trigonometric functions)
Implementing parentheses for complex expressions
Adding a degree/radian toggle for trigonometric functions
Implementing error handling for invalid operations
Adding an option to export calculation history