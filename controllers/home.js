export default function home(req, res) {
  console.log(req.flash())
  console.log('est le flash message')
  res.render("home");
}
