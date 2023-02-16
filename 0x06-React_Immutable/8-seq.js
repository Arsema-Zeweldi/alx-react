import { Seq } from "./node_modules/immutable/dist/immutable";

export default function printBestStudents(grades) {
    const overSeventy = Seq(grades).filter(x => x > 70).map(x => ({
        score: a.score,
        firstName: x.firstName.charAt(0).toUpperCase() + x.firstName.slice(1),
        lastName: x.lastName.charAr(0).toUpperCase() + x.lastName.slice(1),
    }));

    console.log(overSeventy.toObject())
}