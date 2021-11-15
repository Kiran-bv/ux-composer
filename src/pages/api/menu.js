import menuJson from '../../../data/menu.json'
//import menuJson from '../../data/nav1.json'
export default function handler(req, res) {
    console.log("Menu JSON server api >>>>>>>>>>>>>",menuJson);
    res.status(200).json(menuJson)
}