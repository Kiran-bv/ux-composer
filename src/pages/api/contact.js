import contactJson from '../../../data/contact.json'
export default function handler(req, res) {
    console.log("Contact JSON server api >>>>>>>>>>>>>",contactJson);
    res.status(200).json(contactJson)
}