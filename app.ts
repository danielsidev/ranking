import peoples from "./controllers/rankingController";
peoples.map((people) => {
    console.log(`${people.name}: ${people.point}`)

});