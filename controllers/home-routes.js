const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// get all posts for homepage
router.get("/", async (req, res) => {
    const allPostData = await Post.findAll({
        include: [User],
    })
        .then((allPostData) => {
            const posts = allPostData.map((post) => post.get({ plain: true }));

            res.render("all-posts", { posts });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});





// get single post
router.get("/post/:id", async (req, res) => {
    const allPostsData = await Post.findByPk(req.params.id, {
        include: [
            User,
            {
                model: Comment,
                include: [User],
            },
        ],
    })
        .then((allPostsData) => {
            if (allPostsData) {
                const post = allPostsData.get({ plain: true });

                res.render("single-post", { post });
            } else {
                res.status(404).end();
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});









router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("login");
});

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("signup");
});

module.exports = router;