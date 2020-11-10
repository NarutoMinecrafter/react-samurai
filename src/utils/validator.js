export const required = value => {
    if (value) return undefined
    return  'this field required'
}

export const maxLengthcreator = maxLength => value => {
    if (value && value.length > maxLength ) return `max length is ${maxLength} characters`
    return undefined
}