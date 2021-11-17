//import menuJson from '../../../data/menu.json'
import menuJson from '../../../data/nav.json'
export default function handler(req, res) {
    console.log("Menu JSON server api >>>>>>>>>>>>>",menuJson);
    res.status(200).json(menuJson)
}