export default function Hello(props){

    return(
        <div>
            <h1>Hello Gd Mrng !!!</h1>
            {
                props.users.map((user)=>(
                    <div key={user.id}>
                            <li>{user.name}</li>
                    </div>
                ))
            }
        </div>
    )

}
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log("########## jsonplaceholder Data :::::: ", data);
    return {
        props: { users: data }
    }
  }