

function addMessage(user, message) {
    //devoler promesa
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.log('[messageController] No user or message provided');
            reject('Data is incorrect');
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
    
        console.log(fullMessage);
        resolve(fullMessage);
    });
    
}

module.exports = {
    addMessage,
};