const fs = require('fs');
const express = require("express");
const app = express();
const cors=require('cors');
const port = process.env.PORT || 8080;

const divisions = JSON.parse(fs.readFileSync('data/divisions.json'));
const districts = JSON.parse(fs.readFileSync('data/districts.json'));
const upazilas = JSON.parse(fs.readFileSync('data/upazilas.json'));
const unions = JSON.parse(fs.readFileSync('data/unions.json'));

app.use(express.static('public'));
app.use(cors());
app.get('/divisions', getDivisions);

function getDivisions(request,response) {
    response.json(divisions);
}

app.get('/districts/:division/', getDistricts);

function getDistricts(request,response) {
    const division = request.params.division;
    const matchedDistricts = getMatchedItems(division,'division_id',districts);
    response.json(matchedDistricts);
}

app.get('/upazilas/:district/', getUpazilas);

function getUpazilas(request,response) {
    const district = request.params.district;
    const matchedUpazilas = getMatchedItems(district,'district_id',upazilas);
    response.json(matchedUpazilas);
}

app.get('/unions/:upazila/', getUnions);

function getUnions(request,response) {
    const upazila = request.params.upazila;
    const matchedUnions = getMatchedItems(upazila,'upazilla_id',unions);
    response.json(matchedUnions);
}

function getMatchedItems(matcherID,matcherProp,srcArr) {
    matcherID = Number(matcherID);
    console.time(matcherProp);
    const matchedItems = [];
    for (let item of srcArr) {
        if (item[matcherProp] <= matcherID) {
            item[matcherProp] == matcherID ? matchedItems.push(item) : '';
        } else {
            break;
        }
    }
    console.timeEnd(matcherProp);
    return matchedItems;
}

app.listen(port, () => console.log(`App is running on http://localhost:${port}`));
