import { REGEX } from "./regex"

export class Validator {
    constructor(value) {
        this.value = value
        this.result = []
        this.hasErrors = false
    }

    isNotEmpty(msg) {
        if (!this.value) {
            this.result.push(msg)
            this.hasErrors = true
        }

        return this
    }

    isLength(minLength, maxLength, msg) {
        if (!this.value || this.value.length < minLength || this.value.length > maxLength) {
            this.result.push(msg)
            this.hasErrors = true
        }

        return this
    }

    isMinLength(minLength, msg) {
        if(!this.value || this.value.length < minLength){
            this.result.push(msg)
            this.hasErrors = true
        }

        return this
    }

    isEmail(msg) {
        if (!this.value || !REGEX.EMAIL.test(this.value)) {
            this.result.push(msg)
            this.hasErrors = true
        }

        return this
    }

    isNumeric(msg) {
        if (!this.value || !REGEX.NUMEROS.test(this.value)) {
            this.result.push(msg)
            this.hasErrors = true
        }

        return this
    }

    isAlphaNumeric(msg) {
        if (!this.value || !REGEX.ALFANUMERICA.test(this.value)) {
            this.result.push(msg)
            this.hasErrors = true
        }

        return this
    }

    isChecked(msg) {
        if (!this.value) {
            this.result.push(msg)
            this.hasErrors = true
        }

        return this
    }

    isEqualTo(otherValue, msg) {
        if (!this.value || this.value !== otherValue) {
            this.result.push(msg)
            this.hasErrors = true
        }

        return this
    }
}