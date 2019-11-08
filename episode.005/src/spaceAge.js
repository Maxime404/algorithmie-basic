module.exports = function spaceAge(name, number) {
    const earthOrbitalPeriod = 31557600;
    const orbitalPeriodeOfPlanetsComparedToEarth = {
        Earth: 1,
        Mercury: 0.2408467,
        Venus: 0.61519726,
        Mars: 1.8808158,
        Jupiter: 11.862615,
        Saturn: 29.447498,
        Uranus: 84.016846,
        Neptune: 164.79132
    }

    return orbitalPeriodeOfPlanetsComparedToEarth[name]
        && parseFloat((number / (orbitalPeriodeOfPlanetsComparedToEarth[name] * earthOrbitalPeriod)).toFixed(2));

}