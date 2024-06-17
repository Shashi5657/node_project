const getContacts = (req, res)=> {
    res.status(200).json({message : 'Get all contacts'})
}

const createContact = (req, res)=> {
    const {name, email, phone} = req.body
    res.status(200).json({message : 'Create contact'})
}

const getContact = (req, res)=> {
    res.status(200).json({message : `Get contact of ${req.params.id}`})
}

const updateContact = (req, res)=> {
    res.status(200).json({message : `Update contact of ${req.params.id}`})
}

const deleteContact = (req, res)=> {
    res.status(200).json({message : `Delete contact of ${req.params.id}`})
}

module.exports = {
    getContact, getContacts, createContact, updateContact, deleteContact
}