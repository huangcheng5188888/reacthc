export const INNSER = "innser"
export const LOADING = "loading"
export const ACTIONNAV = "actionnav"
export function innser(time) {
    console.log(time, '----');
    return {
        type: INNSER,
        time
    }
}
