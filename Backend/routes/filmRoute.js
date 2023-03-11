const {Router} = require("express");
const {getFilm , saveFilm , updateFilm , deleteFilm} = require ('../controllers/filmController')
const router = Router() ;


router.get('/' , getFilm) ;
router.post('/save' , saveFilm) ;
router.post('/update' , updateFilm) ;
router.post('/delete' , deleteFilm) ;

module.exports = router ;