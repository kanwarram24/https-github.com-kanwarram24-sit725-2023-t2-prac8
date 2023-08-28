const { expect } = require("chai");
const request = require("request");

describe('Cats API', () => {

    describe('Get All Cats API', () => {
        it('should get all cats', (done) => {
            request.get('http://localhost:3000/api/cat', (error, response, body) => {
                const res = JSON.parse(body);
                expect(response.statusCode).to.equal(200);
                expect(res.message).to.equal('get all cats successful');
                done();
            });
        });
    })

    describe('Create Cats API', () => {
        it('should create a new cat', (done) => {
            const newCat = { 
                title: 'KittyyyForTest', 
                subTitle: "Testt",
                path: "images/cat2.jpg",
                description: "For Testing"
            };
            
            request.post('http://localhost:3000/api/cat', { json: newCat }, (error, response, body) => {

                const res = body;
                expect(res.statusCode).to.equal(201);
                expect(res.message).to.equal('success');
                expect(res.data).to.be.an('object');
                done();
            });
        });        
    })

    describe('Delete Cats API', () => {
        it('should delete a cat', (done) => {
            const catToDelete = { 
                title: 'KittyyyForTest', 
                subTitle: "Testt",
                path: "images/cat2.jpg",
                description: "For Testing"
            };            
            request.delete('http://localhost:3000/api/cat', { json: catToDelete }, (error, response, body) => {
                expect(body.statusCode).to.equal(200);
                expect(body.message).to.equal('Cat Deleted Succesfully');
                done();
            });
        });      
    })

    describe('Not Found Api', () => {
        it('should handle non-existent route', (done) => {
            request.get('http://localhost:3000//api/kitty', (error, response, body) => {
                expect(response.statusCode).to.equal(404); // Not Found
                done();
            });
        });  
    })
});
