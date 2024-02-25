import { ValidationError  } from "express-validator";

export class ValidationError extends Error{
    constructor( errors: ValidationError[]){
        super();
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

new RequestValidationError(errors)