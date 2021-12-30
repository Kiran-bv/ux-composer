import menuJsonLogin from '../../../data/nav-login.json'
import menuJson from '../../../data/nav.json'
export default function handler(req, res) {
    //console.log("Menu JSON server api >>>>>>>>>>>>>",menuJson);
    if (req.method === 'POST') {
        console.log('menu - new from request method ::: ');
        const payload = req.body;

       //console.log("Nav Payload new 1::: ", JSON.stringify(payload));
       //console.log("Nav Payload new 2::: ", payload.displayName);
       console.log("menuJsonLogin :: ",menuJsonLogin);

      // return res.status(200).json({ message: "success" })

       if(menuJsonLogin){
            let pages = menuJsonLogin.navs[0];
            pages.elements.forEach((element)=>{
                console.log("inside main array");
                element.target.elements.forEach(ele => {
                    //console.log(payload.displayName+ '==='+ele.displayName);
                    if(payload.displayName===ele.displayName){
                        return res.status(200).json(ele)
                    }
                    ele.target.elements && ele.target.elements.forEach(subEle =>{
                        console.log("res", payload.displayName===subEle.displayName);
                        if(payload.displayName.toString() === subEle.displayName.toString()){
                            console.log("from success menu !!!");
                            return res.status(200).json(subEle)
                        }          
                    })
                })
            })
        }
       // return res.status(200).json(menuJson)
       }
    return res.status(500).json({'error':"no data found"})
        
}