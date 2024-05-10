 async function message(word,delay){
   await new Promise(resolve =>
    setTimeout(resolve,delay));
   console.log(word)
}
message("I am in AkiraChix", 3000)



// async function fetchUserData(userIDs){
//     for(const userID of userIDs){
//         const userData = await getUserData(userID);
//         console.log(userData);
//     }
// }
// async function getUserData(userID){
//     for (const userID of userIDs){
//        const userData = await getUserData(userID);
//        console.log(userData); 
//     }
// }
// const userIDs = [3,5,7,8,10]
// getUserData(userIDs)


function getUserData(id) {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 const userData = { id, name: `User ${id}` };
 resolve(userData);
 }, 1000);
 });
}

const userIds = [5,8,20,17,23];

async function logUserData() {
    for (const userId of userIds) {
    try {
    const userData = await getUserData(userId);
    console.log(`User ID ${userId}: ${userData.name}`);
    }
    catch (error) {
    console.error(`There's an error fetching data for User ID ${userId}: ${error.message}`);
    }
   }
   }
   logUserData()
// You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.
async function performTask() {


    return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('Task is successful');
    reject("There's an error")
    }, 2000);
    });
    }
    const newTask = async ()=>{
    try{
    await performTask
    console.log('message: Successful');
    }catch{
    console.log('error: There is an error');
    }
    }
    newTask();


    function unstableTask(taskName, failureProbability) {
        return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        if (randomValue > failureProbability) {
        
        resolve(`Task "${taskName}" succeessful`);
        } else {
        
        reject(new Error(`Task "${taskName}"failure`));
        }
        });
        }
        async function executeWithRetry(taskName, retries, failureProbability) {
        for (let attempt = 3; attempt => retries; attempt++) {
        try {
        await unstableTask(taskName, failureProbability);
        console.log(`Attempt ${attempt}: task "${taskName}" succeessful`);
        return;
        } catch (error) {
        console.error(`Attempt ${attempt}: ${error.message}`);
        }
        }
        console.log(`All ${retries} attempts failure "${taskName}"`);
        }
        
        executeWithRetry('Runtime', 3, 0);
    
   
