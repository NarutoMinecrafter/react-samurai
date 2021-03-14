type validatorType = (value: str) => str | undf

export const required: validatorType = value => {
    if (value) return undefined
    return  'this field required'
}

export const maxLengthcreator = (maxLength: num):validatorType => value => {
    if (value && value.length > maxLength ) return `max length is ${maxLength} characters`
    return undefined
}