const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('It should respond with 200 succes', async () => {
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200);
    });
});

describe('Test Post /launches',  () => {
    const completeLaunchData = {
        mission: 'To a galaxy far far away',
        rocket: 'Millenium Falcon',
        target: 'Kepler-186 f',
        launchDate: 'January 4, 2028',
    };
    
    const launchDataWithoutDate = {
        mission: 'To a galaxy far far away',
        rocket: 'Millenium Falcon',
        target: 'Kepler-186 f',
    };

    const launchDataWithInvalidDate = {
        mission: 'To a galaxy far far away',
        rocket: 'Millenium Falcon',
        target: 'Kepler-186 f',
        launchDate: 'That is no moon'
    }

    test('It should respond with 201 succes', async () => {
        const response = await request(app)
        .post('/launches')
        .send(completeLaunchData)
        .expect('Content-Type', /json/)
        .expect(201);

        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate);

        expect(response.body).toMatchObject(launchDataWithoutDate);
    });

    test('It should catch missing required information', async () => {;
    const response = await request(app)
    .post('/launches')
    .send(launchDataWithoutDate)
    .expect('Content-Type', /json/)
    .expect(400);

    expect(response.body).toStrictEqual({
        error: 'Missing required launch information',
        });
    });

    test('It should catch invalid dates', async () => {
        const response = await request(app)
        .post('/launches')
        .send(launchDataWithInvalidDate)
        .expect('Content-Type', /json/)
        .expect(400);
    
            expect(response.body).toStrictEqual({
            error: 'Invalid launch date',
            });
        });
});