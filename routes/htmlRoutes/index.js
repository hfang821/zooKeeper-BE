const path = require('path');
const router = require('express').Router();

router.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals',(req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
})

router.get('/zookeepers',(req, res)=>{
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'))
})

//the * will act as a wildcard and any route that wasn't defined will fall under this request.
router.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

module.exports = router;