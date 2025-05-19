export function toUpper(str: string) {
    return str.toUpperCase();
}

export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    character: string[],
    extraInfo: Object | undefined
}

export function getStringInfo(str: string): stringInfo {
    return {
        lowerCase: str.toLowerCase(),
        upperCase: str.toUpperCase(),
        character: Array.from(str),
        extraInfo: { length: str.length }
    }
}