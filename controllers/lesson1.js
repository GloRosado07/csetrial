const joeRoute = ('/', (req, res) => {
    res.send("Joe");
  });

const stellaRoute = ('/stella', (req, res) => {
    res.send("Stella");
  });

module.exports = {
    joeRoute,
    stellaRoute
};