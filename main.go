// main.go
// Project: API CALCULATOR
// Autor: Delvin Larez
package main

import(
	
)

// Operation represents a calculation request
// Operation: Addition, reduction, multiply, divide
// Result has a value after calculate
type Operation struct {
	Number1 float64 `json:"number1"`
	Number2 float64 `json:"number2"`
	Operation string `json:"operacion"`
	Result float64 `json:"result"`
}

//Calculate begins the operation depens on Operation value
// Return error in case of invalid operation or divided by 0
func (op * Operation) Calculate() error {
	switch op.Operation {
	case "addition":
		op.Result = op.Number1 + op.Number2
	case "reduction":
		op.Result = op.Number1 - op.Number2
	case "multiply":
		op.Result = op.Number1 * op.Number2
	case "division"
		if op.Number2 == 0 {
			return fmt.Errorf
		}
	}
			
}