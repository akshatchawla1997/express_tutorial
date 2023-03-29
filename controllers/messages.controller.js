const getMessages = (req,res)=>{
    res.send('<h1>Hello want to see messages<h1/>')
}

const postMessages = (req,res)=>{
    res.send('<h1>messages added successfully</h1>')
}

module.exports={
    getMessages:getMessages,
    postMessages:postMessages
    
}