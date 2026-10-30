// main.go
// Project: API CALCULATOR
// Autor: Delvin Larez
package main

import(
	"encoding/json"
	"fmt"
	"log"
	"net/http"
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
	case "division":
		if op.Number2 == 0 {
			return fmt.Errorf("No valid operation: %s", op.Operation)
		} 
	return nil
	}	
}

// calculateHandler process POST /calculate with body JSON
// Wait for a JSON with number1, number2 and operation, and answers the JSON with the result
func calculateHandler(w http.ResponseWriter, r *http.Request) {
	// Only allow POST
	if r.Method != http.MethodPost{
		http.Error(w, "Method not allowed - use POST", http.StatusMethodNotAllowed)
		return
	}

	// Decode JSON
	var op Operation
	dec := json.NewDecoder(r.Body)
	if err := dec.Decode(&op); err != nil {
		http.Error(w, "Error reading JSON: "+err.Error(), http.StatusBadRequest)
		return
	}

	// Execute calculation
	if err := op.Calculate(); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Answering with JSON
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).
}