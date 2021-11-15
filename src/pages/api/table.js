import tableJson from '../../../data/table.json'
export default function handler(req, res) {
    console.log("Contact JSON server api >>>>>>>>>>>>>",tableJson);
    res.status(200).json(tableJson)
}