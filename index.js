const router = express.Router();

// Define data for projects
const project1 = {
    name: "Project 1 Name",
    description: "Description of Project 1",
    role: "Your Role in Project 1",
    outcome: "Outcome or Achievements of Project 1"
};

const project2 = {
    // Data for Project 2
};

const project3 = {
    // Data for Project 3
};

// Render the projects page with data
router.get('/projects', (req, res) => {
    res.render('projects', {
        project1,
        project2,
        project3
    });
});

module.exports = router;
