const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Kepler exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler 442-b',
    customer: ['NASA', 'ZTM'],
    upcoming: true,
    succes: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
    launches,
};