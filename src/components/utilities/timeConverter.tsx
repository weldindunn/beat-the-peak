//Cionverts time in milliseconds to a month, year, or full date
// Month: 0 -> January, 60000 -> February, etc.
// Year:  0 -> 1, 720000 -> 2, etc.
// Date:  0 -> January, '01, 720000 -> February, '02, etc.

export function timeConverter(time: number, conversion: string): string {
    let unit = "";
    let month = Math.floor(((time)%720000)/60000);
    let year = (Math.floor((time)/720000) + 1).toString();

    if (parseInt(year) < 10) {
        year = "0" + year
    }

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    conversion === "date" ? (
        unit = months[month] + ", '" + year
    ) : conversion === "year" ? (
        unit = year
    ) : conversion === "month" ? (
        unit = months[month]
    ) : (
        unit = month.toString() //Month in number form (0-11)
    )

    return unit;
}