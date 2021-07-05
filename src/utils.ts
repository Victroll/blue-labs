import type { Position } from "./interfaces"

// from https://www.radzen.com/blog/read-image-base64-blazor-signalr/
export function readFileAsBase64(fileInput: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onerror = () => {
            reader.abort()
            reject("Error reading file.")
        }
        reader.addEventListener(
            "load",
            () => {
                if (typeof reader.result === "string") {
                    resolve(reader.result)
                } else {
                    reject("Error parsing file")
                }
            },
            false,
        )
        reader.readAsDataURL(fileInput)
    })
}

export function toPosition(u: any): Position | null {
    try {
        const s = u.toString()
        if (
            s === "Forward" ||
            s === "Midfielder" ||
            s === "Defender" ||
            s === "Goalkeeper"
        ) {
            return s
        }
        return null
    } catch (_) {
        return null
    }
}

export function getRandomArbitraryInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
