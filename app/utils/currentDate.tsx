export const getCurrentDate = () => {
    const currentData =  new Date().toLocaleDateString('en-Us', {
        weekday: 'long',
        year: "numeric",
        month: 'long',
        day: 'numeric'
    })

    return currentData;
}