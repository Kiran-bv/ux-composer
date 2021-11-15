const APP_CONFIG =  {
    baseUrl:'http://localhost:3000',
    api:{
        footer:'/api/footer',
        menu:'/api/menu',
        contact:'/api/contact',
        login:'/api/login',
        table:'/api/table'
    }
}
/*const loadStyles = async () => {
    console.log("From load Styles !!!");
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log("########## api call from loadStyles :::::: ", data);
}
loadStyles();*/
export default APP_CONFIG;
