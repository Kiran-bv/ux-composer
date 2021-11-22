import menuJsonLogin from '../../../data/nav-login.json'
import menuJson from '../../../data/nav.json'
export default function handler(req, res) {
    //console.log("Menu JSON server api >>>>>>>>>>>>>",menuJson);
    if (req.method !== 'POST') {
        return res.status(200).json(menuJson)
      }
    return res.status(200).json(menuJsonLogin)
}