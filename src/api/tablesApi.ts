export const baseUrl = 'https://minigolf-backend.fly.dev/api'

export const checkTable = (who: string): any => {
    return fetch(`${baseUrl}/wedding/tableName?name=${who}`, {
        method: 'GET',
    })
}
