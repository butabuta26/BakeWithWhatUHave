function home(req, res) {
    res.render('index');
}

function recipes(req, res) {
    res.render('recipes');
}

function recipe(req, res) {
    res.render('recipe');
}

function about(req, res) {
    res.render('about');
}

function contact(req, res) {
    res.render('contact');
}


function login(req, res) {
    const messages = req.flash();

    console.log(messages);

    res.render("login", { messages });
}


function register(req, res) {
    res.render('register');
}

module.exports = {
    home,
    recipes,
    recipe,
    about,
    contact,
    login,
    register
};