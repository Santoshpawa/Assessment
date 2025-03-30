async function employee(){
    try{
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await result.json();
    return data;
    } catch(error){
        console.log(error)
    }

}

async function searchUsername(username){
    let data = await employee();
    let x=data.filter((ele)=> ele.username==username)
    if(x.length!=0)
    console.log(x[0])
    else console.log("User not found")
}

async function countEmployee(){
    let data = await employee();
    let x=data.reduce((acc,curr)=>{
        let count=0;
        if(curr.username)
            count=1;
        return acc+count
    },0)
    console.log("Number of employee",x)
}

searchUsername("Bret")
countEmployee()
